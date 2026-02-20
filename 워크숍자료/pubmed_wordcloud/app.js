const academicStopWords = new Set([
    // General English
    'the', 'and', 'a', 'of', 'to', 'in', 'is', 'for', 'on', 'with', 'as', 'by', 'at', 'an', 'be', 'this', 'that', 'from', 'it', 'or', 'was', 'are', 'which', 'can', 'has', 'also', 'were', 'not', 'their', 'been', 'about', 'but', 'into', 'such', 'after', 'both', 'between', 'during', 'under', 'study', 'research', 'results', 'data', 'using', 'based', 'more', 'used', 'these', 'could', 'should', 'would', 'than', 'only', 'many', 'some', 'any', 'each', 'all', 'very', 'associated', 'factors', 'aim', 'purpose', 'method', 'methods', 'background', 'conclusions', 'significant', 'participants', 'subjects', 'design', 'included', 'conducted', 'found', 'showed', 'suggest', 'provide', 'increase', 'decreased', 'higher', 'lower', 'analysis', 'reported', 'total', 'sample', 'compared', 'related', 'important', 'studies', 'information', 'system', 'use', 'role', 'impact', 'levels', 'high', 'exposure', 'human', 'health', 'environmental', 'biomonitoring', 'group', 'levels', 'blood', 'urine', 'concentration', 'concentrations', 'population', 'years', 'age', 'mean', 'median', 'p', 'value', 'confidence', 'interval', 'ci', 'or', 'rr', 'hr', 'p-value', 'model', 'models', 'adjusted', 'regression', 'association', 'associations', 'risk', 'disease', 'effect', 'effects', 'development', 'potential', 'may', 'might', 'must', 'due', 'within', 'among', 'across', 'via', 'well', 'did', 'well', 'non', 'no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    // Academic Meta-words
    'abstract', 'introduction', 'discussion', 'article', 'case', 'clinical', 'review', 'trial', 'therapy', 'efficacy', 'outcome', 'outcomes', 'objective', 'patient', 'patients', 'population', 'community', 'year', 'month', 'day', 'time', 'period', 'group', 'control', 'intervention', 'treatment', 'versus', 'vs', 'compared', 'baseline', 'follow', 'assessment', 'measured', 'evaluated', 'estimated', 'identified', 'observed', 'calculated', 'performed', 'assessed', 'statistically', 'significance', 'evidence', 'quality', 'level', 'rate', 'presence', 'prevalence', 'incidence', 'risk', 'odds', 'ratio', 'mean', 'median', 'std', 'deviation', 'probability', 'test', 'score', 'scores', 'measure', 'measures', 'data', 'variable', 'variables', 'factor'
]);

let allArticles = [];

document.getElementById('generate-btn').addEventListener('click', generateWordCloud);
document.getElementById('article-summary-card').addEventListener('click', () => showArticlesModal(allArticles));
document.querySelector('.close-btn').addEventListener('click', closeModal);
window.onclick = (event) => { if (event.target == document.getElementById('article-modal')) closeModal(); };

async function generateWordCloud() {
    const query = document.getElementById('query').value;
    const startYear = document.getElementById('start-year').value;
    const endYear = document.getElementById('end-year').value;

    if (!query) {
        alert('Please enter a search query.');
        return;
    }

    const loader = document.getElementById('loader');
    const wordCloudContainer = document.getElementById('word-cloud-container');
    const resultSummary = document.getElementById('result-summary');
    const statusText = document.getElementById('status-text');

    loader.classList.remove('hidden');
    wordCloudContainer.innerHTML = '';
    resultSummary.classList.add('hidden');
    allArticles = [];

    try {
        statusText.innerText = 'Searching Pubmed for articles...';
        const pmids = await searchPubmed(query, startYear, endYear);

        if (pmids.length === 0) {
            alert('No articles found for the given criteria.');
            loader.classList.add('hidden');
            return;
        }

        document.getElementById('article-count').innerText = pmids.length;
        statusText.innerText = `Fetching abstracts from ${pmids.length} articles...`;

        // Fetch up to 100 articles for performance
        allArticles = await fetchArticleData(pmids.slice(0, 100));

        if (allArticles.length === 0) {
            alert('No data could be retrieved for these articles.');
            loader.classList.add('hidden');
            return;
        }

        statusText.innerText = 'Analyzing academic terminology...';
        const words = processAcademicTerms(allArticles);

        document.getElementById('keyword-count').innerText = words.length;
        statusText.innerText = 'Rendering word cloud...';

        renderCloud(words);

        loader.classList.add('hidden');
        resultSummary.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching data. Please try again.');
        loader.classList.add('hidden');
    }
}

