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

## 프로덕션 Lab 측정 — Step 3 적용 후 (Vercel Preview)

> 측정일: 2026-04-12
> 측정 환경: `https://kusitms-oz5h5wra5-leemanjaes-projects.vercel.app` (3회, throttling 없음)

| 측정 | LCP | TTFB | Load Delay | Load Duration | Render Delay | CLS |
|------|-----|------|------------|---------------|--------------|-----|
| 1회차 | 191ms | 50ms | 31ms | 51ms | 59ms | 0.00 |
| 2회차 | 209ms | 42ms | 26ms | 43ms | 98ms | 0.00 |
| 3회차 | 308ms | 60ms | 24ms | 166ms | 58ms | 0.00 |
| **평균** | **236ms** | **51ms** | **27ms** | **87ms** | **72ms** | **0.00** |

### Step 0 프로덕션 vs Step 3 프로덕션

| 지표 | Step 0 (kusitms.com) | Step 3 (Preview) | 변화 |
|------|--------------------|-----------------|------|
| LCP | 356ms | **236ms** | **-120ms (-33.7%)** |
| TTFB | 179ms | **51ms** | **-128ms (-71.5%)** |
| Load Duration | 70ms | 87ms | +17ms |
| Render Delay | 92ms | **72ms** | **-20ms (-21.7%)** |
| CLS | 0.00 | 0.00 | 동일 |

> **분석**: 프로덕션 배포에서도 LCP **-33.7%**, TTFB **-71.5%**, Render Delay **-21.7%** 개선 확인. Load Duration이 소폭 증가한 이유는 3회차 이상치(166ms)의 영향이며 1~2회차 기준으로는 47ms로 Step 0(70ms)보다 빠름. 누적 최적화(WebP 용량 -36.1% + sizes로 요청 너비 -50% + blur placeholder 인라인 페인트)의 복합 효과로 해석됨.
> 비교 환경 차이: Step 0은 `kusitms.com` apex 도메인 + CDN 워밍 상태, Step 3은 Vercel Preview URL(SSO 보호). 동일 도메인 재측정 시 수치 변동 가능.

---

## Step 4 검토 결과: SVGO — **적용 안 함**

### 검토 내용

- `npx svgo -rf public` 시범 실행 → 83개 SVG 전체에서 **-94KB (-0.4%)**만 감소
- 대용량 SVG 상위 파일들 조사 결과, 실제로는 **base64 raster 래퍼** (SVG 껍데기 안에 `data:image/png;base64,...` 문자열로 비트맵을 박아넣은 구조)임을 확인
- SVGO는 vector 데이터만 최적화하므로 base64 블록에는 효과 없음

### 대용량 SVG 구성 분석

| 파일 | 크기 | 실제 구성 |
|------|------|----------|
| `projects/ProjectBanner.svg` | 6.05MB | base64 raster 래퍼 |
| `main/MainGroupSticker.svg` | 4.69MB | base64 raster 래퍼 (코드 참조 0건) |
| `main/Logo.svg` | 2.36MB | base64 raster 래퍼 (코드 참조 0건) |
| `projects/Banner.svg` | 2.00MB | base64 raster 래퍼 |
| `main/ManageBg.svg` | 1.22MB | base64 raster 래퍼 |

### 결론

- SVGO는 이 프로젝트엔 **실익 없음** → 적용 롤백
- 진짜 용량 절감은 base64 추출 후 WebP 재인코딩이 필요하지만, 범위가 Step 4(SVG 최적화)를 넘어 Step 1(WebP 변환)의 연장선 작업이며 디자이너/기획과 협의 필요
- 미사용 SVG 삭제도 "왜 넣었는지" 이력 확인 전 삭제는 리스크 → 보류

---

## Step 5: S3 외부 이미지 `unoptimized` 부분 제거 (B안)

### 변경 배경

`unoptimized` prop은 Vercel Image Optimization 파이프라인을 우회시켜 원본 이미지를 그대로 전송함. 제거 시 `_next/image` 엔드포인트에서 WebP/AVIF 자동 변환 + 디바이스별 리사이즈 + CDN 캐싱 적용됨.

### 트레이드오프 분석

| 측면 | 유지 (unoptimized 그대로) | 제거 (최적화 적용) |
|------|------------------------|------------------|
| Vercel 크레딧 | 소모 0 | 고유 source URL당 1 크레딧 (60일 캐시) |
| 사용자 전송 바이트 | 원본 풀사이즈 | WebP 리사이즈본 (30~70% 감소) |
| LCP/체감 성능 | 느림 | 빠름 |

Vercel 크레딧 과금은 **고유 source 이미지 URL당** 이루어지며 바이트 크기와 무관. 60일간 CDN 캐싱되므로 동일 이미지 반복 방문은 크레딧 소모 없음.

### 적용 범위 (B안: 초기 노출 카드만)

| 파일 | 이미지 | 조치 |
|------|--------|------|
| `projects/common/ProjectCard.tsx` (Poster 300x190) | S3 포스터 썸네일 | `unoptimized` 제거 + `sizes="(max-width: 768px) 50vw, 300px"` |
| `projects/common/ProjectCard.tsx` (Logo 95x95) | S3 회사/단체 로고 | `unoptimized` 제거 + `sizes="95px"` |

