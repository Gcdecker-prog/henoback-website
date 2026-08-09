/**
 * Strip black plate from HenoOlogo.png → transparent PNG + crisp favicon sizes.
 * Run: npm run process:heno-mark
 */
import sharp from 'sharp';
import { join } from 'node:path';
import { writeFileSync } from 'node:fs';

const root = join(import.meta.dirname, '..');
const source = join(root, 'public/images/brand/HenoOlogo.png');
const transparentOut = join(root, 'public/images/brand/heno-o-logo.png');
const iconApp = join(root, 'app/icon.png');
const appleIcon = join(root, 'app/apple-icon.png');
const faviconApp = join(root, 'app/favicon.ico');
const faviconPublic = join(root, 'public/favicon.ico');
const icon48 = join(root, 'public/images/brand/heno-o-logo-48.png');
const apple180 = join(root, 'public/images/brand/heno-o-logo-180.png');

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function toTransparentPng(input, output) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

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

/** Center the mark on a transparent square with breathing room for small favicon sizes. */
async function resizeIcon(input, size, { padRatio = 0.1, sharpen = true } = {}) {
  const inner = Math.round(size * (1 - padRatio * 2));
  let pipeline = sharp(input)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .extend({
      top: Math.floor((size - inner) / 2),
      bottom: Math.ceil((size - inner) / 2),
      left: Math.floor((size - inner) / 2),
      right: Math.ceil((size - inner) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });

  if (sharpen && size <= 64) {
    pipeline = pipeline.sharpen({ sigma: 0.55, m1: 0.45, m2: 0.2 });
  }

  return pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer();
}

/** Minimal ICO writer embedding PNG frames (supported by modern browsers). */
function pngBuffersToIco(frames) {
  const count = frames.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const blobs = [];

  frames.forEach(({ size, png }, index) => {
    const entry = entries.subarray(index * 16, index * 16 + 16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += png.length;
    blobs.push(png);
  });

  return Buffer.concat([header, entries, ...blobs]);
}

const transparent = await toTransparentPng(source, transparentOut);

const png16 = await resizeIcon(transparent, 16, { padRatio: 0.08 });
const png32 = await resizeIcon(transparent, 32, { padRatio: 0.1 });
const png48 = await resizeIcon(transparent, 48, { padRatio: 0.1 });
const png180 = await resizeIcon(transparent, 180, { padRatio: 0.08, sharpen: false });
const png512 = await resizeIcon(transparent, 512, { padRatio: 0.08, sharpen: false });

writeFileSync(iconApp, png512);
writeFileSync(appleIcon, png180);
writeFileSync(icon48, png48);
writeFileSync(apple180, png180);

const ico = pngBuffersToIco([
  { size: 16, png: png16 },
  { size: 32, png: png32 },
  { size: 48, png: png48 },
]);
writeFileSync(faviconApp, ico);
writeFileSync(faviconPublic, ico);

const trimmed = await sharp(transparent).metadata();
console.log('Transparent mark:', trimmed.width, 'x', trimmed.height);
console.log('Wrote favicon.ico (16/32/48), app/icon.png (512), apple-icon, brand sizes');
