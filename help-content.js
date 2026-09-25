/* ========================================
   LUPIBU HELP CENTER - CONTENT STORE
   ========================================
   Schema:
     helpCategories[lang] = [{ slug, title, desc, icon, color }]
     helpPopularQuestions[lang] = [{ slug, title }]   // shown on help home
     helpArticles[<slug>_<lang>] = { slug, category, title, readMinutes,
                                     keywords, related, tldr, body }
   Icons use inline SVG keys defined in help.html.
   Colors map to CSS variables: brand, purple, teal, gray.
   ======================================== */

var helpCategories = {
    en: [
        { slug: 'getting-started', title: 'Getting started', desc: 'First steps in Lupibu',              icon: 'sparkles', color: 'brand' },
        { slug: 'sleep',           title: 'Sleep & predictions', desc: 'How forecasts work',             icon: 'moon',     color: 'purple' },
        { slug: 'logging',         title: 'Logging entries',     desc: '12 entry types, timers, edits',  icon: 'edit',     color: 'gray' },
        { slug: 'ai',              title: 'AI & voice',          desc: 'Voice logs, assistant, privacy', icon: 'mic',      color: 'teal' },
        { slug: 'family',          title: 'Children',   desc: 'Multiple kids',  icon: 'users',    color: 'purple' },
        { slug: 'pro',             title: 'Lupibu Pro',          desc: 'Billing, trial, cancel',         icon: 'star',     color: 'brand' },
        { slug: 'privacy',         title: 'Data & privacy',      desc: 'Deletion, your rights',          icon: 'shield',   color: 'gray' }
    ],
    ru: [
        { slug: 'getting-started', title: 'Начало работы',       desc: 'Первые шаги в Lupibu',            icon: 'sparkles', color: 'brand' },
        { slug: 'sleep',           title: 'Сон и прогнозы',      desc: 'Как работают предсказания',       icon: 'moon',     color: 'purple' },
        { slug: 'logging',         title: 'Ведение дневника',    desc: '12 типов записей, таймеры',       icon: 'edit',     color: 'gray' },
        { slug: 'ai',              title: 'ИИ и голос',          desc: 'Голосовые записи, ассистент',     icon: 'mic',      color: 'teal' },
        { slug: 'family',          title: 'Дети',        desc: 'Несколько детей',   icon: 'users',    color: 'purple' },
        { slug: 'pro',             title: 'Lupibu Pro',          desc: 'Оплата, пробный период, отмена',  icon: 'star',     color: 'brand' },
        { slug: 'privacy',         title: 'Данные и приватность',desc: 'Удаление, ваши права',            icon: 'shield',   color: 'gray' }
    ],
    kk: [
        { slug: 'getting-started', title: 'Бастау',                desc: 'Lupibu-дегі алғашқы қадамдар',  icon: 'sparkles', color: 'brand' },
        { slug: 'sleep',           title: 'Ұйқы және болжамдар',   desc: 'Болжамдар қалай жұмыс істейді', icon: 'moon',     color: 'purple' },
        { slug: 'logging',         title: 'Күнделік жүргізу',      desc: '12 жазба түрі, таймерлер',      icon: 'edit',     color: 'gray' },
        { slug: 'ai',              title: 'AI және дауыс',         desc: 'Дауыспен жазу, ассистент',      icon: 'mic',      color: 'teal' },
        { slug: 'family',          title: 'Балалар',    desc: 'Бірнеше бала',   icon: 'users',    color: 'purple' },
        { slug: 'pro',             title: 'Lupibu Pro',            desc: 'Төлем, сынама кезеңі, тоқтату', icon: 'star',     color: 'brand' },
        { slug: 'privacy',         title: 'Деректер мен құпиялылық', desc: 'Жою, құқықтарыңыз',           icon: 'shield',   color: 'gray' }
    ]
};

var helpPopularQuestions = {
    en: [
        { slug: 'sleep-stats-report',  title: 'How to view sleep stats and share a PDF report' },
        { slug: 'history-screen',      title: 'How filters and date range work on the History screen' },
        { slug: 'delete-account',      title: 'How to delete a child or your whole account' },
        { slug: 'prediction-accuracy', title: 'Why is my sleep prediction off?' }
    ],
    ru: [
        { slug: 'sleep-stats-report',  title: 'Как посмотреть статистику сна и отправить PDF-отчёт' },
        { slug: 'history-screen',      title: 'Как работают фильтры и период на экране истории' },
        { slug: 'delete-account',      title: 'Как удалить ребёнка или аккаунт целиком' },
        { slug: 'prediction-accuracy', title: 'Почему прогноз сна бывает неточным' }
    ],
    kk: [
        { slug: 'sleep-stats-report',  title: 'Ұйқы статистикасын көру және PDF есеп жіберу' },
        { slug: 'history-screen',      title: 'Тарих экранында сүзгі мен кезең қалай жұмыс істейді' },
        { slug: 'delete-account',      title: 'Баланы немесе аккаунтты қалай жою керек' },
        { slug: 'prediction-accuracy', title: 'Ұйқы болжамы неге дәл болмауы мүмкін' }
    ]
};

/* ========================================
   ARTICLES
   Format: key = "<slug>_<lang>"
   body is Markdown-lite (same renderer as legal docs + ## headings + bullets)
   ======================================== */