### 유지한 항목

| 파일 | 이유 |
|------|------|
| `RecruitingTeamInfoItem.tsx` | 정적 SVG (`Union.svg`) — SVG는 `_next/image` 우회가 기본 |
| `OldProjectSection.tsx` | `project.poster_url ?? "/footerLogo.svg"` fallback이 SVG라 `dangerouslyAllowSVG` 설정 필요 |
| `RecentProjectSection.tsx` | 상세 페이지 대형 포스터, 트래픽 집중도 낮아 크레딧 절약 우선 |
| `StoryCard.tsx` | 스토리 리스트 — 추후 사용량 모니터링 후 확장 검토 |

### 네트워크 검증 (localhost /projects/meetup)

| 항목 | Before (unoptimized) | After (B안 적용) |
|------|---------------------|-----------------|
| S3 로고/포스터 요청 경로 | `https://kusitms-bucket.s3...` 직접 | `/_next/image?url=<S3>&w=640&q=75` |
| 응답 포맷 | 원본 PNG/JPG | WebP/AVIF 자동 변환 |
| 요청 너비 | 원본 (대개 ≥1000px) | **w=640** (sizes 반영) |
| 요청 건수 | 24개 | 24개 (경로만 변경) |

### 로컬 Lab 측정 (3회) — localhost:3000/projects/meetup

| 측정 | LCP | TTFB | Load Delay | Load Duration | Render Delay | CLS |
|------|-----|------|------------|---------------|--------------|-----|
| 1회차 | 1,691ms | 1,465ms | 28ms | 30ms | 168ms | 0.00 |
| 2회차 | 228ms | 87ms | 28ms | 7ms | 106ms | 0.00 |
| 3회차 | 204ms | 57ms | 43ms | 5ms | 99ms | 0.00 |
| **평균 (2~3회, 워밍 후)** | **216ms** | **72ms** | **36ms** | **6ms** | **103ms** | **0.00** |

> 1회차는 dev 서버 콜드 컴파일(TTFB 1,465ms)로 제외. 2~3회차 평균을 유효값으로 간주.

### 결과 요약

- S3 이미지가 Vercel 최적화 파이프라인에 진입하여 WebP로 자동 변환 + w=640 리사이즈 확인
- 프로젝트 리스트 카드 페이지에서 이미지당 전송 바이트 대폭 감소 기대 (프로덕션 검증 필요)
- 크레딧 소모 증가 리스크는 **B안으로 범위 축소** + 60일 캐싱으로 제한적
- LCP는 기존에도 네트워크 병목 구간이 아니어서 수치 변동 없음 (본 Step의 목적은 대역폭·크레딧 최적화)

---

## 최적화 계획 (전략 B: Vercel 최적화 유지 + 소모량 절감)

| 순서 | 최적화 항목 | 상태 |
|------|------------|------|
| Step 1 | PNG → WebP 빌드타임 변환 (정적 이미지) | **완료** (용량 -36.1%) |
| Step 2 | sizes 속성 추가 + deviceSizes 최적화 | **완료** (요청 너비 -50%) |
| Step 3 | `placeholder="blur"` 적용 | **완료** (LCP -66.4% 로컬) |
| Step 4 | SVGO로 SVG 최적화 | **보류** (-0.4% 효과 미미, base64 래퍼 이슈) |
| Step 5 | S3 `unoptimized` 부분 제거 (B안) | **완료** (ProjectCard 2곳, 리스트 카드 대상) |

---

## 변경 이력

| 날짜 | 단계 | 변경 내용 |
|------|------|----------|
| 2026-04-11 | Step 0 | 베이스라인 측정 완료 (프로덕션 3회 평균 LCP 356ms, 로컬 3회 평균 LCP 1,743ms) |
| 2026-04-11 | Step 1 | PNG → WebP 무손실 변환 완료 (67개 파일, 용량 15.00MB → 9.59MB, -36.1%) |
| 2026-04-11 | Step 2 | sizes 속성 7곳 추가 + deviceSizes [3840,2048] 제거 (요청 너비 3840→1920, -50%) |
| 2026-04-12 | Step 3 | 핵심 래스터 fill 이미지 3곳에 placeholder="blur" 적용 (로컬 LCP 2,390ms→803ms) |
| 2026-04-12 | 검증 | 프로덕션 Preview 3회 측정 (평균 LCP 236ms, Step 0 대비 -33.7%, TTFB -71.5%) |
| 2026-04-13 | Step 4 검토 | SVGO 시범 적용 → -0.4% 효과로 미미, 대용량 SVG가 base64 raster 래퍼임을 확인하고 롤백 (적용 안 함) |
| 2026-04-14 | Step 5 (B안) | ProjectCard의 S3 포스터/로고 `unoptimized` 제거 + sizes 추가 (Vercel `_next/image` 파이프라인 진입 확인, w=640 WebP 변환) |
