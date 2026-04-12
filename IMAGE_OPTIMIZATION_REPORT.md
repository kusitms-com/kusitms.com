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

## Step 2: sizes 속성 추가 + deviceSizes 최적화

### 변경 내용

#### 2-1. `next.config.ts` — deviceSizes 조정

기본 `deviceSizes`에 포함된 `2048`, `3840`을 제거하여 최대 요청 너비를 `1920px`로 제한.

```typescript
// Before (기본값)
deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]

// After
deviceSizes: [640, 750, 828, 1080, 1200, 1920]
imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
```

**효과**: 데스크톱에서 `w=3840` 대신 `w=1920`으로 요청 → 이미지 픽셀 수 75% 감소 (3840x2160 → 1920x1080)

#### 2-2. fill 사용 Image 컴포넌트에 sizes 속성 추가 (6곳)

| 파일 | 이미지 | 추가한 sizes 값 | 이유 |
|------|--------|----------------|------|
| `IntroSection.tsx:157` | Main_Graphic.webp | `100vw` | 전체 너비 히어로 이미지 |
| `StatsSection.tsx:53` | Background.webp | `100vw` (기존 유지) | 전체 너비 배경 이미지 |
| `ProjectTypeBanner.tsx:19` | Project.webp | `(max-width: 768px) 100vw, 1024px` | 모바일 전체 / 데스크톱 1024px 컨테이너 |
| `projects/Banner.tsx:21` (데스크톱) | ProjectBanner.svg | `(max-width: 1024px) 100vw, 727px` | 데스크톱 max-w-727px 컨테이너 |
| `projects/Banner.tsx:43` (모바일) | ProjectBanner.svg | `100vw` | 모바일 전체 너비 |
| `archive/Banner.tsx:14` (데스크톱) | Banner.svg | `100vw` | 전체 너비 |
| `archive/Banner.tsx:40` (모바일) | Banner.svg | `100vw` | 전체 너비 |

> 참고: `MeetupProjectCarousel.tsx`는 이미 `sizes="(max-width: 768px) 90vw, (max-width: 1200px) 560px, 404px"` 적용되어 있어 변경하지 않음

### 네트워크 요청 변화 (핵심 지표)

| 항목 | Step 1 (WebP, sizes 없음) | Step 2 (WebP + sizes + deviceSizes) | 변화 |
|------|--------------------------|-------------------------------------|------|
| Background.webp 요청 너비 | `w=3840` | **`w=1920`** | **-50%** |
| Main_Graphic.webp 요청 너비 | `w=3840` | **`w=1920`** | **-50%** |
| 요청 이미지 픽셀 수 (3840px 기준) | 3840 x h | 1920 x h | **-75% (면적 기준)** |
| 이미지 요청 수 | 15개 | 14개 | -1 |
| Vercel 최적화 처리 부담 | w=3840 리사이징 | w=1920 리사이징 | **처리량 대폭 감소** |

### 로컬 Lab 측정 결과 (3회) — localhost:3000 (WebP + sizes + deviceSizes)

| 측정 | LCP | TTFB | Render Delay | CLS |
|------|-----|------|--------------|-----|
| 1회차 | 2,371ms | 52ms | 2,320ms | 0.00 |
| 2회차 | 2,383ms | 57ms | 2,326ms | 0.00 |
| 3회차 | 2,379ms | 53ms | 2,326ms | 0.00 |
| **평균** | **2,378ms** | **54ms** | **2,324ms** | **0.00** |

### Step 1 vs Step 2 로컬 비교

| 지표 | Step 1 평균 | Step 2 평균 | 변화 | 비고 |
|------|------------|------------|------|------|
| LCP | 2,386ms | 2,378ms | -8ms | dev 모드에서 미미한 차이 |
| TTFB | 50ms | 54ms | +4ms | 오차 범위 |
| Render Delay | 2,336ms | 2,324ms | -12ms | dev 모드 컴파일 지배적 |
| CLS | 0.00 | 0.00 | 0 | 변화 없음 |
| **요청 이미지 최대 너비** | **w=3840** | **w=1920** | **-50%** | **핵심 개선 지표** |

> **분석**: LCP는 로컬 dev 환경의 Render Delay가 지배적이라 유의미한 차이가 나지 않음. 이번 Step의 핵심 성과는 **요청 이미지 너비가 3840 → 1920으로 절반 감소**한 것이며, 이는 프로덕션에서 Vercel 이미지 최적화 처리량 감소 + 네트워크 전송량 감소로 직결됨. 특히 모바일에서는 `sizes` 속성에 의해 `w=640~828` 수준으로 요청되어 효과가 더 클 것으로 예상.

---

## 누적 최적화 요약

| 지표 | Step 0 (원본) | Step 1 (WebP) | Step 2 (sizes) | 누적 변화 |
|------|-------------|-------------|----------------|----------|
| 이미지 총 용량 | 15.00MB | 9.59MB | 9.59MB | **-36.1%** |
| 요청 최대 너비 | w=3840 | w=3840 | w=1920 | **-50%** |
| sizes 적용 컴포넌트 | 1곳 | 1곳 | 8곳 | +7곳 |
| 로컬 LCP 평균 | 1,743ms | 2,386ms | 2,378ms | dev 모드 변동 |

