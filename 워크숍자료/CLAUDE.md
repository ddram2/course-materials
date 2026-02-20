# CLAUDE.md — Cowork Working Memory

> 최종 갱신: 2026-02-15 12:10 (S3 SKILL/MCP 개념 설명 + LLM 맞춤 설정·업무 연속성 섹션 추가)
> 경량 운영: 사용자 프로필·응답 원칙은 system prompt에 이미 존재하므로 여기선 생략.
> 이 파일은 **Cowork만의 맥락 정보**에 집중한다.
> workspace: 워크숍자료 (1_Project/CLASS/워크숍자료)

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트 | AI·연구-수업도구 워크숍 |
| 일시 | 2026.2.23(월) 14:00–16:45 |
| 대상 | 환경보건학과 대학원생 |
| 핵심 서사 | 도구를 배우되, 도구에 종속되지 않는 법 |

## 자료 구조

```
워크숍자료/
├── CLAUDE.md              ← 이 파일
├── memory/                ← Cowork 심층 기억
├── [사전배포]
│   00_Markdown_치트시트.md
│   01_Obsidian_설치가이드.md
│   02_Antigravity_설치가이드.md
├── [교안]
│   00_워크숍_교안_진행대본.md
├── [S1] 마크다운·옵시디언
│   S1_마크다운과_AI.md          ← NEW: 마크다운×AI 시너지
│   S1_왜_Obsidian인가.md        ← NEW: 앱 비교·차별점
│   S1_Obsidian_플러그인_안내.md ← NEW: 추천 플러그인+Smart Composer
│   S1_샘플Vault_구조안내.md
│   S1_예시_논문노트_Kim2024_PFAS.md
│   S1_템플릿_논문노트.md
├── [S2] AI IDE 시연·실습
│   S2_왜_IDE인가.md             ← NEW: Vibe Coding·IDE 3종 비교
│   S2_데모_시나리오.md           ← 전면 재작성: 시연/실습 2트랙
│   S2_데모_영어초고.md
│   pubmed_wordcloud/          ← NEW: Antigravity로 제작한 워드클라우드 웹앱
│     index.html / app.js / style.css
├── [S3] AI 활용 Tip 나누기
│   S3_나의 AI활용 일상(활용앱 중심).md  ← 교수 발표: 도구·SKILL/MCP·연속성 설정
│   S3_학생발표_가이드.md
└── [S4] 패널토론
    S4_기조발제_노트.md        ← 2차 재작성: 3아젠다 × 삐딱한 주장/불편한 질문
    S4_패널토론_진행가이드.md  ← 2차 재작성: 패널A/B/C + 새 아젠다 반영
    S4_패널안내_학생A.md       ← 아젠다1 담당 (배정 후 이름 기입)
    S4_패널안내_학생B.md       ← 아젠다2 담당 (배정 후 이름 기입)
    S4_패널안내_학생C.md       ← 아젠다3 담당 (배정 후 이름 기입)
    S4_아젠다_논거정리.md      ← NEW: 교수/AI/해외사례+참고문헌22건 (워크숍 후 배포)
    S4_AI활용_자기점검_체크리스트.md
```

## 현재 상태

→ memory/projects/ai-workshop-2026.md 참조

## 정리 필요 (수동)

- [x] 구파일 삭제: S3_AI활용_자기점검_체크리스트.md (→ S4로 대체)
- [x] 구파일 삭제: S3_패널QA_진행가이드.md (→ S4로 대체)

## 메모리 운영 규칙

- CLAUDE.md: system prompt과 중복 금지. Cowork 고유 맥락만.
- memory/: 프로젝트별 작업 이력. 이 workspace 한정.
