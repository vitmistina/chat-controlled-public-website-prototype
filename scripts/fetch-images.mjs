import { mkdir, stat, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = resolve(root, 'public', 'images');

const assets = [
  {
    file: 'showroom-interior.jpg',
    url: 'https://images.pexels.com/photos/7587883/pexels-photo-7587883.jpeg?auto=compress&cs=tinysrgb&w=1800',
    source: 'https://www.pexels.com/photo/wooden-floor-and-white-walls-inside-a-house-7587883/'
  },
  {
    file: 'doors-interior.jpg',
    url: 'https://images.pexels.com/photos/7302934/pexels-photo-7302934.jpeg?auto=compress&cs=tinysrgb&w=1600',
    source: 'https://www.pexels.com/photo/a-person-opening-a-door-7302934/'
  },
  {
    file: 'wood-floor.jpg',
    url: 'https://images.pexels.com/photos/11126101/pexels-photo-11126101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    source: 'https://www.pexels.com/photo/photograph-of-a-wooden-floor-11126101/'
  },
  {
    file: 'windows-and-floor.jpg',
    url: 'https://images.pexels.com/photos/9826456/pexels-photo-9826456.jpeg?auto=compress&cs=tinysrgb&w=1800',
    source: 'https://www.pexels.com/photo/empty-room-with-wooden-flooring-9826456/'
  }
];

await mkdir(outputDir, { recursive: true });

for (const asset of assets) {
  const destination = resolve(outputDir, asset.file);

  try {
    const existing = await stat(destination);
    if (existing.size > 20_000) {
      console.log(`Using cached image: ${asset.file}`);
      continue;
    }
  } catch {
    // The image is not present yet. Download it below.
  }

  console.log(`Downloading ${asset.file} from ${asset.source}`);
  const response = await fetch(asset.url, {
    headers: {
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'User-Agent': 'Mozilla/5.0 (compatible; MKDvereWebsiteBuild/1.0; +https://mkdvere.cz)'
    },
    redirect: 'follow'
  });

  if (!response.ok) {
    throw new Error(`Unable to download ${asset.file}: HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.startsWith('image/')) {
    throw new Error(`Unexpected content type for ${asset.file}: ${contentType || 'missing'}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 20_000) {
    throw new Error(`Downloaded image ${asset.file} is suspiciously small (${bytes.length} bytes)`);
  }

  await writeFile(destination, bytes);
  console.log(`Saved ${asset.file} (${Math.round(bytes.length / 1024)} kB)`);
}
