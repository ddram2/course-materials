---
created: 2026.02.18
MOC1: MOC.10.edu.교과_콘텐츠
MOC2a: MOC.50.Ag.Chem
MOC2b: ""
source:
tags:
  - 교육/강의
  - 환경보건
  - 연구
  - 교육
  - 노트
---
# Obsidian 플러그인 안내 — 연구자를 위한 추천

> 세션 1 보충자료 | 2026.02.23 워크숍

---

## 핵심 메시지

> **Obsidian은 플러그인으로 진화한다. 특히 Smart Composer는 꼭 써보길 권한다.**

---

## 플러그인 설치 방법

1. Obsidian → **설정** (⚙️) → **커뮤니티 플러그인** → **활성화**
2. **탐색** 클릭 → 플러그인 이름 검색 → **설치** → **활성화**

---

## ⭐ 최우선 추천: Smart Composer

### 이 플러그인이 특별한 이유

Smart Composer는 Obsidian 안에서 LLM(ChatGPT, Claude 등)과 대화하며 글쓰기를 보조하는 플러그인이다. 핵심은 **Vault 내 노트를 맥락(context)으로 활용**할 수 있다는 점이다.

| 기능 | 설명 |
|---|---|
| AI 채팅 | Obsidian 사이드바에서 AI와 대화 |
| 노트 맥락 활용 | 현재 노트 또는 지정 노트를 AI에게 맥락으로 제공 |
| 글쓰기 보조 | 선택한 텍스트를 AI가 수정·확장·요약 |
| One-click 편집 | AI 제안을 노트에 바로 반영 |

### 왜 대학원생에게 유용한가

1. **논문 노트 축적 → AI가 내 연구 맥락 파악**: 논문 노트를 꾸준히 쌓으면, Smart Composer가 그 내용을 참조하여 더 정확한 답변을 해준다.
2. **문헌 정리·비교**: "이 논문과 [[Kim2024_PFAS]] 논문의 방법론 차이를 정리해줘" 같은 질의가 가능하다.
3. **초안 작성 보조**: 연구 계획서, 논문 서론, 발표 스크립트 등의 초안을 Vault 맥락 기반으로 생성할 수 있다.

### 설정 방법 (간략)

1. 커뮤니티 플러그인에서 **Smart Composer** 검색 → 설치 → 활성화
2. 설정에서 AI Provider 선택 (OpenAI 또는 Anthropic)
3. API Key 입력 (각 서비스에서 발급)
4. 사이드바에서 Smart Composer 패널 열기 → 대화 시작

> ⚠️ API Key가 필요하므로 OpenAI 또는 Anthropic 계정이 있어야 한다. 무료 체험 크레딧으로 시작 가능하다.

---

## 🔧 대학원생 필수 추천 플러그인 (7개)

| 플러그인 | 기능 | 대학원생에게 유용한 이유 |
|---|---|---|
| **Templater** | 템플릿 생성, 변수·날짜 자동 삽입 | 논문 노트·실험 기록 등 반복 구조를 템플릿화 → 일관성 확보 |
| **Editing Toolbar** | Word 스타일 서식 툴바 | 마크다운 문법을 다 외우지 않아도 서식 적용 가능 → 진입장벽 낮춤 |
| **Recent Files** | 최근 열어본 파일 목록 | 작업 중인 노트를 빠르게 다시 열기 |
| **Outliner** | 리스트 접기·이동 (WorkFlowy 스타일) | 논문 아웃라인, 발표 구조 잡기에 유용 |
| **Translate** | DeepL/Google 번역 연동 | 영어 논문 읽기·번역 보조 (Obsidian 안에서 바로) |
| **Better Export PDF** | PDF 내보내기 (목차, 헤더/푸터 지원) | 과제·보고서를 깔끔한 PDF로 제출 |
| **Importer** | Notion, Evernote, OneNote 등에서 가져오기 | 기존에 쓰던 앱에서 Obsidian으로 데이터 이전 |

---

## 📌 알아두면 좋은 플러그인 (선택)

