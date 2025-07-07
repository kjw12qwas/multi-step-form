# 📚 multi-step-form

독서 경험과 감상을 단계별로 기록할 수 있는 5단계 멀티스텝 폼 애플리케이션입니다.  

---

## 📄 기능 명세

[👉 Notion 기능 명세 및 일정표 보기](https://paint-wish-848.notion.site/Multi-Step-Form-229bb4cced1f804598cef6807feeadea)

---

## 🎨 Figma 디자인

(곧 업데이트 예정입니다)

---

## ✅ 주요 기능

- 5단계 멀티스텝 폼 구성
- 상태에 따른 조건부 유효성 검사
- 실시간 미리보기 (1024px 이상, debounce 500ms 적용)
- 인용구 동적 추가/삭제 및 조건별 입력 필수화
- localStorage를 활용한 상태 복원

---

## 💬 커밋 컨벤션

본 프로젝트는 **[토스 커밋 컨벤션 (Conventional Commit)]**을 따릅니다.

> 형식: `type(scope): subject`

### 예시
- `feat(review): 독후감 입력 폼 추가`
- `fix(form): 유효성 오류 수정`

### 주요 커밋 유형
| Type      | 설명                      |
|-----------|---------------------------|
| `feat`    | 기능 추가                  |
| `fix`     | 버그 수정                  |
| `docs`    | 문서 변경                  |
| `style`   | 스타일 변경 (포맷, 세미콜론 등) |
| `refactor`| 코드 리팩토링              |
| `chore`   | 빌드, 의존성 등 설정 작업    |

**왜 사용하는가?**
- ✅ 가독성 향상
- 🔁 자동 changelog 생성 가능
- 🔍 변경 이력 추적 용이
---

## 📦 기술 스택

- Next.js (Page Router)
- React
- Typescript
- react-hook-form
- react-query
- emotion

---

## 🛠 설치 및 실행

```bash
git clone https://github.com/kjw12qwas/multi-step-form.git
cd multi-step-form
yarn install
yarn dev
```
