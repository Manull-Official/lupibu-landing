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

        // The tool. {time} is formatted in home.js; the ages and «in 1 h 40 min» are built there too.
        'tool.title': 'Sleep forecast',
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
        'footer.help.label': 'Help',
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

        // Referral / 404 page
        'referral.badge': 'Special invite',
        'referral.titlePrefix': 'A gift from',
        'referral.titleFallback': 'You’ve got an invite',
        'referral.copyCode': 'Copy code',
        'referral.copied': 'Copied',
        'referral.benefit_trial': 'Free for 7 days',
        'referral.benefit_yearly': 'Discount on the yearly plan',
        'referral.step1Title': 'Find Lupibu in the App Store and install it',
        'referral.step1Or': 'or',
        'referral.step1AltTitle': 'Install via direct link',
        'referral.step2Title': 'Enter the code',
        'referral.step2Hint': 'On the sign-in screen, tap «I have a code».',
        'referral.step2Note': 'If you installed via the direct link, the code applies automatically — nothing to enter.',
        'referral.disclaimer': '*new users only.',
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
        'hero.subtitle': 'Lupibu поможет выстроить режим малыша',

        'cmp.title': 'Ваш день в Ваших руках',
        'cmp.without': 'Без Lupibu',
        'cmp.with': 'С Lupibu',
        'cmp.r1.was': 'Подсчёт времени бодрствования',
        'cmp.r1.now': 'Прогнозы и напоминания',
        'cmp.r2.was': 'Хаос в памяти и заметках',
        'cmp.r2.now': 'Порядок в трекинге',
        'cmp.r3.was': 'Вопросы в чатах и на форумах',
        'cmp.r3.now': 'Персональные ответы от AI',

        'tool.title': 'Прогноз сна',
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
        'tool.demo.age': '4 месяца',
        'tool.demo.at': 'в\u00a012:15–13:00',

        'start.title': 'Начните уже сегодня',
        'start.lead': 'Получайте прогнозы под\u00a0Ваш индивидуальный ритм',
        'start.s1': 'Скачайте Lupibu',
        'start.s2': 'Отмечайте сон и\u00a0кормления',
        'start.s3': 'Обсуждайте с\u00a0AI\u2011ассистентом',

        // Отзывы: дословно из App Store, с авторскими строчными буквами и переносом строки.
        // Первый: отзыв целиком, второй: его первое предложение, третий: заголовок отзыва.
        'rev.title': 'Отзывы',
        'rev.q1': 'интуитивно понятное и удобное приложение, очень помогло разгрузить голову\nотдельное спасибо за ии ассистента, выручает очень',
        'rev.q2': 'Легкое в использовании, самые нужные функции всегда на виду, есть напоминания о сне и кормлении, что очень удобно.',
        'rev.q3': 'Приложение и обратная связь с разработчиком 10 из 5',
        'rev.src': 'Из отзывов в App Store',
        'rev.lang': 'ru',

        'sticky.cta': 'Скачать Lupibu',

        'alt.badge': 'Загрузите в App Store',
        'alt.qr': 'QR-код: Lupibu в App Store',
        'alt.bears': 'Мама-медведица с малышом смотрят в телефон',
        'alt.home': 'Экран Lupibu со временем следующего сна',
        'alt.asleep': 'Мама-медведица и малыш спят',

        'footer.help.label': 'Помощь',
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
        'meta.description': 'Lupibu поможет выстроить режим малыша: прогноз сна, трекинг сна и кормлений, ответы AI-ассистента.',

        // Referral / 404 page
        'referral.badge': 'Личное приглашение',
        'referral.titlePrefix': 'Подарок от',
        'referral.titleFallback': 'У Вас приглашение в Lupibu',
        'referral.copyCode': 'Скопировать код',
        'referral.copied': 'Скопировано',
        'referral.benefit_trial': '7 дней бесплатно',
        'referral.benefit_yearly': 'Скидка на годовую подписку',
        'referral.step1Title': 'Найдите Lupibu в App Store и установите',
        'referral.step1Or': 'или',
        'referral.step1AltTitle': 'Установите по прямой ссылке',
        'referral.step2Title': 'Введите код',
        'referral.step2Hint': 'На экране входа нажмите «У меня есть код».',
        'referral.step2Note': 'Если устанавливали по прямой ссылке — промокод применится сам, вводить ничего не нужно.',
        'referral.disclaimer': '*только для новых пользователей.',
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

        'tool.title': 'Ұйқы болжамы',
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
        'tool.demo.age': '4 ай',
        'tool.demo.at': '12:15–13:00',

        'start.title': 'Бүгін-ақ бастаңыз',
        'start.lead': 'Жеке ырғағыңызға сай болжамдар алыңыз',
        'start.s1': 'Lupibu-ды жүктеп алыңыз',
        'start.s2': 'Ұйқы мен емізуді жазыңыз',
        'start.s3': 'AI-көмекшімен талқылаңыз',

        // Пікірлер: App Store-да орыс тілінде жазылған, сондықтан аударылмай, сол қалпында көрсетіледі.
        'rev.title': 'Пікірлер',
        'rev.q1': 'интуитивно понятное и удобное приложение, очень помогло разгрузить голову\nотдельное спасибо за ии ассистента, выручает очень',
        'rev.q2': 'Легкое в использовании, самые нужные функции всегда на виду, есть напоминания о сне и кормлении, что очень удобно.',
        'rev.q3': 'Приложение и обратная связь с разработчиком 10 из 5',
        'rev.src': 'App Store-дағы пікірлерден',
        'rev.lang': 'ru',

        'sticky.cta': 'Lupibu-ды жүктеу',

        'alt.badge': 'App Store-дан жүктеу',
        'alt.qr': 'QR-код: App Store-дағы Lupibu',
        'alt.bears': 'Аю-ана мен қонжық телефонға қарап отыр',
        'alt.home': 'Келесі ұйқы уақыты көрсетілген Lupibu экраны',
        'alt.asleep': 'Аю-ана мен қонжық ұйықтап жатыр',

        'footer.help.label': 'Көмек',
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

        // Referral / 404 page
        'referral.badge': 'Жеке шақыру',
        'referral.titlePrefix': 'Сыйлық —',
        'referral.titleFallback': 'Сізге Lupibu-ға шақыру келді',
        'referral.copyCode': 'Кодты көшіру',
        'referral.copied': 'Көшірілді',
        'referral.benefit_trial': '7 күн тегін',
        'referral.benefit_yearly': 'Жылдық жазылымға жеңілдік',
        'referral.step1Title': 'App Store-дан Lupibu-ны тауып орнатыңыз',
        'referral.step1Or': 'немесе',
        'referral.step1AltTitle': 'Тікелей сілтеме арқылы орнатыңыз',
        'referral.step2Title': 'Кодты енгізіңіз',
        'referral.step2Hint': 'Кіру бетінде «Менде код бар» дегенді басыңыз.',
        'referral.step2Note': 'Егер тікелей сілтеме арқылы орнатсаңыз — промокод өзі қолданылады, ештеңе енгізудің қажеті жоқ.',
        'referral.disclaimer': '*тек жаңа пайдаланушылар үшін.',
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
    // Landing locales are path-based prerendered pages (/, /en/, /kk/) with
    // static self-canonicals — leave those alone.
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html' || /^\/(en|kk)\//.test(path)) return;
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
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.description']) {
        metaDesc.setAttribute('content', dict['meta.description']);
    }
    if (dict['meta.title']) {
        document.title = dict['meta.title'];
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
