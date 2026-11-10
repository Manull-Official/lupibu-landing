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
        'footer.copyright': '© 2026 Lupibu. All rights reserved.',
        // Meta — utility-anchored for SEO
        'meta.title': 'Lupibu: baby sleep forecast and routine',
        'meta.description': "Lupibu helps you build your baby's routine: a sleep forecast, sleep and feeding tracking, and answers from an AI assistant.",

        // Pay (ЮKassa landing for RU users)
        'pay.meta.title': 'Lupibu Pro — pay with card',
        'pay.meta.description': 'Subscribe to Lupibu Pro with a Russian bank card via ЮKassa. Monthly 599 ₽ or yearly 3,999 ₽.',
        'pay.hero.eyebrow': 'Lupibu Pro',
        'pay.hero.title': 'Pay with card',
        'pay.tariff.monthly.label': 'Monthly',
        'pay.tariff.monthly.price': '599 ₽',
        'pay.tariff.monthly.period': 'per month',
        'pay.tariff.monthly.note': 'Subscription with auto-renewal every 30 days.',
        'pay.tariff.yearly.label': 'Yearly',
        'pay.tariff.yearly.badge': '−44%',
        'pay.tariff.yearly.price': '3,999 ₽',
        'pay.tariff.yearly.period': 'per year · ≈ 333 ₽/mo',
        'pay.tariff.yearly.note': 'Subscription with auto-renewal every 365 days. Save 3,189 ₽.',
        'pay.cancel.notice': 'Cancel anytime.',
        'pay.intro.text': "A subscription unlocks Lupibu — the app that learns your baby's rhythm and tells you what's next.",
        'pay.features.f1': 'Sleep predictions',
        'pay.features.f2': 'AI assistant',
        'pay.features.f3': 'Voice input',
        'pay.features.f4': 'PDF report',
        'pay.features.f5': 'Up to 4 children',
        'pay.features.f6': 'iOS widget',
        'pay.cta.pay': 'Pay with card',
        'pay.features.title': "What\'s in Lupibu Pro",
        // Service description (YooKassa requires this)
        'pay.hero.subtitle': 'Subscription for access to the app.',
        'pay.included': 'The subscription includes the full functionality of the app.',
        'pay.offer.consent': 'By paying, you agree to the',
        'pay.consent.link': 'Terms of Use',
        'pay.offer.full': 'By paying, you agree to the <a href="legal.html?doc=terms">Terms of Use</a> and <a href="legal.html?doc=privacy">Privacy Policy</a>.',
        'pay.merchant.org': 'IP Sariev',
        'pay.merchant.inn_label': 'IIN',
        'pay.merchant.address_label': 'Address',
        'pay.merchant.address_value': '050059, Republic of Kazakhstan, Almaty, Nazarbayev Avenue 229, apt. 24',
        'pay.merchant.phone_label': 'Phone',
        'pay.merchant.email_label': 'Email',

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
        'nav.about': 'About',
        'footer.company.label': 'Company',
        'footer.company.about': 'About',

        // /about.html — narrative arc for Google review
        'aboutPage.hero': 'Lupibu',
        'aboutPage.sub': "An iOS app that learns each baby's sleep rhythm and predicts what's likely next.",
        // 01 Problem
        'aboutPage.s1.label': 'Problem',
        'aboutPage.s1.body': "Tracking apps record everything but answer nothing. New parents end up with history they don't have time to read. Lupibu turns that history into a forecast — what's likely next — and an AI assistant that already knows the context.",
        // 02 Product
        'aboutPage.s2.label': 'Product',
        'aboutPage.s2.body': "An iPhone app that learns each baby's rhythm and predicts when the next sleep window will open. The AI assistant answers parenting questions with full history as context.",
        // 03 How it works
        'aboutPage.s3.label': 'How it works',
        'aboutPage.s3.heading': "What's inside the app",
        'aboutPage.s3.body': 'Sleep-rhythm prediction, an iOS widget for the next nap, voice and AI-assisted logging, an AI assistant with full history, dark mode, and a paediatrician-ready PDF.',
        // 04 Who it's for
        'aboutPage.s4.label': "Who it's for",
        'aboutPage.s4.body': "Parents tracking a baby's daily routine. Multilingual households are a core use case — voice input works in three languages from day one.",
        // 05 Market
        'aboutPage.s5.label': 'Market',
        'aboutPage.s5.body': 'Consumer digital health and parenting tech — infant tracking, sleep guidance, AI-powered family assistants. The category is shifting from passive logs to prediction-driven products.',
        // 06 Status
        'aboutPage.s6.label': 'Status',
        'aboutPage.s6.heading': 'Launched on the App Store',
        'aboutPage.s6.body': 'Fully launched on the Apple App Store, with real public reviews from parents. 7-day free trial, then paid subscription.',
        'aboutPage.s6.statCap': 'App Store rating',
        // 07 Founder
        'aboutPage.s7.label': 'Founder',
        'aboutPage.s7.role': 'Founder · Almaty, Kazakhstan',
        'aboutPage.s7.bio': 'Backend engineer, 12+ years across distributed teams in Europe and the US — shipping products at every scale, from banking systems to consumer iOS apps.'
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
        'footer.copyright': '© 2026 Lupibu. Все права защищены.',
        'meta.title': 'Lupibu: прогноз сна и режим малыша',
        'meta.description': 'Lupibu поможет выстроить режим малыша: прогноз сна, трекинг сна и кормлений, ответы AI-ассистента.',

        // Pay (ЮKassa landing for RU users)
        'pay.meta.title': 'Оплата Lupibu Pro',
        'pay.meta.description': 'Оформите подписку Lupibu Pro российской картой через ЮKassa. Месяц — 599 ₽, год — 3 999 ₽.',
        'pay.hero.eyebrow': 'Lupibu Pro',
        'pay.hero.title': 'Оплата картой',
        'pay.tariff.monthly.label': 'На месяц',
        'pay.tariff.monthly.price': '599 ₽',
        'pay.tariff.monthly.period': 'в месяц',
        'pay.tariff.monthly.note': 'Подписка с автопродлением каждые 30 дней.',
        'pay.tariff.yearly.label': 'На год',
        'pay.tariff.yearly.badge': '−44%',
        'pay.tariff.yearly.price': '3 999 ₽',
        'pay.tariff.yearly.period': 'в год · ≈ 333 ₽/мес',
        'pay.tariff.yearly.note': 'Подписка с автопродлением каждые 365 дней. Экономия 3 189 ₽.',
        'pay.cancel.notice': 'Отмена в любой момент.',
        'pay.intro.text': 'Подписка открывает доступ к Lupibu — приложению, которое учит ритм малыша и подсказывает, что дальше.',
        'pay.features.f1': 'Прогнозы сна',
        'pay.features.f2': 'ИИ-ассистент',
        'pay.features.f3': 'Голосовой ввод',
        'pay.features.f4': 'PDF-отчёт',
        'pay.features.f5': 'До 4 детей',
        'pay.features.f6': 'Виджет iOS',
        'pay.cta.pay': 'Оплатить картой',
        // Описание услуги (требование ЮKassa)
        'pay.hero.subtitle': 'Подписка на доступ к приложению.',
        'pay.included': 'В подписку входит весь функционал приложения.',
        'pay.offer.consent': 'Оплачивая, вы соглашаетесь с',
        'pay.consent.link': 'Условиями использования',
        'pay.offer.full': 'Оплачивая, вы соглашаетесь с <a href="legal.html?doc=terms">Условиями использования</a> и <a href="legal.html?doc=privacy">Политикой конфиденциальности</a>.',
        'pay.merchant.org': 'ИП Сариев',
        'pay.merchant.inn_label': 'ИИН',
        'pay.merchant.address_label': 'Адрес',
        'pay.merchant.address_value': '050059, Республика Казахстан, г. Алматы, пр. Назарбаева 229, кв. 24',
        'pay.merchant.phone_label': 'Телефон',
        'pay.merchant.email_label': 'Email',

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
        'nav.about': 'О проекте',
        'footer.company.label': 'Компания',
        'footer.company.about': 'О проекте',

        // /about.html — narrative arc
        'aboutPage.hero': 'Lupibu',
        'aboutPage.sub': 'iOS-приложение, которое учит индивидуальный ритм сна малыша и подсказывает, что вероятно дальше.',
        // 01 Problem
        'aboutPage.s1.label': 'Проблема',
        'aboutPage.s1.body': 'Трекеры записывают всё, но ничего не подсказывают. У молодых родителей накапливается история, которую читать некогда. Lupibu превращает её в прогноз — что вероятно дальше — и ИИ-ассистента, который уже знает контекст.',
        // 02 Product
        'aboutPage.s2.label': 'Продукт',
        'aboutPage.s2.body': 'iPhone-приложение, которое учит индивидуальный ритм малыша и прогнозирует следующее окно сна. ИИ-ассистент отвечает на вопросы с полной историей в контексте.',
        // 03 How it works
        'aboutPage.s3.label': 'Как работает',
        'aboutPage.s3.heading': 'Что внутри приложения',
        'aboutPage.s3.body': 'Прогноз ритма сна, виджет iOS со следующим сном, голосовой и AI-ввод, ИИ-ассистент с полной историей, тёмная тема и PDF-отчёт для педиатра.',
        // 04 Who it's for
        'aboutPage.s4.label': 'Для кого',
        'aboutPage.s4.body': 'Родители, ведущие распорядок малыша. Многоязычные семьи — ключевой сценарий: голосовой ввод работает на трёх языках с первого дня.',
        // 05 Market
        'aboutPage.s5.label': 'Рынок',
        'aboutPage.s5.body': 'Потребительский digital health и parenting-tech — трекинг младенцев, поддержка сна, AI-ассистенты для семей. Категория сдвигается от пассивных журналов к предиктивным продуктам.',
        // 06 Status
        'aboutPage.s6.label': 'Статус',
        'aboutPage.s6.heading': 'Запущено в App Store',
        'aboutPage.s6.body': 'Полностью запущено в Apple App Store, с реальными публичными отзывами родителей. 7 дней бесплатно, затем платная подписка.',
        'aboutPage.s6.statCap': 'Рейтинг в App Store',
        // 07 Founder
        'aboutPage.s7.label': 'Основатель',
        'aboutPage.s7.role': 'Основатель · Алматы, Казахстан',
        'aboutPage.s7.bio': 'Бэкенд-инженер, 12+ лет в распределённых командах в Европе и США — продукты разного масштаба, от банковских систем до consumer iOS-приложений.'
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
        'cmp.r1.was': 'Сергек уақытты есептеу',
        'cmp.r1.now': 'Болжамдар мен ескертулер',
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
        'start.s1': 'Lupibu-ді жүктеп алыңыз',
        'start.s2': 'Ұйқы мен тамақтануды жазыңыз',
        'start.s3': 'AI-ассистентпен талқылаңыз',

        'sticky.cta': 'Lupibu-ді жүктеу',

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
        'footer.copyright': '© 2026 Lupibu. Барлық құқықтары қорғалған.',
        'meta.title': 'Lupibu: ұйқы болжамы және сәби режимі',
        'meta.description': 'Lupibu сәбидің режимін қалыптастыруға көмектеседі: ұйқы болжамы, ұйқы мен тамақтануды бақылау, AI-ассистенттің жауаптары.',

        // Pay (ЮKassa landing for RU users)
        'pay.meta.title': 'Lupibu Pro төлеуі',
        'pay.meta.description': 'Lupibu Pro жазылымын ресейлік картамен ЮKassa арқылы рәсімдеңіз. Ай — 599 ₽, жыл — 3 999 ₽.',
        'pay.hero.eyebrow': 'Lupibu Pro',
        'pay.hero.title': 'Картамен төлеу',
        'pay.tariff.monthly.label': 'Айлық',
        'pay.tariff.monthly.price': '599 ₽',
        'pay.tariff.monthly.period': 'айына',
        'pay.tariff.monthly.note': 'Әр 30 күн сайын автопродлениемен жазылым.',
        'pay.tariff.yearly.label': 'Жылдық',
        'pay.tariff.yearly.badge': '−44%',
        'pay.tariff.yearly.price': '3 999 ₽',
        'pay.tariff.yearly.period': 'жылына · ≈ 333 ₽/ай',
        'pay.tariff.yearly.note': 'Әр 365 күн сайын автопродлениемен жазылым. Үнем 3 189 ₽.',
        'pay.cancel.notice': 'Кез келген уақытта бас тартуға болады.',
        'pay.intro.text': 'Жазылым Lupibu қосымшасына қол жеткізуді ашады — ол сәбидің ырғағын үйренеді және не боларын алдын ала айтады.',
        'pay.features.f1': 'Ұйқы болжамдары',
        'pay.features.f2': 'AI-көмекші',
        'pay.features.f3': 'Дауыспен енгізу',
        'pay.features.f4': 'PDF есеп',
        'pay.features.f5': '4 балаға дейін',
        'pay.features.f6': 'iOS виджеті',
        'pay.cta.pay': 'Картамен төлеу',
        // Қызмет сипаттамасы (ЮKassa талабы)
        'pay.hero.subtitle': 'Қосымшаға қол жеткізу жазылымы.',
        'pay.included': 'Жазылымға қосымшаның барлық функционалы кіреді.',
        'pay.offer.consent': 'Төлеу арқылы сіз қабылдайсыз —',
        'pay.consent.link': 'Қолдану шарттары',
        'pay.offer.full': 'Төлеу арқылы сіз <a href="legal.html?doc=terms">Қолдану шарттарын</a> және <a href="legal.html?doc=privacy">Құпиялылық саясатын</a> қабылдайсыз.',
        'pay.merchant.org': 'ЖК Сариев',
        'pay.merchant.inn_label': 'ЖСН',
        'pay.merchant.address_label': 'Мекенжай',
        'pay.merchant.address_value': '050059, Қазақстан Республикасы, Алматы қ., Назарбаев даңғылы 229, 24-пәтер',
        'pay.merchant.phone_label': 'Телефон',
        'pay.merchant.email_label': 'Email',

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
        'nav.about': 'Жоба туралы',
        'footer.company.label': 'Компания',
        'footer.company.about': 'Жоба туралы',

        // /about.html — narrative arc
        'aboutPage.hero': 'Lupibu',
        'aboutPage.sub': 'Әр сәбидің ұйқы ырғағын үйреніп, не болатынын алдын ала айтатын iOS қосымшасы.',
        // 01 Problem
        'aboutPage.s1.label': 'Мәселе',
        'aboutPage.s1.body': 'Трекерлер бәрін жазады, бірақ ештеңе айтпайды. Жас ата-аналарда оқуға уақыты жоқ тарих жиналады. Lupibu сол тарихты болжамға айналдырады — не болуы мүмкін — және контекстті білетін AI-көмекшіге.',
        // 02 Product
        'aboutPage.s2.label': 'Өнім',
        'aboutPage.s2.body': 'iPhone-қосымша, ол әр сәбидің ырғағын үйренеді және келесі ұйқы терезесін болжайды. AI-көмекші ата-аналық сұрақтарға толық тарих контекстімен жауап береді.',
        // 03 How it works
        'aboutPage.s3.label': 'Қалай жұмыс істейді',
        'aboutPage.s3.heading': 'Қосымшаның ішінде не бар',
        'aboutPage.s3.body': 'Ұйқы ырғағы болжамы, келесі ұйқыны көрсететін iOS виджеті, дауыспен және AI-ден жазба қосу, толық тарихты білетін AI-көмекші, қара тақырып және педиатрге PDF-есеп.',
        // 04 Who it's for
        'aboutPage.s4.label': 'Кімге арналған',
        'aboutPage.s4.body': 'Сәбидің күн тәртібін жүргізетін ата-аналар. Көптілді отбасылар — басты сценарий: дауыспен енгізу үш тілде бірінші күннен жұмыс істейді.',
        // 05 Market
        'aboutPage.s5.label': 'Нарық',
        'aboutPage.s5.body': 'Тұтынушылық digital health пен parenting-tech — сәби трекингі, ұйқыға қолдау, отбасыларға арналған AI-көмекшілер. Категория пассивті журналдардан болжамды өнімдерге ауысуда.',
        // 06 Status
        'aboutPage.s6.label': 'Мәртебе',
        'aboutPage.s6.heading': 'App Store-да іске қосылды',
        'aboutPage.s6.body': 'Apple App Store-да толық іске қосылды, ата-аналардан шынайы ашық пікірлермен. 7 күн тегін, содан кейін ақылы жазылым.',
        'aboutPage.s6.statCap': 'App Store рейтингі',
        // 07 Founder
        'aboutPage.s7.label': 'Негізін қалаушы',
        'aboutPage.s7.role': 'Негізін қалаушы · Алматы, Қазақстан',
        'aboutPage.s7.bio': 'Бэкенд инженер, Еуропа мен АҚШ-тағы бөлінген командаларда 12+ жыл — әртүрлі ауқымдағы өнімдер, банктік жүйелерден consumer iOS-қосымшаларына дейін.'
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
