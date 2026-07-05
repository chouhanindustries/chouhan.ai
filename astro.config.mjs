// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chouhan.ai',
  // Emit products.astro -> /products.html (not /products/) so existing URLs keep working.
  build: {
    format: 'file',
  },
  // Keep readable HTML output, matching the hand-written originals.
  compressHTML: false,
});
