# kusitms.com 이미지 최적화 성능 리포트

> 측정일: 2026-04-11
> 측정 환경: Chrome DevTools Performance Trace (CPU/Network throttling 없음)
> 측정 대상: https://www.kusitms.com (메인 페이지)
> Field 데이터: CrUX (Chrome User Experience Report, 실제 사용자 p75)

---

## 현재 이미지 현황

| 항목 | 수치 |
|------|------|
| 래스터 이미지 (PNG/JPG) | 68개, 총 15.1MB |
| SVG | 83개 |
| WebP | 0개 |
| `unoptimized` 사용 컴포넌트 | 6곳 |
| `sizes` 속성 사용 | 1곳 (MeetupProjectCarousel) |
| `placeholder="blur"` 사용 | 0곳 |

### 용량 상위 이미지

| 파일 | 크기 |
|------|------|
| Main_Graphic.png | 1.9MB |
| Special_Lecture_by_Expert_1.png | 1.3MB |
| 31st_External_Public_Relations_Team.png | 572KB |
| 31st_Education_Planning_Team.png | 512KB |
| 31st_General_Management_Team.png | 500KB |
| Background.png | 484KB |

### 메인 페이지 이미지 네트워크 요청 (초기 로드)

| 요청 | 유형 | Vercel 최적화 사용 | 비고 |
|------|------|--------------------|------|
| Background.png (w=3840, q=75) | `_next/image` | O | sizes 미지정 → 최대 너비 요청 |
| Main_Graphic.png (w=3840, q=75) | `_next/image` | O | sizes 미지정 → 최대 너비 요청 |
| S3 외부 이미지 (w=828, q=75) | `_next/image` | O | 외부 이미지도 Vercel 크레딧 소모 |
| headerLogo.svg | 정적 | X | - |
| footerLogo.svg | 정적 | X | - |
| Snow.svg, ManageBg.svg 등 10개 SVG | 정적 | X | - |
| topScroll.svg | 정적 | X | - |
| **합계** | **15~16개** | **3개** | Vercel 최적화 3회/페이지뷰 |

---

## Step 0: 베이스라인 (최적화 전)

### 프로덕션 Lab 측정 결과 (3회) — kusitms.com

| 측정 | LCP | TTFB | Load Delay | Load Duration | Render Delay | CLS |
|------|-----|------|------------|---------------|--------------|-----|
| 1회차 | 478ms | 292ms | 7ms | 109ms | 69ms | 0.00 |
| 2회차 | 233ms | 38ms | 31ms | 58ms | 106ms | 0.00 |
| 3회차 | 357ms | 207ms | 6ms | 44ms | 101ms | 0.00 |
| **평균** | **356ms** | **179ms** | **15ms** | **70ms** | **92ms** | **0.00** |

### Field 측정 결과 (CrUX, 실제 사용자 p75)

| 지표 | 값 |
|------|-----|
| LCP | 1,365ms |
| CLS | 0.04 |

### Lighthouse 점수

| 카테고리 | 점수 |
|----------|------|
| Accessibility | 89 |
| Best Practices | 100 |
| SEO | 100 |

### 이미지 네트워크 요약

| 항목 | 값 |
|------|-----|
| 초기 로드 이미지 요청 수 | 15~16개 |
| Vercel `_next/image` 요청 수 | 3개 |
| 요청 최대 너비 | w=3840 (Background, Main_Graphic) |
| 캐시 히트 (304) | 대부분 |

### 로컬 Lab 측정 결과 (3회) — localhost:3000 (PNG)

> 참고: 로컬 dev 서버는 Next.js 런타임 컴파일 오버헤드로 Render Delay가 ~2300ms 발생하여 프로덕션과 LCP 수치가 크게 다름

| 측정 | LCP | TTFB | Render Delay | CLS |
|------|-----|------|--------------|-----|
| 1회차 | 2,404ms | 63ms | 2,341ms | 0.00 |
| 2회차 | 2,384ms | 49ms | 2,335ms | 0.00 |
| 3회차 | 442ms | 47ms | 334ms | 0.00 |
| **평균** | **1,743ms** | **53ms** | **1,670ms** | **0.00** |

---

## Step 1: PNG → WebP 무손실 변환

### 변경 내용