async function searchPubmed(query, startYear, endYear) {
    const baseUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi';
    const dateRange = `("${startYear}/01/01"[Date - Publication] : "${endYear}/12/31"[Date - Publication])`;

    // If the query contains boolean operators, wrap it in parentheses to ensure the AND dateRange applies correctly to the whole query.
    const fullQuery = `(${query}) AND ${dateRange}`;

    const params = new URLSearchParams({
        db: 'pubmed',
        term: fullQuery,
        retmode: 'json',
        retmax: 200
    });

    const response = await fetch(`${baseUrl}?${params.toString()}`);
    const data = await response.json();
    return data.esearchresult.idlist || [];
}

async function fetchArticleData(pmids) {
    const baseUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi';
    const params = new URLSearchParams({
        db: 'pubmed',
        id: pmids.join(','),
        retmode: 'xml'
    });

    const response = await fetch(`${baseUrl}?${params.toString()}`);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

    const articles = [];
    const articleElements = xmlDoc.getElementsByTagName('PubmedArticle');

    for (let i = 0; i < articleElements.length; i++) {
        const art = articleElements[i];
        const pmid = art.getElementsByTagName('PMID')[0]?.textContent;
        const title = art.getElementsByTagName('ArticleTitle')[0]?.textContent;
        const journal = art.getElementsByTagName('Title')[0]?.textContent;
        const abstract = art.getElementsByTagName('AbstractText')[0]?.textContent || "";

        // Extract MeSH Terms for boosting
        const meshTerms = [];
        const meshHeadingNodes = art.getElementsByTagName('MeshHeading');
        for (let j = 0; j < meshHeadingNodes.length; j++) {
            const term = meshHeadingNodes[j].getElementsByTagName('DescriptorName')[0]?.textContent;
            if (term) meshTerms.push(term.toLowerCase());
        }

        // Extract Author Keywords
        const authorKeywords = [];
        const keywordNodes = art.getElementsByTagName('Keyword');
        for (let j = 0; j < keywordNodes.length; j++) {
            const kw = keywordNodes[j]?.textContent;
            if (kw) authorKeywords.push(kw.toLowerCase());
        }

        const authorsList = [];
        const authorNodes = art.getElementsByTagName('Author');
        for (let j = 0; j < Math.min(authorNodes.length, 3); j++) {
            const last = authorNodes[j].getElementsByTagName('LastName')[0]?.textContent;
            const init = authorNodes[j].getElementsByTagName('Initials')[0]?.textContent;
            if (last) authorsList.push(`${last} ${init || ""}`);
        }
        const authors = authorsList.join(', ') + (authorNodes.length > 3 ? ' et al.' : '');

        articles.push({ pmid, title, journal, abstract, authors, meshTerms, authorKeywords });
    }
    return articles;
}

