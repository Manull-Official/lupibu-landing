#!/usr/bin/env node
/**
 * Tells the search engines that take IndexNow (Bing, Yandex and others) which pages to fetch.
 *
 * Why: on 10.11.2026 Bing had no page of lupibu.com at all («site:lupibu.com» gave nothing), and ChatGPT search
 * leans on partner indexes, Bing among them. IndexNow needs no account: the site proves itself with a key file
 * at its root (<key>.txt, the key inside), and one request names the pages.
 *
 * Run: `make indexnow` AFTER the change is live (the engines fetch the key file first).
 * It sends every address of sitemap.xml. A 200 or 202 means «received», not «indexed».
 */
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'lupibu.com';

const keyFile = readdirSync(ROOT).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('no <key>.txt at the site root');
const key = keyFile.replace('.txt', '');
if (readFileSync(join(ROOT, keyFile), 'utf8').trim() !== key) throw new Error('the key file must contain its own name');

const urlList = [...readFileSync(join(ROOT, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('sitemap.xml lists no pages');

const live = await fetch(`https://${HOST}/${keyFile}`);
if (!live.ok || (await live.text()).trim() !== key) {
    throw new Error(`https://${HOST}/${keyFile} is not live yet (${live.status}): publish first`);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
});
console.log(`IndexNow: ${urlList.length} pages sent, answer ${res.status} ${res.statusText}`);
if (!res.ok) process.exitCode = 1;
