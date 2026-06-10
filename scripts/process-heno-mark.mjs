/**
 * Strip black plate from HenoOlogo.png → transparent PNG + crisp favicon sizes.
 * Run: node scripts/process-heno-mark.mjs
 */
import sharp from 'sharp';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const source = join(root, 'public/images/brand/HenoOlogo.png');
const transparentOut = join(root, 'public/images/brand/heno-o-logo.png');
const icon32 = join(root, 'app/icon.png');
const icon48 = join(root, 'public/images/brand/heno-o-logo-48.png');
const apple180 = join(root, 'public/images/brand/heno-o-logo-180.png');

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function toTransparentPng(input, output) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const fadeStart = 42;
  const fadeEnd = 95;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = luminance(r, g, b);

    if (lum <= fadeStart) {
      data[i + 3] = 0;
      continue;
    }

    if (lum < fadeEnd) {
      const t = (lum - fadeStart) / (fadeEnd - fadeStart);
      data[i + 3] = Math.round(data[i + 3] * t);
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);

  return output;
}

async function resizeIcon(input, output, size) {
  await sharp(input)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(output);
}

const transparent = await toTransparentPng(source, transparentOut);
await resizeIcon(transparent, icon32, 32);
await resizeIcon(transparent, icon48, 48);
await resizeIcon(transparent, apple180, 180);

const trimmed = await sharp(transparent).metadata();
console.log('Transparent mark:', trimmed.width, 'x', trimmed.height);
console.log('Wrote:', transparentOut, icon32, icon48, apple180);
