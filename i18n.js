/* ========================================
   LUPIBU LANDING - INTERNATIONALIZATION
   Positioning: «Ритм мамы» — tight 2026 pass (≤8-word hero)
   ======================================== */

const translations = {
    en: {
        // A11y
        'a11y.skipLink': 'Skip to content',

        // Hero — ≤6 words title, ≤12 words subtitle
        'hero.title': "<span class=\"hero-title-lede\">Baby's rhythm</span><span class=\"hero-title-payoff\">Your day back</span>",
        'hero.subtitle': "Knows what's next",
        'hero.proof': 'Free for 7 days',

        // Before / After

        // Testimonials
        'testimonials.label': '⭐⭐⭐⭐⭐ 5.0 on the App Store',
        'testimonials.source': 'App Store',
        'testimonials.t1.text': '"I use Lupibu every day to track sleep, feedings, and my baby\'s routine. The app is easy to use, with a clean design and helpful reminders. It really helps bring more structure and calm into daily parenting."',
        'testimonials.t1.author': 'Асиманариманова',
        'testimonials.t2.text': '"Lupibu makes tracking my baby\'s routine so much easier. The sleep insights and reminders are especially helpful. Clean design and very intuitive to use."',
        'testimonials.t2.author': '-Айгулечка-',
        'testimonials.t3.text': '"Intuitive and convenient app. It really helped me clear my head. Special thanks for the AI assistant — it\'s a real lifesaver."',
        'testimonials.t3.author': 'kavinskyyn',

        // Slogan — Apple-grade: 4 words
        'slogan.tagline': 'Less guessing. More peaceful days and nights.',

        // Sticky CTA
        'sticky.cta': 'Start free',
        'sticky.sub': 'Free for 7 days',
        'qr.hint': 'Hover to enlarge',

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
        'meta.title': 'Lupibu — baby sleep tracker',
        'meta.description': "Lupibu learns your baby's rhythm and tells you what's next. For mothers. Free for 7 days.",

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
        'hero.title': '<span class="hero-title-lede">Ритм малыша</span><span class="hero-title-payoff">Ваш день</span>',
        'hero.subtitle': 'Знает, что дальше',
        'hero.proof': '7 дней бесплатно',

        'testimonials.label': '⭐⭐⭐⭐⭐ 5.0 в App Store',
        'testimonials.source': 'App Store',
        'testimonials.t1.text': '«Пользуюсь Lupibu каждый день — записываю сон, кормления и распорядок малыша. Простое приложение, аккуратный дизайн, удобные напоминания. С ним повседневная жизнь с ребёнком стала спокойнее и понятнее.»',
        'testimonials.t1.author': 'Асиманариманова',
        'testimonials.t2.text': '«С Lupibu вести режим малыша намного проще. Особенно нравятся разборы сна и напоминания. Аккуратно сделано, всё интуитивно понятно.»',
        'testimonials.t2.author': '-Айгулечка-',
        'testimonials.t3.text': '«Интуитивно понятное и удобное приложение. Очень помогло разгрузить голову. Отдельное спасибо за ИИ-ассистента — выручает очень.»',
        'testimonials.t3.author': 'kavinskyyn',

        'slogan.tagline': 'Меньше догадок. Спокойнее дни и ночи.',

        'sticky.cta': 'Попробовать бесплатно',
        'sticky.sub': '7 дней бесплатно',
        'qr.hint': 'Наведите для увеличения',
        'footer.help.label': 'Помощь',
        'footer.help.link': 'Справочный центр',
        'footer.legal.label': 'Юридическое',
        'footer.legal.privacy': 'Политика конфиденциальности',
        'footer.legal.terms': 'Условия использования',
        'footer.legal.disclaimer': 'Медицинская оговорка',
        'footer.legal.dataConsent': 'Согласие на обработку данных',
        'footer.connect.label': 'Связь',
        'footer.copyright': '© 2026 Lupibu. Все права защищены.',
        'meta.title': 'Lupibu — трекер сна малыша',
        'meta.description': 'Lupibu учит ритм малыша и подсказывает, что дальше. Для мам. 7 дней бесплатно.',

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
        'hero.title': '<span class="hero-title-lede">Сәбидің ырғағы</span><span class="hero-title-payoff">Сіздің күніңіз</span>',
        'hero.subtitle': 'Не боларын біледі',
        'hero.proof': '7 күн тегін',

        'testimonials.label': '⭐⭐⭐⭐⭐ App Store-да 5.0',
        'testimonials.source': 'App Store',
        'testimonials.t1.text': '«Lupibu-ді күн сайын пайдаланамын — сәбидің ұйқысын, тамағын, күн тәртібін жазып отырамын. Қосымша қарапайым, дизайны таза, ескертулері ыңғайлы. Сәбимен өткен күндер реттелген әрі тыныш бола түсті.»',
        'testimonials.t1.author': 'Асиманариманова',
        'testimonials.t2.text': '«Lupibu арқылы сәбидің күн тәртібін жүргізу әлдеқайда жеңілдеді. Әсіресе ұйқы туралы талдаулар мен ескертулер пайдалы. Дизайны таза, бәрі ыңғайлы.»',
        'testimonials.t2.author': '-Айгулечка-',
        'testimonials.t3.text': '«Интуитивті әрі ыңғайлы қосымша. Басымды босатуға көп көмектесті. AI-көмекшіге бөлек рахмет — шынымен құтқарады.»',
        'testimonials.t3.author': 'kavinskyyn',

        'slogan.tagline': 'Болжам аз. Тыныш күн мен түн көп.',

        'sticky.cta': 'Тегін бастау',
        'sticky.sub': '7 күн тегін',
        'qr.hint': 'Үлкейту үшін меңзеңіз',
        'footer.help.label': 'Көмек',
        'footer.help.link': 'Анықтама орталығы',
        'footer.legal.label': 'Заңдық',
        'footer.legal.privacy': 'Құпиялылық саясаты',
        'footer.legal.terms': 'Қолдану шарттары',
        'footer.legal.disclaimer': 'Медициналық ескертпе',
        'footer.legal.dataConsent': 'Деректерді өңдеуге келісім',
        'footer.connect.label': 'Байланыс',
        'footer.copyright': '© 2026 Lupibu. Барлық құқықтары қорғалған.',
        'meta.title': 'Lupibu — сәби ұйқы трекері',
        'meta.description': 'Lupibu сәбидің ырғағын үйреніп, не боларын айтады. Аналарға. 7 күн тегін.',

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

const SUPPORTED_LANGS = ['en', 'ru', 'kk'];
const DEFAULT_LANG = 'en';

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
    const base = window.location.origin + window.location.pathname;
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

    // Update legal links with current language
    document.querySelectorAll('.legal-link').forEach(el => {
        const doc = el.dataset.doc;
        if (doc) el.href = 'legal.html?doc=' + doc + '&lang=' + lang;
    });

    // Update help center links with current language
    document.querySelectorAll('.help-link').forEach(el => {
        el.href = 'help.html?lang=' + lang;
    });

    // Update screenshots to match language
    document.querySelectorAll('[data-screenshot]').forEach(img => {
        const key = img.dataset.screenshot;
        img.src = 'screenshots/' + lang + '_' + key + '.webp';
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
