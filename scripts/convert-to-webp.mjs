import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, relative } from "path";

const PUBLIC_DIR = new URL("../public", import.meta.url).pathname;

// 제외 대상
const EXCLUDE = ["favicon"];

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDE.includes(entry.name)) continue;
      files.push(...(await getFiles(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function convert() {
  const files = await getFiles(PUBLIC_DIR);
  console.log(`변환 대상: ${files.length}개 파일\n`);

  let totalOriginal = 0;
  let totalConverted = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
    const relPath = relative(PUBLIC_DIR, file);

    const originalStat = await stat(file);
    const originalSize = originalStat.size;
    totalOriginal += originalSize;

    try {
      if (ext === ".png") {
        // PNG → 무손실 WebP (화질 100% 동일)
        await sharp(file).webp({ lossless: true }).toFile(webpPath);
      } else {
        // JPG → 고품질 WebP (quality 95, 육안 구분 불가)
        await sharp(file).webp({ quality: 95 }).toFile(webpPath);
      }

      const convertedStat = await stat(webpPath);
      const convertedSize = convertedStat.size;
      totalConverted += convertedSize;

      const saving = (((originalSize - convertedSize) / originalSize) * 100).toFixed(1);
      console.log(
        `${relPath} → ${(originalSize / 1024).toFixed(0)}KB → ${(convertedSize / 1024).toFixed(0)}KB (${saving}% 절감)`
      );
    } catch (err) {
      console.error(`실패: ${relPath} - ${err.message}`);
    }
  }

  console.log(`\n=== 결과 ===`);
  console.log(`원본 총 용량: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`WebP 총 용량: ${(totalConverted / 1024 / 1024).toFixed(2)}MB`);
  console.log(
    `총 절감: ${(((totalOriginal - totalConverted) / totalOriginal) * 100).toFixed(1)}%`
  );
}

convert();
