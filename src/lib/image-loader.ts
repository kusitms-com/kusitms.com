export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // 외부 URL은 그대로 반환
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  return `/api/image?src=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
