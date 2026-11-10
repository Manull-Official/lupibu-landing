/* ========================================
   LUPIBU LANDING - INTERNATIONALIZATION
   Home copy (2026-11): a funnel of four screens, plain product statements
   ======================================== */

const translations = {
    en: {
        // A11y
        'a11y.skipLink': 'Skip to content',

        // Home — a funnel of four screens (2026-11): hook → relief → try → start.
        // Inside a block every line keeps one grammatical form: questions, noun phrases, imperatives.
        'hero.b1': "When's the next nap?",
        'hero.b2': 'When did I last feed?',
        'hero.b3': "Why won't my baby sleep?",
        'hero.title': "You're not alone",
        'hero.subtitle': "Lupibu helps you build your baby's routine",

        'cmp.title': 'Your day, back in your hands',
        'cmp.without': 'Without Lupibu',
        'cmp.with': 'With Lupibu',
        'cmp.r1.was': 'Wake window math',
        'cmp.r1.now': 'Forecasts and reminders',
        'cmp.r2.was': 'Scattered notes and memory',
        'cmp.r2.now': 'One tidy log',
        'cmp.r3.was': 'Group chats and forums',
        'cmp.r3.now': 'Personal answers from AI',
        'cmp.r4.was': "Watching the timers all day",
        'cmp.r4.now': "A countdown on the lock screen",
        'cmp.r5.was': "A day with no routine",
        'cmp.r5.now': "Detailed sleep statistics",
        'cta.note': "iPhone app. 7 days free",
        'footer.tools.link': "Nap time by age",
        'nav.tools': "Nap time",
        'nav.home': "Home",

        // The tool. {time} is formatted in home.js; the ages and «in 1 h 40 min» are built there too.
        'tool.title': 'Nap time by age',
        'tool.age': "Baby's age",
        'tool.wake': 'Wake-up time',
        'tool.next': 'Next nap',
        'tool.next.night': 'Bedtime',
        'tool.window': '{range}',
        'tool.until': 'window until {time}',
        'tool.was': 'window closed at {time}',
        'tool.stale': 'Awake for {time}',
        'tool.stale.hint': 'That looks too long. Enter the latest wake-up time',
        'tool.done': 'Done',
        'tool.at.night': 'around {time}',
        'tool.now': 'now',
        'tool.invalid': 'Enter a daytime wake-up time',
        'tool.note': 'For information only',
        'tools.meta.title': 'When to put your baby down: nap time by age | Lupibu',
        'tools.meta.description': "Enter your baby's age and wake-up time to see when the next sleep is due. An estimate by age, for information only.",
        'tool.demo.age': '4 months',
        'tool.demo.at': '12:15–1:00\u00a0PM',

        'start.title': 'Start today',
        'start.lead': "Get forecasts tuned to your baby's rhythm",
        'start.s1': 'Download Lupibu',
        'start.s2': 'Log sleep and feeds',
        'start.s3': 'Chat with the AI assistant',

        // Reviews: quoted from the App Store word for word (never edited, never translated), one sentence of each,
        // in the language it was written in. rev.lang names that language for a screen reader.
        'rev.title': 'Reviews',
        'rev.q1': 'I like that it doesn’t just log data but also gives useful suggestions on when it’s time for the next nap - makes it easier to keep a good routine.',
        'rev.q2': 'It really helps bring more structure and calm into daily parenting.',
        'rev.q3': 'You can feel that developers are going through parenthood themselves.',
        'rev.src': 'From App Store reviews',
        'rev.lang': 'en',

        'sticky.cta': 'Download Lupibu',

        'alt.badge': 'Download on the App Store',
        'alt.qr': 'QR code: Lupibu on the App Store',
        'alt.bears': 'Mama bear and her cub looking at a phone',
        'alt.home': 'Lupibu screen showing the next nap time',
        'alt.asleep': 'Mama bear and her cub asleep',

        // Footer
        'footer.help.link': 'Help Center',
        'footer.legal.label': 'Legal',
        'footer.legal.privacy': 'Privacy Policy',
        'footer.legal.terms': 'Terms of Use',
        'footer.legal.disclaimer': 'Medical Disclaimer',
        'footer.legal.dataConsent': 'Data Consent',
        'footer.connect.label': 'Connect',
        // What Lupibu is, in plain words: the one place the page says it is an iPhone app.
        'footer.tag': 'iPhone app',
        'footer.copyright': '© 2026 Lupibu. All rights reserved.',
        // Meta — utility-anchored for SEO
        'meta.title': 'Lupibu: baby sleep forecast and routine',
        'meta.description': "Lupibu helps you build your baby's routine: a sleep forecast, sleep and feeding tracking, and answers from an AI assistant.",

        // Service description (YooKassa requires this)

        'notfound.title': 'Page not found',
        'notfound.text': 'The page you’re looking for doesn’t exist. Let’s get you home.',
        'notfound.home': 'Back to Lupibu',

        // Nav + Footer Company group

        // 01 Problem
        // 02 Product
        // 03 How it works
        // 04 Who it's for
        // 05 Market
        // 06 Status
        // 07 Founder
    },

    // ============================================
    // РУССКИЙ — formal «Вы», native phrasing
    // ============================================
    ru: {
        'a11y.skipLink': 'К содержимому',

        // Главная — воронка из четырёх экранов (2026-11).   держит предлог со словом.
        'hero.b1': 'Когда укладывать?',
        'hero.b2': 'Когда кормила?',
        'hero.b3': 'Почему не спит?',
        'hero.title': 'Вы не одиноки',
        'hero.subtitle': 'Lupibu поможет наладить режим малыша',

        'cmp.title': 'Ваш день в Ваших руках',
        'cmp.without': 'Без Lupibu',
        'cmp.with': 'С Lupibu',
        'cmp.r1.was': 'Подсчёт времени бодрствования',
        'cmp.r1.now': 'Прогнозы и напоминания',
        'cmp.r2.was': 'Хаос в памяти и заметках',
        'cmp.r2.now': 'Порядок в трекинге',
        'cmp.r3.was': 'Вопросы в чатах и на форумах',
        'cmp.r3.now': 'Персональные ответы от AI',
        'cmp.r4.was': "Слежка за\u00a0таймерами",
        'cmp.r4.now': "Отсчёт на\u00a0экране блокировки",
        'cmp.r5.was': "Отсутствие режима",
        'cmp.r5.now': "Расширенная статистика",
        'cta.note': "Приложение для\u00a0iPhone. 7\u00a0дней бесплатно",
        'footer.tools.link': "Расчёт сна",
        'nav.tools': "Расчёт сна",
        'nav.home': "На главную",

        'tool.title': 'Расчёт сна по\u00a0возрасту',
        'tool.age': 'Возраст малыша',
        'tool.wake': 'Время пробуждения',
        'tool.next': 'Следующий сон',
        'tool.next.night': 'Ночной сон',
        'tool.window': 'в\u00a0{range}',
        'tool.until': 'окно до\u00a0{time}',
        'tool.was': 'окно было до\u00a0{time}',
        'tool.stale': 'Бодрствует уже\u00a0{time}',
        'tool.stale.hint': 'Похоже, это слишком долго. Укажите последнее пробуждение',
        'tool.done': 'Готово',
        'tool.at.night': 'около {time}',
        'tool.now': 'сейчас',
        'tool.invalid': 'Укажите дневное время',
        'tool.note': 'В\u00a0ознакомительных целях',
        'tools.meta.title': 'Когда укладывать малыша: расчёт сна по возрасту | Lupibu',
        'tools.meta.description': 'Укажите возраст малыша и время пробуждения: страница покажет время следующего сна. Расчёт по возрасту, в ознакомительных целях.',
        'tool.demo.age': '4 месяца',
        'tool.demo.at': 'в\u00a012:15–13:00',

        'start.title': 'Начните уже сегодня',
        'start.lead': 'Получайте прогнозы под\u00a0Ваш индивидуальный ритм',
        'start.s1': 'Скачайте Lupibu',
        'start.s2': 'Отмечайте сон и\u00a0кормления',
        'start.s3': 'Обсуждайте с\u00a0AI\u2011ассистентом',

        // Отзывы: дословно из App Store, с авторскими строчными буквами и переносом строки.
        // Первый: отзыв целиком, второй: его первое предложение, третий: заголовок отзыва.
        // Слова не тронуты; неразрывные пробелы после коротких предлогов стоят, чтобы предлог не повисал в конце строки.
        'rev.title': 'Отзывы',
        'rev.q1': 'интуитивно понятное и\u00a0удобное приложение, очень помогло разгрузить голову\nотдельное спасибо за\u00a0ии ассистента, выручает очень',
        'rev.q2': 'Легкое в\u00a0использовании, самые нужные функции всегда на\u00a0виду, есть напоминания о\u00a0сне и\u00a0кормлении, что очень удобно.',
        'rev.q3': 'Приложение и\u00a0обратная связь с\u00a0разработчиком 10\u00a0из\u00a05',
        'rev.src': 'Из отзывов в App Store',
        'rev.lang': 'ru',

        'sticky.cta': 'Скачать Lupibu',

        'alt.badge': 'Загрузите в App Store',
        'alt.qr': 'QR-код: Lupibu в App Store',
        'alt.bears': 'Мама-медведица с малышом смотрят в телефон',
        'alt.home': 'Экран Lupibu со временем следующего сна',
        'alt.asleep': 'Мама-медведица и малыш спят',

        'footer.help.link': 'Справочный центр',
        'footer.legal.label': 'Юридическое',
        'footer.legal.privacy': 'Политика конфиденциальности',
        'footer.legal.terms': 'Условия использования',
        'footer.legal.disclaimer': 'Медицинская оговорка',
        'footer.legal.dataConsent': 'Согласие на обработку данных',
        'footer.connect.label': 'Связь',
        // What Lupibu is, in plain words: the one place the page says it is an iPhone app.
        'footer.tag': 'Приложение для iPhone',
        'footer.copyright': '© 2026 Lupibu. Все права защищены.',
        'meta.title': 'Lupibu: прогноз сна и режим малыша',
        'meta.description': 'Lupibu поможет наладить режим малыша: прогноз сна, трекинг сна и кормлений, ответы AI-ассистента.',

        'notfound.title': 'Страница не найдена',
        'notfound.text': 'Такой страницы не существует. Вернёмся на главную.',
        'notfound.home': 'На главную Lupibu',

        // Nav + Footer Company group

        // 01 Problem
        // 02 Product
        // 03 How it works
        // 04 Who it's for
        // 05 Market
        // 06 Status
        // 07 Founder
    },

    // ============================================
    // ҚАЗАҚША — native, «Сіз»
    // ============================================
    kk: {
        'a11y.skipLink': 'Мазмұнға өту',

        // Басты бет — төрт экраннан тұратын воронка (2026-11)
        'hero.b1': 'Қашан ұйықтату керек?',
        'hero.b2': 'Қашан тамақтандырдым?',
        'hero.b3': 'Неге ұйықтамайды?',
        'hero.title': 'Сіз жалғыз емессіз',
        'hero.subtitle': 'Lupibu сәбидің режимін қалыптастыруға көмектеседі',

        'cmp.title': 'Күніңіз өз қолыңызда',
        'cmp.without': 'Lupibu-сыз',
        'cmp.with': 'Lupibu-мен',
        'cmp.r1.was': 'Ояу уақытты есептеу',
        'cmp.r1.now': 'Болжамдар мен еске салулар',
        'cmp.r2.was': 'Жад пен жазбадағы ретсіздік',
        'cmp.r2.now': 'Трекингтегі тәртіп',
        'cmp.r3.was': 'Чаттар мен форумдардағы сұрақтар',
        'cmp.r3.now': 'AI-дан жеке жауаптар',
        'cmp.r4.was': "Таймерлерді үнемі бақылау",
        'cmp.r4.now': "Құлып экранындағы кері санақ",
        'cmp.r5.was': "Режимнің болмауы",
        'cmp.r5.now': "Кеңейтілген статистика",
        'cta.note': "iPhone қолданбасы. 7\u00a0күн тегін",
        'footer.tools.link': "Ұйқы есебі",
        'nav.tools': "Ұйқы есебі",
        'nav.home': "Басты бет",

        'tool.title': 'Жасқа сай ұйқы есебі',
        'tool.age': 'Сәбидің жасы',
        'tool.wake': 'Ояну уақыты',
        'tool.next': 'Келесі ұйқы',
        'tool.next.night': 'Түнгі ұйқы',
        'tool.window': '{range}',
        'tool.until': 'терезе {time} дейін',
        'tool.was': 'терезе {time} дейін болды',
        'tool.stale': '{time} бойы ояу',
        'tool.stale.hint': 'Бұл тым ұзақ сияқты. Соңғы ояну уақытын көрсетіңіз',
        'tool.done': 'Дайын',
        'tool.at.night': 'шамамен {time}',
        'tool.now': 'қазір',
        'tool.invalid': 'Күндізгі уақытты көрсетіңіз',
        'tool.note': 'Танысу мақсатында',
        'tools.meta.title': 'Сәбиді қашан ұйықтату керек: жасқа сай ұйқы есебі | Lupibu',
        'tools.meta.description': 'Сәбидің жасы мен оянған уақытын көрсетіңіз: бет келесі ұйқы уақытын көрсетеді. Жасқа сай есеп, танысу мақсатында.',
        'tool.demo.age': '4 ай',
        'tool.demo.at': '12:15–13:00',

        'start.title': 'Бүгін-ақ бастаңыз',
        'start.lead': 'Жеке ырғағыңызға сай болжамдар алыңыз',
        'start.s1': 'Lupibu-ды жүктеп алыңыз',
        'start.s2': 'Ұйқы мен емізуді жазыңыз',
        'start.s3': 'AI-көмекшімен талқылаңыз',

        // Пікірлер: App Store-да орыс тілінде жазылған, сондықтан аударылмай, сол қалпында көрсетіледі.
        'rev.title': 'Пікірлер',
        'rev.q1': 'интуитивно понятное и\u00a0удобное приложение, очень помогло разгрузить голову\nотдельное спасибо за\u00a0ии ассистента, выручает очень',
        'rev.q2': 'Легкое в\u00a0использовании, самые нужные функции всегда на\u00a0виду, есть напоминания о\u00a0сне и\u00a0кормлении, что очень удобно.',
        'rev.q3': 'Приложение и\u00a0обратная связь с\u00a0разработчиком 10\u00a0из\u00a05',
        'rev.src': 'App Store-дағы пікірлерден',
        'rev.lang': 'ru',

        'sticky.cta': 'Lupibu-ды жүктеу',

        'alt.badge': 'App Store-дан жүктеу',
        'alt.qr': 'QR-код: App Store-дағы Lupibu',
        'alt.bears': 'Аю-ана мен қонжық телефонға қарап отыр',
        'alt.home': 'Келесі ұйқы уақыты көрсетілген Lupibu экраны',
        'alt.asleep': 'Аю-ана мен қонжық ұйықтап жатыр',

        'footer.help.link': 'Анықтама орталығы',
        'footer.legal.label': 'Заңдық',
        'footer.legal.privacy': 'Құпиялылық саясаты',
        'footer.legal.terms': 'Қолдану шарттары',
        'footer.legal.disclaimer': 'Медициналық ескертпе',
        'footer.legal.dataConsent': 'Деректерді өңдеуге келісім',
        'footer.connect.label': 'Байланыс',
        // What Lupibu is, in plain words: the one place the page says it is an iPhone app.
        'footer.tag': 'iPhone-ға арналған қолданба',
        'footer.copyright': '© 2026 Lupibu. Барлық құқықтары қорғалған.',
        'meta.title': 'Lupibu: ұйқы болжамы және сәби режимі',
        'meta.description': 'Lupibu сәбидің режимін қалыптастыруға көмектеседі: ұйқы болжамы, ұйқы мен тамақтандыруды бақылау, AI-көмекшінің жауаптары.',

        'notfound.title': 'Бет табылмады',
        'notfound.text': 'Мұндай бет жоқ. Басты бетке оралайық.',
        'notfound.home': 'Lupibu басты бетіне',

        // Nav + Footer Company group

        // 01 Problem
        // 02 Product
        // 03 How it works
        // 04 Who it's for
        // 05 Market
        // 06 Status
        // 07 Founder
    }
};

