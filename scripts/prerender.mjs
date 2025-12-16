import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { routeMeta } from '../src/routes-data.js';

const PORT = 4173;
const ROUTES = routeMeta.map((meta) => meta.path);
const OUT_DIR = path.resolve(process.cwd(), 'build');
const PREVIEW_TIMEOUT_MS = 30000;
const ROUTE_TIMEOUT_MS = 30000;

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const server = spawn(
      'npx',
      ['vite', 'preview', '--port', String(PORT), '--strictPort'],
      {
        cwd: path.resolve(process.cwd()),
        env: { ...process.env },
        stdio: ['ignore', 'pipe', 'inherit'],
      },
    );

    server.on('error', reject);

    const urlPattern = new RegExp(`http://(localhost|127\\.0\\.0\\.1):${PORT}`);
    const onData = (chunk) => {
      const text = chunk.toString();
      if (urlPattern.test(text)) {
        server.stdout.off('data', onData);
        console.log(`Preview server ready on port ${PORT}`);
        resolve(server);
      }
    };

    server.stdout.setEncoding('utf8');
    server.stdout.on('data', onData);
  });
}

async function fetchRoute(route, browser) {
  const url = `http://127.0.0.1:${PORT}${route}`;
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(ROUTE_TIMEOUT_MS);
  await page.goto(url, { waitUntil: 'networkidle0' });
  const html = await page.content();
  await page.close();
  return html;
}

async function writeRoute(route, html) {
  if (route === '/') {
    await fs.writeFile(path.join(OUT_DIR, 'index.html'), html);
    return;
  }
  const normalized = route.startsWith('/') ? route.slice(1) : route;
  const targetDir = path.join(OUT_DIR, normalized);
  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(path.join(targetDir, 'index.html'), html);
}

async function main() {
  console.log('Starting Vite preview server...');
  const server = await Promise.race([
    startPreviewServer(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Preview server timeout')), PREVIEW_TIMEOUT_MS),
    ),
  ]);
  console.log('Launching headless Chromium...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    for (const route of ROUTES) {
      console.log(`Prerendering ${route}`);
      const html = await fetchRoute(route, browser);
      await writeRoute(route, html);
    }
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
