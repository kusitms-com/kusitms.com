# Kusitms 공식 홈페이지

🔗 [KUSTIMS OFFICIAL WEB SITE](https://kusitms.com/)

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 (TypeScript)
- **Package Manager**: pnpm
- **UI**: Tailwind CSS v4 + [@kusitms.com/ui](https://github.com/kusitms-com/makers-design-system)
- **Lint/Format**: Biome
- **Infra**: AWS Route 53, Vercel

## Getting Started

```bash
git clone https://github.com/kusitms-com/kusitms.com.git
cd kusitms.com
pnpm install
pnpm dev
```

## Scripts

| Command        | Description       |
| --------------- | ------------------ |
| `pnpm dev`      | 개발 서버 실행 (Turbopack) |
| `pnpm build`    | 프로덕션 빌드           |
| `pnpm start`    | 프로덕션 서버 실행        |
| `pnpm lint`     | Biome 검사           |
| `pnpm format`   | Biome 포맷 적용        |

## Project Structure

```text
src/
├── app/          # Next.js App Router 라우트 (recruit, archive, projects 등)
├── components/   # UI 컴포넌트 (도메인별 폴더로 구분: recruit, archive, projects 등)
├── constants/    # 정적 데이터 및 상수
├── hooks/        # 커스텀 React hook
├── lib/          # 유틸리티
├── service/      # 도메인별 데이터/비즈니스 로직 (recruit, projects, reviews)
└── utils/        # 공용 유틸 함수
```

## 서비스 아키텍처

<img width="1474" alt="스크린샷 2025-06-06 오후 10 50 37" src="https://github.com/user-attachments/assets/efba5068-dbc0-4fcc-8dca-594876332d58" />
