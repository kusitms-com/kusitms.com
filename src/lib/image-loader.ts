export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // SVG는 변환 불필요 — 원본 경로 그대로 반환
  if (src.endsWith(".svg")) {
    return src;
  }

  // 로컬 + 원격 이미지 모두 API를 경유하여 최적화
  return `/api/image?src=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
