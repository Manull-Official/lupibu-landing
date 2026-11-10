#!/usr/bin/env node
/**
 * Prerender static locale + help pages.
 *
 * Why: AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and, less reliably,
 * Bingbot do not execute JavaScript, and Google refuses query-param locales
 * whose canonical points at the root. So:
 *   - /en/index.html, /kk/index.html — full static copies of the landing,
 *     translated at build time from i18n.js, each self-canonical;
 *   - /en/tools/index.html, /kk/tools/index.html — the same for the calculator page /tools/;
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

/* What every translated copy of a Russian page needs: its texts, its language, the state of the switcher. */
function inLanguage(s, lang) {
    const t = translations[lang];

    // Translate every data-i18n element's text content.
    s = s.replace(
        /(data-i18n="([\w.]+)"[^>]*>)[^<]*(<)/g,
        (m, open, key, close) => (t[key] != null ? open + t[key] + close : m)
    );

    // Translate the alt of every image that carries data-i18n-alt (alt comes first in the tag).
    s = s.replace(
        /(alt=")[^"]*("[^>]*data-i18n-alt="([\w.]+)")/g,
        (m, open, rest, key) => (t[key] != null ? open + t[key] + rest : m)
    );

    s = s.replace('<html lang="ru"', `<html lang="${lang}"`);

    // The share card carries the hero line, so each language has its own picture.
    s = s.replaceAll('assets/og-card.png', `assets/og-card-${lang}.png`);

    // Static language switcher state.
    s = s.replace('<span class="lang-current">RU</span>', `<span class="lang-current">${LANG_LABEL[lang]}</span>`);
    s = s.replace(' class="lang-option active" data-lang="ru"', ' class="lang-option" data-lang="ru"');
    s = s.replace(` class="lang-option" data-lang="${lang}"`, ` class="lang-option active" data-lang="${lang}"`);

    s = s.replace("window.LUPIBU_DEFAULT_LANG = 'ru';", `window.LUPIBU_DEFAULT_LANG = '${lang}';`);

    // Links to the calculator (top bar, footer) lead to the copy in the same language.
    s = s.replaceAll('<a href="/tools/" class="', `<a href="/${lang}/tools/" class="`);
    return s;
}

function localizeLanding(lang) {
    const t = translations[lang];
    let s = inLanguage(read('index.html'), lang);

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
    // The alt of the share card is the page title.
    s = s.replace(/(property="og:image:alt" content=")[^"]*(")/, `$1${t['meta.title']}$2`);
    s = s.replace(
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${SITE}/${lang}/">`
    );
    s = s.replace(
        /<link rel="alternate" hreflang="ru"[^>]*>\n.*hreflang="en"[^>]*>\n.*hreflang="kk"[^>]*>\n.*hreflang="x-default"[^>]*>/,
        HREFLANG_BLOCK.trim()
    );

    // Apple's badge per language: no Kazakh artwork exists, so only English differs from the Russian source.
    if (lang === 'en') s = s.replaceAll('assets/appstore-badge-ru.svg', 'assets/appstore-badge.svg');

    // The app's structured data speaks the page's language: the same description as the meta tag, this page's own address.
    s = s.replace(
        /("applicationSubCategory": "Parenting",\s*"description": ")[^"]*(")/,
        (m, open, close) => open + t['meta.description'].replace(/"/g, '\\"') + close
    );
    s = s.replace(/("url": "https:\/\/lupibu\.com\/)(",\s*"installUrl")/, `$1${lang}/$2`);

    // The reviews stay in the language they were written in (Russian on the Kazakh page): a screen reader is told which.
    if (t['rev.lang'] && t['rev.lang'] !== lang) s = s.replace('<div class="quotes" id="quotes">', `<div class="quotes" id="quotes" lang="${t['rev.lang']}">`);

    // Per-language app capture.
    s = s.replaceAll('screenshots/ru_home.webp', `screenshots/${lang}_home.webp`);

    // The copy lives one directory deeper — root every relative URL.
    s = s
        .replaceAll('href="home.css', 'href="/home.css')
        .replaceAll('src="home.js', 'src="/home.js')
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

/* The calculator page /tools/: every address in it is already rooted, so only the words and its own address change. */
function localizeTools(lang) {
    const t = translations[lang];
    let s = inLanguage(read('tools/index.html'), lang);
    const title = t['tools.meta.title'], desc = t['tools.meta.description'];

    s = s.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    s = s.replace(/(<meta name="description"\s*\n?\s*content=")[^"]*(")/, `$1${desc}$2`);
    s = s.replace(/(property="og:title" content=")[^"]*(")/, `$1${title}$2`);
    s = s.replace(/(property="og:description" content=")[^"]*(")/, `$1${desc}$2`);
    s = s.replace(/(name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
    s = s.replace(/(name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`);
    s = s.replace(/(property="og:url" content=")[^"]*(")/, `$1${SITE}/${lang}/tools/$2`);
    s = s.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${SITE}/${lang}/tools/">`);
    s = s.replace('<a href="/" class="logo">', `<a href="/${lang}/" class="logo">`);
    s = s.replace('<a href="/" class="back-link home-link">', `<a href="/${lang}/" class="back-link home-link">`);

    write(`${lang}/tools/index.html`, s);
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
    body { max-width: 720px; margin: 0 auto; padding: 20px 20px 64px; }
    .brand { display: inline-block; margin-bottom: 18px; }
    .brand img { display: block; height: 30px; width: auto; }
    .crumbs { font-size: .875rem; margin-bottom: 24px; }
    .crumbs a { color: #D95D39; text-decoration: none; font-weight: 600; }
    h1, h2 { font-family: 'Nunito', 'Nunito Sans', -apple-system, system-ui, sans-serif; font-weight: 800; }
    h1 { letter-spacing: -0.017em; line-height: 1.12; margin: 0 0 8px; }
    h2 { margin-top: 28px; letter-spacing: -0.012em; }
    .meta { color: #6B6387; font-size: .875rem; margin-bottom: 24px; }
    .tldr { background: #fff; border-radius: 18px; padding: 14px 18px; margin-bottom: 24px; box-shadow: 0 16px 34px -26px rgba(110, 60, 30, 0.45); }
    article p, article li { line-height: 1.6; color: #4A4163; }
    .related { margin-top: 40px; border-top: 1px solid rgba(58, 49, 80, 0.1); padding-top: 20px; }
    .related a { display: block; color: #D95D39; text-decoration: none; margin: 6px 0; }
    .appcta { display: inline-block; margin-top: 32px; padding: 12px 24px; border-radius: 999px; background: #FA7C50; color: #fff; font: 800 1rem/1.3 'Nunito', 'Nunito Sans', sans-serif; text-decoration: none; }`;

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
    <link rel="icon" href="/favicon.ico" sizes="32x32">
    <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
    <meta name="theme-color" content="#FA7C50">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700&display=swap" rel="stylesheet">
    <style>
    /* the look of the home page: cream ground, plum ink, Nunito headings */
    body { font-family: 'Nunito Sans', -apple-system, system-ui, sans-serif; font-weight: 500; background: #FFF8F2; color: #3A3150; }
${HELP_CSS}
    </style>
</head>
<body>
<a class="brand" href="/${lang === 'ru' ? '' : lang + '/'}"><img src="/assets/logo-inline-primary.svg" alt="Lupibu" width="118" height="30"></a>
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
        <a class="appcta" href="${APP_URL}">${u.cta}</a>
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
            title: `Lupibu: ${u.help}`,
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
localizeTools('en');
localizeTools('kk');

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
const toolsAlt = (l) => `${landingAlt(l)}tools/`;
sitemap([
    { loc: '/', alternates: landingAlt },
    { loc: '/en/', alternates: landingAlt },
    { loc: '/kk/', alternates: landingAlt },
    ...LANGS.map((l) => ({ loc: toolsAlt(l), alternates: toolsAlt })),
    ...LANGS.map((l) => ({ loc: `/help/${l}/`, alternates: (x) => `/help/${x}/` })),
    ...LANGS.flatMap((l) =>
        (bySlug[l] || []).map((a) => ({
            loc: `/help/${l}/${a.slug}.html`,
            alternates: (x) => `/help/${x}/${a.slug}.html`,
        }))
    ),
    { loc: '/legal.html' },
]);

/* The footer is written once, in index.html; 404.html and tools/index.html carry a copy.
   A copy that has drifted is reported here: until 10.11.2026 that page showed a broken footer. */
const footerOf = (file) => {
    const m = read(file).match(/<footer class="footer">[\s\S]*?<\/footer>/);
    return m ? m[0].replace(/(data-i18n="[\w.]+"[^>]*>)[^<]*(<)/g, '$1$2').replace(/\s+/g, ' ') : '';
};
for (const file of ['404.html', 'tools/index.html']) {
    if (footerOf(file) !== footerOf('index.html')) console.warn(`WARNING: the footer of ${file} differs from the one in index.html`);
}

console.log('done:', 4 + LANGS.length + Object.keys(help.helpArticles).length, 'pages + sitemap');