| 플러그인                  | 기능                         | 활용 장면                        |
| --------------------- | -------------------------- | ---------------------------- |
| **Pandoc**            | .md → DOCX, ePub, PDF 변환   | collaborator가 Word 파일을 요구할 때 |
| **Marp Slides**       | 마크다운 → 프레젠테이션 슬라이드         | 세미나·학회 발표 자료를 .md로 작성        |
| **Auto Link Title**   | URL 붙여넣기 시 웹페이지 제목 자동 가져오기 | 참고 문헌·웹 자료 정리 시 편리           |
| **Note Refactor**     | 노트 내용 일부를 새 노트로 분리         | 긴 노트를 주제별로 쪼갤 때              |
| **Advanced Tables**   | 마크다운 표 편집·정렬·수식            | 데이터 정리 표 작성 시                |
| **Enhancing Mindmap** | 마크다운 → 마인드맵 시각화            | 연구 주제 브레인스토밍                 |

---

## 개인적으로 사용 중인 플러그인 전체 목록 (29개)

> 참고용. 모든 플러그인을 설치할 필요는 없다. 필요에 따라 하나씩 추가해 가면 된다.

| #   | 플러그인                   | 한줄 설명                          |
| --- | ---------------------- | ------------------------------ |
| 1   | Templater              | 템플릿 생성·변수 삽입                   |
| 2   | Advanced Tables        | 마크다운 표 편집·정렬                   |
| 3   | Style Settings         | 테마 CSS 커스터마이징                  |
| 4   | Minimal Theme Settings | Minimal 테마 색상·폰트 제어            |
| 5   | Editing Toolbar        | Word 스타일 서식 툴바                 |
| 6   | Outliner               | 리스트 접기·이동                      |
| 7   | Importer               | Notion, Evernote 등에서 데이터 가져오기  |
| 8   | Recent Files           | 최근 열어본 파일 목록                   |
| 9   | Pandoc                 | .md → DOCX, ePub, PDF 변환       |
| 10  | Auto Link Title        | URL 붙여넣기 시 제목 자동 가져오기          |
| 11  | Note Refactor          | 노트 내용 추출·분리                    |
| 12  | Better Export PDF      | PDF 내보내기 (목차, 헤더/푸터)           |
| 13  | Enhancing Mindmap      | 마크다운 → 마인드맵 시각화                |
| 14  | Smart Typography       | 따옴표·대시 자동 변환                   |
| 15  | Clear Unused Images    | 미사용 이미지 정리                     |
| 16  | **Smart Composer**     | **AI 채팅·글쓰기 보조 (Vault 맥락 활용)** |
| 17  | Terminal               | Obsidian 내 터미널 실행              |
| 18  | Share Note             | 노트 암호화 공유                      |
| 19  | Image Toolkit          | 이미지 확대·회전·반전                   |
| 20  | Editor Width Slider    | 에디터 폭 슬라이더 조절                  |
| 21  | Translate              | DeepL/Google 번역 연동             |
| 22  | Open Gate              | 웹사이트 Obsidian 내 임베드            |
| 23  | Better File Link       | 외부 파일 링크 개선                    |
| 24  | Show Current File Path | 현재 파일 경로 상태바 표시                |
| 25  | Marp Slides            | 마크다운 → 프레젠테이션                  |
| 26  | PDF break page         | PDF 내보내기 시 페이지 나눔              |
| 27  | Custom File Extensions | 비마크다운 파일(.csv 등) Obsidian에서 열기 |
| 28  | Path Title             | 파일 경로를 탭 제목에 표시                |
| 29  | Linked Note Exporter   | 노트 + 첨부파일 + 연결노트 일괄 내보내기       |
| 30  | docxer                 | 작은 크기의 .docx → .md 변환          |

---

## 관련 자료
- [[S1_마크다운과_AI]] — 마크다운이 AI 시대에 중요한 이유
- [[S1_왜_Obsidian인가]] — 여러 앱 중 왜 Obsidian인가
- [[01_Obsidian_설치가이드]] — 설치 방법