// A page may narrow this via window.LUPIBU_LANGS.
const SUPPORTED_LANGS = window.LUPIBU_LANGS || ['en', 'ru', 'kk'];
// Per-page default: index.html sets window.LUPIBU_DEFAULT_LANG = 'ru' (its static
// HTML is Russian — that's who pays); every other page keeps English as the base.
const DEFAULT_LANG = window.LUPIBU_DEFAULT_LANG || 'en';

const langLabels = {
    en: 'EN',
    ru: 'RU',
    kk: 'KZ'
};

/**
 * Detect the best language: ?lang= URL param > localStorage > navigator.language > default
 */
function detectLanguage() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) return urlLang;

    const saved = localStorage.getItem('lupibu-lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();

    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('kk') || browserLang.startsWith('kz')) return 'kk';

    return DEFAULT_LANG;
}

/**
 * Update <link rel="canonical"> to the current-lang URL so Google indexes it correctly.
 */
function updateCanonical(lang) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) return;
    // Landing locales are path-based prerendered pages (/, /en/, /kk/, and /tools/ under each) with
    // static self-canonicals — leave those alone.
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html' || /^\/(en|kk|tools)\//.test(path)) return;
    const base = window.location.origin + path;
    canonical.href = lang === DEFAULT_LANG ? base : base + '?lang=' + lang;
}

