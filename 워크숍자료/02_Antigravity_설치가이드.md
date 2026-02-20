---
created: 2026.02.18
MOC1: MOC.10.edu.교과_콘텐츠
MOC2a: MOC.70.fld.환경보건(일반)
MOC2b: ""
source:
tags:
  - 교육/강의
  - 환경보건
  - 연구
  - 교육
  - 노트
---
# Antigravity 설치 및 시작 가이드

> 워크숍 사전 배포용 | 설치 후 참석해 주세요

---

## Antigravity란?

- **Google**이 만든 Agent-first AI 코딩 플랫폼 (2025.11 출시, Gemini 3와 함께 공개)
- Windsurf(Codeium) 코드베이스를 기반으로, Google의 Gemini 모델을 통합한 IDE
- 코드 작성, 문서 편집, 데이터 분석 등을 AI와 대화하며 수행
- Gemini, Claude, GPT 등 **다수 AI 모델** 지원
- 현재 Public Preview — **무료** (개인 Gmail 계정)

---

## 1단계: 다운로드 및 설치

1. [https://antigravity.dev](https://antigravity.dev) 접속
2. **Download** 클릭 → 본인 OS 선택
3. 설치 파일 실행 → 기본 설정으로 설치

---

## 2단계: 로그인

1. Antigravity 실행
2. Google 계정으로 로그인

---

## 3단계: 폴더 열기

1. **File → Open Folder** (또는 `Cmd/Ctrl + O`)
2. 작업할 폴더 선택 (예: Obsidian Vault 폴더 또는 연구 프로젝트 폴더)

---

## 4단계: AI와 대화해 보기

1. `Cmd/Ctrl + I` 또는 채팅 패널 클릭
2. 자연어로 질문하거나 요청:

```
이 폴더에 있는 .md 파일들을 요약해 줘
```

```
이 CSV 파일의 데이터를 정리하는 Python 코드를 작성해 줘
```

---

## 5단계: R Extension 설치 (워크숍 당일 현장에서 함께 진행)

> R이 컴퓨터에 설치되어 있어야 합니다. 대부분 설치되어 있을 것이지만, 
> 확인 방법: 터미널에서 `R --version` 입력 → 버전 정보가 나오면 OK.

Antigravity는 VS Code 기반이므로 **R Extension**을 설치하면 R 코드를 직접 실행할 수 있다.

### 설치 방법

1. 좌측 사이드바 → **Extensions** 아이콘 클릭 (또는 `Cmd/Ctrl + Shift + X`)
2. 검색창에 **"R"** 입력
3. **"R" by REditorSupport** 를 찾아 → **Install** 클릭
4. (선택) **"R Debugger"** 도 설치하면 디버깅 가능
5. 설치 후 **Reload Window** (또는 Antigravity 재시작)

### 동작 확인

1. 새 파일 만들기 → 파일명을 `test.R`로 저장
2. 아래 코드를 입력하고 실행 (`Cmd/Ctrl + Enter` 또는 우클릭 → Run):

```r
summary(mtcars)
```

3. 터미널 또는 R 콘솔에 결과가 출력되면 성공!

### 추천 R 패키지 (사전 설치하면 좋음)

R 콘솔 또는 터미널에서:

```r
install.packages(c("tidyverse", "ggplot2", "gt", "broom"))
```

> 워크숍에서 Vibe Coding 실습 시 위 패키지를 사용합니다.
> 사전 설치가 안 되어도 워크숍 당일 AI가 설치 명령어를 안내해 줍니다.

---

## 참고: 주요 AI IDE 비교 (2026.2 기준)

| 항목 | Antigravity | Windsurf | Cursor |
|---|---|---|---|
| 개발사 | Google | Codeium (Cognition AI 인수) | Anysphere |
| 기반 | VS Code fork | VS Code fork | VS Code fork |
| 가격 | 무료 (Public Preview) | Free + Pro 유료 | Pro $20/월 |
| AI 모델 | Gemini 3, Claude, GPT 등 | 다중 모델 지원 | Claude, GPT 등 |
| 특징 | Agent-first, Gemini 생태계 | Cascade AI, MCP·SKILL 지원 | 커뮤니티 활발 |

> 워크숍에서는 **Antigravity(무료)**로 실습하고, 진행자는 **Windsurf**로 시연합니다.
> 세 IDE 모두 VS Code 기반이므로 Extension(확장)을 공유할 수 있습니다.

---

> ✅ **사전 준비**: 1~4단계(설치 + 로그인 + 폴더 열기 + AI 대화) 완료
> ✅ **당일 현장**: 5단계(R Extension) 함께 설치 → 바로 실습
