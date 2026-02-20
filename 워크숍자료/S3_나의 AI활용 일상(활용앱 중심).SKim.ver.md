---
created: 26.02.14
MOC1: MOC.00.PersonalNotes
MOC2a:
MOC2b:
source:
tags:

  - 교육/강의
  - AI/LLM
  - 환경보건
  - 연구
  - 교육
---
## 나의 LLM 활용기
### 사실관계 확인은 다음 방식으로 …

- 전통적인 구글 검색 +AI 모드
- 일반적인 사실관계 확인: $ Perplexity Pro
	- 새로운 용어, 앱의 설치나 trouble shooting 등
	- 논문출판 여부
	- 논문내용 확인 → 때때로 hallucination 있음이 확인됨
- 학술논문 검색 및 확인
	- 전통적 학술 논문 검색에 가까운 것
		- Elicit: 학술DB [Elicit: AI for scientific research](https://elicit.com/)
			- 자연어 검색가능; 분류/리뷰에 효과적; zotero연동가능
		- SciSpace: 학술DB [SciSpace](https://scispace.com/ko)
			- 자연어 검색가능; 최근 많은 updates 
	- LLM에 검색 도구 및 RAG을 강화한 것
		- $ claude SKILL, MCP → hallucination 적지만 치명적 오류 가능있기에 확인 필요
			- **SKILL**: Claude에 내장된 전문 작업 역량. 문서 작성(docx, pptx, pdf), 데이터 분석(EDA), 통계분석, 과학적 시각화, 문헌 검토 등을 맥락에 맞게 자동 호출한다. 사용자가 "논문 초안을 써줘"라고 하면 scientific-writing skill이 활성화되는 식이다.
			- **MCP (Model Context Protocol)**: LLM이 외부 도구·데이터에 접근하는 표준 프로토콜. PubMed 검색, 웹 브라우징, 파일 시스템 접근, Obsidian 노트 읽기 등을 LLM이 직접 수행할 수 있게 한다. 예: "PFAS 최신 논문을 PubMed에서 찾아줘" → MCP를 통해 실제 PubMed API에 접속하여 검색.
		- google AI studio; google NotebookLM 
			- google Deep Research
		- 
### 업무 비서가 필요할 때 …

- 일정 및 문서 관리, 업무(브레인스토밍, 분석 및 코딩, 글쓰기 등), 사무
	- [일정] chrome/google calendar/휴대폰연동 + obsidian 일정관리
	- [문서] Obsidian으로 문서작성, 읽기, 정리
		- Chrome/obisidian webclipper
	- [업무] $ Claude cowork으로 작업수행
		- 보다 정교한 자료분석, 글쓰기는 Windsurf/cascade 또는 claude code
	- [사무] 단순한 일처리: 번역, 상의(chit-chat ~ 토론)
		- ChatGPT(rapid; not-bad/so-so); Claude chat (평균적 답변; 안정감과 닝닝함)
- 그래도 근원적 생각정리는 
	- 종이 노트와 만년필, 
	- 메모장(앱), $ GoodNote
- 논문읽기
	- Comet/Assistant → obsidian 정리 (소장 필요할 때 zotero)
	- SciSpace/LLM채팅 (깊이 있는 토론에는 한계. 요즘 ver은 개선되었을까?)
- 회의 후 정리
	- 직접 obsidian에 노트 후, LLM 또는 IDE로 정리
	- 회의자료(LLM 인식가능한 것)를 folder에 모아두고, IDE로 정리
		- 음성녹음 → CLOVA note로 speech2text → LLM으로 다듬고 → NotebookLM 또는 claude로 정리하기도
- Multi-agent
	- $ Genspark [Genspark - 올인원 AI 작업 공간](https://www.genspark.ai/)
		- 복수의 AI 결과를 동시에 비교하며 결과 선택가능
		- 고품질의 프리젠테이션
	- Notebook LM: 방대한 문서 처리
		- inforgraphics 변환
		- 음성 해설
		- RAG: Retrieval-Augmented Generation

### 업무 방식은 다음과 같이 …

- 정보 습득 via 온오프라인 → 사실관계 확인
	- obsidian으로 일단 취합/정리
	- claude cowork 또는 Windsurf/cascade나 claude code로 문서, 저작물 생성
	- 공유 (w/ 학생, 교수, 커뮤니티) → .md 로 직접 공유 또는 .docx나 .pdf로 변환/공유

## LLM 맞춤 설정과 업무 연속성을 위한 Context Engineering

> LLM을 단발성 질의응답이 아니라 **지속적인 작업 파트너**로 쓰려면, 나를 알려주고, 작업 맥락을 이어가는 설정이 필요하다. (→ Context engineering의 영역)
> 예전에는 좋은 질문(Prompt)을 해야한다고 했다. 이는 지금도 유효하나 좋은 환경(Context)을 마련해 주여야 LLM으로 다양한 역량을 수행할 수 있다.

### 1. 전역 규칙 설정 (global_rules.md / Custom Instructions)
- LLM에게 "나는 누구이고, 어떤 방식으로 답변해야 하는가"를 한 번 정의해두면 **모든 대화에 자동 적용**된다.
- 포함할 내용: 전공 배경, 선호하는 답변 형식(논술식/개조식), 전문용어 표기 규칙, 사실관계 검증 절차 등
- 설정 위치:
	- Windsurf: `~/.codeium/windsurf/memories/global_rules.md`
	- Claude Desktop: 설정 → 일반 → "개인 맞춤 설정"
	- Claude Code: `~/.claude/CLAUDE.md`
	- Antigravity: `~/.gemini/antigravity/GEMINI.md`

### 2. 프로젝트별 맥락 유지 (CLAUDE.md + memory/)
- **CLAUDE.md**: 프로젝트 폴더에 두는 "지도" 파일. 프로젝트 개요, 파일 구조, 현재 진행 상태를 간결하게 기록한다. AI가 폴더를 열 때 이 파일을 먼저 읽고 맥락을 파악한다.
- **memory/ 폴더**: 세션별 작업 이력을 기록하는 "항해일지". 무엇을 수정했고, 어떤 결정을 내렸는지 축적된다.
- 이 구조 덕분에 **새 대화를 시작해도 이전 작업을 이어갈 수 있다**. 세션이 끊겨도 맥락이 유실되지 않는다.

### 3. 왜 중요한가
- LLM은 대화가 끝나면 맥락을 잊는다. 매번 같은 배경을 설명하는 것은 비효율적이다.
- 전역 규칙으로 **나의 정체성**을, CLAUDE.md + memory/로 **프로젝트의 정체성**을 유지하면, LLM이 일관된 파트너로 작동한다.
- 이 워크숍 자료 자체도 이 방식으로 관리되고 있다 → CLAUDE.md, memory/projects/ai-workshop-2026.md


## Link
- [[(info) Context engineering의 개념과 활용]]