- `sharp` 라이브러리를 사용하여 public 폴더의 래스터 이미지 67개를 WebP로 변환
- PNG → WebP: `lossless: true` (무손실, 화질 100% 동일)
- JPG → WebP: `quality: 95` (육안 구분 불가)
- 컴포넌트/상수 파일 9개에서 이미지 경로를 `.webp`로 변경
- favicon, 외부 S3 URL은 변경하지 않음

### 이미지 용량 변화 (핵심 지표)

| 항목 | PNG (Before) | WebP (After) | 절감 |
|------|-------------|-------------|------|
| **전체 래스터 이미지 총 용량** | **15.00MB** | **9.59MB** | **-36.1%** |
| Main_Graphic | 1,982KB | 1,175KB | -40.7% |
| Special_Lecture_by_Expert_1 | 1,320KB | 834KB | -36.8% |
| Background | 483KB | 316KB | -34.6% |
| 31st_External_PR_Team | 570KB | 348KB | -39.0% |
| 31st_General_Management_Team | 496KB | 290KB | -41.5% |
| Manage1~5 (평균) | 590KB | 384KB | -34.9% |
| company 로고 (평균) | 7KB | 4KB | -40.3% |

### 로컬 Lab 측정 결과 (3회) — localhost:3000 (WebP)

| 측정 | LCP | TTFB | Render Delay | CLS |
|------|-----|------|--------------|-----|
| 1회차 | 2,385ms | 50ms | 2,335ms | 0.00 |
| 2회차 | 2,388ms | 50ms | 2,338ms | 0.00 |
| 3회차 | 2,385ms | 49ms | 2,336ms | 0.00 |
| **평균** | **2,386ms** | **50ms** | **2,336ms** | **0.00** |

### 로컬 PNG vs WebP 비교

| 지표 | PNG 평균 | WebP 평균 | 변화 | 비고 |
|------|---------|----------|------|------|
| LCP | 1,743ms | 2,386ms | +643ms | dev 모드 변동 (3회차 이상값 영향) |
| TTFB | 53ms | 50ms | -3ms | 거의 동일 |
| Render Delay | 1,670ms | 2,336ms | +666ms | dev 모드 런타임 컴파일 변동 |
| CLS | 0.00 | 0.00 | 0 | 변화 없음 |
| **이미지 총 용량** | **15.00MB** | **9.59MB** | **-36.1%** | **핵심 개선 지표** |

> **분석**: 로컬 dev 환경에서는 Next.js 런타임 컴파일 Render Delay(~2,335ms)가 LCP의 대부분을 차지하여 이미지 포맷 변경의 LCP 효과가 마스킹됨. PNG 3회차(442ms)는 캐시 워밍 이후의 이상값으로 판단됨. **이미지 용량 36.1% 절감이 이번 Step의 핵심 성과이며, 프로덕션 배포 후 실제 LCP 개선 효과를 확인해야 정확한 비교 가능.**

### 네트워크 요청 변화

| 항목 | PNG | WebP | 비고 |
|------|-----|------|------|
| `_next/image` 요청 형태 | `Background.png&w=3840` | `Background.webp&w=3840` | 경로만 변경 |
| 이미지 요청 수 | 15개 | 15개 | 동일 |
| Vercel 최적화 사용 | 3회/페이지뷰 | 3회/페이지뷰 | 동일 (원본 크기 감소로 처리 부담 경감) |

---

## 최적화 계획 (전략 B: Vercel 최적화 유지 + 소모량 절감)

| 순서 | 최적화 항목 | 상태 |
|------|------------|------|
| Step 1 | PNG → WebP 빌드타임 변환 (정적 이미지) | **완료** (용량 -36.1%) |
| Step 2 | 모든 fill Image에 `sizes` 속성 추가 | 대기 |
| Step 3 | `placeholder="blur"` 적용 | 대기 |
| Step 4 | SVGO로 SVG 최적화 | 대기 |
| Step 5 | S3 외부 이미지 `unoptimized` 정리 | 대기 |

---

## 변경 이력

| 날짜 | 단계 | 변경 내용 |
|------|------|----------|
| 2026-04-11 | Step 0 | 베이스라인 측정 완료 (프로덕션 3회 평균 LCP 356ms, 로컬 3회 평균 LCP 1,743ms) |
| 2026-04-11 | Step 1 | PNG → WebP 무손실 변환 완료 (67개 파일, 용량 15.00MB → 9.59MB, -36.1%) |
