import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, relative } from "node:path";

const PUBLIC_DIR = "public";
const EXCLUDE_DIRS = ["favicon"];
const EXTENSIONS = [".png", ".jpg", ".jpeg"];
const QUALITY = 80;

async function getImageFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.includes(entry.name)) continue;
      files.push(...(await getImageFiles(fullPath)));
    } else if (EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convert() {
  const files = await getImageFiles(PUBLIC_DIR);
  console.log(`[webp] ${files.length}개 이미지 변환 시작 (quality: ${QUALITY})`);

  let converted = 0;
  let skipped = 0;

  await Promise.all(
    files.map(async (file) => {
      const output = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");

      try {
        const srcStat = await stat(file);
        const outStat = await stat(output).catch(() => null);

        if (outStat && outStat.mtimeMs >= srcStat.mtimeMs) {
          skipped++;
          return;
        }

        await sharp(file).webp({ quality: QUALITY }).toFile(output);
        converted++;
        console.log(`  ✓ ${relative(".", output)}`);
      } catch (err) {
        console.error(`  ✗ ${file}: ${err.message}`);
      }
    })
  );

  console.log(`[webp] 완료: ${converted}개 변환, ${skipped}개 스킵`);
}

convert();