/**
 * Apply translations to all elements with data-i18n or data-i18n-html
 */
function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (dict[key]) el.alt = dict[key];
    });

    // Update legal links with current language
    document.querySelectorAll('.legal-link').forEach(el => {
        const doc = el.dataset.doc;
        if (doc) el.href = '/legal.html?doc=' + doc + '&lang=' + lang;
    });

    // Update help center links with current language
    // The way back from the calculator leads to the home page in the same language.
    document.querySelectorAll('.home-link').forEach(el => {
        el.href = lang === 'ru' ? '/' : '/' + lang + '/';
    });

    // The calculator page has a prerendered copy per language.
    document.querySelectorAll('.tools-link').forEach(el => {
        el.href = (lang === 'ru' ? '' : '/' + lang) + '/tools/';
    });

    document.querySelectorAll('.help-link').forEach(el => {
        el.href = '/help.html?lang=' + lang;
    });

    // The store badge is Apple's own artwork per language. Apple publishes no Kazakh one, so Kazakh takes the Russian.
    document.querySelectorAll('[data-badge]').forEach(img => {
        img.src = '/assets/appstore-badge' + (lang === 'en' ? '' : '-ru') + '.svg';
    });

    // Update screenshots to match language
    document.querySelectorAll('[data-screenshot]').forEach(img => {
        const key = img.dataset.screenshot;
        img.src = '/screenshots/' + lang + '_' + key + '.webp';
    });

    // Update meta
    document.documentElement.lang = lang;
    // A page other than the home one names itself in <html data-page>: its title and description are «<page>.meta.*».
    const page = document.documentElement.dataset.page;
    const metaKey = (page ? page + '.' : '') + 'meta.';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict[metaKey + 'description']) {
        metaDesc.setAttribute('content', dict[metaKey + 'description']);
    }
    if (dict[metaKey + 'title']) {
        document.title = dict[metaKey + 'title'];
    }
    updateCanonical(lang);
}

/**
 * Set active language and update switcher UI
 */
function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
    localStorage.setItem('lupibu-lang', lang);
    applyTranslations(lang);

    // Reflect chosen language in the URL so Google sees a distinct URL per locale.
    const url = new URL(window.location.href);
    if (lang === DEFAULT_LANG) url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());

    const currentBtn = document.querySelector('.lang-current');
    if (currentBtn) currentBtn.textContent = langLabels[lang];

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

/**
 * Initialize language switcher
 */
function initI18n() {
    const lang = detectLanguage();
    applyTranslations(lang);

    const currentBtn = document.querySelector('.lang-current');
    if (currentBtn) currentBtn.textContent = langLabels[lang];

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
        opt.addEventListener('click', function (e) {
            e.stopPropagation();
            setLanguage(this.dataset.lang);
            this.closest('.lang-switcher').classList.remove('open');
        });
    });

    const switcher = document.querySelector('.lang-switcher');
    if (switcher) {
        switcher.querySelector('.lang-toggle').addEventListener('click', function (e) {
            e.stopPropagation();
            switcher.classList.toggle('open');
        });

        document.addEventListener('click', () => {
            switcher.classList.remove('open');
        });
    }
}
