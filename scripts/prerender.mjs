#!/usr/bin/env node
/**
 * Prerender static locale + help pages.
 *
 * Why: AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and, less reliably,
 * Bingbot do not execute JavaScript, and Google refuses query-param locales
 * whose canonical points at the root. So:
 *   - /en/index.html, /kk/index.html — full static copies of the landing,
 *     translated at build time from i18n.js, each self-canonical;
 *   - /help/{en,ru,kk}/<slug>.html + index.html — every Help Center article
 *     rendered to plain HTML from help-content.js;
 *   - sitemap.xml — regenerated to list exactly those pages.
 *
 * Run: `make prerender` (or `node scripts/prerender.mjs`) from the repo root,
 * then commit the generated files. help.html stays as the interactive app for
 * in-app links; the static pages are the indexable content layer.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://lupibu.com';
const TODAY = new Date().toISOString().slice(0, 10);
const LANGS = ['ru', 'en', 'kk'];
const LANG_LABEL = { en: 'EN', ru: 'RU', kk: 'KZ' };

const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const write = (p, s) => {
    mkdirSync(dirname(join(ROOT, p)), { recursive: true });
    writeFileSync(join(ROOT, p), s);
    console.log('wrote', p);
};

/* ---- load the site's own data files ---- */
const translations = new Function(
    'window',
    read('i18n.js') + '; return translations;'
)({ LUPIBU_DEFAULT_LANG: 'ru' });

const help = new Function(
    read('help-content.js') +
        '; return { helpCategories, helpPopularQuestions, helpArticles };'
)();

/* ============================================================
   1. Localized landing copies: /en/, /kk/
   ============================================================ */
const HREFLANG_BLOCK = `    <link rel="alternate" hreflang="ru" href="${SITE}/">
    <link rel="alternate" hreflang="en" href="${SITE}/en/">
    <link rel="alternate" hreflang="kk" href="${SITE}/kk/">
    <link rel="alternate" hreflang="x-default" href="${SITE}/en/">`;

