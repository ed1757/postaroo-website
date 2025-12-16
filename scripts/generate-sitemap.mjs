import fs from 'node:fs/promises';
import path from 'node:path';
import { CANONICAL_ROOT, routeMeta } from '../src/routes-data.js';

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routeMeta.map((meta) => {
    const loc = `${CANONICAL_ROOT}${meta.path === '/' ? '' : meta.path}`;
    return (
      `  <url>\n` +
      `    <loc>${loc}</loc>\n` +
      `    <changefreq>${meta.changefreq}</changefreq>\n` +
      `    <priority>${meta.priority}</priority>\n` +
      `  </url>`
    );
  }),
  '</urlset>',
];

const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');

await fs.mkdir(path.dirname(sitemapPath), { recursive: true });
await fs.writeFile(sitemapPath, lines.join('\n') + '\n');
