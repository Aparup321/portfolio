import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

for (const file of ['index.html', '404.html']) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const ids = [...source.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  check(duplicates.length === 0, `${file}: duplicate IDs: ${[...new Set(duplicates)].join(', ')}`);

  for (const match of source.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
    const reference = match[1];
    if (/^(?:[a-z]+:|#|\/\/)/i.test(reference)) continue;
    const localPath = reference.split('#')[0].split('?')[0];
    if (!localPath) continue;
    const normalizedPath = localPath.replace(/^[/\\]+/, '');
    check(
      fs.existsSync(path.join(root, normalizedPath)),
      `${file}: missing local reference: ${reference}`
    );
  }
}

for (const file of ['js/terminal.js', 'js/enhancements.js', 'js/pwa.js', 'js/site.js', 'service-worker.js']) {
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
  } catch {
    failures.push(`${file}: JavaScript syntax check failed`);
  }
}

const css = fs.readFileSync(path.join(root, 'styles/main.css'), 'utf8');
check((css.match(/{/g) || []).length === (css.match(/}/g) || []).length, 'styles/main.css: unbalanced braces');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
check(!sitemap.includes('#'), 'sitemap.xml: fragment URLs are not allowed');
check(sitemap.includes('<urlset') && sitemap.includes('</urlset>'), 'sitemap.xml: invalid URL set');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Static site validation passed.');