var helpArticles = {

    /* ======================================== */
    /*  GETTING STARTED (5 full articles)       */
    /* ======================================== */

    'first-steps_ru': {
        slug: 'first-steps',
        category: 'getting-started',
        title: 'Как начать пользоваться Lupibu',
        readMinutes: 2,
        keywords: ['начать', 'первый запуск', 'регистрация', 'ребёнок', 'новый аккаунт', 'onboarding'],
        related: ['log-events', 'timers', 'widget'],
        tldr: 'Войдите через Apple, пройдите короткий онбординг с профилем малыша — и Lupibu готов записывать сон, кормления и остальные события. Чем больше данных, тем точнее прогнозы.',
        body:
            'Lupibu начинает работать сразу. Долгих настроек нет.\n\n' +
            '## Первые минуты\n' +
            '- Войдите через Apple — это единственный способ входа, отдельной регистрации нет.\n' +
            '- Пройдите онбординг: профиль ребёнка (имя и дата рождения — дата нужна, чтобы подбирать прогнозы под возраст), ваши цели и пара вопросов о режиме.\n' +
            '- В конце онбординга — экран подписки с бесплатным пробным периодом на 7 дней. Скажем честно: после пробного периода подписка становится платной. Отменить можно в любой момент — см. «Как отменить подписку Pro».\n' +
            '- Готово — вы на главном экране.\n\n' +
            '## Что делать дальше\n' +
            'На главном экране — плитки для быстрого ввода: сон, кормление, подгузник, прогулка и другие события. Нажмите на любую, чтобы запустить таймер или добавить запись.\n\n' +
            '## Когда появятся прогнозы\n' +
            'Первое окно бодрствования и прогноз следующего сна появятся после того, как вы запишете один-два сна. За 3–5 дней точность заметно подрастает — приложение учится на режиме именно вашего ребёнка.\n\n' +
            'Не стремитесь к идеальным записям. Пропущенный сон или примерное время — это нормально. Lupibu устроен так, чтобы помогать, а не требовать.'
    },
    'first-steps_en': {
        slug: 'first-steps',
        category: 'getting-started',
        title: 'How to get started with Lupibu',
        readMinutes: 2,
        keywords: ['start', 'first run', 'signup', 'child', 'new account', 'onboarding'],
        related: ['log-events', 'timers', 'widget'],
        tldr: 'Sign in with Apple, go through a short onboarding with your baby\'s profile — and Lupibu is ready to log sleep, feeds, and everything else. The more you log, the sharper the predictions get.',
        body:
            'Lupibu works from the first minute. There\'s no long setup.\n\n' +
            '## The first minutes\n' +
            '- Sign in with Apple — it\'s the only sign-in method; there\'s no separate account creation.\n' +
            '- Go through onboarding: your child\'s profile (name and birthday — the date is how we match predictions to age), your goals, and a few questions about your routine.\n' +
            '- Onboarding ends with a subscription screen offering a 7-day free trial. To be honest with you: after the trial the subscription becomes paid. You can cancel anytime — see "How to cancel Pro".\n' +
            '- Done — you\'re on the home screen.\n\n' +
            '## What to do next\n' +
            'The home screen has tiles for quick logging: sleep, feeds, diaper, walk, and the rest. Tap any tile to start a timer or add an entry.\n\n' +
            '## When predictions show up\n' +
            'Your first wake window and next-sleep prediction appear after you log one or two sleeps. In 3–5 days of regular use, accuracy climbs noticeably — the app is learning your baby\'s actual rhythm.\n\n' +
            'Don\'t aim for perfect records. A missed nap or an approximate time is fine. Lupibu is built to help, not to demand precision.'
    },
    'first-steps_kk': {
        slug: 'first-steps',
        category: 'getting-started',
        title: 'Lupibu-ды қалай бастау керек',
        readMinutes: 2,
        keywords: ['бастау', 'алғашқы қадамдар', 'тіркелу', 'бала', 'жаңа аккаунт', 'onboarding'],
        related: ['log-events', 'timers', 'widget'],
        tldr: 'Apple арқылы кіріп, бала профилі бар қысқа онбордингтен өтіңіз — сосын Lupibu ұйқы, тамақтану және басқа оқиғаларды жазуға дайын. Деректер көбейген сайын болжам дәлірек болады.',
        body:
            'Lupibu алғашқы минуттан бастап жұмыс істейді. Ұзақ баптау қажет емес.\n\n' +
            '## Алғашқы минуттар\n' +
            '- Apple арқылы кіріңіз — бұл кірудің жалғыз жолы, бөлек тіркелу жоқ.\n' +
            '- Онбордингтен өтіңіз: бала профилі (аты мен туған күні — күн жасқа сәйкес болжам жасау үшін қажет), мақсаттарыңыз және режим туралы бірнеше сұрақ.\n' +
            '- Онбординг соңында — 7 күндік тегін сынама кезеңі бар жазылым экраны. Шынын айтайық: сынама кезеңі аяқталған соң жазылым ақылы болады. Кез келген уақытта тоқтатуға болады — «Pro жазылымын қалай тоқтату керек» мақаласын қараңыз.\n' +
            '- Дайын — басты экрандасыз.\n\n' +
            '## Әрі қарай не істеу керек\n' +
            'Басты экранда жылдам жазудың плиткалары: ұйқы, тамақ, жөргек, серуен және басқалары. Таймерді іске қосу немесе жазба қосу үшін кез келгеніне басыңыз.\n\n' +
            '## Болжамдар қашан пайда болады\n' +
            'Алғашқы ояу терезесі мен келесі ұйқы болжамы бір-екі ұйқы жазылғаннан кейін көрінеді. 3–5 күн тұрақты қолданыстан кейін дәлдік айтарлықтай өседі — қолданба балаңыздың нақты ырғағын үйренеді.\n\n' +
            'Тамаша жазбаларға ұмтылудың қажеті жоқ. Өткізіп алынған ұйқы немесе шамамен көрсетілген уақыт — бұл қалыпты жағдай. Lupibu көмектесу үшін жасалған, дәлдік талап ету үшін емес.'
    },

    'log-events_ru': {
        slug: 'log-events',
        category: 'getting-started',
        title: 'Что и как фиксировать в течение дня',
        readMinutes: 2,
        keywords: ['записать', 'кормление', 'подгузник', 'прогулка', 'массаж', 'симптом', 'событие'],
        related: ['first-steps', 'timers', 'entry-types'],
        tldr: 'Отмечайте главное: сон, кормления, подгузники. Остальное — по желанию. Чем больше данных, тем точнее прогнозы, но даже минимум уже работает.',
        body:
            'Lupibu поддерживает 12 типов записей, но не обязательно вести всё. Начните с того, что реально важно для вашего ребёнка.\n\n' +
            '## Что точно стоит отмечать\n' +
            '- **Сон** — дневной и ночной. Основа для прогнозов.\n' +
            '- **Кормления** — грудь, бутылочка, прикорм. Влияет на ритм дня.\n' +
            '- **Подгузники** — особенно в первые месяцы (педиатры часто спрашивают).\n\n' +
            '## Что добавлять по ситуации\n' +
            '- Прогулки, массаж, купание — если важна связь с сном или настроением.\n' +
            '- Медицина: лекарства, визиты к врачу, вакцинация, симптомы.\n' +
            '- Свободная запись «Другое» — для всего нестандартного.\n\n' +
            '## Как это помогает\n' +
            'Все записи собираются в историю и ложатся в основу прогнозов и еженедельных отчётов. ИИ-ассистент анализирует их и отвечает на ваши вопросы про режим малыша.\n\n' +
            'Не стремитесь к полноте. Две-три записи в день — уже польза. Пропущенный день не ломает статистику.'
    },
    'log-events_en': {
        slug: 'log-events',
        category: 'getting-started',
        title: 'What and how to log during the day',
        readMinutes: 2,
        keywords: ['log', 'feed', 'diaper', 'walk', 'massage', 'symptom', 'event'],
        related: ['first-steps', 'timers', 'entry-types'],
        tldr: 'Log the essentials: sleep, feeds, diapers. The rest is optional. More data means better predictions, but even the minimum is useful.',
        body:
            'Lupibu supports 12 entry types, but you don\'t have to log all of them. Start with what matters for your child.\n\n' +
            '## What\'s worth logging\n' +
            '- **Sleep** — naps and night sleep. The basis for predictions.\n' +
            '- **Feeds** — breast, bottle, solids. Affects the day\'s rhythm.\n' +
            '- **Diapers** — especially in the first months (pediatricians often ask).\n\n' +
            '## Optional, as needed\n' +
            '- Walks, massage, bath — if you want to link them to sleep or mood.\n' +
            '- Medical: medication, doctor visits, vaccination, symptoms.\n' +
            '- "Other" for anything non-standard.\n\n' +
            '## How this helps\n' +
            'All entries form your history and feed predictions and weekly reports. The AI assistant uses them to answer questions about your baby\'s routine.\n\n' +
            'Don\'t aim for completeness. Two or three entries a day is already useful. A missed day doesn\'t break stats.'
    },
    'log-events_kk': {
        slug: 'log-events',
        category: 'getting-started',
        title: 'Күн ішінде нені және қалай белгілеу керек',
        readMinutes: 2,
        keywords: ['жазу', 'тамақтану', 'жөргек', 'серуен', 'симптом', 'оқиға'],
        related: ['first-steps', 'timers', 'entry-types'],
        tldr: 'Ең негізгісін жазыңыз: ұйқы, тамақтану, жөргек. Қалғаны — қалауыңыз бойынша. Деректер көп болған сайын болжам дәлірек болады, бірақ минимум да пайдалы.',
        body:
            'Lupibu 12 жазба түрін қолдайды, бірақ бәрін жазу міндетті емес. Балаңызға шынымен маңызды нәрседен бастаңыз.\n\n' +
            '## Жазған жөн\n' +
            '- **Ұйқы** — күндізгі және түнгі. Болжамдардың негізі.\n' +
            '- **Тамақтану** — емшек, бөтелке, қосымша тамақ. Күн ырғағына әсер етеді.\n' +
            '- **Жөргек** — әсіресе алғашқы айларда (педиатрлар жиі сұрайды).\n\n' +
            '## Қалауыңыз бойынша\n' +
            '- Серуен, массаж, шомылу — ұйқы мен көңіл-күймен байланыстыру керек болса.\n' +
            '- Медицина: дәрі, дәрігер сапары, вакцина, симптомдар.\n' +
            '- **«Басқа»** — стандартты емес нәрселер үшін еркін жазба.\n\n' +
            '## Бұл қалай көмектеседі\n' +
            'Барлық жазбалар тарихты құрайды және болжамдар мен апталық есептерге негіз болады. AI-ассистент оларды қолданып, балаңыздың режимі туралы сұрақтарыңызға жауап береді.\n\n' +
            'Толықтыққа ұмтылмаңыз. Күніне екі-үш жазба да пайдалы. Өткізіп алынған күн статистиканы бұзбайды.'
    },

    'timers_ru': {
        slug: 'timers',
        category: 'getting-started',
        title: 'Таймеры сна, кормления и прогулки',
        readMinutes: 2,
        keywords: ['таймер', 'сон', 'гв', 'грудное вскармливание', 'прогулка', 'запустить', 'остановить'],
        related: ['first-steps', 'log-events', 'prediction-accuracy'],
        tldr: 'Три типа записей имеют таймер: сон, грудное вскармливание, прогулка. Нажмите плитку на главной — таймер запустится. Нажмите ещё раз — остановится и сохранится.',
        body:
            'Таймеры нужны, чтобы не держать время в голове и не заполнять форму потом.\n\n' +
            '## Таймер сна\n' +
            'Нажмите «Сон» на главном экране, когда уложили малыша. Когда проснулся — откройте приложение и нажмите «Проснулся». Опционально отметьте качество сна.\n\n' +
            'Если забыли остановить таймер — не страшно. Можно поправить время окончания вручную.\n\n' +
            '## Таймер грудного вскармливания\n' +
            'Нажмите «Грудь» и выберите сторону. Приложение само подсказывает, с какой груди вы кормили в прошлый раз — удобно чередовать. Когда закончили — остановите таймер, запись сохранится.\n\n' +
            '## Таймер прогулки\n' +
            'Работает так же, как таймер сна: запустили, когда вышли, остановили, когда вернулись.\n\n' +
            '## Если таймер работал слишком долго\n' +
            'Это бывает — забыли остановить. Откройте запись в истории и поправьте время окончания. Прогнозы пересчитаются.'
    },
    'timers_en': {
        slug: 'timers',
        category: 'getting-started',
        title: 'Sleep, feeding, and walk timers',
        readMinutes: 2,
        keywords: ['timer', 'sleep', 'breast', 'breastfeeding', 'walk', 'start', 'stop'],
        related: ['first-steps', 'log-events', 'prediction-accuracy'],
        tldr: 'Three entry types have timers: sleep, breastfeeding, walk. Tap the tile to start. Tap again to stop — entry saves automatically.',
        body:
            'Timers exist so you don\'t have to remember exact times or fill a form after the fact.\n\n' +
            '## Sleep timer\n' +
            'Tap "Sleep" on the home screen once your baby is down. When they wake, open the app and tap "Wake up". Optionally rate sleep quality.\n\n' +
            'If you forget to stop the timer — no drama. You can edit the end time manually.\n\n' +
            '## Breastfeeding timer\n' +
            'Tap "Breast" and pick a side. The app remembers which side you used last time — easy to alternate. Tap again to stop and save.\n\n' +
            '## Walk timer\n' +
            'Same as sleep: start when you leave, stop when you\'re back.\n\n' +
            '## If a timer ran too long\n' +
            'Happens — forgot to stop. Open the entry in history and fix the end time. Predictions recalculate.'
    },
    'timers_kk': {
        slug: 'timers',
        category: 'getting-started',
        title: 'Ұйқы, емізу және серуен таймерлері',
        readMinutes: 2,
        keywords: ['таймер', 'ұйқы', 'емізу', 'серуен', 'іске қосу', 'тоқтату'],
        related: ['first-steps', 'log-events', 'prediction-accuracy'],
        tldr: 'Үш жазба түрінде таймер бар: ұйқы, емшек, серуен. Басты экрандағы плиткаға басыңыз — таймер іске қосылады. Қайта басыңыз — тоқтайды да, жазба сақталады.',
        body:
            'Таймерлер — уақытты есте сақтамау және кейін форма толтырып отырмау үшін.\n\n' +
            '## Ұйқы таймері\n' +
            'Баланы жатқызған кезде басты экрандағы «Ұйқы» батырмасын басыңыз. Оянғанда қолданбаны ашып, «Оянды» батырмасын басыңыз. Қаласаңыз, ұйқы сапасын белгілей аласыз.\n\n' +
            'Таймерді тоқтатуды ұмытып қалсаңыз, қорқудың қажеті жоқ — аяқталу уақытын кейін қолмен түзетуге болады.\n\n' +
            '## Емізу таймері\n' +
            '«Емшек» батырмасын басып, жағын таңдаңыз. Қолданба соңғы рет қай жақпен емізгеніңізді есте сақтайды — ауыстырып емізуге ыңғайлы. Аяқтағанда таймерді тоқтатыңыз, жазба сақталады.\n\n' +
            '## Серуен таймері\n' +
            'Ұйқы таймеріндей жұмыс істейді: шыққанда іске қосыңыз, қайтқанда тоқтатыңыз.\n\n' +
            '## Таймер тым ұзақ жұмыс істеп кетсе\n' +
            'Мұндай жағдай болып тұрады — тоқтатуды ұмытасыз. Тарихтан жазбаны ашып, аяқталу уақытын қолмен түзетіңіз. Болжамдар қайта есептеледі.'
    },

    'widget_ru': {
        slug: 'widget',
        category: 'getting-started',
        title: 'Виджет Lupibu на экране iPhone',
        readMinutes: 1,
        keywords: ['виджет', 'iphone', 'домашний экран', 'lock screen', 'быстрый доступ'],
        related: ['first-steps', 'prediction-accuracy'],
        tldr: 'Добавьте виджет Lupibu, чтобы видеть время бодрствования и прогноз следующего сна без открытия приложения. В маленьком и среднем виджете можно запускать и останавливать сон прямо с домашнего экрана.',
        body:
            'Виджет — самый быстрый способ знать, когда малыш захочет спать.\n\n' +
            '## Как добавить\n' +
            '- Зажмите пустое место на домашнем экране iPhone\n' +
            '- Нажмите «+» в левом верхнем углу\n' +
            '- Найдите Lupibu → выберите размер виджета → «Добавить»\n\n' +
            '## Что показывает виджет\n' +
            '- Сколько времени малыш бодрствует\n' +
            '- Текущий сон (если идёт) — с таймером\n' +
            '- Прогноз следующего укладывания\n\n' +
            '## Кнопки прямо в виджете\n' +
            'В маленьком и среднем виджете на домашнем экране есть кнопки «Начать сон» и «Остановить» — таймер запускается без открытия приложения. Работает на iOS 17 и новее.\n\n' +
            '## Виджеты на экране блокировки\n' +
            'Lupibu можно добавить и на экран блокировки — там виджет показывает только отсчёт до следующего сна, без кнопок.\n\n' +
            'Во время сна виджет обновляется каждую минуту. Если вам кажется, что виджет показывает устаревшую информацию — откройте приложение, и всё пересчитается.'
    },
    'widget_en': {
        slug: 'widget',
        category: 'getting-started',
        title: 'Lupibu iPhone widget',
        readMinutes: 1,
        keywords: ['widget', 'iphone', 'home screen', 'lock screen', 'quick access'],
        related: ['first-steps', 'prediction-accuracy'],
        tldr: 'Add the Lupibu widget to see wake time and next-sleep prediction without opening the app. Small and medium widgets let you start and stop sleep right from the home screen.',
        body:
            'The widget is the fastest way to know when your baby will want to sleep.\n\n' +
            '## How to add it\n' +
            '- Long-press an empty spot on your iPhone home screen\n' +
            '- Tap "+" in the top-left corner\n' +
            '- Find Lupibu → pick a widget size → "Add"\n\n' +
            '## What it shows\n' +
            '- How long your baby has been awake\n' +
            '- Current sleep (if in progress) — with a live timer\n' +
            '- Next sleep prediction\n\n' +
            '## Buttons right in the widget\n' +
            'The small and medium home-screen widgets have Start sleep / Stop buttons — the timer starts without opening the app. Requires iOS 17 or later.\n\n' +
            '## Lock Screen widgets\n' +
            'You can also add Lupibu to the Lock Screen — there the widget shows the countdown to the next sleep only, no buttons.\n\n' +
            'During sleep the widget updates every minute. If something looks stale, open the app and it will recalculate.'
    },
    'widget_kk': {
        slug: 'widget',
        category: 'getting-started',
        title: 'iPhone экранындағы Lupibu виджеті',
        readMinutes: 1,
        keywords: ['виджет', 'iphone', 'үй экраны', 'lock screen', 'жылдам қатынас'],
        related: ['first-steps', 'prediction-accuracy'],
        tldr: 'Lupibu виджетін қосыңыз — қолданбаны ашпай-ақ ояу уақыты мен келесі ұйқы болжамын көре аласыз. Кіші және орташа виджетте ұйқыны үй экранынан бастап, тоқтатуға болады.',
        body:
            'Виджет — балаңыздың қашан ұйықтайтынын білудің ең жылдам жолы.\n\n' +
            '## Қалай қосу керек\n' +
            '- iPhone үй экранындағы бос жерді ұзақ басыңыз.\n' +
            '- Сол жақ жоғарғы бұрыштағы **«+»** батырмасын басыңыз.\n' +
            '- Lupibu-ды табыңыз → виджет өлшемін таңдаңыз → **«Қосу»**.\n\n' +
            '## Не көрсетеді\n' +
            '- Баланың қанша уақыт ояу жүргенін.\n' +
            '- Ағымдағы ұйқыны — жүріп жатса, таймермен.\n' +
            '- Келесі ұйықтау уақытының болжамын.\n\n' +
            '## Виджеттегі батырмалар\n' +
            'Үй экранындағы кіші және орташа виджетте «Ұйқыны бастау» / «Тоқтату» батырмалары бар — таймер қолданбаны ашпай-ақ іске қосылады. iOS 17 және одан жаңа нұсқада жұмыс істейді.\n\n' +
            '## Құлыптау экранындағы виджеттер\n' +
            'Lupibu-ды құлыптау экранына да қосуға болады — онда виджет тек келесі ұйқыға дейінгі кері санақты көрсетеді, батырмалар жоқ.\n\n' +
            'Ұйқы кезінде виджет әр минут сайын жаңарады. Виджет ескі ақпарат көрсетіп тұрғандай болса, қолданбаны ашыңыз — бәрі қайта есептеледі.'
    },

    'backfill_ru': {
        slug: 'backfill',
        category: 'getting-started',
        title: 'Как записать сон или событие задним числом',
        readMinutes: 2,
        keywords: ['задним числом', 'забыл', 'пропустил', 'вручную', 'прошлое', 'офлайн'],
        related: ['timers', 'log-events', 'edit-delete'],
        tldr: 'Любую запись можно добавить вручную — хоть вчерашнюю, хоть недельной давности. Выберите тип события на главном экране и укажите время.',
        body:
            'Забыли включить таймер? Не отметили ночной сон? Это нормально — Lupibu не требует идеальных записей в реальном времени.\n\n' +
            '## Как добавить задним числом\n' +
            '- На главном экране нажмите на плитку нужного типа (например, «Сон»)\n' +
            '- В форме укажите время начала и окончания вручную\n' +
            '- Сохраните\n\n' +
            '## Голосом — ещё быстрее\n' +
            'Можно надиктовать AI-ассистенту: «Вчера уснул в 14:20, проснулся в 15:30» — он сам создаст запись с правильным временем.\n\n' +
            '## Работа без интернета\n' +
            'Таймеры сна и ГВ можно останавливать без связи — запись сохранится на устройстве и синхронизируется, когда интернет вернётся.\n\n' +
            '## Влияет ли это на прогнозы\n' +
            'Да — прогнозы учитывают все записи, независимо от того, когда вы их добавили. Записи задним числом работают так же, как записи в реальном времени.'
    },
    'backfill_en': {
        slug: 'backfill',
        category: 'getting-started',
        title: 'How to log sleep or events after the fact',
        readMinutes: 2,
        keywords: ['backfill', 'forgot', 'missed', 'manual', 'past', 'offline'],
        related: ['timers', 'log-events', 'edit-delete'],
        tldr: 'Any entry can be added manually — yesterday, last week, whenever. Pick the type on the home screen and enter the time.',
        body:
            'Forgot to start a timer? Didn\'t log night sleep? That\'s fine — Lupibu doesn\'t demand perfect real-time records.\n\n' +
            '## Adding an entry after the fact\n' +
            '- On the home screen, tap the tile for the entry type (e.g. "Sleep")\n' +
            '- Enter start and end time manually\n' +
            '- Save\n\n' +
            '## Even faster with voice\n' +
            'Dictate to the AI assistant: "Last night he fell asleep at 8 and woke at 6" — it creates the entry with the right time.\n\n' +
            '## Works offline\n' +
            'Sleep and breastfeeding timers can be stopped without a connection — the entry saves on device and syncs when you\'re back online.\n\n' +
            '## Does this affect predictions?\n' +
            'Yes — predictions use all entries, whenever they were added. Backfilled entries work the same as real-time ones.'
    },
    'backfill_kk': {
        slug: 'backfill',
        category: 'getting-started',
        title: 'Ұйқыны немесе оқиғаны кейін қалай жазу керек',
        readMinutes: 2,
        keywords: ['кейін', 'ұмытқан', 'өткізіп алған', 'қолмен', 'өткен', 'офлайн'],
        related: ['timers', 'log-events', 'edit-delete'],
        tldr: 'Кез келген жазбаны қолмен қосуға болады — кешегі болсын, өткен аптадағы болсын. Басты экранда түрін таңдап, уақытын көрсетіңіз.',
        body:
            'Таймерді іске қосуды ұмыттыңыз ба? Түнгі ұйқыны белгілемедіңіз бе? Қалыпты жағдай — Lupibu мінсіз нақты-уақыт жазбаларын талап етпейді.\n\n' +
            '## Кейін қалай қосу керек\n' +
            '- Басты экрандағы тиісті түрдің плиткасын басыңыз (мысалы, «Ұйқы»).\n' +
            '- Формада басталу мен аяқталу уақытын қолмен көрсетіңіз.\n' +
            '- Сақтаңыз.\n\n' +
            '## Дауыспен — одан да жылдам\n' +
            'AI-ассистентке айтып жіберуге болады: «Кеше 14:20-да ұйықтап, 15:30-да оянды» — ол жазбаны дұрыс уақытымен өзі жасайды.\n\n' +
            '## Интернетсіз жұмыс\n' +
            'Ұйқы мен емізу таймерлерін желісіз тоқтатуға болады — жазба құрылғыда сақталып, интернет қайтқанда синхрондалады.\n\n' +
            '## Бұл болжамдарға әсер ете ме\n' +
            'Иә — болжамдар барлық жазбаларды ескереді, қашан енгізілсе де. Кейін қосылған жазбалар нақты-уақыт жазбаларымен бірдей жұмыс істейді.'
    },

    /* ======================================== */
    /*  SLEEP & PREDICTIONS (5 articles)        */
    /* ======================================== */

    'prediction-accuracy_ru': {
        slug: 'prediction-accuracy',
        category: 'sleep',
        title: 'Почему прогноз сна неточный',
        readMinutes: 3,
        keywords: ['прогноз', 'неточный', 'ошибка', 'не угадывает', 'сдвиг', 'отклонение'],
        related: ['wake-windows', 'nap-vs-night', 'ready-not-tired'],
        tldr: 'Первые 5–7 дней прогноз учится на ваших данных. Дальше он точнее, но никакое приложение не предскажет скачок роста, вакцинацию, болезнь или просто плохую ночь. Именно поэтому Lupibu подстраивается под ребёнка, а не указывает ему.',
        body:
            'Прогноз не совпал с реальностью — это не баг, а часть нормальной работы алгоритма. Разберём, почему так бывает и что с этим делать.\n\n' +
            '## Как работает прогноз\n' +
            'Lupibu опирается на три источника:\n' +
            '- Возраст ребёнка — педиатрические нормы сна как стартовая точка.\n' +
            '- Ваши последние записи сна и бодрствования.\n' +
            '- Паттерны — как именно ваш ребёнок обычно засыпает в это время суток.\n\n' +
            'По мере накопления данных общие нормы отходят на второй план, а персональные паттерны выходят вперёд.\n\n' +
            '## Почему бывают промахи\n' +
            '- **Первая неделя.** Данных мало, и прогноз опирается больше на возрастные нормы.\n' +
            '- **Скачок роста или sleep regression.** Ребёнок временно меняет режим. Прогноз отстаёт на 2–3 дня и затем подстраивается.\n' +
            '- **Вакцинация, прорезывание зубов, болезнь.** Прогноз строится только на записях сна и не знает о таких событиях. Записывать симптомы всё равно полезно — их видит ИИ-ассистент, и это готовый контекст для разговора с педиатром.\n' +
            '- **Пропущенные записи.** Если вы не отметили предыдущий сон, прогноз считается от последнего известного.\n\n' +
            '## Что можно сделать\n' +
            '- Продолжайте записывать сны. За 5–7 дней регулярных записей точность заметно растёт.\n' +
            '- Если малыш проснулся раньше или позже прогноза, просто запишите реальный сон. Приложение скорректируется само.\n\n' +
            'Lupibu не навязывает режим — он показывает наиболее вероятное окно. Решение всегда за вами: сигналы ребёнка важнее любого прогноза.'
    },
    'prediction-accuracy_en': {
        slug: 'prediction-accuracy',
        category: 'sleep',
        title: 'Why is my sleep prediction off?',
        readMinutes: 3,
        keywords: ['prediction', 'inaccurate', 'wrong', 'off', 'drift', 'mismatch'],
        related: ['wake-windows', 'nap-vs-night', 'ready-not-tired'],
        tldr: 'In the first 5–7 days predictions are still learning your data. After that they get sharper, but no app can predict growth spurts, teething, or an off night — that\'s why Lupibu adapts instead of dictating.',
        body:
            'If a prediction missed, that\'s not a bug — it\'s how the model is supposed to work. Here\'s why and what to do.\n\n' +
            '## How predictions work\n' +
            'Lupibu looks at three things:\n' +
            '- Your child\'s age (pediatric sleep research as a starting point)\n' +
            '- Your most recent sleep and wake entries\n' +
            '- Patterns — how your specific child usually falls asleep at this time of day\n\n' +
            'As data accumulates, the age norms fade and personal patterns take over.\n\n' +
            '## Why it misses sometimes\n' +
            '- **First week** — limited data, predictions lean on age norms.\n' +
            '- **Growth spurt or sleep regression** — routine shifts temporarily. Predictions lag 2–3 days, then adjust.\n' +
            '- **Vaccination, teething, illness** — predictions are built from sleep entries only, so they don\'t know about these events. Logging symptoms is still useful: the AI assistant sees them, and it\'s ready-made context for your pediatrician.\n' +
            '- **Missed entries** — if you didn\'t log the last sleep, predictions count from the most recent known one.\n\n' +
            '## What you can do\n' +
            '- Keep logging sleeps — after 5–7 regular days accuracy improves visibly.\n' +
            '- If your baby wakes early or late, just log the real sleep. The app self-corrects.\n\n' +
            'Lupibu doesn\'t push a schedule — it shows the most likely window. Your baby\'s signals always beat a prediction.'
    },
    'prediction-accuracy_kk': {
        slug: 'prediction-accuracy',
        category: 'sleep',
        title: 'Ұйқы болжамы неге дәл емес',
        readMinutes: 3,
        keywords: ['болжам', 'дәл емес', 'қате', 'ауытқу'],
        related: ['wake-windows', 'nap-vs-night', 'ready-not-tired'],
        tldr: 'Алғашқы 5–7 күнде болжам деректеріңізден үйреніп жатады. Одан кейін дәлдік өседі, бірақ ешбір қолданба өсу секірісін, вакцинаны, ауруды немесе жай ғана нашар түнді болжай алмайды. Сондықтан Lupibu балаға бейімделеді, бұйрық бермейді.',
        body:
            'Болжам шындықпен сәйкес келмесе — бұл қате емес, алгоритмнің қалыпты жұмысы. Қашан және неге олай болатынын қарастырайық.\n\n' +
            '## Болжам қалай жұмыс істейді\n' +
            'Lupibu үш нәрсеге сүйенеді:\n' +
            '- Баланың жасы — педиатриялық ұйқы нормалары бастапқы нүкте ретінде.\n' +
            '- Соңғы ұйқы мен ояу жазбалары.\n' +
            '- Үлгілер — сіздің балаңыз тәуліктің осы уақытында әдетте қалай ұйықтайды.\n\n' +
            'Деректер жинала келе жалпы нормалар фонда қалады да, сіздің жеке үлгіңіз алға шығады.\n\n' +
            '## Неге кейде қателеседі\n' +
            '- **Алғашқы апта.** Деректер аз, сондықтан болжам көбірек жас нормаларына сүйенеді.\n' +
            '- **Өсу секірісі немесе ұйқы регрессиясы.** Режим уақытша өзгереді — болжам 2–3 күнге кешігіп, содан кейін бейімделеді.\n' +
            '- **Вакцина, тіс шығу, ауру.** Болжам тек ұйқы жазбаларына құрылады, мұндай оқиғаларды білмейді. Симптомдарды жазу бәрібір пайдалы: оларды AI-ассистент көреді, әрі бұл педиатрмен сөйлесуге дайын контекст.\n' +
            '- **Өткізіп алынған жазбалар.** Алдыңғы ұйқы жазылмаса, болжам соңғы белгілі жазбадан есептеледі.\n\n' +
            '## Не істеуге болады\n' +
            '- Ұйқыларды жазуды жалғастырыңыз — 5–7 күн тұрақты жазба дәлдікті көтереді.\n' +
            '- Бала болжамнан ерте не кеш оянса, нақты ұйқыны жай ғана жазып қойыңыз — қолданба өзі түзетеді.\n\n' +
            'Lupibu режим таңбайды — ол ықтимал терезені ғана көрсетеді. Шешім әрдайым сізде: баланың сигналы болжамнан маңыздырақ.'
    },

    'wake-windows_ru': {
        slug: 'wake-windows',
        category: 'sleep',
        title: 'Что такое окно бодрствования и как оно меняется',
        readMinutes: 3,
        keywords: ['wake window', 'окно бодрствования', 'бодрствование', 'интервал', 'усталость'],
        related: ['prediction-accuracy', 'ready-not-tired', 'nap-vs-night'],
        tldr: 'Окно бодрствования — это время, которое ребёнок может не спать между снами без перегрева. С возрастом оно удлиняется. Lupibu подбирает окно под вашего ребёнка, а не под общую таблицу.',
        body:
            'Окно бодрствования — один из главных ориентиров для планирования сна. Но у каждого ребёнка оно своё.\n\n' +
            '## Приблизительные значения по возрасту\n' +
            '- 0–3 месяца: 45–90 минут\n' +
            '- 3–6 месяцев: 1.5–2.5 часа\n' +
            '- 6–9 месяцев: 2–3 часа\n' +
            '- 9–12 месяцев: 2.5–3.5 часа\n' +
            '- 1–2 года: 4–6 часов между снами\n\n' +
            'Это диапазоны, а не требование. Разброс внутри возраста — нормальный.\n\n' +
            '## Как Lupibu подстраивает окно под вашего ребёнка\n' +
            'Когда накапливается 5–7 дней записей, Lupibu начинает учитывать ваш реальный паттерн. Если ваш малыш всегда засыпает через 2 часа 10 минут после пробуждения — окно подстроится именно под это, а не под общую норму.\n\n' +
            '## Признаки, что окно подходит к концу\n' +
            '- Ребёнок трёт глазки, зевает, теряет интерес к игре\n' +
            '- Капризы без понятной причины\n' +
            '- «Второе дыхание» — внезапная гиперактивность (часто уже пересидели)\n\n' +
            'Приложение показывает прогноз, но финальное решение — за вами и сигналами малыша.'
    },
    'wake-windows_en': {
        slug: 'wake-windows',
        category: 'sleep',
        title: 'What is a wake window and how it changes',
        readMinutes: 3,
        keywords: ['wake window', 'awake time', 'interval', 'overtired'],
        related: ['prediction-accuracy', 'ready-not-tired', 'nap-vs-night'],
        tldr: 'A wake window is how long your baby can stay up between sleeps without getting overtired. It grows with age. Lupibu tunes it to your baby, not a generic chart.',
        body:
            'Wake windows are one of the main anchors for sleep planning. Every baby has their own.\n\n' +
            '## Rough age ranges\n' +
            '- 0–3 months: 45–90 minutes\n' +
            '- 3–6 months: 1.5–2.5 hours\n' +
            '- 6–9 months: 2–3 hours\n' +
            '- 9–12 months: 2.5–3.5 hours\n' +
            '- 1–2 years: 4–6 hours between naps\n\n' +
            'These are ranges, not rules. Variation within an age bracket is normal.\n\n' +
            '## How Lupibu tunes it\n' +
            'After 5–7 days of entries, Lupibu starts using your real pattern. If your baby reliably falls asleep 2 hours 10 minutes after waking — that\'s what the app uses.\n\n' +
            '## Signs the window is closing\n' +
            '- Eye rubbing, yawning, losing interest in play\n' +
            '- Unexplained fussing\n' +
            '- "Second wind" — sudden hyperactivity (often already overtired)\n\n' +
            'The app shows a prediction, but your baby\'s cues have the final say.'
    },
    'wake-windows_kk': {
        slug: 'wake-windows',
        category: 'sleep',
        title: 'Ояу терезесі дегеніміз не және қалай өзгереді',
        readMinutes: 3,
        keywords: ['ояу терезесі', 'ояу уақыты', 'интервал', 'шаршау'],
        related: ['prediction-accuracy', 'ready-not-tired', 'nap-vs-night'],
        tldr: 'Ояу терезесі — бала ұйқылар арасында шаршамай ояу жүре алатын уақыт. Жасқа қарай ұзарады. Lupibu оны жалпы кестеге емес, сіздің балаңызға бейімдейді.',
        body:
            'Ояу терезесі — ұйқыны жоспарлаудың басты бағдарларының бірі. Бірақ әр балада өзінікі бар.\n\n' +
            '## Жас бойынша шамамен\n' +
            '- 0–3 ай: 45–90 минут\n' +
            '- 3–6 ай: 1,5–2,5 сағат\n' +
            '- 6–9 ай: 2–3 сағат\n' +
            '- 9–12 ай: 2,5–3,5 сағат\n' +
            '- 1–2 жас: ұйқылар арасы 4–6 сағат\n\n' +
            'Бұл — диапазондар, ереже емес. Бір жас ішіндегі ауытқу қалыпты.\n\n' +
            '## Lupibu оны қалай бейімдейді\n' +
            '5–7 күн жазбадан кейін Lupibu сіздің нақты үлгіңізді пайдалана бастайды. Балаңыз оянғаннан соң әрдайым 2 сағат 10 минутта ұйықтайтын болса — терезе дәл соған теңеледі, жалпы нормаға емес.\n\n' +
            '## Терезе аяқталып келе жатқанының белгілері\n' +
            '- Көзді уқалау, есінеу, ойыннан көңілі қалу.\n' +
            '- Себепсіз шытынау.\n' +
            '- «Екінші тыныс» — кенет гиперактивтілік, бұл көбіне шаршап кеткеннің белгісі.\n\n' +
            'Қолданба болжам көрсетеді, бірақ соңғы сөз сізде және баланың сигналдарында.'
    },

    'nap-vs-night_ru': {
        slug: 'nap-vs-night',
        category: 'sleep',
        title: 'Как Lupibu отличает дневной сон от ночного',
        readMinutes: 2,
        keywords: ['дневной', 'ночной', 'nap', 'ночь', 'классификация', 'нап'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Автоматически, по времени: сон, начавшийся в ночные часы или по большей части пересекающийся с ночью, считается ночным. Ручного переключателя нет — если тип неверный, поправьте время записи, и она переклассифицируется.',
        body:
            'Разница между напом и ночным сном важна для прогнозов — ночь «сбрасывает» усталость, нап нет.\n\n' +
            '## Как классификация работает\n' +
            'Тип определяется автоматически, по двум правилам:\n' +
            '- **Время начала.** Сон, начавшийся в ночные часы (вечером после обычного отбоя или под утро), считается ночным.\n' +
            '- **Пересечение с ночью.** Завершённый сон, который на 60% и больше своей длительности попадает в ночное окно, тоже считается ночным.\n\n' +
            'Всё остальное — дневной сон.\n\n' +
            '## Если тип определился неверно\n' +
            'Отдельного переключателя «дневной/ночной» в записи нет — тип зависит только от времени. Откройте запись и поправьте время начала или окончания: классификация пересчитается автоматически.\n\n' +
            '## На что это влияет\n' +
            '- Прогноз следующего сна\n' +
            '- Еженедельная статистика (отдельно дневной и ночной)\n' +
            '- Расчёт окна бодрствования после сна'
    },
    'nap-vs-night_en': {
        slug: 'nap-vs-night',
        category: 'sleep',
        title: 'How Lupibu tells a nap from night sleep',
        readMinutes: 2,
        keywords: ['nap', 'night', 'sleep type', 'classification'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Automatically, by time: a sleep that starts in night hours or mostly overlaps the night counts as night sleep. There\'s no manual switch — if the type is wrong, adjust the entry\'s times and it reclassifies.',
        body:
            'Nap vs night matters for predictions — night resets tiredness, naps don\'t.\n\n' +
            '## How classification works\n' +
            'The type is set automatically, by two rules:\n' +
            '- **Start time.** A sleep that starts in night hours (in the evening after the usual bedtime, or before morning) counts as night.\n' +
            '- **Night overlap.** A finished sleep whose duration overlaps the night window by 60% or more also counts as night.\n\n' +
            'Everything else is a nap.\n\n' +
            '## If the type came out wrong\n' +
            'There\'s no nap/night toggle in the entry — the type depends only on the times. Open the entry and fix the start or end time: classification recalculates automatically.\n\n' +
            '## What it affects\n' +
            '- Next-sleep prediction\n' +
            '- Weekly stats (naps and night separately)\n' +
            '- Wake-window calculation after sleep'
    },
    'nap-vs-night_kk': {
        slug: 'nap-vs-night',
        category: 'sleep',
        title: 'Lupibu күндізгі ұйқыны түнгіден қалай ажыратады',
        readMinutes: 2,
        keywords: ['күндізгі', 'түнгі', 'нап', 'жіктеу', 'түрі'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Автоматты түрде, уақыт бойынша: түнгі сағаттарда басталған немесе көбіне түнмен қабаттасатын ұйқы түнгі болып саналады. Қолмен ауыстырғыш жоқ — түрі қате болса, жазбаның уақытын түзетіңіз, ол қайта жіктеледі.',
        body:
            'Күндізгі және түнгі ұйқының айырмасы болжам үшін маңызды: түн шаршауды «нөлдейді», ал нап — жоқ.\n\n' +
            '## Жіктеу қалай жұмыс істейді\n' +
            'Түрі автоматты түрде, екі ережемен анықталады:\n' +
            '- **Басталу уақыты.** Түнгі сағаттарда (кешке әдеттегі жату уақытынан кейін немесе таң алдында) басталған ұйқы түнгі болып саналады.\n' +
            '- **Түнмен қабаттасу.** Ұзақтығының 60% немесе одан көбі түнгі терезеге түсетін аяқталған ұйқы да түнгі болып саналады.\n\n' +
            'Қалғанының бәрі — күндізгі ұйқы.\n\n' +
            '## Түрі қате анықталса\n' +
            'Жазбада «күндізгі/түнгі» ауыстырғышы жоқ — түрі тек уақытқа байланысты. Жазбаны ашып, басталу немесе аяқталу уақытын түзетіңіз: жіктеу автоматты түрде қайта есептеледі.\n\n' +
            '## Неге әсер етеді\n' +
            '- Келесі ұйқы болжамына.\n' +
            '- Апталық статистикаға (күндізгі мен түнгі бөлек есептеледі).\n' +
            '- Ұйқыдан кейінгі ояу терезесінің есебіне.'
    },

    'norms_ru': {
        slug: 'norms',
        category: 'sleep',
        title: 'Ребёнок спит меньше (или больше) нормы — это плохо?',
        readMinutes: 3,
        keywords: ['норма', 'мало спит', 'много спит', 'отклонение', 'волнуюсь'],
        related: ['prediction-accuracy', 'wake-windows'],
        tldr: 'Почти никогда. «Норма» — это медиана по популяции, а не цель. Если ребёнок активен, ест и развивается, его норма может просто отличаться от таблицы.',
        body:
            'В рекомендации написано «12 часов сна в сутки», а ваш малыш спит 10 — и вот уже тревожно. Разберём, на что смотреть по-настоящему.\n\n' +
            '## Что такое «норма»\n' +
            'Это статистическая медиана — половина детей спит больше, половина меньше. Педиатрические исследования сна задают широкий диапазон (например, 0–3 месяца: 14–17 часов). Если ребёнок попадает в диапазон, всё в порядке.\n\n' +
            '## Когда стоит обратить внимание\n' +
            '- Малыш постоянно выглядит вялым или, наоборот, перевозбуждённым.\n' +
            '- Не набирает вес.\n' +
            '- Просыпается ночью каждые 30–60 минут больше двух недель подряд.\n' +
            '- Есть явные физические симптомы — кашель, рвота, сыпь.\n\n' +
            'В этих случаях — к педиатру, а не к приложению.\n\n' +
            '## Что показывает Lupibu\n' +
            'Приложение показывает ваши данные и диапазон нормы для возраста, но не ставит диагнозов. 10,5 часов вместо 12 может быть просто особенностью именно вашего ребёнка.\n\n' +
            'Доверяйте ребёнку больше, чем таблице.'
    },
    'norms_en': {
        slug: 'norms',
        category: 'sleep',
        title: 'My baby sleeps less (or more) than the norm — is that bad?',
        readMinutes: 3,
        keywords: ['norm', 'sleeps less', 'sleeps more', 'off chart', 'worried'],
        related: ['prediction-accuracy', 'wake-windows'],
        tldr: 'Almost never. "Norms" are population medians, not targets. If your baby is active, eating, and growing — their norm may differ from the table.',
        body:
            'Seeing "12 hours of sleep a day" in a recommendation while yours sleeps 10 is stressful. Here\'s what actually matters.\n\n' +
            '## What "norm" means\n' +
            'It\'s a statistical median — half of babies sleep more, half less. Pediatric sleep research gives a wide range (e.g. 0–3 months: 14–17 hours). If your baby is inside the range, you\'re fine.\n\n' +
            '## When to pay attention\n' +
            '- Persistent lethargy or hyperarousal\n' +
            '- Weight not tracking\n' +
            '- Waking every 30–60 minutes for more than two weeks straight\n' +
            '- Clear physical symptoms (cough, vomiting, rash)\n\n' +
            'In those cases — your pediatrician, not an app.\n\n' +
            '## What Lupibu shows\n' +
            'The app shows your data and the age-appropriate range, not a diagnosis. 10.5 hours instead of 12 may simply be who your baby is.\n\n' +
            'Trust your baby more than the chart.'
    },
    'norms_kk': {
        slug: 'norms',
        category: 'sleep',
        title: 'Балам нормадан аз (немесе көп) ұйықтайды — бұл жаман ба?',
        readMinutes: 3,
        keywords: ['норма', 'аз ұйықтайды', 'көп ұйықтайды', 'ауытқу', 'алаңдау'],
        related: ['prediction-accuracy', 'wake-windows'],
        tldr: 'Дерлік ешқашан. «Норма» — популяция бойынша медиана, мақсат емес. Бала белсенді, тамақтанып, дамып жатса — оның өз нормасы кестеден ерекше болуы мүмкін.',
        body:
            'Ұсыныста «тәулігіне 12 сағат ұйқы» деп жазылған, ал балаңыз 10 сағат ұйықтайды — және ойға алаңдау кіреді. Шын мәнінде неге қарау керектігін қарастырайық.\n\n' +
            '## «Норма» дегеніміз не\n' +
            'Бұл — статистикалық медиана: балалардың жартысы одан көп, жартысы аз ұйықтайды. Педиатриялық ұйқы зерттеулері кең диапазон береді (мысалы, 0–3 ай: 14–17 сағат). Балаңыз диапазонға кіретін болса, бәрі жақсы.\n\n' +
            '## Қашан назар аудару керек\n' +
            '- Бала тұрақты түрде әлсіреген немесе керісінше, тым қозған.\n' +
            '- Салмақ қоспай жатыр.\n' +
            '- Екі аптадан артық түн сайын әр 30–60 минут сайын оянады.\n' +
            '- Айқын физикалық симптомдар бар — жөтел, құсу, бөртпе.\n\n' +
            'Мұндай жағдайларда — педиатрға, қолданбаға емес.\n\n' +
            '## Lupibu не көрсетеді\n' +
            'Қолданба сіздің деректеріңіз бен жасқа сай норма диапазонын көрсетеді, бірақ диагноз қоймайды. 12-нің орнына 10,5 сағат — балаңыздың жай ғана өзіндік ерекшелігі болуы мүмкін.\n\n' +
            'Балаға кестеден гөрі көбірек сеніңіз.'
    },

    'ready-not-tired_ru': {
        slug: 'ready-not-tired',
        category: 'sleep',
        title: 'Lupibu говорит «пора спать», а ребёнок не устал',
        readMinutes: 2,
        keywords: ['не устал', 'пора спать', 'не хочет', 'активный', 'бодрый'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Прогноз — это вероятное окно, а не команда. Если ребёнок явно активен и в хорошем настроении — подождите 15–20 минут и посмотрите на сигналы усталости.',
        body:
            'Lupibu показывает прогноз с небольшим запасом — чтобы вы успели уложить до перегрева. Но приложение не знает точно, что происходит в комнате.\n\n' +
            '## Что делать\n' +
            '- Посмотрите на ребёнка: есть ли зевота, потирание глаз, капризы?\n' +
            '- Если нет — подождите 15–20 минут и проверьте ещё раз\n' +
            '- Если «второе дыхание» — малыш внезапно гиперактивен, значит уже пересидели. В этом случае уложите как можно быстрее\n\n' +
            '## Почему это нормально\n' +
            'Прогноз основан на среднем окне бодрствования. В разные дни оно колеблется на ±30–60 минут. Если сегодня окно длиннее обычного — просто запишите сон, когда он случится, и приложение обновит прогноз.\n\n' +
            '## Что НЕ нужно делать\n' +
            'Не укладывайте силой по таймеру — это приведёт к долгим засыпаниям и слезам. Сигналы ребёнка всегда важнее.'
    },
    'ready-not-tired_en': {
        slug: 'ready-not-tired',
        category: 'sleep',
        title: 'Lupibu says "time to sleep" but baby isn\'t tired',
        readMinutes: 2,
        keywords: ['not tired', 'time to sleep', 'won\'t sleep', 'active', 'alert'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'The prediction is a likely window, not a command. If your baby is clearly alert and happy — wait 15–20 minutes and watch for tired cues.',
        body:
            'Lupibu shows predictions with a small lead so you have time to settle baby before they overtire. But the app can\'t see the room.\n\n' +
            '## What to do\n' +
            '- Check baby: yawning, eye rubbing, fussing?\n' +
            '- If not — wait 15–20 minutes and check again\n' +
            '- If "second wind" — sudden hyperactivity — they\'re already overtired. Settle fast\n\n' +
            '## Why this is fine\n' +
            'Predictions use your average wake window. Day to day it varies by ±30–60 minutes. When today\'s window runs longer — log the sleep when it happens, predictions update.\n\n' +
            '## What NOT to do\n' +
            'Don\'t force sleep by the timer — it leads to long settling and tears. Your baby\'s cues always win.'
    },
    'ready-not-tired_kk': {
        slug: 'ready-not-tired',
        category: 'sleep',
        title: 'Lupibu «ұйықтар уақыт» дейді, ал бала шаршамаған',
        readMinutes: 2,
        keywords: ['шаршамаған', 'ұйықтар уақыт', 'ұйықтағысы келмейді', 'сергек'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Болжам — ықтимал терезе, бұйрық емес. Бала сергек әрі көңіл-күйі жақсы болса, 15–20 минут күтіп, шаршау белгілеріне қараңыз.',
        body:
            'Lupibu болжамды шамалы ертерек береді — балаңыз шаршап кетпестен бұрын ұйықтатып үлгеруіңіз үшін. Бірақ қолданба бөлмеде не болып жатқанын көрмейді.\n\n' +
            '## Не істеу керек\n' +
            '- Балаға қараңыз: есінеу, көзді уқалау, шытыну бар ма?\n' +
            '- Жоқ болса — 15–20 минут күтіп, қайта қараңыз.\n' +
            '- «Екінші тыныс» (кенет гиперактивтілік) пайда болса — шаршап кеткен, тез ұйықтатыңыз.\n\n' +
            '## Бұл неге қалыпты\n' +
            'Болжам сіздің орташа ояу терезеңізге негізделген. Күн сайын ол ±30–60 минутқа өзгеріп тұрады. Бүгінгі терезе әдеттегіден ұзағырақ болса, ұйқы шынымен орныққанда жазып қойыңыз — болжам жаңарады.\n\n' +
            '## Не істеуге БОЛМАЙДЫ\n' +
            'Таймер бойынша күштеп ұйықтатпаңыз — бұл ұзақ ұйықтай алмау мен жылауға алып келеді. Баланың сигналдары әрдайым басымырақ.'
    },

    /* ======================================== */
    /*  LOGGING (2 articles)                    */
    /* ======================================== */

    'entry-types_ru': {
        slug: 'entry-types',
        category: 'logging',
        title: '12 типов записей: что где',
        readMinutes: 2,
        keywords: ['типы записей', '12', 'что можно отметить', 'события'],
        related: ['log-events', 'timers'],
        tldr: 'Сон, кормление (грудь/бутылочка/прикорм), подгузник, прогулка, врач, лекарство, вакцинация, симптомы, массаж, «другое».',
        body:
            'Все 12 типов доступны на главном экране. Самые частые вынесены наверх.\n\n' +
            '## Интервальные (с таймером)\n' +
            '- **Сон** — дневной и ночной\n' +
            '- **Грудь** — с выбором стороны и чередованием\n' +
            '- **Прогулка**\n\n' +
            '## Точечные (одно событие)\n' +
            '- **Бутылочка** — с указанием объёма\n' +
            '- **Прикорм** — с описанием еды\n' +
            '- **Подгузник** — тип: моча/стул/оба\n' +
            '- **Врач** — заметка о визите\n' +
            '- **Лекарство** — название, доза\n' +
            '- **Вакцинация** — название прививки\n' +
            '- **Симптомы** — температура, насморк, сыпь\n' +
            '- **Массаж**\n' +
            '- **Другое** — свободная запись\n\n' +
            'Если нужного типа нет — используйте «Другое» и добавьте описание.'
    },
    'entry-types_en': {
        slug: 'entry-types',
        category: 'logging',
        title: '12 entry types: what goes where',
        readMinutes: 2,
        keywords: ['entry types', '12', 'what to log', 'events'],
        related: ['log-events', 'timers'],
        tldr: 'Sleep, feeds (breast/bottle/solids), diaper, walk, doctor, medication, vaccination, symptoms, massage, "other".',
        body:
            'All 12 types are on the home screen. The most common ones are up top.\n\n' +
            '## Interval (with timer)\n' +
            '- **Sleep** — naps and night\n' +
            '- **Breast** — side selection with auto-alternation\n' +
            '- **Walk**\n\n' +
            '## Point (single event)\n' +
            '- **Bottle** — with volume\n' +
            '- **Solids** — with food description\n' +
            '- **Diaper** — pee/poop/both\n' +
            '- **Doctor** — visit note\n' +
            '- **Medication** — name, dose\n' +
            '- **Vaccination** — vaccine name\n' +
            '- **Symptoms** — fever, runny nose, rash\n' +
            '- **Massage**\n' +
            '- **Other** — free text\n\n' +
            'If the type you need isn\'t here, use "Other" with a description.'
    },
    'entry-types_kk': {
        slug: 'entry-types',
        category: 'logging',
        title: '12 жазба түрі: қайсысы қайда',
        readMinutes: 2,
        keywords: ['жазба түрлері', '12', 'оқиғалар'],
        related: ['log-events', 'timers'],
        tldr: 'Ұйқы, тамақтану (емшек/бөтелке/қосымша), жөргек, серуен, дәрігер, дәрі, вакцина, симптомдар, массаж, «басқа» — барлығы басты экранда.',
        body:
            'Барлық 12 түрі басты экранда қолжетімді. Ең жиі қолданылатындары жоғарғы жағында орналасқан.\n\n' +
            '## Интервалды (таймермен)\n' +
            '- **Ұйқы** — күндізгі және түнгі\n' +
            '- **Емшек** — жағын таңдау және ауыстыру\n' +
            '- **Серуен**\n\n' +
            '## Нүктелі (бір оқиға)\n' +
            '- **Бөтелке** — көлемі көрсетіледі\n' +
            '- **Қосымша тамақ** — тағам сипаттамасымен\n' +
            '- **Жөргек** — түрі: зәр/нәжіс/екеуі\n' +
            '- **Дәрігер** — сапар туралы жазба\n' +
            '- **Дәрі** — атауы, мөлшері\n' +
            '- **Вакцина** — екпе атауы\n' +
            '- **Симптомдар** — қызу, тұмау, бөртпе\n' +
            '- **Массаж**\n' +
            '- **Басқа** — еркін жазба\n\n' +
            'Қажетті түрі болмаса, **«Басқа»** таңдап, қысқаша сипаттама қосыңыз.'
    },

    'edit-delete_ru': {
        slug: 'edit-delete',
        category: 'logging',
        title: 'Как изменить или удалить запись',
        readMinutes: 1,
        keywords: ['изменить', 'удалить', 'редактировать', 'ошибка', 'поправить'],
        related: ['backfill', 'log-events'],
        tldr: 'Нажмите на запись в истории → откроется редактирование. Удалить — через иконку корзины с подтверждением.',
        body:
            'Если ошиблись со временем, типом или деталями — запись всегда можно поправить.\n\n' +
            '## Как редактировать\n' +
            '- Откройте раздел «История» или найдите запись на главной\n' +
            '- Нажмите на неё — откроется форма редактирования\n' +
            '- Измените нужные поля\n' +
            '- Сохраните\n\n' +
            '## Как удалить\n' +
            '- Откройте запись\n' +
            '- Нажмите иконку корзины\n' +
            '- Подтвердите удаление\n\n' +
            '## Восстановление\n' +
            'После удаления запись восстановить нельзя. Если сомневаетесь — лучше отредактировать, а не удалять.\n\n' +
            '## Повлияет ли это на прогнозы\n' +
            'Да — все правки мгновенно пересчитывают прогноз и статистику.'
    },
    'edit-delete_en': {
        slug: 'edit-delete',
        category: 'logging',
        title: 'How to edit or delete an entry',
        readMinutes: 1,
        keywords: ['edit', 'delete', 'change', 'fix', 'mistake'],
        related: ['backfill', 'log-events'],
        tldr: 'Tap the entry in history to open edit. Delete via the trash icon with confirmation.',
        body:
            'Wrong time, wrong type, wrong details — always fixable.\n\n' +
            '## Edit\n' +
            '- Open "History" or find the entry on home\n' +
            '- Tap it — edit form opens\n' +
            '- Change fields\n' +
            '- Save\n\n' +
            '## Delete\n' +
            '- Open the entry\n' +
            '- Tap the trash icon\n' +
            '- Confirm\n\n' +
            '## Recovery\n' +
            'Deleted entries can\'t be recovered. When in doubt, edit instead.\n\n' +
            '## Does this affect predictions?\n' +
            'Yes — edits recalculate predictions and stats instantly.'
    },
    'edit-delete_kk': {
        slug: 'edit-delete',
        category: 'logging',
        title: 'Жазбаны қалай өзгерту немесе жою',
        readMinutes: 1,
        keywords: ['өзгерту', 'жою', 'түзету', 'қате'],
        related: ['backfill', 'log-events'],
        tldr: 'Тарихтағы жазбаға басыңыз → өңдеу ашылады. Жою — себет белгішесі арқылы, растаумен.',
        body:
            'Уақыты, түрі немесе детальдарында қателессеңіз — жазбаны кез келген уақытта түзетуге болады.\n\n' +
            '## Өңдеу\n' +
            '- «Тарих» бөлімін ашыңыз немесе басты экраннан жазбаны табыңыз.\n' +
            '- Басыңыз — өңдеу формасы ашылады.\n' +
            '- Қажетті өрістерді өзгертіңіз.\n' +
            '- Сақтаңыз.\n\n' +
            '## Жою\n' +
            '- Жазбаны ашыңыз.\n' +
            '- Себет белгішесін басыңыз.\n' +
            '- Жоюды растаңыз.\n\n' +
            '## Қалпына келтіру\n' +
            'Жойылған жазбаны қалпына келтіру мүмкін емес. Күмәнданатын болсаңыз, жоюдың орнына өңдеген дұрыс.\n\n' +
            '## Бұл болжамдарға әсер ете ме?\n' +
            'Иә — кез келген түзету болжамдар мен статистиканы бірден қайта есептейді.'
    },

    /* ======================================== */
    /*  AI & VOICE (3 articles)                 */
    /* ======================================== */

    'voice-logging_ru': {
        slug: 'voice-logging',
        category: 'ai',
        title: 'Как записать событие голосом',
        readMinutes: 2,
        keywords: ['голос', 'микрофон', 'надиктовать', 'ии', 'ai', 'ассистент', 'voice'],
        related: ['ai-capabilities', 'voice-privacy'],
        tldr: 'Нажмите микрофон на вкладке «Помощник» и скажите обычными словами: «уснул в 14:20», «вчера у врача в 11», «покормила 10 минут». AI разберёт фразу и сразу создаст запись.',
        body:
            'Голосовой ввод — самый быстрый способ записать событие, особенно когда руки заняты.\n\n' +
            '## Где найти\n' +
            'Кнопка микрофона — в чате с ассистентом: вкладка **«Помощник»** в нижней панели. В форме создания записи микрофона нет — голосовой ввод живёт только в чате.\n\n' +
            '## Что можно сказать\n' +
            '- **В реальном времени:** «уснул», «проснулся», «поменяла подгузник»\n' +
            '- **Задним числом:** «вчера уснул в 14:20, проснулся в 15:30»\n' +
            '- **С деталями:** «дала бутылочку 120 мл в 9 утра»\n' +
            '- **Медицина:** «были у педиатра в 11:00, назначили нурофен»\n\n' +
            '## Как устроена запись\n' +
            '- Одна голосовая заметка — до 15 секунд, дальше запись останавливается и уходит на обработку сама.\n' +
            '- Если вы замолчали, запись тоже останавливается автоматически — ничего нажимать не нужно.\n\n' +
            '## Языки\n' +
            'Распознавание работает на трёх языках: русском, английском и казахском. Язык распознавания совпадает с языком приложения — поменять его можно в настройках.\n\n' +
            '## Если ИИ расслышал неверно\n' +
            'Черновика нет — запись создаётся сразу, вы увидите подтверждение «Событие записано». Ошиблось время или детали? Откройте запись в истории и поправьте любое поле.\n\n' +
            'Говорить «командами» не нужно — обычная речь работает лучше.'
    },
    'voice-logging_en': {
        slug: 'voice-logging',
        category: 'ai',
        title: 'How to log an event by voice',
        readMinutes: 2,
        keywords: ['voice', 'microphone', 'dictate', 'ai', 'assistant'],
        related: ['ai-capabilities', 'voice-privacy'],
        tldr: 'Tap the mic on the Assistant tab and speak naturally: "fell asleep at 2:20", "doctor visit yesterday at 11", "fed for 10 minutes". The AI parses it and creates the entry right away.',
        body:
            'Voice is the fastest way to log something — especially hands-free.\n\n' +
            '## Where to find it\n' +
            'The mic button lives in the assistant chat — the **Assistant** tab in the bottom bar. There is no mic in the entry form; voice lives in the chat only.\n\n' +
            '## What you can say\n' +
            '- **Live:** "Fell asleep", "Woke up", "Changed diaper"\n' +
            '- **After the fact:** "Last night he fell asleep at 8 and woke at 6"\n' +
            '- **With details:** "Bottle, 4 ounces, at 9 am"\n' +
            '- **Medical:** "Saw the pediatrician at 11, prescribed ibuprofen"\n\n' +
            '## How recording works\n' +
            '- One voice note is up to 15 seconds — after that, recording stops and goes to processing on its own.\n' +
            '- If you go quiet, recording also stops automatically — nothing to press.\n\n' +
            '## Languages\n' +
            'Works in English, Russian, Kazakh. The recognition language follows the app language.\n\n' +
            '## If the AI misheard\n' +
            'There\'s no draft step — the entry is created immediately and you\'ll see a "Recorded" confirmation. Wrong time or details? Open the entry in history and fix any field.\n\n' +
            'You don\'t need robot commands — natural speech works better.'
    },
    'voice-logging_kk': {
        slug: 'voice-logging',
        category: 'ai',
        title: 'Оқиғаны дауыспен қалай жазу керек',
        readMinutes: 2,
        keywords: ['дауыс', 'микрофон', 'ии', 'ассистент'],
        related: ['ai-capabilities', 'voice-privacy'],
        tldr: '«Көмекші» қойындысындағы микрофонды басып, әдеттегі сөздермен айтыңыз: «14:20-да ұйықтады», «кеше 11-де дәрігерде болдық». AI фразаны түсініп, жазбаны бірден жасайды.',
        body:
            'Дауыспен енгізу — әсіресе қолыңыз бос болмағанда, оқиғаны жазудың ең жылдам жолы.\n\n' +
            '## Қайдан табу керек\n' +
            'Микрофон батырмасы — ассистент чатында: төменгі панельдегі **«Көмекші»** қойындысы. Жазба жасау формасында микрофон жоқ — дауыс тек чатта.\n\n' +
            '## Не айтуға болады\n' +
            '- **Нақты уақытта:** «ұйықтады», «оянды», «жөргегін ауыстырдым»\n' +
            '- **Кейін:** «кеше 20:00-де ұйықтап, 06:00-да оянды»\n' +
            '- **Егжей-тегжейімен:** «бөтелке 120 мл, таңғы 9-да»\n' +
            '- **Медицина:** «бүгін 11:00-де педиатрда болдық, нурофен жазды»\n\n' +
            '## Жазу қалай жұмыс істейді\n' +
            '- Бір дауыстық жазба — 15 секундқа дейін, одан кейін жазу өздігінен тоқтап, өңдеуге кетеді.\n' +
            '- Сөйлемей қалсаңыз, жазу да автоматты түрде тоқтайды — ештеңе басудың қажеті жоқ.\n\n' +
            '## Тілдер\n' +
            'Үш тілде жұмыс істейді: қазақ, орыс, ағылшын. Тану тілі қолданба тіліне сәйкес келеді — қаласаңыз, баптаулардан ауыстырыңыз.\n\n' +
            '## Қате түсінсе\n' +
            'Жоба қадамы жоқ — жазба бірден жасалады, «Оқиға жазылды» деген растау көресіз. Уақыты не детальдары қате болса, жазбаны тарихтан ашып, кез келген өрісті түзетіңіз.\n\n' +
            '«Бұйрықтармен» сөйлеудің қажеті жоқ — қарапайым сөйлем жақсырақ жұмыс істейді.'
    },

    'ai-capabilities_ru': {
        slug: 'ai-capabilities',
        category: 'ai',
        title: 'Что умеет ИИ-ассистент и чего не умеет',
        readMinutes: 3,
        keywords: ['ии', 'ai', 'ассистент', 'умеет', 'вопросы', 'советы', 'ограничения'],
        related: ['voice-logging', 'voice-privacy'],
        tldr: 'ИИ отвечает на вопросы про режим вашего ребёнка на основе ваших записей. Он не заменяет врача и не ставит диагнозов.',
        body:
            'ИИ-ассистент в Lupibu — не обычный чат-бот. Он видит данные именно вашего малыша и отвечает с учётом контекста.\n\n' +
            '## Что умеет\n' +
            '- **Отвечать на вопросы про режим:** «сколько он сегодня спал?», «когда последний раз ел?», «нормальное ли у нас окно бодрствования для 6 месяцев?»\n' +
            '- **Создавать записи голосом или текстом** — включая события задним числом.\n' +
            '- **Объяснять прогнозы** — почему сейчас предсказан сон и откуда взялась эта длина окна.\n' +
            '- **Давать утренние советы** — короткие персональные подсказки на день, построенные на вашем паттерне.\n' +
            '- **Обсуждать типичные ситуации** — скачки роста, сон-регрессии, введение прикорма.\n\n' +
            '## Чего не делает\n' +
            '- Не ставит медицинских диагнозов.\n' +
            '- Не даёт советов по лекарствам и дозировкам — это дело педиатра.\n' +
            '- Не заменяет обращение к врачу при тревожных симптомах.\n' +
            '- Не гарантирует 100% точности. Это помощник, а не авторитет.\n\n' +
            '## Примеры хороших вопросов\n' +
            '- «Почему малыш сегодня часто просыпался?»\n' +
            '- «Стоит ли сократить дневной сон, если ночью плохо спит?»\n' +
            '- «Какое окно бодрствования сейчас работает у нас стабильнее всего?»\n\n' +
            '## Когда идти к педиатру, а не к ассистенту\n' +
            'При любых физических симптомах, резких изменениях в поведении, сомнениях в развитии. В этих случаях ИИ полезнее всего в другой роли — он подготовит сводку данных, которую можно показать врачу.'
    },
    'ai-capabilities_en': {
        slug: 'ai-capabilities',
        category: 'ai',
        title: 'What the AI assistant can and cannot do',
        readMinutes: 3,
        keywords: ['ai', 'assistant', 'capabilities', 'questions', 'advice', 'limits'],
        related: ['voice-logging', 'voice-privacy'],
        tldr: 'The AI answers questions about your baby\'s routine using your actual data. It does NOT replace a pediatrician or make diagnoses.',
        body:
            'The Lupibu AI isn\'t a generic chatbot. It sees your baby\'s data and responds with that context.\n\n' +
            '## What the AI can do\n' +
            '- **Answer routine questions:** "How much did he sleep today?", "When was the last feed?", "Is our wake window normal for 6 months?"\n' +
            '- **Create entries from voice or text** — including backfilled events\n' +
            '- **Explain predictions** — why a sleep is predicted now, where the wake window came from\n' +
            '- **Give morning tips** — personalized daily hints based on your pattern\n' +
            '- **Talk through common scenarios** — growth spurts, regressions, starting solids\n\n' +
            '## What it does NOT do\n' +
            '- No medical diagnoses\n' +
            '- No medication or dosing advice — pediatrician only\n' +
            '- Doesn\'t replace a doctor for worrying symptoms\n' +
            '- Not 100% accurate — it\'s an assistant, not an authority\n\n' +
            '## Good questions to ask\n' +
            '- "Why did he wake so often last night?"\n' +
            '- "Should I shorten naps if nights are rough?"\n' +
            '- "Which wake window has been stable for us lately?"\n\n' +
            '## When to call the pediatrician instead\n' +
            'Any physical symptoms, sudden behavior changes, developmental concerns. The AI can prepare a data summary to show your doctor — that\'s its most useful role in those cases.'
    },
    'ai-capabilities_kk': {
        slug: 'ai-capabilities',
        category: 'ai',
        title: 'AI-ассистент не істей алады және не істей алмайды',
        readMinutes: 3,
        keywords: ['ии', 'ai', 'ассистент', 'мүмкіндіктер', 'сұрақтар', 'шектеулер'],
        related: ['voice-logging', 'voice-privacy'],
        tldr: 'AI сіздің жазбаларыңыз негізінде балаңыздың режимі туралы сұрақтарға жауап береді. Дәрігерді алмастырмайды және диагноз қоймайды.',
        body:
            'Lupibu-дегі AI-ассистент — кәдімгі чат-бот емес. Ол сіздің балаңыздың деректерін көреді және жауабын соған сай құрастырады.\n\n' +
            '## Не істей алады\n' +
            '- **Режим туралы сұрақтарға жауап береді:** «бүгін қанша ұйықтады?», «соңғы рет қашан тамақтанды?», «6 айлықта біздің ояу тереземіз қалыпты ма?»\n' +
            '- **Дауыспен немесе мәтінмен жазба жасайды** — оның ішінде өткен оқиғаларды да.\n' +
            '- **Болжамдарды түсіндіреді** — неге дәл қазір ұйқы болжанды, ояу терезесі неден шықты.\n' +
            '- **Таңертеңгі кеңестер береді** — сіздің үлгіңізге негізделген қысқа ұсыныстар.\n' +
            '- **Таныс жағдайларды талқылайды** — өсу секірістері, ұйқы регрессиясы, қосымша тамақтың басталуы.\n\n' +
            '## Не істей алмайды\n' +
            '- Медициналық диагноз қоймайды.\n' +
            '- Дәрі мен мөлшерлеме туралы кеңес бермейді — тек педиатр.\n' +
            '- Алаңдатарлық симптомдарда дәрігерге барудың орнын баспайды.\n' +
            '- 100% дәлдікке кепілдік бермейді. Бұл — көмекші, бедел емес.\n\n' +
            '## Жақсы сұрақтардың мысалдары\n' +
            '- «Бүгін неге жиі оянды?»\n' +
            '- «Түнде нашар ұйықтаса, күндізгі ұйқыны қысқарту керек пе?»\n' +
            '- «Соңғы кезде бізде қай ояу терезесі тұрақтырақ жұмыс істеп тұр?»\n\n' +
            '## Қашан педиатрға бару керек\n' +
            'Кез келген физикалық симптом, мінез-құлықтың кенет өзгеруі, дамуға қатысты күмән. Мұндай жағдайларда AI-ассистенттің ең пайдалы рөлі басқаша — ол дәрігерге көрсету үшін деректер жиынтығын дайындап бере алады.'
    },

    'voice-privacy_ru': {
        slug: 'voice-privacy',
        category: 'ai',
        title: 'Безопасны ли мои голосовые сообщения',
        readMinutes: 2,
        keywords: ['приватность', 'конфиденциально', 'голос', 'запись', 'безопасность', 'данные'],
        related: ['voice-logging', 'data-export-delete'],
        tldr: 'Голос отправляется на сервер только для распознавания — как аудио он не сохраняется. После обработки остаётся только текст записи.',
        body:
            'Приватность — одно из ключевых обещаний Lupibu. Вот честно, как устроено голосовое распознавание.\n\n' +
            '## Что происходит с вашим голосом\n' +
            '- Аудио отправляется на защищённый сервер по шифрованному каналу.\n' +
            '- Аудио уходит напрямую в модель (семейство Gemini Flash, Google Vertex AI) — отдельного шага расшифровки нет, модель сама извлекает данные из звука.\n' +
            '- На выходе — структурированная запись: тип события, время, детали.\n' +
            '- Исходное аудио **не хранится** после обработки.\n\n' +
            '## Что остаётся\n' +
            '- Только итоговая текстовая запись — как если бы вы ввели её руками.\n' +
            '- Все данные привязаны к вашему аккаунту и хранятся на наших серверах.\n\n' +
            '## Чего мы не делаем\n' +
            '- Не продаём данные рекламодателям.\n' +
            '- Не используем ваши записи для обучения публичных моделей.\n' +
            '- Не передаём третьим сторонам без вашего согласия.\n\n' +
            '## Полный контроль\n' +
            'Удалить аккаунт — и вместе с ним все данные — можно в любой момент прямо в приложении. Единственный экспорт на сегодня — PDF-отчёт о сне (см. «Выгрузка данных и удаление аккаунта»).\n\n' +
            'Подробности — в [Политике конфиденциальности](legal.html?doc=privacy).'
    },
    'voice-privacy_en': {
        slug: 'voice-privacy',
        category: 'ai',
        title: 'Are my voice messages private?',
        readMinutes: 2,
        keywords: ['privacy', 'confidential', 'voice', 'recording', 'security', 'data'],
        related: ['voice-logging', 'data-export-delete'],
        tldr: 'Voice goes to the server for recognition but is not kept as audio. Only the parsed text entry is stored.',
        body:
            'Privacy is one of Lupibu\'s core promises. Here\'s honestly how voice works.\n\n' +
            '## What happens with your voice\n' +
            '- Audio goes to a secure server over an encrypted channel\n' +
            '- The audio goes straight to the model (Gemini Flash family, Google Vertex AI) — there\'s no separate transcription step; the model extracts the data from the sound itself\n' +
            '- The output is a structured entry (type, time, details)\n' +
            '- The raw audio **is not stored** after processing\n\n' +
            '## What we keep\n' +
            '- Only the final text entry — same as if you typed it yourself\n' +
            '- All data lives tied to your account on our servers\n\n' +
            '## What we DO NOT do\n' +
            '- No selling data to advertisers\n' +
            '- No using your entries to train public models\n' +
            '- No sharing with third parties without your consent\n\n' +
            '## Full control\n' +
            'Delete your account — and all data with it — anytime, right in the app. The only export today is the sleep PDF report (see "Exporting data and deleting your account").\n\n' +
            'Details in the [Privacy Policy](legal.html?doc=privacy).'
    },
    'voice-privacy_kk': {
        slug: 'voice-privacy',
        category: 'ai',
        title: 'Дауыстық хабарламаларым қауіпсіз бе',
        readMinutes: 2,
        keywords: ['құпиялылық', 'дауыс', 'қауіпсіздік', 'деректер'],
        related: ['voice-logging', 'data-export-delete'],
        tldr: 'Дауыс тек тану үшін серверге жіберіледі — аудио түрінде сақталмайды. Өңдеуден кейін тек мәтіндік жазба ғана қалады.',
        body:
            'Құпиялылық — Lupibu-дің негізгі уәделерінің бірі. Дауысты тану шынында қалай жұмыс істейтінін шынайы түрде түсіндіреміз.\n\n' +
            '## Дауысыңызбен не болады\n' +
            '- Аудио шифрланған канал арқылы қауіпсіз серверге жіберіледі.\n' +
            '- Аудио тікелей модельге барады (Gemini Flash тобы, Google Vertex AI) — бөлек транскрипция қадамы жоқ, модель деректерді дыбыстың өзінен шығарады.\n' +
            '- Нәтиже — құрылымдалған жазба: оқиға түрі, уақыты, егжей-тегжейі.\n' +
            '- Бастапқы аудио өңдеуден кейін **сақталмайды**.\n\n' +
            '## Не сақталады\n' +
            '- Тек соңғы мәтіндік жазба — қолмен енгізгендегідей.\n' +
            '- Барлық деректер аккаунтыңызға тиесілі және біздің серверде сақталады.\n\n' +
            '## Не істемейміз\n' +
            '- Деректерді жарнамашыларға сатпаймыз.\n' +
            '- Жазбаларыңызды жалпыға ортақ модельдерді үйрету үшін қолданбаймыз.\n' +
            '- Келісіміңізсіз үшінші тараптарға бермейміз.\n\n' +
            '## Толық бақылау\n' +
            'Аккаунтты — және онымен бірге барлық деректерді — кез келген уақытта тікелей қолданбадан жоя аласыз. Бүгінгі жалғыз экспорт — ұйқы туралы PDF-есеп («Деректерді шығару және аккаунтты жою» мақаласын қараңыз).\n\n' +
            'Толығырақ — [Құпиялық саясатында](legal.html?doc=privacy).'
    },

    /* ======================================== */
    /*  FAMILY (2 articles)                     */
    /* ======================================== */

    'add-child_ru': {
        slug: 'add-child',
        category: 'family',
        title: 'Как добавить ещё одного ребёнка',
        readMinutes: 1,
        keywords: ['второй ребёнок', 'близнецы', 'несколько детей', 'профиль', 'добавить'],
        related: ['switch-children', 'first-steps'],
        tldr: 'Профиль → «Добавить ребёнка». До четырёх детей в аккаунте. У каждого свои записи и свои прогнозы.',
        body:
            'На одном аккаунте можно вести до четырёх детей.\n\n' +
            '## Как добавить\n' +
            '- Откройте вкладку **Профиль** (иконка меню в шапке).\n' +
            '- Прокрутите до списка детей → нажмите **«Добавить ребёнка»**.\n' +
            '- Заполните имя, дату рождения, пол. Фото — по желанию.\n' +
            '- Сохраните.\n\n' +
            '## Лимит\n' +
            '- До 4 детей в одном аккаунте.\n\n' +
            '## У каждого ребёнка своя история\n' +
            'Окна бодрствования, прогнозы и статистика считаются отдельно для каждого профиля. Записи одного ребёнка не попадают в прогнозы другого.\n\n' +
            'Переключаться между детьми можно на главном экране через плашку с именем — подробнее в статье «Как переключаться между детьми».'
    },
    'add-child_en': {
        slug: 'add-child',
        category: 'family',
        title: 'How to add another child',
        readMinutes: 1,
        keywords: ['second child', 'twins', 'multiple kids', 'profile', 'add'],
        related: ['switch-children', 'first-steps'],
        tldr: 'Profile → "Add child". Up to 4 children per account. Each child has its own entries and predictions.',
        body:
            'One account supports up to 4 children.\n\n' +
            '## How to add\n' +
            '- Open the **Profile** tab (menu in the header)\n' +
            '- Scroll to the children list → tap **"Add child"**\n' +
            '- Fill in name, birth date, gender; photo optional\n' +
            '- Save\n\n' +
            '## Limit\n' +
            '- Up to 4 children per account\n\n' +
            '## Each child has its own history\n' +
            'Wake windows, predictions, and stats are computed per profile. One child\'s entries never feed into another child\'s forecasts.\n\n' +
            'Switch between children via the name pill on the home screen — see "Switching between children".'
    },
    'add-child_kk': {
        slug: 'add-child',
        category: 'family',
        title: 'Тағы бір баланы қалай қосу керек',
        readMinutes: 1,
        keywords: ['екінші бала', 'егіздер', 'бірнеше бала', 'профиль'],
        related: ['switch-children', 'first-steps'],
        tldr: 'Профиль → «Бала қосу». 4 балаға дейін. Әр баланың өз жазбалары мен болжамдары бар.',
        body:
            'Бір аккаунтта 4 балаға дейін жүргізуге болады.\n\n' +
            '## Қалай қосу керек\n' +
            '- Шапкадағы мәзір арқылы **Профиль** қойындысын ашыңыз\n' +
            '- Балалар тізіміне жылжыңыз → **«Бала қосу»** басыңыз\n' +
            '- Аты, туған күні, жынысын енгізіңіз; фото қалауыңыз бойынша\n' +
            '- Сақтаңыз\n\n' +
            '## Шектеу\n' +
            '- Бір аккаунтта 4 балаға дейін\n\n' +
            '## Әр баланың өз тарихы бар\n' +
            'Ояу терезелері, болжамдар мен статистика әр профиль үшін бөлек есептеледі. Бір баланың жазбалары екінші баланың болжамына ешқашан араласпайды.\n\n' +
            'Балалар арасында ауысу — басты экрандағы аты жазылған плитка арқылы.'
    },


    /* ======================================== */
    /*  PRO & SUBSCRIPTION (2 articles)         */
    /* ======================================== */


    'cancel-subscription_ru': {
        slug: 'cancel-subscription',
        category: 'pro',
        title: 'Как отменить подписку Pro',
        readMinutes: 1,
        keywords: ['отменить', 'подписка', 'pro', 'списание', 'вернуть', 'refund'],
        related: [],
        tldr: 'Отменить можно в любой момент через настройки Apple ID → Подписки. Доступ к Pro сохранится до конца оплаченного периода.',
        body:
            'Отмена подписки — в одно касание, никаких подтверждений по телефону. Мы верим: если Lupibu Pro вам не подходит, лучше расстаться спокойно и честно.\n\n' +
            '## Как отменить\n' +
            '- Откройте **Настройки iPhone** → ваше имя → **Подписки**\n' +
            '- Найдите **Lupibu Pro**\n' +
            '- Нажмите **«Отменить подписку»**\n\n' +
            '## Что произойдёт\n' +
            '- Pro-функции останутся доступны до конца уже оплаченного периода\n' +
            '- Автопродление выключится\n' +
            '- Все ваши данные сохранятся — можно вернуться к Pro в любой момент\n\n' +
            '## Если отменили в пробный период\n' +
            'Ничего не спишется. Доступ к Pro сохранится до конца пробного периода — 7 или 14 дней, в зависимости от того, какое предложение вы приняли.\n\n' +
            '## Возврат денег\n' +
            'Возвраты обрабатывает Apple. Запросить возврат можно через [reportaproblem.apple.com](https://reportaproblem.apple.com) — обычно одобряют, если с момента оплаты прошло немного времени.'
    },
    'cancel-subscription_en': {
        slug: 'cancel-subscription',
        category: 'pro',
        title: 'How to cancel Pro',
        readMinutes: 1,
        keywords: ['cancel', 'subscription', 'pro', 'refund', 'stop'],
        related: [],
        tldr: 'Cancel anytime via Apple ID → Subscriptions. Pro access stays until the end of the paid period.',
        body:
            'Cancellation is one tap, no phone calls, no dark patterns. If Pro isn\'t for you, we\'d rather part cleanly.\n\n' +
            '## How to cancel\n' +
            '- Open **iPhone Settings** → your name → **Subscriptions**\n' +
            '- Find **Lupibu Pro**\n' +
            '- Tap **"Cancel Subscription"**\n\n' +
            '## What happens\n' +
            '- Pro features stay until the end of the already-paid period\n' +
            '- Auto-renew turns off\n' +
            '- All your data stays — come back to Pro anytime\n\n' +
            '## Canceling during the trial\n' +
            'Nothing charged. Pro stays until the trial ends — 7 or 14 days, depending on which offer you accepted.\n\n' +
            '## Refunds\n' +
            'Apple handles refunds. Request via [reportaproblem.apple.com](https://reportaproblem.apple.com) — usually approved if not too much time has passed.'
    },
    'cancel-subscription_kk': {
        slug: 'cancel-subscription',
        category: 'pro',
        title: 'Pro жазылымын қалай тоқтату керек',
        readMinutes: 1,
        keywords: ['бас тарту', 'жазылым', 'pro', 'тоқтату', 'refund'],
        related: [],
        tldr: 'Кез келген уақытта Apple ID → Жазылымдар арқылы бас тартуға болады. Pro-ға қатынас төленген кезеңнің соңына дейін сақталады.',
        body:
            'Жазылымды тоқтату — бір басу. Телефон арқылы растау да, жасырын батырмалар да жоқ. Lupibu Pro сізге жараспаса, бейбіт әрі шынайы түрде қоштасқан жөн.\n\n' +
            '## Қалай тоқтату\n' +
            '- **iPhone Баптаулары** → атыңыз → **Жазылымдар**.\n' +
            '- **Lupibu Pro**-ны табыңыз.\n' +
            '- **«Жазылымды тоқтату»** батырмасын басыңыз.\n\n' +
            '## Не болады\n' +
            '- Pro мүмкіндіктері төленген кезеңнің соңына дейін сақталады.\n' +
            '- Автоматты жаңарту өшеді.\n' +
            '- Деректеріңіз сақталады — Pro-ға кез келген уақытта қайта оралуыңызға болады.\n\n' +
            '## Сынама кезеңінде бас тартсаңыз\n' +
            'Ешнәрсе алынбайды. Pro сынама кезеңінің соңына дейін сақталады — қабылдаған ұсынысыңызға қарай 7 немесе 14 күн.\n\n' +
            '## Ақшаны қайтару\n' +
            'Қайтаруды Apple өңдейді. Өтінішті [reportaproblem.apple.com](https://reportaproblem.apple.com) арқылы жіберуге болады — төлем жасалғаннан көп уақыт өтпесе, әдетте мақұлданады.'
    },

    /* ======================================== */
    /*  DATA & PRIVACY (1 article)              */
    /* ======================================== */

    'data-export-delete_ru': {
        slug: 'data-export-delete',
        category: 'privacy',
        title: 'Выгрузка данных и удаление аккаунта',
        readMinutes: 2,
        keywords: ['экспорт', 'удалить', 'данные', 'аккаунт', 'отчёт', 'gdpr', 'право'],
        related: ['delete-account', 'voice-privacy', 'sleep-stats-report'],
        tldr: 'Отчёт о сне выгружается в PDF из вкладки «Ритм». Полной выгрузки всей истории в CSV или JSON пока нет. Удалить аккаунт можно в «Профиле» — в два шага.',
        body:
            'Говорим честно — без маркетинговых оборотов.\n\n' +
            '## Что можно выгрузить сейчас\n' +
            '- **PDF-отчёт о сне за 10 дней** — вкладка **«Ритм»** → кнопка **«Скачать PDF-отчёт»**. В отчёте: таймлайн каждого дня, средние показатели, нормы по возрасту, кормления.\n' +
            '- Отчёт отправляется через стандартное окно iOS — в почту, AirDrop, мессенджер.\n\n' +
            '## Чего пока нет\n' +
            'Кнопки «выгрузить всё в CSV или JSON» в приложении нет. Если вам нужна полная выгрузка записей — например, для GDPR-запроса — напишите на [contact@lupibu.com](mailto:contact@lupibu.com). Мы подготовим её вручную в разумный срок.\n\n' +
            'Мы не хотим обещать то, чего ещё не построили. Автоматическую выгрузку в CSV планируем добавить.\n\n' +
            '## Удалить аккаунт\n' +
            'Профиль → внизу экрана красная кнопка **«Удалить аккаунт»** → два подтверждения. Подробнее — в статье «Как удалить аккаунт или ребёнка».\n\n' +
            '## Приватность\n' +
            'Подробности о том, какие данные куда уходят, — в [Политике конфиденциальности](legal.html?doc=privacy).'
    },
    'data-export-delete_en': {
        slug: 'data-export-delete',
        category: 'privacy',
        title: 'Exporting data and deleting your account',
        readMinutes: 2,
        keywords: ['export', 'delete', 'data', 'account', 'report', 'gdpr', 'right'],
        related: ['delete-account', 'voice-privacy', 'sleep-stats-report'],
        tldr: 'Sleep report exports as PDF from the Rhythm tab. A full CSV history export isn\'t in the app yet. Deleting the account is a 2-step flow in Profile.',
        body:
            'Straight talk, no marketing.\n\n' +
            '## What you can export today\n' +
            '- **10-day sleep PDF report** — **Rhythm** tab → **"Download PDF report"** button. Includes: day-by-day timeline, averages, age-range norms, feeds.\n' +
            '- It goes through the iOS share sheet — mail, AirDrop, messenger.\n\n' +
            '## What\'s not there yet\n' +
            'There is no "export everything as CSV/JSON" button inside the app. If you need a full dump for a GDPR request, email [contact@lupibu.com](mailto:contact@lupibu.com) — we\'ll prepare one manually in a reasonable time.\n\n' +
            'We\'d rather not promise what isn\'t built. A proper CSV export is planned.\n\n' +
            '## Delete the account\n' +
            'Profile → the red **"Delete Account"** button at the bottom → two confirmations. See "Delete account or child" for details.\n\n' +
            '## Privacy\n' +
            'What data we store and where, in the [Privacy Policy](legal.html?doc=privacy).'
    },
    'data-export-delete_kk': {
        slug: 'data-export-delete',
        category: 'privacy',
        title: 'Деректерді шығару және аккаунтты жою',
        readMinutes: 2,
        keywords: ['экспорт', 'жою', 'деректер', 'аккаунт', 'есеп', 'gdpr'],
        related: ['delete-account', 'voice-privacy', 'sleep-stats-report'],
        tldr: 'Ұйқы есебі «Ырғақ» қойындысынан PDF түрінде шығарылады. Барлық тарихты толық CSV-ге шығару әзірге жоқ. Аккаунтты жою — «Профильде», екі қадамда.',
        body:
            'Маркетингсіз, тікелей сөз.\n\n' +
            '## Қазір нені шығаруға болады\n' +
            '- **10 күндік ұйқы PDF есебі** — **«Ырғақ»** қойындысы → **«PDF-есепті жүктеу»** батырмасы. Есепте: күн сайынғы таймлайн, орташа көрсеткіштер, жасқа қарай норма диапазоны, тамақтану.\n' +
            '- iOS стандартты «Бөлісу» терезесі арқылы — поштаға, AirDrop-қа, мессенджерге.\n\n' +
            '## Қазір жоқ нәрсе\n' +
            'Қолданбада «бәрін CSV немесе JSON-ға шығару» батырмасы жоқ. Толық көшірме керек болса (мысалы, GDPR сұрауы үшін), [contact@lupibu.com](mailto:contact@lupibu.com) мекенжайына жазыңыз — қисынды уақытта қолмен дайындаймыз.\n\n' +
            'Әлі салынбаған нәрсені уәде бергіміз келмейді. Автоматты CSV шығаруды қосуды жоспарлап отырмыз.\n\n' +
            '## Аккаунтты жою\n' +
            'Профиль → экранның төменгі жағындағы қызыл **«Аккаунтты жою»** батырмасы → екі растау. Толығырақ — «Аккаунтты немесе баланы қалай жою керек» мақаласында.\n\n' +
            '## Құпиялылық\n' +
            'Қандай деректер қайда жіберіледі — толық ақпарат [Құпиялық саясатында](legal.html?doc=privacy).'
    },

    /* ======================================== */
    /*  SLEEP STATS & REPORT (Rhythm tab)       */
    /* ======================================== */

    'sleep-stats-report_ru': {
        slug: 'sleep-stats-report',
        category: 'sleep',
        title: 'Как посмотреть статистику сна и отправить PDF-отчёт',
        readMinutes: 2,
        keywords: ['статистика', 'отчёт', 'pdf', 'график', 'ритм', 'сон', 'экспорт', 'скачать отчёт'],
        related: ['prediction-accuracy', 'data-export-delete'],
        tldr: 'Вкладка «Ритм» показывает карточки сна за 7 дней и средние показатели. Кнопка «Скачать PDF-отчёт» собирает PDF за 10 дней и отправляет его через стандартное окно iOS.',
        body:
            'Вся аналитика сна собрана на вкладке **«Ритм»** в нижней панели.\n\n' +
            '## Что показывается\n' +
            '- **Карточки последних 7 дней** — каждый день как горизонтальная полоса на 24 часа со всеми снами.\n' +
            '- **Средние показатели:** подъём и отбой, бодрствование, общий сон, дневной и ночной сон.\n' +
            '- **Сравнение с нормой** — как ваш ребёнок спит относительно возрастной нормы.\n\n' +
            'Кормлений на этом экране нет — они попадают только в PDF-отчёт.\n\n' +
            '## Ограничения периода\n' +
            'На экране — последние 7 дней, в PDF-отчёте — 10. Произвольный диапазон выбрать нельзя.\n\n' +
            '## Как скачать PDF-отчёт\n' +
            '- Нажмите кнопку **«Скачать PDF-отчёт»**.\n' +
            '- Сгенерируется PDF за 10 дней: имя ребёнка, таймлайн по дням, средние показатели против нормы и кормления.\n' +
            '- Откроется стандартное iOS-окно «Поделиться» — можно отправить в почту, AirDrop или мессенджер.\n\n'
    },
    'sleep-stats-report_en': {
        slug: 'sleep-stats-report',
        category: 'sleep',
        title: 'How to view sleep stats and share a report',
        readMinutes: 2,
        keywords: ['stats', 'report', 'pdf', 'chart', 'rhythm', 'sleep', 'export', 'download report'],
        related: ['prediction-accuracy', 'data-export-delete'],
        tldr: 'The Rhythm tab shows 7-day sleep cards and averages. "Download PDF report" generates a 10-day PDF and sends it through the iOS share sheet.',
        body:
            'All sleep analytics live on the **Rhythm** tab in the bottom bar.\n\n' +
            '## What it shows\n' +
            '- **Cards for the last 7 days** — each day as a 24-hour horizontal bar with all sleeps.\n' +
            '- **Averages:** wake and bedtime, awake window, total sleep, naps and night sleep.\n' +
            '- **Comparison with the norm** — how your baby sleeps relative to the age range.\n\n' +
            'Feeds are not on this screen — they only appear in the PDF report.\n\n' +
            '## Time range\n' +
            'The screen covers the last 7 days; the PDF report covers 10. There is no custom range picker.\n\n' +
            '## Downloading the PDF report\n' +
            '- Tap the **"Download PDF report"** button\n' +
            '- A 10-day PDF is generated: child name, day-by-day timeline, averages vs the norm, and feeds\n' +
            '- The iOS share sheet opens — send via mail, AirDrop, messenger\n\n'
    },
    'sleep-stats-report_kk': {
        slug: 'sleep-stats-report',
        category: 'sleep',
        title: 'Ұйқы статистикасын қалай көру және есеп жасау',
        readMinutes: 2,
        keywords: ['статистика', 'есеп', 'pdf', 'график', 'ырғақ', 'ұйқы', 'экспорт'],
        related: ['prediction-accuracy', 'data-export-delete'],
        tldr: '«Ырғақ» қойындысы 7 күндік ұйқы карточкалары мен орташа көрсеткіштерді көрсетеді. «PDF-есепті жүктеу» батырмасы 10 күндік PDF жасап, iOS share sheet арқылы жібереді.',
        body:
            'Барлық ұйқы аналитикасы төменгі панельдегі **«Ырғақ»** қойындысында.\n\n' +
            '## Не көрсетіледі\n' +
            '- **Соңғы 7 күннің карточкалары** — әр күн барлық ұйқылары бар 24 сағаттық көлденең жолақ.\n' +
            '- **Орташа көрсеткіштер:** тұру мен жату уақыты, ояу терезесі, жалпы ұйқы, күндізгі мен түнгі ұйқы.\n' +
            '- **Нормамен салыстыру** — балаңыз жас нормасымен салыстырғанда қалай ұйықтайды.\n\n' +
            'Тамақтану бұл экранда жоқ — ол тек PDF-есепке кіреді.\n\n' +
            '## Кезең шектеуі\n' +
            'Экранда — соңғы 7 күн, PDF-есепте — 10 күн. Кез келген диапазонды таңдау мүмкін емес.\n\n' +
            '## PDF есепті қалай жүктеу\n' +
            '- **«PDF-есепті жүктеу»** батырмасын басыңыз\n' +
            '- 10 күндік PDF жасалады: бала аты, күн сайынғы таймлайн, нормамен салыстырылған орташалар және тамақтану\n' +
            '- iOS «Бөлісу» терезесі ашылады — поштаға, AirDrop-қа, мессенджерге жіберіңіз\n\n'
    },

    /* ======================================== */
    /*  HISTORY SCREEN                          */
    /* ======================================== */

    'history-screen_ru': {
        slug: 'history-screen',
        category: 'logging',
        title: 'Экран истории: фильтры, период, редактирование',
        readMinutes: 2,
        keywords: ['история', 'фильтр', 'период', 'дата', 'редактировать', 'удалить запись', 'все записи'],
        related: ['edit-delete', 'entry-types', 'backfill'],
        tldr: 'История открывается кнопкой «История» на главной. Четыре пресета периода (24 часа, вчера, 7 дней, свой диапазон — до месяца), фильтр по типу; тап по записи открывает детали с редактированием и удалением.',
        body:
            'Полная история записей — не вкладка, а отдельный экран. Открывается кнопкой **«История»** в блоке последних событий на главной.\n\n' +
            '## Выбор периода\n' +
            'Вверху экрана — пресеты:\n' +
            '- **«24 часа»** — быстрый пресет, ничего настраивать не нужно\n' +
            '- **«Вчера»** — весь вчерашний день\n' +
            '- **«7 дней»** — последняя неделя\n' +
            '- **Свой период** — открывается календарь; выберите две даты. Максимум — один месяц\n\n' +
            '## Фильтр по типу\n' +
            'Рядом — фильтр: «Все» или один конкретный тип (сон, кормление, подгузник и т.д.). Применяется мгновенно.\n\n' +
            '## Группировка\n' +
            'Записи группируются по дням с заголовками «Сегодня», «Вчера», «Сб, 29 марта» и т.д. Внутри дня — в обратном хронологическом порядке (последние сверху).\n\n' +
            '## Редактировать или удалить\n' +
            '- **Тап по записи** открывает окно с деталями\n' +
            '- В нём же — кнопки **«Редактировать»** и **«Удалить»**\n' +
            '- Редактирование открывает ту же форму, что и при создании — изменения сохраняются сразу\n\n' +
            '## Запись задним числом\n' +
            'Добавить событие в прошлом можно и отсюда, и с главной — подробнее в статье «Как записать сон задним числом».'
    },
    'history-screen_en': {
        slug: 'history-screen',
        category: 'logging',
        title: 'The History screen: filters, period, edit & delete',
        readMinutes: 2,
        keywords: ['history', 'filter', 'period', 'date', 'edit', 'delete entry', 'all entries'],
        related: ['edit-delete', 'entry-types', 'backfill'],
        tldr: 'History opens via the "View history" button on home. Four period presets (24 hours, yesterday, 7 days, custom range — up to a month), a type filter; tapping an entry opens details with edit and delete.',
        body:
            'Full entry history isn\'t a tab — it\'s a dedicated screen. Open via the **"View history"** button in the recent events block on home.\n\n' +
            '## Period selection\n' +
            'Top of the screen — presets:\n' +
            '- **"24 hours"** — quick preset, no setup\n' +
            '- **"Yesterday"** — the whole previous day\n' +
            '- **"7 days"** — the last week\n' +
            '- **Custom range** — opens a calendar; pick two dates. One month maximum\n\n' +
            '## Type filter\n' +
            'Next to it — a filter: "All" or a single type (sleep, feed, diaper, etc.). Applies instantly.\n\n' +
            '## Grouping\n' +
            'Entries group by day with headers like "Today", "Yesterday", "Sat, Mar 29". Inside a day: newest at the top.\n\n' +
            '## Edit or delete\n' +
            '- **Tap** an entry to open a details view\n' +
            '- It has the **"Edit"** and **"Delete"** buttons right there\n' +
            '- Editing opens the same form used for creation — changes save immediately\n\n' +
            '## Back-dating an entry\n' +
            'You can add something in the past from here or from home — see "Logging after the fact".'
    },
    'history-screen_kk': {
        slug: 'history-screen',
        category: 'logging',
        title: 'Тарих экраны: сүзгілер, кезең, өңдеу мен жою',
        readMinutes: 2,
        keywords: ['тарих', 'сүзгі', 'кезең', 'күн', 'өңдеу', 'жазбаны жою'],
        related: ['edit-delete', 'entry-types', 'backfill'],
        tldr: 'Тарих басты экрандағы «Тарих» батырмасы арқылы ашылады. Төрт кезең пресеті (24 сағат, кеше, 7 күн, өз диапазоныңыз — бір айға дейін), түр бойынша сүзгі; жазбаны бассаңыз, өңдеу мен жою бар детальдар ашылады.',
        body:
            'Жазбалардың толық тарихы — қойынды емес, жеке экран. Басты экрандағы соңғы оқиғалар блогындағы **«Тарих»** батырмасы арқылы ашылады.\n\n' +
            '## Кезеңді таңдау\n' +
            'Экранның жоғарғы жағында — пресеттер:\n' +
            '- **«24 сағат»** — жылдам пресет, баптау қажет емес\n' +
            '- **«Кеше»** — кешегі күн толығымен\n' +
            '- **«7 күн»** — соңғы апта\n' +
            '- **Өз кезеңіңіз** — күнтізбе ашылады; екі күнді таңдаңыз. Ең көбі — бір ай\n\n' +
            '## Түр бойынша сүзгі\n' +
            'Жанында — сүзгі: «Бәрі» немесе бір нақты түр (ұйқы, тамақ, жөргек т.с.с.). Бірден қолданылады.\n\n' +
            '## Топтастыру\n' +
            'Жазбалар «Бүгін», «Кеше», «Сб, 29 наурыз» сияқты күндер бойынша топталады. Күн ішінде — жаңалары жоғарыда.\n\n' +
            '## Өңдеу немесе жою\n' +
            '- Жазбаны **басу** — детальдар терезесін ашады\n' +
            '- Сол терезеде — **«Өңдеу»** және **«Жою»** батырмалары\n' +
            '- Өңдеу жасау формасын ашады — өзгерістер бірден сақталады\n\n' +
            '## Өткенге жазу\n' +
            'Өткен оқиғаны осы жерден де, басты экраннан да қосуға болады — «Кейін жазу» мақаласын қараңыз.'
    },

    /* ======================================== */
    /*  SWITCH BETWEEN CHILDREN                 */
    /* ======================================== */

    'switch-children_ru': {
        slug: 'switch-children',
        category: 'family',
        title: 'Как переключаться между детьми',
        readMinutes: 1,
        keywords: ['переключить', 'ребёнок', 'близнецы', 'несколько детей', 'активный'],
        related: ['add-child'],
        tldr: 'Справа в шапке главного экрана — плашка с именем ребёнка. Тап по ней открывает список, тап по выглядывающей аватарке соседнего ребёнка переключает на следующего. Выбор запоминается между запусками.',
        body:
            'Если у вас больше одного ребёнка, в Lupibu есть быстрый переключатель.\n\n' +
            '## Где он\n' +
            'В правой части шапки главного экрана — плашка с именем и фото активного ребёнка. Когда детей несколько, за плашкой выглядывает аватарка следующего.\n\n' +
            '## Как выбрать другого\n' +
            '- **Тап по выглядывающей аватарке** — мгновенно переключает на следующего ребёнка, по кругу\n' +
            '- **Тап по самой плашке** — открывает список всех детей; нажмите на нужного\n' +
            '- Все экраны — главный, ритм, история, чат с ассистентом — сразу показывают его данные\n\n' +
            '## Что запоминается\n' +
            'Активный ребёнок сохраняется — после закрытия приложения вы вернётесь к тому же. Переключение не меняет данные других детей.\n\n' +
            '## Если ребёнок один\n' +
            'Плашка всё равно видна — с фото и именем. При тапе откроется тот же лист выбора, где можно сразу добавить второго ребёнка (см. «Как добавить ещё одного ребёнка»).'
    },
    'switch-children_en': {
        slug: 'switch-children',
        category: 'family',
        title: 'Switching between children',
        readMinutes: 1,
        keywords: ['switch', 'child', 'twins', 'multiple kids', 'active'],
        related: ['add-child'],
        tldr: 'The name pill sits on the right side of the home header. Tap the pill to open the list; tap the peeking avatar next to it to cycle to the next child. Your choice persists across launches.',
        body:
            'With more than one child, Lupibu gives you a fast switcher.\n\n' +
            '## Where it is\n' +
            'On the right side of the home header — a pill with the active child\'s name and photo. With several children, the next child\'s avatar peeks out from behind the pill.\n\n' +
            '## How to switch\n' +
            '- **Tap the peeking avatar** — instantly cycles to the next child, round-robin\n' +
            '- **Tap the pill itself** — opens the list of all children; tap the one you want\n' +
            '- Every screen — home, rhythm, history, assistant chat — immediately shows that child\'s data\n\n' +
            '## What\'s remembered\n' +
            'The active child persists between app launches. Switching does nothing to the other children\'s data.\n\n' +
            '## With only one child\n' +
            'The pill is still visible — with the photo and name. Tapping it opens the same picker sheet, where you can add a second child directly (see "How to add another child").'
    },
    'switch-children_kk': {
        slug: 'switch-children',
        category: 'family',
        title: 'Балалар арасында қалай ауысу керек',
        readMinutes: 1,
        keywords: ['ауыстыру', 'бала', 'бірнеше бала', 'белсенді'],
        related: ['add-child'],
        tldr: 'Бала аты жазылған плитка — басты экран шапкасының оң жағында. Плитканы бассаңыз, тізім ашылады; жанынан сығалап тұрған аватарды бассаңыз, келесі балаға ауысады. Таңдау келесі іске қосуларға дейін сақталады.',
        body:
            'Бірден көп бала болса, Lupibu-де жылдам ауыстырғыш бар.\n\n' +
            '## Ол қайда\n' +
            'Басты экран шапкасының оң жағында — белсенді баланың аты мен фотосы жазылған плитка. Бірнеше бала болса, плитканың артынан келесі баланың аватары сығалап тұрады.\n\n' +
            '## Қалай ауыстыру\n' +
            '- **Сығалап тұрған аватарды басу** — бірден келесі балаға ауыстырады, кезекпен\n' +
            '- **Плитканың өзін басу** — барлық балалардың тізімін ашады; керегін басыңыз\n' +
            '- Барлық экран — басты, ырғақ, тарих, ассистент чаты — бірден сол баланың деректерін көрсетеді\n\n' +
            '## Не есте сақталады\n' +
            'Белсенді бала қосымшаны жапқанда да сақталады. Ауыстыру басқа балалардың деректеріне әсер етпейді.\n\n' +
            '## Бір ғана бала болса\n' +
            'Плитка бәрібір көрінеді — фото және атпен. Басқанда сол таңдау терезесі ашылады, ол жерден екінші баланы бірден қосуға болады («Тағы бір баланы қалай қосу керек» мақаласын қараңыз).'
    },

    /* ======================================== */
    /*  PROFILE & SETTINGS                      */
    /* ======================================== */

    'profile-settings_ru': {
        slug: 'profile-settings',
        category: 'getting-started',
        title: 'Экран профиля и настроек',
        readMinutes: 3,
        keywords: ['профиль', 'настройки', 'имя', 'язык', 'уведомления', 'единицы', 'выйти', 'logout'],
        related: ['notifications', 'delete-account', 'switch-children'],
        tldr: 'Всё управление аккаунтом — в одном экране «Профиль» (иконка меню в шапке). Там: имя, язык, тема, уведомления, аналитика, дети, Pro и удаление аккаунта.',
        body:
            'В Lupibu нет отдельного меню настроек — всё собрано в одном экране **«Профиль»**. Открывается иконкой меню слева в шапке главного.\n\n' +
            '## Что там сверху\n' +
            '- **Имя** — редактируется на месте: нажмите на карандаш, введите, сохраните\n' +
            '- **Метод входа** — Apple Sign In (только он). Email в интерфейсе не показываем — только Firebase-идентификатор внутри\n\n' +
            '## Дети\n' +
            '- Список ваших детей (до 4 детей)\n' +
            '- **«Добавить ребёнка»** внизу списка\n' +
            '- Тап по карточке — редактировать\n\n' +
            '## Настройки приложения\n' +
            '- **Язык** — English, Русский, Қазақша. Изменение синхронизируется в облако и применяется сразу\n' +
            '- **Тема** — светлая, тёмная или как в системе\n' +
            '- **Уведомления** — тумблер; если iOS не разрешены, появится подсказка и кнопка «Открыть настройки»\n' +
            '- **Аналитика** — тумблер; выключите, и мы сразу перестанем собирать данные об использовании. Приложение продолжит работать так же\n\n' +
            '## Поддержка и документы\n' +
            '- **Справочный центр** — эта страница\n' +
            '- **Обратная связь** — форма внутри приложения, пишем ответ на тот же аккаунт\n' +
            '- **Документы** — Политика конфиденциальности, Условия, Медицинская оговорка\n\n' +
            '## Внизу экрана — опасные действия\n' +
            '- **Выйти** — серая кнопка, просит подтверждение\n' +
            '- **Удалить аккаунт** — красная, двухшаговое подтверждение. Подробно: «Удалить аккаунт или ребёнка»'
    },
    'profile-settings_en': {
        slug: 'profile-settings',
        category: 'getting-started',
        title: 'The Profile & Settings screen',
        readMinutes: 3,
        keywords: ['profile', 'settings', 'name', 'language', 'notifications', 'units', 'logout'],
        related: ['notifications', 'delete-account', 'switch-children'],
        tldr: 'Everything account-related lives on one **Profile** screen (menu icon in the header): name, language, theme, notifications, analytics, kids, Pro, and account deletion.',
        body:
            'Lupibu doesn\'t have a separate settings menu — it\'s all on one **Profile** screen. Open it via the menu icon on the left of the home header.\n\n' +
            '## At the top\n' +
            '- **Display name** — edit inline: tap the pencil, type, save\n' +
            '- **Sign-in method** — Apple Sign In only. Email is not shown in the UI; only a Firebase ID is used internally\n\n' +
            '## Children\n' +
            '- List of your kids (up to 4 children)\n' +
            '- **"Add child"** at the bottom of the list\n' +
            '- Tap a card to edit\n\n' +
            '## App settings\n' +
            '- **Language** — English, Русский, Қазақша. Change syncs to cloud and applies instantly\n' +
            '- **Theme** — light, dark, or follow the system\n' +
            '- **Notifications** — toggle; if iOS permission is off, a hint + "Open Settings" shortcut appears\n' +
            '- **Analytics** — toggle; turn it off and we stop collecting usage data right away. The app keeps working exactly the same\n\n' +
            '## Support & legal\n' +
            '- **Help Center** — this page\n' +
            '- **Feedback** — in-app form; replies go to the same account\n' +
            '- **Legal** — Privacy Policy, Terms, Medical Disclaimer\n\n' +
            '## Danger zone at the bottom\n' +
            '- **Logout** — gray button, asks to confirm\n' +
            '- **Delete account** — red, two-step flow. See "Delete account or child"'
    },
    'profile-settings_kk': {
        slug: 'profile-settings',
        category: 'getting-started',
        title: 'Профиль және баптаулар экраны',
        readMinutes: 3,
        keywords: ['профиль', 'баптаулар', 'ат', 'тіл', 'хабарламалар', 'бірлік', 'шығу'],
        related: ['notifications', 'delete-account', 'switch-children'],
        tldr: 'Аккаунтқа қатысты бәрі бір **Профиль** экранында (шапкадағы мәзір белгішесі): ат, тіл, тақырып, хабарламалар, аналитика, балалар, Pro және аккаунтты жою.',
        body:
            'Lupibu-де жеке баптаулар мәзірі жоқ — барлығы бір **Профиль** экранында. Басты экран шапкасының сол жағындағы мәзір белгішесі арқылы ашылады.\n\n' +
            '## Жоғарғы жағында\n' +
            '- **Көрсетілетін ат** — орнында өңделеді: қарандашты басып, жазып, сақтаңыз\n' +
            '- **Кіру әдісі** — тек Apple Sign In. Email интерфейсте көрсетілмейді; ішінде тек Firebase ID қолданылады\n\n' +
            '## Балалар\n' +
            '- Балаларыңыздың тізімі (4 балаға дейін)\n' +
            '- Тізімнің төменгі жағында **«Бала қосу»**\n' +
            '- Картаны басу — өңдеу\n\n' +
            '## Қолданба баптаулары\n' +
            '- **Тіл** — English, Русский, Қазақша. Өзгеріс бұлтқа синхрондалып, бірден қолданылады\n' +
            '- **Тақырып** — ашық, қараңғы немесе жүйедегідей\n' +
            '- **Хабарламалар** — ауыстырғыш; iOS рұқсаты болмаса, кеңес пен «Баптауларды ашу» шолғышы пайда болады\n' +
            '- **Аналитика** — ауыстырғыш; өшірсеңіз, қолданыс деректерін жинауды бірден тоқтатамыз. Қолданба бұрынғыдай жұмыс істей береді\n\n' +
            '## Қолдау мен құжаттар\n' +
            '- **Анықтама орталығы** — осы бет\n' +
            '- **Кері байланыс** — қолданба ішіндегі форма; жауап дәл сол аккаунтқа келеді\n' +
            '- **Құжаттар** — Құпиялық саясаты, Шарттар, Медициналық ескерту\n\n' +
            '## Экранның төменгі жағында — қауіпті әрекеттер\n' +
            '- **Шығу** — сұр батырма, растауды сұрайды\n' +
            '- **Аккаунтты жою** — қызыл, екі қадамды. Толығырақ: «Аккаунтты немесе баланы жою»'
    },

    /* ======================================== */
    /*  NOTIFICATIONS                           */
    /* ======================================== */

    'notifications_ru': {
        slug: 'notifications',
        category: 'getting-started',
        title: 'Уведомления: что присылает Lupibu',
        readMinutes: 2,
        keywords: ['уведомления', 'пуши', 'сон', 'разрешение', 'ios', 'утреннее'],
        related: ['profile-settings', 'prediction-accuracy'],
        tldr: 'Lupibu присылает пуш «Скоро укладывать» примерно за 15 минут до прогнозируемого времени укладывания и одно утреннее сообщение с инсайтом. Пуши включаются по желанию; ночью (21:00–07:00) ничего не приходит.',
        body:
            'Мы сознательно присылаем мало пушей — только когда есть что сказать по делу.\n\n' +
            '## Какие пуши бывают\n' +
            '- **«Скоро укладывать»** — примерно за 15 минут до прогнозируемого времени следующего укладывания, чтобы вы успели начать ритуал до переутомления.\n' +
            '- **Утренний инсайт** — один раз в день, короткий вывод по ритму ребёнка, собранный ИИ-ассистентом по вашим данным. Открывается в чате.\n\n' +
            '## Когда пуш точно не придёт\n' +
            '- **Ночью** — с 21:00 до 07:00 действуют тихие часы, ничего не приходит.\n' +
            '- **Пока идёт таймер сна** — если сон уже записывается, напоминать не о чем.\n' +
            '- **При ночном пробуждении** — Lupibu не будет предлагать «укладывать» посреди ночи.\n\n' +
            '## Как включить\n' +
            'Пуши выключены по умолчанию — это ваш выбор, а не наш.\n' +
            '- **Профиль → «Уведомления»** — тумблер\n' +
            '- Впервые включите — iOS спросит системное разрешение\n' +
            '- Если разрешение заблокировано, появится кнопка **«Открыть настройки»** → iOS Настройки → Lupibu → Уведомления\n\n' +
            '## Когда приходит запрос на разрешение\n' +
            'Впервые Lupibu предлагает включить напоминания на одном из последних шагов онбординга — с объяснением, зачем они. «Не сейчас» ничего не блокирует: включить можно в любой момент в Профиле.\n\n' +
            '## Почему пуш пришёл «невовремя»\n' +
            'Прогноз не идеален — особенно в первые дни и при сменах режима. В статье «Почему прогноз неточный» разобрано, что влияет на точность.'
    },
    'notifications_en': {
        slug: 'notifications',
        category: 'getting-started',
        title: 'Notifications: what Lupibu sends',
        readMinutes: 2,
        keywords: ['notifications', 'push', 'sleep', 'permission', 'ios', 'morning'],
        related: ['profile-settings', 'prediction-accuracy'],
        tldr: 'Lupibu sends a "Time to wind down" push about 15 minutes before the predicted put-down time, plus one morning insight a day. Pushes are opt-in; nothing arrives at night (21:00–07:00).',
        body:
            'We deliberately keep pushes rare — only when there\'s something worth saying.\n\n' +
            '## What pushes exist\n' +
            '- **"Time to wind down"** — about 15 minutes before the predicted time of the next put-down, so you can start the routine before overtiredness.\n' +
            '- **Morning insight** — once a day, a short AI-generated note about your baby\'s rhythm. Opens in chat.\n\n' +
            '## When a push will NOT arrive\n' +
            '- **At night** — quiet hours run 21:00–07:00; nothing comes through.\n' +
            '- **While a sleep timer is running** — if sleep is already being logged, there\'s nothing to remind you about.\n' +
            '- **During a night waking** — Lupibu won\'t suggest "winding down" in the middle of the night.\n\n' +
            '## Turning it on\n' +
            'Pushes are off by default — they\'re your choice, not ours.\n' +
            '- **Profile → "Notifications"** — toggle\n' +
            '- First time you flip it on, iOS asks for system permission\n' +
            '- If permission is blocked, you\'ll see an **"Open Settings"** shortcut → iOS Settings → Lupibu → Notifications\n\n' +
            '## When the permission prompt appears\n' +
            'Lupibu first offers to enable reminders on one of the last onboarding steps — with an explanation of what they\'re for. "Not now" blocks nothing: you can enable them anytime in Profile.\n\n' +
            '## Why a push arrived "at the wrong time"\n' +
            'Predictions aren\'t perfect — especially in the first days or during schedule shifts. "Why is my prediction off?" explains what affects accuracy.'
    },
    'notifications_kk': {
        slug: 'notifications',
        category: 'getting-started',
        title: 'Хабарламалар: Lupibu нені жібереді',
        readMinutes: 2,
        keywords: ['хабарламалар', 'push', 'ұйқы', 'рұқсат', 'ios', 'таңғы'],
        related: ['profile-settings', 'prediction-accuracy'],
        tldr: 'Lupibu «Жатқызу уақыты жақын» push-ын болжамды жатқызу уақытынан шамамен 15 минут бұрын және күніне бір таңғы инсайт жібереді. Push-тар қалауыңыз бойынша қосылады; түнде (21:00–07:00) ештеңе келмейді.',
        body:
            'Біз әдейі аз хабарлама жібереміз — тек айтуға тұрарлық нәрсе болғанда.\n\n' +
            '## Қандай push бар\n' +
            '- **«Жатқызу уақыты жақын»** — келесі жатқызудың болжамды уақытынан шамамен 15 минут бұрын, бала шаршап кетпей тұрып ритуалды бастап үлгеруіңіз үшін.\n' +
            '- **Таңғы инсайт** — күніне бір рет, балаңыздың ырғағы туралы AI-ассистент жазған қысқа қорытынды. Чатта ашылады.\n\n' +
            '## Push қашан келмейді\n' +
            '- **Түнде** — 21:00-ден 07:00-ге дейін тыныш сағаттар, ештеңе келмейді.\n' +
            '- **Ұйқы таймері жүріп тұрғанда** — ұйқы жазылып жатса, ескертетін ештеңе жоқ.\n' +
            '- **Түнгі оянуда** — Lupibu түн ортасында «жатқызуды» ұсынбайды.\n\n' +
            '## Қалай қосу\n' +
            'Push-тар әдепкіде өшірулі — бұл сіздің таңдауыңыз.\n' +
            '- **Профиль → «Хабарламалар»** — ауыстырғыш\n' +
            '- Алғаш қосқанда, iOS жүйелік рұқсат сұрайды\n' +
            '- Рұқсат бұғатталса, **«Баптауларды ашу»** батырмасы көрінеді → iOS Баптаулары → Lupibu → Хабарламалар\n\n' +
            '## Рұқсат сұрағы қашан шығады\n' +
            'Lupibu еске салуларды қосуды алғаш рет онбордингтің соңғы қадамдарының бірінде ұсынады — не үшін керегін түсіндіріп. «Қазір емес» ештеңені бұғаттамайды: кез келген уақытта Профильден қоса аласыз.\n\n' +
            '## Push неге «уақытынан тыс» келді\n' +
            'Болжам мінсіз емес — әсіресе алғашқы күндерде және режим өзгергенде. «Болжам неге дәл емес» мақаласын қараңыз.'
    },

    /* ======================================== */
    /*  DELETE ACCOUNT OR CHILD                 */
    /* ======================================== */

    'delete-account_ru': {
        slug: 'delete-account',
        category: 'privacy',
        title: 'Как удалить аккаунт или ребёнка',
        readMinutes: 2,
        keywords: ['удалить аккаунт', 'удалить ребёнка', 'закрыть аккаунт', 'забыть меня', 'gdpr'],
        related: ['data-export-delete', 'cancel-subscription'],
        tldr: 'Удалить ребёнка: Профиль → карточка ребёнка → Удалить. Удалить аккаунт: красная кнопка внизу Профиля → два подтверждения. Данные стираются сразу.',
        body:
            'Lupibu не прячет удаление. Всё делается в два касания, без писем в поддержку.\n\n' +
            '## Удалить ребёнка\n' +
            '- Откройте **Профиль** → нажмите на карточку ребёнка.\n' +
            '- На экране редактирования внизу — **«Удалить ребёнка»** (красная).\n' +
            '- Подтвердите.\n\n' +
            '## Удалить аккаунт\n' +
            '- **Профиль** → прокрутите вниз → красная кнопка **«Удалить аккаунт»**.\n' +
            '- Появится экран с опциями — если у вас Pro, сначала предложат управлять подпиской.\n' +
            '- **Второе подтверждение** — «Точно удалить?» с предупреждением.\n' +
            '- После подтверждения локальные данные стираются сразу, аккаунт удаляется на сервере.\n\n' +
            '## Что уходит вместе с аккаунтом\n' +
            '- Все профили детей и их записи.\n' +
            '- История ИИ-чата.\n' +
            '- Сам аккаунт. Автопродление подписки нужно отменить отдельно в Apple ID, если вы в пробном периоде (см. «Как отменить подписку Pro»).\n\n' +
            '## Восстановление\n' +
            'После удаления аккаунта восстановить его нельзя — начинать придётся с нуля. Подумайте дважды или сначала напишите нам: [contact@lupibu.com](mailto:contact@lupibu.com).'
    },
    'delete-account_en': {
        slug: 'delete-account',
        category: 'privacy',
        title: 'Deleting a child or your account',
        readMinutes: 2,
        keywords: ['delete account', 'delete child', 'close account', 'forget me', 'gdpr'],
        related: ['data-export-delete', 'cancel-subscription'],
        tldr: 'Delete a child: Profile → child card → Delete. Delete account: red button at the bottom of Profile → two confirmations, data is wiped immediately.',
        body:
            'Lupibu doesn\'t hide deletion — it\'s two taps, no support tickets.\n\n' +
            '## Delete a child\n' +
            '- Open **Profile** → tap the child card\n' +
            '- On the edit screen, at the bottom — **"Delete child"** (red)\n' +
            '- Confirm\n\n' +
            '## Delete account\n' +
            '- **Profile** → scroll to the bottom → red **"Delete account"** button\n' +
            '- A sheet appears with options (it may nudge you to manage the subscription first)\n' +
            '- **Second confirmation** — "Really delete?" with a warning\n' +
            '- After confirming: local data is cleared immediately (MMKV + AsyncStorage + RevenueCat), the account is deleted on the server\n\n' +
            '## What\'s gone\n' +
            '- All child profiles and their entries\n' +
            '- AI chat history\n' +
            '- The subscription itself — auto-renew has to be canceled separately via Apple ID if you\'re still in trial (see "How to cancel Pro")\n\n' +
            '## Restore\n' +
            'Once the account is deleted, there is no restore — you\'d start from scratch. So think twice, or write us first: [contact@lupibu.com](mailto:contact@lupibu.com).'
    },
    'delete-account_kk': {
        slug: 'delete-account',
        category: 'privacy',
        title: 'Баланы немесе аккаунтты қалай жою керек',
        readMinutes: 2,
        keywords: ['аккаунтты жою', 'баланы жою', 'аккаунт жабу', 'мені ұмыт', 'gdpr'],
        related: ['data-export-delete', 'cancel-subscription'],
        tldr: 'Баланы жою: Профиль → бала картасы → Жою. Аккаунтты жою: Профильдің төменгі жағындағы қызыл батырма → екі растау. Деректер бірден жойылады.',
        body:
            'Lupibu жоюды жасырмайды. Барлығы екі басумен істеледі, қолдауға хат жазудың қажеті жоқ.\n\n' +
            '## Баланы жою\n' +
            '- **Профильді** ашыңыз → бала картасын басыңыз.\n' +
            '- Өңдеу экранының төменгі жағында — **«Баланы жою»** (қызыл).\n' +
            '- Растаңыз.\n\n' +
            '## Аккаунтты жою\n' +
            '- **Профиль** → төменге жылжыңыз → қызыл **«Аккаунтты жою»** батырмасы.\n' +
            '- Опциялары бар терезе ашылады — Pro болсаңыз, алдымен жазылымды басқаруды ұсынады.\n' +
            '- **Екінші растау** — «Шынымен жою керек пе?» ескертуімен.\n' +
            '- Растағаннан кейін жергілікті деректер бірден өшіріледі, серверде аккаунт жойылады.\n\n' +
            '## Немен бірге кетеді\n' +
            '- Барлық бала профильдері мен олардың жазбалары.\n' +
            '- ИИ-чат тарихы.\n' +
            '- Аккаунттың өзі. Сынама кезеңінде болсаңыз, автожаңартуды Apple ID арқылы бөлек тоқтату керек («Pro жазылымын қалай тоқтату керек» мақаласын қараңыз).\n\n' +
            '## Қалпына келтіру\n' +
            'Аккаунт жойылғаннан кейін қалпына келтіру жоқ — нөлден бастайсыз. Сондықтан екі рет ойланыңыз немесе алдымен бізге жазыңыз: [contact@lupibu.com](mailto:contact@lupibu.com).'
    }

};
