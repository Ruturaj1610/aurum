import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../public/images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Curated high-resolution jewellery photography
const imageMap = [
  {
    name: 'hero-bg.webp',
    url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85',
    fallback: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1920&q=85'
  },
  {
    name: 'collection-gold.webp',
    url: 'https://images.unsplash.com/photo-1611591475152-4735492d6e3f?auto=format&fit=crop&w=1000&q=85',
    fallback: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'collection-diamond.webp',
    url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=85',
    fallback: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'collection-bridal.webp',
    url: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85',
    fallback: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'collection-rings.webp',
    url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85',
    fallback: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'collection-necklaces.webp',
    url: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=85',
    fallback: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'collection-bangles.webp',
    url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
    fallback: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'signature-craft.webp',
    url: 'https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'bridal-feature.webp',
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=85',
    fallback: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'product-heritage-necklace.webp',
    url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'product-solitaire-ring.webp',
    url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'product-bridal-set.webp',
    url: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1611591475152-4735492d6e3f?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'product-gold-bangles.webp',
    url: 'https://images.unsplash.com/photo-1611591475152-4735492d6e3f?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'product-diamond-earrings.webp',
    url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'product-contemporary-ring.webp',
    url: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'showroom.webp',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'story-craft.webp',
    url: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&w=1200&q=85'
  },
];

async function downloadOne(item) {
  const filePath = path.join(targetDir, item.name);
  try {
    console.log(`Downloading ${item.name}...`);
    let res = await fetch(item.url);
    if (!res.ok && item.fallback) {
      console.warn(`Primary failed for ${item.name} (${res.status}), trying fallback...`);
      res = await fetch(item.fallback);
    }
    if (!res.ok) {
      throw new Error(`Failed with status ${res.status}`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved ${item.name} (${(buffer.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Error downloading ${item.name}:`, err.message);
  }
}

async function run() {
  console.log(`Downloading ${imageMap.length} high-res jewellery assets to ${targetDir}...`);
  for (const item of imageMap) {
    await downloadOne(item);
  }
  console.log('All downloads completed!');
}

run();
