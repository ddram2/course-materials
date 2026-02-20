---
title: "Microsoft MarkItDown - 파일 및 오피스 문서를 Markdown으로 변환하"
source: "https://news.hada.io/topic?id=18260"
author:
  - "[[neo]]"
published: 2024-12-14
created: 2026-02-14
description: "다양한 파일을 Markdown으로 변환하는 유틸리티 도구지원포맷:PDF (.pdf), PowerPoint (.pptx), Word (.docx), Excel (.xlsx)이미지 (EXIF 메타데이터 및 OCR), 오디오 (EXIF 메타데이터 및 음성 변환)HTML (특히 Wikipedia 등 특별 처리) 기타 다양한 텍스트 기반 형식 (csv, json,"
tags:
  - 교육/강의
  - 환경보건
  - 연구
  - 교육
  - 노트
  - "clippings"
---
## 설치 및 사용법

``` bash
markitdown "/Users/sungkyoonkim/Dropbox/my_obsidian_vault/2_AreaReso/Edu.notes_/innoEdu/AI활용교육/서울대학교_AI_가이드라인.pdf" > "/Users/sungkyoonkim/Dropbox/my_obsidian_vault/2_AreaReso/Edu.notes_/innoEdu/AI활용교육/서울대학교_AI_가이드라인.md" 2>&1

```

[▲](https://news.hada.io/)## [Microsoft MarkItDown - 파일 및 오피스 문서를 Markdown으로 변환하는 Python 도구](https://github.com/microsoft/markitdown)

(github.com/microsoft)

31 P by [GN⁺](https://news.hada.io/user?id=neo) 2024-12-14 | [★ favorite](https://news.hada.io/) | [댓글 2개](https://news.hada.io/topic?id=18260)

- 다양한 파일을 Markdown으로 변환하는 유틸리티 도구
- 지원포맷:
	- PDF (.pdf), PowerPoint (.pptx), Word (.docx), Excel (.xlsx)
	- 이미지 (EXIF 메타데이터 및 OCR), 오디오 (EXIF 메타데이터 및 음성 변환)
	- HTML (특히 Wikipedia 등 특별 처리) 기타 다양한 텍스트 기반 형식 (csv, json, xml 등)
- API 사용법은 간단함:
	```python
	from markitdown import MarkItDown  
	markitdown = MarkItDown()  
	result = markitdown.convert("test.xlsx")  
	print(result.text_content)
	```

[출처](https://news.hada.io/)



###### Hacker News 의견

- `uv` 를 설치한 경우, 파일에 대해 별도의 설치 없이 `uvx markitdown path-to-file.pdf` 명령어로 실행할 수 있음
	- 처음 실행 시 필요한 패키지를 캐시하고, 이후 실행 시 캐시된 패키지를 재사용함
	- HTML과 PDF에 대해 시도해본 결과 꽤 괜찮은 성능을 보임
- 회사에서 파일을 LLM 친화적인 텍스트로 변환하는 기능을 개발한 경험이 있음
	- 소스 코드를 읽어본 결과, 이 구현은 꽤 합리적임
	- 이미지나 스프레드시트에는 사용하지 않는 것이 좋음
	- 이미지의 경우 LLM 제공자가 직접 전달할 수 있으며, 스프레드시트는 Markdown 테이블 해석에 약함
- 많은 스타트업과 오픈 소스 프로젝트가 이 분야를 복잡하게 만들지만, 이해하기 쉽고 배포하기 쉬운 간단한 프로젝트가 최종 목표임
- PDF 처리에 있어 "얼마나 많은 처리를 원하는지" 조절할 수 있는 기능이 있었으면 좋겠음
	- PDF는 텍스트 추출 시, PDF 내보내기 방식에 민감한 휴리스틱을 사용하거나 OCR을 완전히 사용해야 함
	- 프로젝트가 한 가지 방법에만 고정되는 것은 불편함
	- 음성-텍스트 기능은 텍스트-텍스트 기능과 성능 특성이 다를 수 있어 사용하지 않을 것임
- PDF 처리에 있어 PDFMiner를 직접 통합하는 것이 더 나을 수 있음
- Pandoc을 사용하여.docx 파일을 Markdown 및 다른 파일 형식으로 변환할 수 있음
	- Pandoc은 파워포인트와 엑셀 파일 변환은 불가능함
- PDF 형식의 복잡한 시각적 레이아웃과 많은 테이블을 가진 테이블탑 RPG 책을 색인화함
	- PDFMiner의 래퍼라면 이 도구의 추가 가치는 보이지 않음
	- 테이블을 인식하거나 처리하지 않지만, 최소한의 테이블 셀 인식은 있음
	- 가변 폭 열이나 복잡한 방식으로 감싸인 텍스트는 잘 처리함
	- 완전히 정렬된 텍스트에 불필요한 공백을 삽입하고, 중간 문장 열 분할 시 불필요한 줄 바꿈을 추가함
	- 가장 큰 문제는 제목을 완전히 놓치는 것임
- README에 LLM에 대한 언급이 없다는 점이 예상 밖이지만 긍정적임
	- 코드 읽기가 흥미로움
	- 대부분은 단일 1101줄 파일에 있는 글루 코드임
- 온라인 언어 수업에서 과제를 Slack으로 제출했을 때의 경험 공유
	- .md 파일로 과제를 제출했으나, 선생님이 이를 이해하지 못함
	- 이후로는 Word 문서를 선호하는 사람을 만날 줄 몰랐음
- docling과의 비교에 대한 호기심
	- docling은 LLM을 사용함
- Markdown에서 PDF나.docx로 변환하는 좋은 라이브러리가 있는지 궁금함
	- Pandoc은 대부분의 경우 가능하지만, 테이블과 같은 특정 항목에서 어려움을 겪음
- Microsoft라면 Outlook HTML과.docx에서 절반 정도는 괜찮은 결과를 낼 수 있을 것임
	- 대부분의 유료 솔루션도 평가했으나, 프로덕션에서 실행할 만큼 좋다고 생각한 것은 없음
	- 이 도구를 시도해볼 것임

답변달기