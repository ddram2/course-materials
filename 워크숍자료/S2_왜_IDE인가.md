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
# 왜 IDE인가 — 비개발자도 IDE를 쓰는 시대

> 세션 2 보충자료 | 2026.02.23 워크숍

---

## 핵심 메시지

> **IDE는 더 이상 개발자만의 도구가 아니다. Vibe Coding 시대, 연구자의 생산성 플랫폼이다.**

---

## 1. IDE(Integrated Development Environment, 통합개발환경)란?

코드 편집, 실행, 디버깅, 파일 관리를 하나의 화면에서 수행하는 도구이다. 원래 프로그래머를 위해 만들어졌지만, AI와 결합하면서 **비개발자도 자연어만으로** 다양한 작업을 수행할 수 있게 되었다.

| 작업 | 전통적 방식 | IDE + AI (Vibe Coding) |
|---|---|---|
| 데이터 분석 | R/Python 코드를 직접 작성 | "이 데이터로 회귀분석해줘" → 코드 자동 생성·실행 |
| 문서 편집 | Word/HWP에서 수동 수정 | .md 파일 특정 문단 선택 → "학술적 톤으로 수정해줘" |
| 시각화 | ggplot 문법을 공부해서 작성 | "산점도 그려줘, 성별로 색 구분" → 즉시 생성 |
| 문헌 검색 | PubMed 웹사이트에서 수동 검색 | IDE 안에서 "PFAS 갑상선 논문 검색해줘" (MCP 연동) |
| 보고서 작성 | 여러 파일을 일일이 읽고 정리 | 폴더 지정 → "핵심 쟁점 정리해줘" → 초안 자동 생성 |

---

## 2. Vibe Coding(바이브 코딩)이란?

2025년 Andrej Karpathy(OpenAI 공동창업자)가 제안한 개념으로, **코드를 직접 작성하지 않고 자연어로 AI에게 지시하여 코딩하는 방식**을 말한다.

- 코드를 한 줄도 모르더라도 데이터 분석, 시각화, 통계 검정이 가능하다
- AI가 생성한 코드가 올바른지 **검증하는 능력**이 핵심이다 (→ 세션 4 팩트체크와 연결)
- 연구자에게는 R/Python을 "유창하게" 쓰지 못하더라도 **분석의 장벽을 낮추는** 도구이다

---

## 3. 추천 AI IDE (2026.2 기준)

| 항목 | Antigravity | Windsurf | Cursor |
|---|---|---|---|
| 개발사 | Google | Codeium (Cognition AI 인수) | Anysphere |
| 기반 | VS Code fork | VS Code fork | VS Code fork |
| 가격 | **무료** (Public Preview) | Free + Pro 유료 | Pro $20/월 |
| AI 모델 | Gemini 3, Claude, GPT 등 | Claude, GPT 등 (다중 모델) | Claude, GPT 등 |
| 특징 | Agent-first, Gemini 생태계 | Cascade AI, MCP·SKILL 지원 | 커뮤니티 활발 |
| Extension | VS Code 확장 호환 | VS Code 확장 호환 | VS Code 확장 호환 |

> 세 IDE 모두 VS Code를 기반으로 하므로, **VS Code의 Extension(확장)을 그대로 사용**할 수 있다.
> 워크숍에서는 **Antigravity(무료)**로 실습하고, 진행자는 **Windsurf**로 시연한다.

### VS Code도 여전히 좋다

VS Code 자체도 **GitHub Copilot** 등 AI Copilot 플러그인을 통해 유사한 기능을 사용할 수 있다. 다만 위 세 IDE는 AI를 더 깊이 통합하여 **에이전트(Agent) 방식**으로 작동한다는 차이가 있다.

---

## 4. 연구자가 IDE에서 할 수 있는 일

1. **텍스트 작업**: .md 파일 요약, 번역, 특정 문단 수정, 논문 초고 교정
2. **데이터 분석**: CSV/Excel 읽기 → 기술통계, 시각화, 회귀분석 (R 또는 Python)
3. **코드 생성**: 자연어 → R/Python/SAS 코드 자동 생성 및 실행
4. **다중 문서 분석**: 여러 파일을 한꺼번에 읽고 → 쟁점 정리 → 보고서 초안 작성
5. **문헌 검색**: MCP(PubMed 등) 연동으로 IDE 안에서 논문 검색·정리
6. **시각화**: 워드클라우드, 차트, 그래프를 자연어 지시로 생성

---

## 관련 자료
- [[02_Antigravity_설치가이드]] — Antigravity 설치 및 R Extension 설정
- [[S2_데모_시나리오]] — 시연·실습 상세 시나리오
- [[S1_마크다운과_AI]] — 마크다운이 AI와 호환되는 이유
