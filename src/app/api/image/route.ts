import fs from "node:fs/promises";
import path from "node:path";
import { type NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

const ALLOWED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif"]);
const MAX_WIDTH = 3840;
const MAX_QUALITY = 100;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const src = searchParams.get("src");
  const rawWidth = Number(searchParams.get("w"));
  const rawQuality = Number(searchParams.get("q"));

  // 필수 파라미터 검증
  if (!src) {
    return new NextResponse("Missing src parameter", { status: 400 });
  }

  // width, quality 범위 제한 (NaN이면 기본값)
  const width = Number.isNaN(rawWidth) ? 800 : Math.min(Math.max(rawWidth, 16), MAX_WIDTH);
  const quality = Number.isNaN(rawQuality) ? 75 : Math.min(Math.max(rawQuality, 1), MAX_QUALITY);

  // 경로 조작 방지
  const safeSrc = path.normalize(src).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(process.cwd(), "public", safeSrc);

  // public 디렉토리 외부 접근 차단
  if (!filePath.startsWith(path.join(process.cwd(), "public"))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 허용된 이미지 확장자만 처리
  const ext = path.extname(filePath).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    return new NextResponse("Unsupported image format", { status: 400 });
  }

  try {
    const file = await fs.readFile(filePath);
    // SVG는 변환 없이 그대로 반환
    if (ext === ".svg") {
      return new NextResponse(file, {
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    // sharp로 리사이즈 + WebP 변환
    const optimized = await sharp(file)
      .resize(width, undefined, { withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();

    return new NextResponse(optimized, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Image not found", { status: 404 });
  }
}