function processAcademicTerms(articles) {
    const freqMap = {};

    articles.forEach(art => {
        // 1. Process Official MeSH Terms and Author Keywords as whole PHRASES
        const officialPhrases = [...art.meshTerms, ...art.authorKeywords];
        officialPhrases.forEach(rawPhrase => {
            const phrase = rawPhrase.replace(/[^\w\s-]/g, '').trim();
            if (phrase.length > 2 && !academicStopWords.has(phrase)) {
                // If it's a multi-word phrase, we give it a significant boost to show research themes
                const boost = phrase.includes(' ') ? 4 : 3;
                freqMap[phrase] = (freqMap[phrase] || 0) + boost;
            }
        });

        // 2. Process Titles for individual keywords
        // We exclude common small words and academic meta-words
        const titleWords = art.title.toLowerCase().match(/\b[a-z]{4,}\b/g) || [];
        const uniqueTitleWords = new Set(titleWords);
        uniqueTitleWords.forEach(word => {
            if (!academicStopWords.has(word)) {
                // Add title words with moderate weight
                freqMap[word] = (freqMap[word] || 0) + 1;
            }
        });

        // note: Abstract is NOT used for frequency counting here, as requested.
    });

    // Filtering logic: Remove terms that are purely numbers or too common across many domains
    // and those that were part of the search query itself to avoid redundancy
    const query = document.getElementById('query').value.toLowerCase();
    const queryTerms = query.match(/\b\w+\b/g) || [];

    return Object.keys(freqMap)
        .filter(term => !queryTerms.includes(term)) // Avoid showing the search terms in the cloud
        .map(text => ({ text, size: freqMap[text] }))
        .sort((a, b) => b.size - a.size)
        .slice(0, 80); // Focus on top 80 for clarity
}

function renderCloud(words) {
    const container = document.getElementById('word-cloud-container');
    const width = container.offsetWidth || 800;
    const height = 450;

    const maxSize = d3.max(words, d => d.size);
    const minSize = d3.min(words, d => d.size);

    const sizeScale = d3.scaleSqrt() // Sqrt scale is better for word clouds
        .domain([minSize, maxSize])
        .range([14, 90]);

    // Use a more professional color scheme for academic use
    const professionalColors = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#312e81', '#3730a3', '#4338ca', '#4f46e5'];
    const colorScale = d3.scaleOrdinal(professionalColors);

    const layout = d3.layout.cloud()
        .size([width, height])
        .words(words.map(d => ({ text: d.text, size: sizeScale(d.size), originalText: d.text, weight: d.size })))
        .padding(4)
        .rotate(() => 0)
        .font('Outfit')
        .fontSize(d => d.size)
        .on('end', draw);

    layout.start();

    function draw(words) {
        d3.select('#word-cloud-container').append('svg')
            .attr('width', layout.size()[0])
            .attr('height', layout.size()[1])
            .append('g')
            .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
            .selectAll('text')
            .data(words)
            .enter().append('text')
            .style('font-size', d => `${d.size}px`)
            .style('font-family', 'Outfit')
            .style('font-weight', '700')
            .style('fill', (d, i) => colorScale(i))
            .attr('text-anchor', 'middle')
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .text(d => d.text)
            .on('click', (event, d) => {
                const word = d.originalText.toLowerCase();
                const filtered = allArticles.filter(art =>
                    (art.title + " " + art.abstract).toLowerCase().includes(word) ||
                    art.meshTerms.some(t => t.includes(word)) ||
                    art.authorKeywords.some(t => t.includes(word))
                );
                showArticlesModal(filtered, `Articles involving: "${d.originalText}"`);
            })
            .append('title')
            .text(d => `Relevance Weight: ${d.weight}`);
    }
}

function showArticlesModal(articles, title = 'Related Articles') {
    const modal = document.getElementById('article-modal');
    const list = document.getElementById('article-list');
    const titleEl = document.getElementById('modal-title');

    titleEl.innerText = title;
    list.innerHTML = '';

    articles.forEach(art => {
        const item = document.createElement('div');
        item.className = 'article-item';
        item.innerHTML = `
            <h3>${art.title}</h3>
            <div class="meta">${art.authors} | <strong>${art.journal}</strong></div>
            <div class="abstract-preview">${art.abstract}</div>
            <a href="https://pubmed.ncbi.nlm.nih.gov/${art.pmid}/" target="_blank" class="article-link">View on PubMed &rarr;</a>
        `;
        list.appendChild(item);
    });

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('article-modal').classList.add('hidden');
}