function localizeLanding(lang) {
    const t = translations[lang];
    let s = read('index.html');

    // Translate every data-i18n element's text content.
    s = s.replace(
        /(data-i18n="([\w.]+)"[^>]*>)[^<]*(<)/g,
        (m, open, key, close) => (t[key] != null ? open + t[key] + close : m)
    );

    s = s.replace('<html lang="ru">', `<html lang="${lang}">`);
    s = s.replace(/<title>[^<]*<\/title>/, `<title>${t['meta.title']}</title>`);
    s = s.replace(
        /(<meta name="description"\s*\n?\s*content=")[^"]*(")/,
        `$1${t['meta.description']}$2`
    );
    s = s.replace(/(property="og:title" content=")[^"]*(")/, `$1${t['hero.title']}$2`);
    s = s.replace(/(property="og:description" content=")[^"]*(")/, `$1${t['hero.subtitle']}$2`);
    s = s.replace(/(name="twitter:title" content=")[^"]*(")/, `$1${t['hero.title']}$2`);
    s = s.replace(/(name="twitter:description" content=")[^"]*(")/, `$1${t['hero.subtitle']}$2`);
    s = s.replace(/(property="og:url" content=")[^"]*(")/, `$1${SITE}/${lang}/$2`);
    s = s.replace(
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${SITE}/${lang}/">`
    );
    s = s.replace(
        /<link rel="alternate" hreflang="ru"[^>]*>\n.*hreflang="en"[^>]*>\n.*hreflang="kk"[^>]*>\n.*hreflang="x-default"[^>]*>/,
        HREFLANG_BLOCK.trim()
    );

    // Per-language screenshot + preload (kk falls back to ru capture).
    const shot = lang === 'en' ? 'en_home' : 'ru_home';
    s = s.replaceAll('screenshots/ru_home.webp', `screenshots/${shot}.webp`);

    // Static language switcher state.
    s = s.replace('<span class="lang-current">RU</span>', `<span class="lang-current">${LANG_LABEL[lang]}</span>`);
    s = s.replace(' class="lang-option active" data-lang="ru"', ' class="lang-option" data-lang="ru"');
    s = s.replace(` class="lang-option" data-lang="${lang}"`, ` class="lang-option active" data-lang="${lang}"`);

    s = s.replace("window.LUPIBU_DEFAULT_LANG = 'ru';", `window.LUPIBU_DEFAULT_LANG = '${lang}';`);

    // The copy lives one directory deeper — root every relative URL.
    s = s
        .replaceAll('href="styles.css', 'href="/styles.css')
        .replaceAll('src="assets/', 'src="/assets/')
        .replaceAll('href="assets/', 'href="/assets/')
        .replaceAll('href="screenshots/', 'href="/screenshots/')
        .replaceAll('src="screenshots/', 'src="/screenshots/')
        .replaceAll('href="help.html', 'href="/help.html')
        .replaceAll('href="legal.html', 'href="/legal.html')
        .replaceAll('src="i18n.js', 'src="/i18n.js')
        .replaceAll('src="main.js', 'src="/main.js');

    write(`${lang}/index.html`, s);
}

/* ============================================================
   2. Static Help Center: /help/<lang>/<slug>.html
   ============================================================ */
const UI = {
    en: { help: 'Help Center', related: 'Related articles', tldr: 'In short', home: 'lupibu.com', min: 'min read', cta: 'Lupibu on the App Store' },
    ru: { help: 'Справочный центр', related: 'Связанные статьи', tldr: 'Кратко', home: 'lupibu.com', min: 'мин чтения', cta: 'Lupibu в App Store' },
    kk: { help: 'Анықтама орталығы', related: 'Қатысты мақалалар', tldr: 'Қысқаша', home: 'lupibu.com', min: 'мин оқу', cta: 'App Store-дағы Lupibu' },
};
const APP_URL = 'https://apps.apple.com/app/id6758586869';

const esc = (x) => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (x) =>
    esc(x)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

function mdToHtml(body) {
    const out = [];
    let list = null;
    for (const raw of body.split('\n')) {
        const line = raw.trim();
        if (list && !line.startsWith('- ')) { out.push('</ul>'); list = null; }
        if (!line) continue;
        if (line.startsWith('## ')) out.push(`<h2>${inline(line.slice(3))}</h2>`);
        else if (line.startsWith('- ')) {
            if (!list) { out.push('<ul>'); list = true; }
            out.push(`<li>${inline(line.slice(2))}</li>`);
        } else out.push(`<p>${inline(line)}</p>`);
    }
    if (list) out.push('</ul>');
    return out.join('\n');
}

const HELP_CSS = `
    body { max-width: 720px; margin: 0 auto; padding: 24px 16px 64px; }
    .crumbs { font-size: .875rem; margin-bottom: 24px; }
    .crumbs a { color: #D95D39; text-decoration: none; }
    article h1 { letter-spacing: -0.02em; line-height: 1.15; margin: 0 0 8px; }
    .meta { color: #78716C; font-size: .875rem; margin-bottom: 24px; }
    .tldr { background: #FFF4EA; border-radius: 12px; padding: 14px 18px; margin-bottom: 24px; }
    article h2 { margin-top: 28px; letter-spacing: -0.01em; }
    article p, article li { line-height: 1.6; color: #44403C; }
    .related { margin-top: 40px; border-top: 1px solid #E7E5E4; padding-top: 20px; }
    .related a { display: block; color: #D95D39; text-decoration: none; margin: 6px 0; }
    .appcta { display: inline-block; margin-top: 32px; color: #D95D39; font-weight: 600; text-decoration: none; }`;

function helpShell(lang, { title, desc, canonicalPath, alternates, bodyHtml }) {
    const alt = LANGS.map(
        (l) => `    <link rel="alternate" hreflang="${l}" href="${SITE}${alternates(l)}">`
    ).join('\n');
    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}">
    <link rel="canonical" href="${SITE}${canonicalPath}">
${alt}
    <link rel="alternate" hreflang="x-default" href="${SITE}${alternates('en')}">
    <link rel="icon" type="image/png" href="/assets/favicon.png">
    <meta name="theme-color" content="#FA7C50">
    <style>
    body { font-family: -apple-system, 'Inter', sans-serif; background: #FDF8F1; color: #1C1917; }
${HELP_CSS}
    </style>
</head>
<body>
${bodyHtml}
</body>
</html>
`;
}

function renderArticle(lang, art) {
    const u = UI[lang];
    const related = (art.related || [])
        .map((slug) => help.helpArticles[`${slug}_${lang}`])
        .filter(Boolean)
        .map((r) => `<a href="/help/${lang}/${r.slug}.html">${esc(r.title)}</a>`)
        .join('\n');
    const body = `
    <nav class="crumbs"><a href="/${lang === 'ru' ? '' : lang + '/'}">${u.home}</a> › <a href="/help/${lang}/">${u.help}</a></nav>
    <article>
        <h1>${esc(art.title)}</h1>
        <p class="meta">${art.readMinutes} ${u.min}</p>
        <p class="tldr"><strong>${u.tldr}:</strong> ${inline(art.tldr)}</p>
${mdToHtml(art.body)}
        ${related ? `<div class="related"><strong>${u.related}</strong>\n${related}</div>` : ''}
        <a class="appcta" href="${APP_URL}">${u.cta} →</a>
    </article>`;
    write(
        `help/${lang}/${art.slug}.html`,
        helpShell(lang, {
            title: `${art.title} — Lupibu`,
            desc: art.tldr,
            canonicalPath: `/help/${lang}/${art.slug}.html`,
            alternates: (l) => `/help/${l}/${art.slug}.html`,
            bodyHtml: body,
        })
    );
}

function renderHelpIndex(lang, articles) {
    const u = UI[lang];
    const cats = help.helpCategories[lang]
        .map((c) => {
            const links = articles
                .filter((a) => a.category === c.slug)
                .map((a) => `<a href="/help/${lang}/${a.slug}.html">${esc(a.title)}</a>`)
                .join('\n');
            return links ? `<h2>${esc(c.title)}</h2>\n<div class="related" style="border:none;margin-top:0;padding-top:0">${links}</div>` : '';
        })
        .join('\n');
    write(
        `help/${lang}/index.html`,
        helpShell(lang, {
            title: `${u.help} — Lupibu`,
            desc: help.helpArticles[`first-steps_${lang}`]?.tldr || u.help,
            canonicalPath: `/help/${lang}/`,
            alternates: (l) => `/help/${l}/`,
            bodyHtml: `<nav class="crumbs"><a href="/${lang === 'ru' ? '' : lang + '/'}">${u.home}</a></nav>\n<h1>${u.help}</h1>\n${cats}`,
        })
    );
}

/* ============================================================
   3. sitemap.xml
   ============================================================ */
function sitemap(urls) {
    const entries = urls
        .map(({ loc, alternates }) => {
            const alt = alternates
                ? LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${alternates(l)}"/>`).join('\n') +
                  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${alternates('en')}"/>`
                : '';
            return `  <url>\n    <loc>${SITE}${loc}</loc>\n${alt ? alt + '\n' : ''}    <lastmod>${TODAY}</lastmod>\n  </url>`;
        })
        .join('\n');
    write(
        'sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`
    );
}

/* ---- run ---- */
localizeLanding('en');
localizeLanding('kk');

const bySlug = {};
for (const key of Object.keys(help.helpArticles)) {
    const art = help.helpArticles[key];
    const lang = key.slice(key.lastIndexOf('_') + 1);
    if (!LANGS.includes(lang)) continue;
    renderArticle(lang, art);
    (bySlug[lang] ||= []).push(art);
}
for (const lang of LANGS) renderHelpIndex(lang, bySlug[lang]);

const landingAlt = (l) => (l === 'ru' ? '/' : `/${l}/`);
sitemap([
    { loc: '/', alternates: landingAlt },
    { loc: '/en/', alternates: landingAlt },
    { loc: '/kk/', alternates: landingAlt },
    ...LANGS.map((l) => ({ loc: `/help/${l}/`, alternates: (x) => `/help/${x}/` })),
    ...LANGS.flatMap((l) =>
        (bySlug[l] || []).map((a) => ({
            loc: `/help/${l}/${a.slug}.html`,
            alternates: (x) => `/help/${x}/${a.slug}.html`,
        }))
    ),
    { loc: '/pay.html' },
    { loc: '/legal.html' },
]);

console.log('done:', 2 + LANGS.length + Object.keys(help.helpArticles).length, 'pages + sitemap');