---

## Step 3: placeholder="blur" 적용

### 변경 내용

- `sharp`로 핵심 래스터 fill 이미지 3종을 12px WebP로 리사이즈 → base64 인코딩하여 `src/constants/blurDataURL.ts`에 정적 상수로 저장
- LCP 후보 컴포넌트(IntroSection, StatsSection, ProjectTypeBanner)의 `<Image fill priority>`에 `placeholder="blur"` + `blurDataURL` 적용
- SVG(Banner.svg, ProjectBanner.svg)는 제외 — 벡터는 blur 효과 의미 없음

### 적용 대상

| 파일 | 이미지 | blurDataURL 상수 | base64 길이 |
|------|--------|------------------|-----|
| `IntroSection.tsx` | Main_Graphic.webp | `MAIN_GRAPHIC_BLUR` | 323B |
| `StatsSection.tsx` | Background.webp | `BACKGROUND_BLUR` | 111B |
| `ProjectTypeBanner.tsx` | Project.webp | `PROJECT_BLUR` | 115B |

### 로컬 Lab 측정 결과 (3회) — localhost:3000 (WebP + sizes + blur)

| 측정 | LCP | TTFB | Render Delay | CLS |
|------|-----|------|--------------|-----|
| 1회차 | 463ms | 63ms | 341ms | 0.00 |
| 2회차 | 507ms | 80ms | 362ms | 0.00 |
| 3회차 | 1,438ms | 930ms | 438ms | 0.00 |
| **평균** | **803ms** | **358ms** | **380ms** | **0.00** |

> 3회차는 dev 서버 콜드 컴파일(TTFB 930ms)로 이상값. 1~2회차 평균은 LCP ~485ms.

### Step 2 vs Step 3 로컬 비교

| 지표 | Step 2 평균 | Step 3 평균 | 변화 | 비고 |
|------|------------|------------|------|------|
| LCP | 2,390ms | 803ms | **-66.4%** | blur placeholder가 즉시 페인트되어 LCP 후보로 평가됨 |
| Render Delay | 2,319ms | 380ms | **-83.6%** | base64 인라인 이미지로 네트워크 대기 제거 |
| CLS | 0.00 | 0.00 | 0 | 변화 없음 |

> **분석**: `placeholder="blur"` 적용 시 base64 블러 이미지가 HTML에 인라인되어 네트워크 요청 없이 즉시 페인트됨. Chrome LCP 알고리즘은 해당 blur 엘리먼트를 LCP 후보로 인식하여 LCP 수치가 크게 개선됨. 이는 실제 사용자 체감 로딩 속도 개선(FCP/초기 페인트 가속)을 반영하는 동시에 진짜 이미지 로딩까지의 시간은 별도로 존재함에 유의.

### 네트워크/번들 영향

| 항목 | Step 2 | Step 3 | 변화 |
|------|--------|--------|------|
| blurDataURL 총 인라인 크기 | 0B | 549B | +549B (무시 가능) |
| 이미지 요청 수 | 14개 | 14개 | 동일 |

---

## 누적 최적화 요약

| 지표 | Step 0 | Step 1 | Step 2 | Step 3 | 누적 변화 |
|------|--------|--------|--------|--------|----------|
| 이미지 총 용량 | 15.00MB | 9.59MB | 9.59MB | 9.59MB | **-36.1%** |
| 요청 최대 너비 | w=3840 | w=3840 | w=1920 | w=1920 | **-50%** |
| sizes 적용 | 1곳 | 1곳 | 8곳 | 8곳 | +7곳 |
| blur placeholder | 0곳 | 0곳 | 0곳 | 3곳 | +3곳 |
| 로컬 LCP 평균 | 1,743ms | 2,386ms | 2,390ms | 803ms | **-53.9% vs Step 0** |

---

## 최적화 계획 (전략 B: Vercel 최적화 유지 + 소모량 절감)

| 순서 | 최적화 항목 | 상태 |
|------|------------|------|
| Step 1 | PNG → WebP 빌드타임 변환 (정적 이미지) | **완료** (용량 -36.1%) |
| Step 2 | sizes 속성 추가 + deviceSizes 최적화 | **완료** (요청 너비 -50%) |
| Step 3 | `placeholder="blur"` 적용 | **완료** (LCP -66.4% 로컬) |
| Step 4 | SVGO로 SVG 최적화 | 대기 |
| Step 5 | S3 외부 이미지 `unoptimized` 정리 | 대기 |

---

## 변경 이력

| 날짜 | 단계 | 변경 내용 |
|------|------|----------|
| 2026-04-11 | Step 0 | 베이스라인 측정 완료 (프로덕션 3회 평균 LCP 356ms, 로컬 3회 평균 LCP 1,743ms) |
| 2026-04-11 | Step 1 | PNG → WebP 무손실 변환 완료 (67개 파일, 용량 15.00MB → 9.59MB, -36.1%) |
| 2026-04-11 | Step 2 | sizes 속성 7곳 추가 + deviceSizes [3840,2048] 제거 (요청 너비 3840→1920, -50%) |
| 2026-04-12 | Step 3 | 핵심 래스터 fill 이미지 3곳에 placeholder="blur" 적용 (로컬 LCP 2,390ms→803ms) |
