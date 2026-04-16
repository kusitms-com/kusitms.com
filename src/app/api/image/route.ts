import fs from "node:fs/promises";
import path from "node:path";
import { type NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

const ALLOWED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"]);
const MAX_WIDTH = 3840;
const MAX_QUALITY = 100;

const cache = new Map<string, { buffer: Buffer; timestamp: number }>();
const CACHE_TTL = 60 * 60 * 1000; // 1시간

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const src = searchParams.get("src");
  const rawWidth = Number(searchParams.get("w"));
  const rawQuality = Number(searchParams.get("q"));

  if (!src) {
    return new NextResponse("Missing src parameter", { status: 400 });
  }

  const width = Number.isNaN(rawWidth) ? 800 : Math.min(Math.max(rawWidth, 16), MAX_WIDTH);
  const quality = Number.isNaN(rawQuality) ? 75 : Math.min(Math.max(rawQuality, 1), MAX_QUALITY);

  const isRemote = src.startsWith("http://") || src.startsWith("https://");

  // 로컬 이미지 경로 검증
  let filePath = "";
  if (!isRemote) {
    const safeSrc = path.normalize(src).replace(/^(\.\.[/\\])+/, "");
    filePath = path.join(process.cwd(), "public", safeSrc);

    if (!filePath.startsWith(path.join(process.cwd(), "public"))) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const ext = path.extname(filePath).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return new NextResponse("Unsupported image format", { status: 400 });
    }
  }

  // 캐시 확인
  const cacheKey = `${src}_${width}_${quality}`;
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return new NextResponse(cached.buffer, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  try {
    // 이미지 소스 읽기
    let file: Buffer;
    if (isRemote) {
      const res = await fetch(src);
      if (!res.ok) {
        return new NextResponse("Remote image not found", { status: 404 });
      }
      file = Buffer.from(await res.arrayBuffer());
    } else {
      file = await fs.readFile(filePath);
    }

    // sharp로 리사이즈 + WebP 변환
    const optimized = await sharp(file)
      .resize(width, undefined, { withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();

    // 캐시 저장
    cache.set(cacheKey, { buffer: optimized, timestamp: Date.now() });

    return new NextResponse(optimized, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return new NextResponse("Image not found", { status: 404 });
    }
    return new NextResponse("Image processing failed", { status: 500 });
  }
}
