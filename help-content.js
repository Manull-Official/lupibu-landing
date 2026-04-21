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
        { slug: 'family',          title: 'Children & family',   desc: 'Multiple kids, sharing access',  icon: 'users',    color: 'purple' },
        { slug: 'pro',             title: 'Lupibu Pro',          desc: 'Pro vs free, billing, cancel',   icon: 'star',     color: 'brand' },
        { slug: 'privacy',         title: 'Data & privacy',      desc: 'Export, delete, your rights',    icon: 'shield',   color: 'gray' }
    ],
    ru: [
        { slug: 'getting-started', title: 'Начало работы',       desc: 'Первые шаги в Lupibu',            icon: 'sparkles', color: 'brand' },
        { slug: 'sleep',           title: 'Сон и прогнозы',      desc: 'Как работают предсказания',       icon: 'moon',     color: 'purple' },
        { slug: 'logging',         title: 'Ведение дневника',    desc: '12 типов записей, таймеры',       icon: 'edit',     color: 'gray' },
        { slug: 'ai',              title: 'AI и голос',          desc: 'Голосовые записи, ассистент',     icon: 'mic',      color: 'teal' },
        { slug: 'family',          title: 'Дети и семья',        desc: 'Несколько детей, общий доступ',   icon: 'users',    color: 'purple' },
        { slug: 'pro',             title: 'Lupibu Pro',          desc: 'Подписка, пробный период',        icon: 'star',     color: 'brand' },
        { slug: 'privacy',         title: 'Данные и приватность',desc: 'Экспорт, удаление, ваши права',   icon: 'shield',   color: 'gray' }
    ],
    kk: [
        { slug: 'getting-started', title: 'Бастау',              desc: 'Lupibu-дегі алғашқы қадамдар',    icon: 'sparkles', color: 'brand' },
        { slug: 'sleep',           title: 'Ұйқы және болжамдар', desc: 'Болжамдар қалай жұмыс істейді',   icon: 'moon',     color: 'purple' },
        { slug: 'logging',         title: 'Күнделік жүргізу',    desc: '12 жазба түрі, таймерлер',        icon: 'edit',     color: 'gray' },
        { slug: 'ai',              title: 'ЖИ және дауыс',       desc: 'Дауыспен жазу, ассистент',        icon: 'mic',      color: 'teal' },
        { slug: 'family',          title: 'Балалар мен отбасы',  desc: 'Бірнеше бала, ортақ қатынас',     icon: 'users',    color: 'purple' },
        { slug: 'pro',             title: 'Lupibu Pro',          desc: 'Жазылым, сынама кезең',           icon: 'star',     color: 'brand' },
        { slug: 'privacy',         title: 'Деректер мен құпия',  desc: 'Экспорт, жою, құқықтарыңыз',      icon: 'shield',   color: 'gray' }
    ]
};

var helpPopularQuestions = {
    en: [
        { slug: 'sleep-stats-report',  title: 'How to view sleep stats and share a PDF report' },
        { slug: 'share-partner',       title: 'How to share a child with a partner (invite code)' },
        { slug: 'history-screen',      title: 'How filters and date range work on the History screen' },
        { slug: 'free-vs-pro',         title: 'What\'s in Free vs Lupibu Pro' },
        { slug: 'delete-account',      title: 'How to delete a child or your whole account' },
        { slug: 'prediction-accuracy', title: 'Why is my sleep prediction off?' }
    ],
    ru: [
        { slug: 'sleep-stats-report',  title: 'Как посмотреть статистику и выгрузить PDF-отчёт' },
        { slug: 'share-partner',       title: 'Как поделиться ребёнком с партнёром (код приглашения)' },
        { slug: 'history-screen',      title: 'Как работают фильтры и период на экране истории' },
        { slug: 'free-vs-pro',         title: 'Что входит в Free и что даёт Lupibu Pro' },
        { slug: 'delete-account',      title: 'Как удалить ребёнка или аккаунт целиком' },
        { slug: 'prediction-accuracy', title: 'Почему прогноз сна неточный?' }
    ],
    kk: [
        { slug: 'sleep-stats-report',  title: 'Статистиканы көру және PDF есеп жасау' },
        { slug: 'share-partner',       title: 'Баланы серіктеспен бөлісу (шақыру коды)' },
        { slug: 'history-screen',      title: 'Тарих экранында сүзгі мен кезең қалай жұмыс істейді' },
        { slug: 'free-vs-pro',         title: 'Free-де не бар және Lupibu Pro не береді' },
        { slug: 'delete-account',      title: 'Баланы немесе аккаунтты қалай жою керек' },
        { slug: 'prediction-accuracy', title: 'Ұйқы болжамы неге дәл емес?' }
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
        tldr: 'Создайте профиль малыша за 2 минуты — после этого Lupibu готов записывать сон, кормления и другие события. Чем больше данных, тем точнее прогнозы.',
        body:
            'Lupibu начинает работать сразу — не нужно долго настраивать.\n\n' +
            '## Что сделать в первые 2 минуты\n' +
            '- Войдите через Apple ID или создайте аккаунт\n' +
            '- Добавьте ребёнка: укажите имя и дату рождения (дата нужна, чтобы подбирать прогнозы под возраст)\n' +
            '- Готово — вы попадаете на главный экран\n\n' +
            '## Что делать дальше\n' +
            'На главном экране — плитки для быстрого ввода: сон, кормление, подгузник, прогулка и другие события. Нажмите на любую, чтобы запустить таймер или добавить запись.\n\n' +
            '## Когда появятся прогнозы\n' +
            'Первое окно бодрствования и прогноз следующего сна появятся после того, как вы запишете 1–2 сна. В течение 3–5 дней прогнозы становятся заметно точнее — приложение учится на режиме именно вашего ребёнка.\n\n' +
            'Не стремитесь к идеальным записям. Пропущенный нап или приблизительное время — это нормально. Lupibu устроен так, чтобы помогать, а не требовать.'
    },
    'first-steps_en': {
        slug: 'first-steps',
        category: 'getting-started',
        title: 'How to get started with Lupibu',
        readMinutes: 2,
        keywords: ['start', 'first run', 'signup', 'child', 'new account', 'onboarding'],
        related: ['log-events', 'timers', 'widget'],
        tldr: 'Create your baby\'s profile in 2 minutes — after that Lupibu is ready to log sleep, feeds, and more. The more data, the more accurate the predictions.',
        body:
            'Lupibu works from the first minute — there\'s no long setup.\n\n' +
            '## What to do in the first 2 minutes\n' +
            '- Sign in with Apple ID or create an account\n' +
            '- Add your child: name and birthday (the date is used to match predictions to age)\n' +
            '- Done — you\'re on the home screen\n\n' +
            '## What to do next\n' +
            'The home screen has tiles for quick logging: sleep, feeding, diaper, walk, and more. Tap any of them to start a timer or add an entry.\n\n' +
            '## When predictions show up\n' +
            'Your first wake window and next-sleep prediction appear after you log 1–2 sleeps. Over 3–5 days predictions become noticeably more accurate — the app learns your child\'s actual rhythm.\n\n' +
            'Don\'t aim for perfect records. A missed nap or a rough time — that\'s fine. Lupibu is built to help, not to demand precision.'
    },
    'first-steps_kk': {
        slug: 'first-steps',
        category: 'getting-started',
        title: 'Lupibu-ды қалай бастау керек',
        readMinutes: 2,
        keywords: ['бастау', 'алғашқы', 'тіркелу', 'бала', 'жаңа аккаунт'],
        related: ['log-events', 'timers', 'widget'],
        tldr: 'Бөбек профилін 2 минутта жасаңыз — содан кейін Lupibu ұйқы, тамақтану және басқа оқиғаларды жазуға дайын. Деректер көбейген сайын болжам дәлірек болады.',
        body:
            'Lupibu бірінші минуттан бастап жұмыс істейді — ұзақ баптау қажет емес.\n\n' +
            '## Алғашқы 2 минутта не істеу керек\n' +
            '- Apple ID арқылы кіріңіз немесе аккаунт жасаңыз\n' +
            '- Баланы қосыңыз: аты мен туған күні (күні жасқа сәйкес болжам жасау үшін керек)\n' +
            '- Дайын — басты экрандасыз\n\n' +
            '## Әрі қарай не істеу керек\n' +
            'Басты экранда жылдам жазу плиткалары: ұйқы, тамақ, жөргек, серуен және басқалары. Таймерді іске қосу немесе жазба қосу үшін кез келгенін басыңыз.\n\n' +
            '## Болжамдар қашан пайда болады\n' +
            'Алғашқы ояу терезесі мен келесі ұйқы болжамы 1–2 ұйқыны жазғаннан кейін көрінеді. 3–5 күн ішінде болжамдар айтарлықтай дәлірек болады — қолданба сіздің балаңыздың ырғағын үйренеді.\n\n' +
            'Тамаша жазбаларға ұмтылудың қажеті жоқ. Өткізіп алынған ұйқы немесе шамамен уақыт — бұл қалыпты жағдай.'
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
            'Все записи собираются в историю и ложатся в основу прогнозов и еженедельных отчётов. AI-ассистент анализирует их, чтобы отвечать на ваши вопросы про режим малыша.\n\n' +
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
        title: 'Күн ішінде нені және қалай белгілеу',
        readMinutes: 2,
        keywords: ['жазу', 'тамақтану', 'жөргек', 'серуен', 'симптом', 'оқиға'],
        related: ['first-steps', 'timers', 'entry-types'],
        tldr: 'Негізгісін жазыңыз: ұйқы, тамақтану, жөргек. Қалғаны — қалауыңыз бойынша. Деректер көп болған сайын болжам дәлірек болады.',
        body:
            'Lupibu 12 жазба түрін қолдайды, бірақ бәрін жазу міндетті емес. Балаңызға шынымен маңызды нәрседен бастаңыз.\n\n' +
            '## Жазған дұрыс\n' +
            '- **Ұйқы** — күндізгі және түнгі. Болжамдардың негізі.\n' +
            '- **Тамақтану** — емшек, бөтелке, қосымша тамақ.\n' +
            '- **Жөргек** — әсіресе алғашқы айларда.\n\n' +
            '## Қалауыңыз бойынша\n' +
            '- Серуен, массаж, шомылу.\n' +
            '- Медицина: дәрі, дәрігер, вакцина, симптомдар.\n' +
            '- «Басқа» — стандартты емес нәрселер үшін.\n\n' +
            '## Бұл қалай көмектеседі\n' +
            'Барлық жазбалар тарихты құрайды және болжамдар мен апталық есептерге негіз болады. ЖИ ассистент оларды қолданып, балаңыздың режимі туралы сұрақтарға жауап береді.\n\n' +
            'Толықтыққа ұмтылмаңыз. Күніне екі-үш жазба да пайдалы.'
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
        tldr: 'Үш жазба түрінде таймер бар: ұйқы, емшек, серуен. Басты экрандағы плиткаға басыңыз — таймер іске қосылады. Қайта басыңыз — тоқтайды және сақталады.',
        body:
            'Таймерлер — уақытты есте сақтамау үшін.\n\n' +
            '## Ұйқы таймері\n' +
            'Баланы ұйықтатқанда «Ұйқы» батырмасын басыңыз. Оянғанда «Оянды» батырмасын басыңыз. Қалауыңыз бойынша ұйқы сапасын белгілеңіз.\n\n' +
            '## Емізу таймері\n' +
            '«Емшек» батырмасын басып, жағын таңдаңыз. Қолданба соңғы рет қай жақпен емізгеніңізді есте сақтайды.\n\n' +
            '## Серуен таймері\n' +
            'Ұйқы таймеріндей: шыққанда іске қосыңыз, қайтқанда тоқтатыңыз.\n\n' +
            '## Таймерді ұмытып кетсеңіз\n' +
            'Тарихтан жазбаны ашып, аяқталу уақытын қолмен түзетіңіз.'
    },

    'widget_ru': {
        slug: 'widget',
        category: 'getting-started',
        title: 'Виджет Lupibu на экране iPhone',
        readMinutes: 1,
        keywords: ['виджет', 'iphone', 'домашний экран', 'lock screen', 'быстрый доступ'],
        related: ['first-steps', 'prediction-accuracy'],
        tldr: 'Добавьте виджет Lupibu, чтобы видеть время бодрствования и прогноз следующего сна без открытия приложения.',
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
            'Данные обновляются автоматически в фоне. Если вам кажется, что виджет показывает устаревшую информацию — откройте приложение, и всё пересчитается.'
    },
    'widget_en': {
        slug: 'widget',
        category: 'getting-started',
        title: 'Lupibu iPhone widget',
        readMinutes: 1,
        keywords: ['widget', 'iphone', 'home screen', 'lock screen', 'quick access'],
        related: ['first-steps', 'prediction-accuracy'],
        tldr: 'Add the Lupibu widget to see wake time and next-sleep prediction without opening the app.',
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
            'Data updates automatically in the background. If something looks stale, open the app and it will recalculate.'
    },
    'widget_kk': {
        slug: 'widget',
        category: 'getting-started',
        title: 'Lupibu виджеті iPhone экранында',
        readMinutes: 1,
        keywords: ['виджет', 'iphone', 'үй экраны', 'жылдам қатынас'],
        related: ['first-steps', 'prediction-accuracy'],
        tldr: 'Lupibu виджетін қосыңыз — ояу уақыты мен келесі ұйқы болжамын қолданбаны ашпай көре аласыз.',
        body:
            'Виджет — ұйқы уақытын білудің ең жылдам жолы.\n\n' +
            '## Қалай қосу керек\n' +
            '- iPhone үй экранындағы бос жерді ұзақ басыңыз\n' +
            '- Сол жақ жоғарғы бұрыштағы «+» батырмасын басыңыз\n' +
            '- Lupibu-ды табыңыз → виджет өлшемін таңдаңыз → «Қосу»\n\n' +
            '## Не көрсетеді\n' +
            '- Бала қанша уақыт оянғанын\n' +
            '- Ағымдағы ұйқыны (егер жүрсе)\n' +
            '- Келесі ұйқы болжамын\n\n' +
            'Деректер фонда автоматты жаңарады.'
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
        tldr: 'Кез келген жазбаны қолмен қосуға болады — кеше немесе өткен аптадағы. Басты экранда түрін таңдап, уақытын көрсетіңіз.',
        body:
            'Таймерді іске қосуды ұмыттыңыз ба? Түнгі ұйқыны белгілемедіңіз бе? Бұл қалыпты жағдай.\n\n' +
            '## Кейін қалай қосу керек\n' +
            '- Басты экрандағы плиткаға басыңыз (мысалы, «Ұйқы»)\n' +
            '- Басталу және аяқталу уақытын қолмен көрсетіңіз\n' +
            '- Сақтаңыз\n\n' +
            '## Дауыспен — одан да жылдам\n' +
            'ЖИ ассистентке айтуға болады: «Кеше 14:20-да ұйықтап, 15:30-да оянды» — ол жазбаны өзі жасайды.\n\n' +
            '## Интернетсіз жұмыс\n' +
            'Ұйқы мен емізу таймерлерін желісіз тоқтатуға болады — жазба құрылғыда сақталады.\n\n' +
            '## Бұл болжамдарға әсер ете ме?\n' +
            'Иә — болжамдар барлық жазбаларды ескереді.'
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
        tldr: 'Первые 5–7 дней прогноз учится на ваших данных. Дальше он точнее, но никакое приложение не угадает скачки роста, вакцинацию, болезнь или плохую ночь — именно поэтому Lupibu всегда подстраивается, а не указывает.',
        body:
            'Если прогноз не совпал с реальностью — это не баг, а нормальная часть работы алгоритма. Разберёмся, почему и что с этим делать.\n\n' +
            '## Как работает прогноз\n' +
            'Lupibu смотрит на три вещи:\n' +
            '- Возраст ребёнка (общие нормы ВОЗ — стартовая точка)\n' +
            '- Ваши последние записи сна и бодрствования\n' +
            '- Паттерны — как ваш ребёнок обычно засыпает в это время суток\n\n' +
            'По мере накопления данных «общие нормы» отходят на второй план, а персональные паттерны выходят вперёд.\n\n' +
            '## Почему бывают промахи\n' +
            '- **Первая неделя** — данных мало, прогноз опирается больше на возрастные нормы.\n' +
            '- **Скачок роста / sleep regression** — ребёнок временно меняет режим. Прогноз отстаёт на 2–3 дня, потом подстраивается.\n' +
            '- **Вакцинация, прорезывание зубов, болезнь** — эти события приложение не видит, если вы их не записали. Отметьте их в истории — прогноз будет учитывать.\n' +
            '- **Пропущенные записи** — если вы не записали предыдущий сон, прогноз считает от последнего известного.\n\n' +
            '## Что можно сделать\n' +
            '- Продолжайте записывать сны — через 5–7 дней регулярных записей точность заметно вырастет.\n' +
            '- Отмечайте болезнь, прививки, симптомы — это важный контекст.\n' +
            '- Если ребёнок проснулся раньше или позже прогноза, просто запишите реальный сон. Приложение скорректируется.\n\n' +
            'Lupibu не стремится навязать режим — он показывает наиболее вероятное окно. Решение всегда за вами: сигналы ребёнка важнее, чем любой прогноз.'
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
            '- Your child\'s age (WHO norms as a starting point)\n' +
            '- Your most recent sleep and wake entries\n' +
            '- Patterns — how your specific child usually falls asleep at this time of day\n\n' +
            'As data accumulates, the age norms fade and personal patterns take over.\n\n' +
            '## Why it misses sometimes\n' +
            '- **First week** — limited data, predictions lean on age norms.\n' +
            '- **Growth spurt or sleep regression** — routine shifts temporarily. Predictions lag 2–3 days, then adjust.\n' +
            '- **Vaccination, teething, illness** — the app doesn\'t see these unless you log them. Mark them in history — predictions will account for it.\n' +
            '- **Missed entries** — if you didn\'t log the last sleep, predictions count from the most recent known one.\n\n' +
            '## What you can do\n' +
            '- Keep logging sleeps — after 5–7 regular days accuracy improves visibly.\n' +
            '- Log illness, vaccinations, symptoms — that\'s valuable context.\n' +
            '- If your baby wakes early or late, just log the real sleep. The app self-corrects.\n\n' +
            'Lupibu doesn\'t push a schedule — it shows the most likely window. Your baby\'s signals always beat a prediction.'
    },
    'prediction-accuracy_kk': {
        slug: 'prediction-accuracy',
        category: 'sleep',
        title: 'Ұйқы болжамы неге дәл емес',
        readMinutes: 3,
        keywords: ['болжам', 'дәл емес', 'қате'],
        related: ['wake-windows', 'nap-vs-night', 'ready-not-tired'],
        tldr: 'Алғашқы 5–7 күнде болжам деректеріңізден үйреніп жатады. Содан кейін дәлірек болады, бірақ ешбір қолданба өсу секірісін немесе ауруды болжай алмайды.',
        body:
            'Егер болжам шындықпен сәйкес келмесе — бұл қате емес, қалыпты жағдай.\n\n' +
            '## Болжам қалай жұмыс істейді\n' +
            'Lupibu үш нәрсеге қарайды:\n' +
            '- Жас (ДДҰ нормалары)\n' +
            '- Соңғы ұйқы мен ояу жазбалары\n' +
            '- Үлгілер — балаңыз әдетте қалай ұйықтайды\n\n' +
            '## Неге кейде қателеседі\n' +
            '- **Алғашқы апта** — деректер аз.\n' +
            '- **Өсу секірісі немесе ұйқы регрессиясы** — 2–3 күнге бейімделеді.\n' +
            '- **Вакцина, тіс шығу, ауру** — жазбасаңыз, қолданба көрмейді.\n' +
            '- **Өткізіп алынған жазбалар**.\n\n' +
            '## Не істеуге болады\n' +
            '- Ұйқыларды жазуды жалғастырыңыз.\n' +
            '- Ауруды, симптомдарды белгілеңіз.\n\n' +
            'Lupibu режим таңуға тырыспайды — ол ықтимал терезені көрсетеді. Баланың сигналы болжамнан маңыздырақ.'
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
        keywords: ['ояу терезесі', 'ояу уақыты', 'интервал'],
        related: ['prediction-accuracy', 'ready-not-tired', 'nap-vs-night'],
        tldr: 'Ояу терезесі — баланың ұйқылар арасында ояу бола алатын уақыты. Жасқа қарай ұзарады. Lupibu оны сіздің балаңызға бейімдейді.',
        body:
            'Ояу терезесі — ұйқы жоспарлаудың негізгі бағдары.\n\n' +
            '## Шамамен жас бойынша\n' +
            '- 0–3 ай: 45–90 минут\n' +
            '- 3–6 ай: 1.5–2.5 сағат\n' +
            '- 6–9 ай: 2–3 сағат\n' +
            '- 9–12 ай: 2.5–3.5 сағат\n' +
            '- 1–2 жас: 4–6 сағат\n\n' +
            '## Lupibu қалай бейімдейді\n' +
            '5–7 күн жазбадан кейін сіздің нақты үлгіңіз қолданылады.\n\n' +
            '## Терезе жабылып келе жатқан белгілер\n' +
            '- Көзді уқалау, есінеу\n' +
            '- Себепсіз ашулану\n' +
            '- «Екінші тыныс» — кенет гиперактивтілік'
    },

    'nap-vs-night_ru': {
        slug: 'nap-vs-night',
        category: 'sleep',
        title: 'Как Lupibu отличает дневной сон от ночного',
        readMinutes: 2,
        keywords: ['дневной', 'ночной', 'nap', 'ночь', 'классификация', 'нап'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Автоматически — по времени суток и длительности. Если классификация неверна, её можно поменять вручную в записи.',
        body:
            'Разница между напом и ночным сном важна для прогнозов — ночь «сбрасывает» усталость, нап нет.\n\n' +
            '## Как классификация работает\n' +
            'Lupibu смотрит на:\n' +
            '- **Время начала сна** — позже обычного времени отхода ко сну = ночной\n' +
            '- **Длительность** — очень длинный сон вечером = скорее всего ночной\n' +
            '- **Возраст ребёнка** — младенцам характерны короткие частые сны\n\n' +
            '## Если классификация неверна\n' +
            'Откройте запись и измените тип вручную — ваша правка имеет приоритет над автоматикой.\n\n' +
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
        tldr: 'Automatically — by time of day and duration. If it\'s wrong, you can change it manually in the entry.',
        body:
            'Nap vs night matters for predictions — night resets tiredness, naps don\'t.\n\n' +
            '## How classification works\n' +
            'Lupibu looks at:\n' +
            '- **Start time** — later than usual bedtime = night\n' +
            '- **Duration** — a very long evening sleep = probably night\n' +
            '- **Age** — infants have many short naps\n\n' +
            '## If it\'s wrong\n' +
            'Open the entry and change the type — your edit wins over automation.\n\n' +
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
        keywords: ['күндізгі', 'түнгі', 'нап', 'жіктеу'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Автоматты — уақыт пен ұзақтық бойынша. Қате болса, жазбада қолмен өзгертуге болады.',
        body:
            'Нап пен түн болжамдар үшін маңызды.\n\n' +
            '## Жіктеу қалай жұмыс істейді\n' +
            '- **Басталу уақыты**\n' +
            '- **Ұзақтығы**\n' +
            '- **Жасы**\n\n' +
            '## Қате болса\n' +
            'Жазбаны ашып, түрін өзгертіңіз.\n\n' +
            '## Неге әсер етеді\n' +
            '- Келесі ұйқы болжамы\n' +
            '- Апталық статистика'
    },

    'norms_ru': {
        slug: 'norms',
        category: 'sleep',
        title: 'Ребёнок спит меньше (или больше) нормы — это плохо?',
        readMinutes: 3,
        keywords: ['норма', 'мало спит', 'много спит', 'отклонение', 'волнуюсь'],
        related: ['prediction-accuracy', 'wake-windows'],
        tldr: 'Почти никогда. «Норма» — это медиана по популяции, а не цель. Если ребёнок активен, ест, развивается — его норма может отличаться от таблицы.',
        body:
            'Когда видишь «12 часов сна в сутки» в рекомендации, а твой спит 10 — тревожно. Давайте разберём, на что реально смотреть.\n\n' +
            '## Что такое «норма»\n' +
            'Это статистическая медиана — половина детей спит больше, половина меньше. Нормы ВОЗ дают широкий диапазон (например, 0–3 месяца: 14–17 часов). Если ребёнок попадает в диапазон, всё в порядке.\n\n' +
            '## Когда стоит обратить внимание\n' +
            '- Малыш постоянно выглядит вялым или, наоборот, перевозбуждённым\n' +
            '- Не набирает вес\n' +
            '- Просыпается ночью каждые 30–60 минут больше двух недель подряд\n' +
            '- Есть явные физические симптомы (кашель, рвота, сыпь)\n\n' +
            'В этих случаях — к педиатру, не к приложению.\n\n' +
            '## Что показывает Lupibu\n' +
            'Приложение показывает ваши данные и диапазон нормы для возраста, но не ставит диагнозов. Если ваш ребёнок спит 10.5 часов вместо 12 — это может быть просто его особенность.\n\n' +
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
            'It\'s a statistical median — half of babies sleep more, half less. WHO norms give a wide range (e.g. 0–3 months: 14–17 hours). If your baby is inside the range, you\'re fine.\n\n' +
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
        keywords: ['норма', 'аз ұйықтайды', 'көп ұйықтайды'],
        related: ['prediction-accuracy', 'wake-windows'],
        tldr: 'Дерлік ешқашан. «Норма» — медиана, мақсат емес. Бала белсенді, жейді, өсіп жатса — бәрі жақсы.',
        body:
            '## «Норма» дегеніміз не\n' +
            'Бұл статистикалық медиана. ДДҰ нормалары кең диапазон береді (0–3 ай: 14–17 сағат).\n\n' +
            '## Қашан назар аудару керек\n' +
            '- Тұрақты әлсіздік немесе гиперактивтілік\n' +
            '- Салмақ қоспау\n' +
            '- Әр 30–60 минут сайын ояну (2+ апта бойы)\n' +
            '- Физикалық симптомдар\n\n' +
            'Бұл жағдайларда — дәрігерге.\n\n' +
            '## Lupibu не көрсетеді\n' +
            'Қолданба деректеріңіз бен жасқа сай диапазонды көрсетеді, диагноз қоймайды.'
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
        title: 'Lupibu «ұйықтар уақыт» дейді, бірақ бала шаршамаған',
        readMinutes: 2,
        keywords: ['шаршамаған', 'ұйықтар уақыт', 'ұйықтағысы келмейді'],
        related: ['wake-windows', 'prediction-accuracy'],
        tldr: 'Болжам — ықтимал терезе, бұйрық емес. Бала белсенді болса, 15–20 минут күте тұрыңыз.',
        body:
            'Болжамда шамалы қор бар — шаршап кетпес бұрын ұйықтату үшін.\n\n' +
            '## Не істеу керек\n' +
            '- Балаға қараңыз: есінеу, көз уқалау?\n' +
            '- Болмаса — 15–20 минут күтіңіз\n' +
            '- «Екінші тыныс» болса — шаршап кеткен, тез ұйықтатыңыз\n\n' +
            '## Бұл неге қалыпты\n' +
            'Терезе күн сайын ±30–60 минутқа өзгереді.\n\n' +
            '## Не істеуге БОЛМАЙДЫ\n' +
            'Таймер бойынша күштеп ұйықтатпаңыз.'
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
        title: '12 жазба түрі: не қайда',
        readMinutes: 2,
        keywords: ['жазба түрлері', '12'],
        related: ['log-events', 'timers'],
        tldr: 'Ұйқы, тамақтану (емшек/бөтелке/қосымша), жөргек, серуен, дәрігер, дәрі, вакцина, симптомдар, массаж, «басқа».',
        body:
            '## Интервалды (таймермен)\n' +
            '- **Ұйқы**\n' +
            '- **Емшек** — жақты ауыстыру\n' +
            '- **Серуен**\n\n' +
            '## Нүктелі (бір оқиға)\n' +
            '- **Бөтелке** — көлем\n' +
            '- **Қосымша тамақ**\n' +
            '- **Жөргек** — түрі\n' +
            '- **Дәрігер**\n' +
            '- **Дәрі**\n' +
            '- **Вакцина**\n' +
            '- **Симптомдар**\n' +
            '- **Массаж**\n' +
            '- **Басқа**'
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
        keywords: ['өзгерту', 'жою', 'түзету'],
        related: ['backfill', 'log-events'],
        tldr: 'Тарихтағы жазбаға басыңыз → өңдеу ашылады. Жою — себет белгішесі арқылы.',
        body:
            '## Өңдеу\n' +
            '- «Тарих» бөлімін ашыңыз\n' +
            '- Жазбаны басыңыз\n' +
            '- Өрістерді өзгертіңіз\n' +
            '- Сақтаңыз\n\n' +
            '## Жою\n' +
            '- Жазбаны ашыңыз\n' +
            '- Себет белгішесін басыңыз\n' +
            '- Растаңыз\n\n' +
            'Жойылған жазбаны қалпына келтіру мүмкін емес.'
    },

    /* ======================================== */
    /*  AI & VOICE (3 articles)                 */
    /* ======================================== */

    'voice-logging_ru': {
        slug: 'voice-logging',
        category: 'ai',
        title: 'Как записать событие голосом',
        readMinutes: 2,
        keywords: ['голос', 'микрофон', 'надиктовать', 'ai', 'ассистент', 'voice'],
        related: ['ai-capabilities', 'voice-privacy'],
        tldr: 'Нажмите микрофон в чате или на главном и скажите обычными словами: «уснул в 14:20», «вчера у врача в 11», «покормила 10 минут». AI разберёт и создаст запись.',
        body:
            'Голосовой ввод — самый быстрый способ записать событие, особенно когда руки заняты.\n\n' +
            '## Где найти\n' +
            '- Кнопка микрофона в AI-чате (мордочка малыша в шапке)\n' +
            '- Микрофон в форме создания записи (на многих типах)\n\n' +
            '## Что можно сказать\n' +
            '- **В реальном времени:** «Уснул», «Проснулся», «Поменяла подгузник»\n' +
            '- **Задним числом:** «Вчера уснул в 14:20, проснулся в 15:30»\n' +
            '- **С деталями:** «Дала бутылочку 120 мл в 9 утра»\n' +
            '- **Медицина:** «Сегодня были у педиатра в 11:00, назначили нурофен»\n\n' +
            '## Языки\n' +
            'Распознавание работает на 3 языках: русский, английский, казахский. Язык распознавания следует за языком приложения — поменяйте его в настройках, если нужно.\n\n' +
            '## Если AI понял неправильно\n' +
            'После распознавания AI показывает черновик записи до сохранения. Можно поправить любое поле перед подтверждением.\n\n' +
            'Не нужно говорить «командами» — человеческий язык работает лучше.'
    },
    'voice-logging_en': {
        slug: 'voice-logging',
        category: 'ai',
        title: 'How to log an event by voice',
        readMinutes: 2,
        keywords: ['voice', 'microphone', 'dictate', 'ai', 'assistant'],
        related: ['ai-capabilities', 'voice-privacy'],
        tldr: 'Tap the mic in chat or on home and speak naturally: "fell asleep at 2:20", "doctor visit yesterday at 11", "fed for 10 minutes". The AI parses it.',
        body:
            'Voice is the fastest way to log something — especially hands-free.\n\n' +
            '## Where to find it\n' +
            '- Mic button in the AI chat (baby face icon in header)\n' +
            '- Mic in the entry form (for many types)\n\n' +
            '## What you can say\n' +
            '- **Live:** "Fell asleep", "Woke up", "Changed diaper"\n' +
            '- **After the fact:** "Last night he fell asleep at 8 and woke at 6"\n' +
            '- **With details:** "Bottle, 4 ounces, at 9 am"\n' +
            '- **Medical:** "Saw the pediatrician at 11, prescribed ibuprofen"\n\n' +
            '## Languages\n' +
            'Works in English, Russian, Kazakh. The recognition language follows the app language.\n\n' +
            '## If the AI misheard\n' +
            'After recognition, the AI shows a draft before saving. Edit any field before confirming.\n\n' +
            'You don\'t need robot commands — natural speech works better.'
    },
    'voice-logging_kk': {
        slug: 'voice-logging',
        category: 'ai',
        title: 'Оқиғаны дауыспен қалай жазу керек',
        readMinutes: 2,
        keywords: ['дауыс', 'микрофон', 'ЖИ'],
        related: ['ai-capabilities', 'voice-privacy'],
        tldr: 'Микрофонды басып жай сөздермен айтыңыз: «14:20-да ұйықтады», «кеше 11-де дәрігерде». ЖИ талдап, жазба жасайды.',
        body:
            '## Қайда табу керек\n' +
            '- ЖИ чатындағы микрофон\n' +
            '- Жазба формасындағы микрофон\n\n' +
            '## Не айтуға болады\n' +
            '- «Ұйықтады», «Оянды»\n' +
            '- «Кеше 20:00-де ұйықтап, 06:00-да оянды»\n' +
            '- «Бөтелке 120 мл, 9-да»\n\n' +
            '## Тілдер\n' +
            '3 тілде жұмыс істейді: орыс, ағылшын, қазақ.\n\n' +
            '## Егер қате түсінсе\n' +
            'ЖИ сақтамас бұрын жоба көрсетеді. Растамас бұрын өзгертуге болады.'
    },

    'ai-capabilities_ru': {
        slug: 'ai-capabilities',
        category: 'ai',
        title: 'Что умеет AI-ассистент и чего не умеет',
        readMinutes: 3,
        keywords: ['ai', 'ассистент', 'умеет', 'вопросы', 'советы', 'ограничения'],
        related: ['voice-logging', 'voice-privacy'],
        tldr: 'AI отвечает на вопросы про режим вашего ребёнка на основе ваших записей. Он НЕ заменяет врача и не ставит диагнозов.',
        body:
            'AI-ассистент в Lupibu — это не обычный чат-бот. Он видит данные именно вашего малыша и отвечает с учётом контекста.\n\n' +
            '## Что AI умеет\n' +
            '- **Отвечать на вопросы про режим:** «Сколько он сегодня спал?», «Когда последний раз ел?», «Нормальное ли у нас окно бодрствования для 6 месяцев?»\n' +
            '- **Создавать записи голосом или текстом** — включая события задним числом\n' +
            '- **Объяснять прогнозы** — почему сейчас предсказан сон, откуда взялась эта длина окна\n' +
            '- **Давать утренние советы** — персональные подсказки на день на основе вашего паттерна\n' +
            '- **Обсуждать типичные ситуации** — скачки роста, sleep regression, введение прикорма\n\n' +
            '## Чего AI НЕ делает\n' +
            '- Не ставит медицинских диагнозов\n' +
            '- Не советует по лекарствам и дозам — только педиатр\n' +
            '- Не заменяет обращение к врачу при тревожных симптомах\n' +
            '- Не гарантирует 100% точность — это помощник, а не авторитет\n\n' +
            '## Примеры хороших вопросов\n' +
            '- «Почему малыш сегодня часто просыпался?»\n' +
            '- «Стоит ли сократить дневной сон, если ночью плохо спит?»\n' +
            '- «Какое окно бодрствования сейчас стабильнее всего работает у нас?»\n\n' +
            '## Когда идти к педиатру, а не к AI\n' +
            'Любые физические симптомы, резкие изменения в поведении, сомнения в развитии. AI может подготовить для вас сводку данных, чтобы показать её врачу — это его самая полезная роль в таких случаях.'
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
        title: 'ЖИ ассистент не істей алады және не істей алмайды',
        readMinutes: 3,
        keywords: ['ЖИ', 'ассистент', 'мүмкіндіктер', 'шектеулер'],
        related: ['voice-logging', 'voice-privacy'],
        tldr: 'ЖИ сіздің жазбаларыңыз негізінде режим туралы сұрақтарға жауап береді. Ол дәрігерді АЛМАСТЫРМАЙДЫ.',
        body:
            '## ЖИ не істей алады\n' +
            '- Режим туралы сұрақтарға жауап беру\n' +
            '- Дауыспен/мәтінмен жазба жасау\n' +
            '- Болжамдарды түсіндіру\n' +
            '- Таңертеңгі кеңес беру\n' +
            '- Кең таралған жағдайларды талқылау\n\n' +
            '## Не істей АЛМАЙДЫ\n' +
            '- Медициналық диагноз қоймайды\n' +
            '- Дәрі туралы кеңес бермейді — тек педиатр\n' +
            '- Алаңдатарлық симптомдарда дәрігерді алмастырмайды\n' +
            '- 100% дәл емес\n\n' +
            '## Қашан педиатрға бару керек\n' +
            'Физикалық симптомдар, кенет мінез-құлық өзгерістері.'
    },

    'voice-privacy_ru': {
        slug: 'voice-privacy',
        category: 'ai',
        title: 'Безопасны ли мои голосовые сообщения?',
        readMinutes: 2,
        keywords: ['приватность', 'конфиденциально', 'голос', 'запись', 'безопасность', 'данные'],
        related: ['voice-logging', 'data-export-delete'],
        tldr: 'Голос отправляется на сервер для распознавания, но не сохраняется как аудио. После парсинга остаётся только текст записи.',
        body:
            'Приватность в Lupibu — одно из ключевых обещаний продукта. Вот честно, как устроено голосовое распознавание.\n\n' +
            '## Что происходит с вашим голосом\n' +
            '- Аудио отправляется на защищённый сервер\n' +
            '- Gemini 2.0 Flash (Google Vertex AI) распознаёт речь и извлекает данные\n' +
            '- На выходе — структурированная запись (тип события, время, детали)\n' +
            '- Исходное аудио **не хранится** после обработки\n\n' +
            '## Что хранится\n' +
            '- Только итоговая текстовая запись — так же, как если бы вы ввели её руками\n' +
            '- Все данные привязаны к вашему аккаунту и хранятся на наших серверах\n\n' +
            '## Что мы НЕ делаем\n' +
            '- Не продаём данные рекламодателям\n' +
            '- Не используем ваши записи для обучения публичных моделей\n' +
            '- Не передаём третьим сторонам без вашего согласия\n\n' +
            '## Полный контроль\n' +
            'Вы можете экспортировать все свои данные или полностью удалить аккаунт в любой момент — в настройках приложения.\n\n' +
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
            '- Audio goes to a secure server\n' +
            '- Gemini 2.0 Flash (Google Vertex AI) transcribes and extracts data\n' +
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
            'Export all your data or fully delete your account anytime — from app settings.\n\n' +
            'Details in the [Privacy Policy](legal.html?doc=privacy).'
    },
    'voice-privacy_kk': {
        slug: 'voice-privacy',
        category: 'ai',
        title: 'Дауыстық хабарламаларым қауіпсіз бе?',
        readMinutes: 2,
        keywords: ['құпиялылық', 'дауыс', 'қауіпсіздік', 'деректер'],
        related: ['voice-logging', 'data-export-delete'],
        tldr: 'Дауыс тану үшін серверге жіберіледі, бірақ аудио ретінде сақталмайды. Тек мәтіндік жазба қалады.',
        body:
            '## Дауысыңызбен не болады\n' +
            '- Аудио қауіпсіз серверге жіберіледі\n' +
            '- Gemini 2.0 Flash (Google Vertex AI) таниды\n' +
            '- Нәтиже — құрылымды жазба\n' +
            '- Бастапқы аудио өңдеуден кейін **сақталмайды**\n\n' +
            '## Не сақталады\n' +
            '- Тек соңғы мәтіндік жазба\n\n' +
            '## Не істемейміз\n' +
            '- Деректерді жарнамашыларға сатпаймыз\n' +
            '- Жазбаларыңызды жалпыға ортақ модельдерді оқыту үшін қолданбаймыз\n\n' +
            '## Толық бақылау\n' +
            'Аккаунтты жою немесе деректерді экспорттау — кез келген уақытта.'
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
        related: ['switch-children', 'share-partner', 'first-steps'],
        tldr: 'Профиль → «Добавить ребёнка». Бесплатно — 1 ребёнок. С Pro — до 4 детей. У каждого свои записи и прогнозы.',
        body:
            'На одном аккаунте можно вести до 4 детей.\n\n' +
            '## Как добавить\n' +
            '- Откройте вкладку **Профиль** (меню в шапке)\n' +
            '- Пролистайте до списка детей → нажмите **«Добавить ребёнка»**\n' +
            '- Заполните имя, дату рождения, пол; фото по желанию\n' +
            '- Сохраните\n\n' +
            '## Лимиты\n' +
            '- **Бесплатно:** 1 ребёнок\n' +
            '- **Lupibu Pro:** до 4 детей\n\n' +
            'При добавлении второго ребёнка на Free-версии откроется экран Pro — это не реклама, это единственное ограничение, которое мы строго применяем.\n\n' +
            '## У каждого ребёнка своя история\n' +
            'Окна бодрствования, прогнозы и статистика считаются отдельно для каждого профиля. Записи одного ребёнка никак не попадают в прогнозы другого.\n\n' +
            'Переключаться между детьми можно на главном экране через плашку с именем — подробнее в статье «Как переключаться между детьми».'
    },
    'add-child_en': {
        slug: 'add-child',
        category: 'family',
        title: 'How to add another child',
        readMinutes: 1,
        keywords: ['second child', 'twins', 'multiple kids', 'profile', 'add'],
        related: ['switch-children', 'share-partner', 'first-steps'],
        tldr: 'Profile → "Add child". Free = 1 child. Pro = up to 4. Each child has its own entries and predictions.',
        body:
            'One account supports up to 4 children.\n\n' +
            '## How to add\n' +
            '- Open the **Profile** tab (menu in the header)\n' +
            '- Scroll to the children list → tap **"Add child"**\n' +
            '- Fill in name, birth date, gender; photo optional\n' +
            '- Save\n\n' +
            '## Limits\n' +
            '- **Free:** 1 child\n' +
            '- **Lupibu Pro:** up to 4 children\n\n' +
            'Adding a second child on Free opens the Pro screen — this isn\'t an ad, it\'s the one limit we enforce.\n\n' +
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
        related: ['switch-children', 'share-partner', 'first-steps'],
        tldr: 'Профиль → «Бала қосу». Тегін — 1 бала. Pro — 4 балаға дейін. Әр баланың өз жазбалары мен болжамдары бар.',
        body:
            'Бір аккаунтта 4 балаға дейін жүргізуге болады.\n\n' +
            '## Қалай қосу керек\n' +
            '- Шапкадағы мәзір арқылы **Профиль** қойындысын ашыңыз\n' +
            '- Балалар тізіміне жылжыңыз → **«Бала қосу»** басыңыз\n' +
            '- Аты, туған күні, жынысын енгізіңіз; фото қалауыңыз бойынша\n' +
            '- Сақтаңыз\n\n' +
            '## Шектеулер\n' +
            '- **Тегін:** 1 бала\n' +
            '- **Lupibu Pro:** 4 балаға дейін\n\n' +
            'Тегін нұсқада екінші бала қосқанда Pro экраны ашылады — бұл жарнама емес, бұл біз қатаң қолданатын жалғыз шектеу.\n\n' +
            '## Әр баланың өз тарихы бар\n' +
            'Ояу терезелері, болжамдар мен статистика әр профиль үшін бөлек есептеледі. Бір баланың жазбалары екінші баланың болжамына ешқашан араласпайды.\n\n' +
            'Балалар арасында ауысу — басты экрандағы аты жазылған плитка арқылы.'
    },

    'share-partner_ru': {
        slug: 'share-partner',
        category: 'family',
        title: 'Как поделиться доступом с партнёром, бабушкой или няней',
        readMinutes: 2,
        keywords: ['общий доступ', 'партнёр', 'муж', 'няня', 'бабушка', 'семья', 'код приглашения', 'пригласить'],
        related: ['add-child', 'switch-children'],
        tldr: 'Профиль → карточка ребёнка → экран приглашения. Сгенерируется короткий 6-значный код — отправьте его кому угодно, и после подключения оба видят одни и те же записи.',
        body:
            'В Lupibu общий доступ работает по коду приглашения — никаких email и регистраций «вслепую».\n\n' +
            '## Как пригласить\n' +
            '- Откройте **Профиль** → нажмите на карточку ребёнка → стрелка вправо\n' +
            '- Откроется экран приглашения. Код генерируется автоматически — что-то вроде **ABC 123**\n' +
            '- Нажмите **«Копировать»** или **«Поделиться»** (через iMessage, WhatsApp, Telegram — что удобнее)\n' +
            '- Партнёр открывает Lupibu на своём iPhone, вводит код и выбирает роль: мама, папа, бабушка, дедушка, няня, родственник, другое\n\n' +
            '## Что видит второй человек\n' +
            '- Все записи ребёнка\n' +
            '- Прогнозы и статистику сна\n' +
            '- AI-чат ребёнка\n\n' +
            'Он может добавлять и редактировать записи. Удалить профиль ребёнка или управлять подпиской может только владелец аккаунта.\n\n' +
            '## Как удалить участника\n' +
            'Профиль → карточка ребёнка → список участников семьи → удалить нужного человека.\n\n' +
            '## Коротко о приватности\n' +
            'Код одноразовый — после того как человек его использовал, код перестаёт работать. Если код ушёл не тому, сгенерируйте новый.'
    },
    'share-partner_en': {
        slug: 'share-partner',
        category: 'family',
        title: 'How to share access with a partner, grandparent, or nanny',
        readMinutes: 2,
        keywords: ['share', 'partner', 'spouse', 'nanny', 'grandparent', 'family', 'invite code', 'invite'],
        related: ['add-child', 'switch-children'],
        tldr: 'Profile → child card → invite screen. A 6-character code is generated — share it by any channel. Once joined, both sides see the same entries.',
        body:
            'Sharing in Lupibu uses a short invite code — no email dance, no blind signup.\n\n' +
            '## How to invite\n' +
            '- Open **Profile** → tap the child card → chevron on the right\n' +
            '- The invite screen generates a code automatically — something like **ABC 123**\n' +
            '- Tap **"Copy"** or **"Share"** (iMessage, WhatsApp, Telegram — whatever works)\n' +
            '- The other person opens Lupibu on their iPhone, enters the code, and picks a relation: mother, father, grandmother, grandfather, nanny, relative, other\n\n' +
            '## What they see\n' +
            '- All entries for the child\n' +
            '- Sleep predictions and stats\n' +
            '- The child\'s AI chat\n\n' +
            'They can add and edit entries. Only the account owner can delete the child profile or manage the subscription.\n\n' +
            '## Removing a member\n' +
            'Profile → child card → family members list → remove the person.\n\n' +
            '## Privacy note\n' +
            'The code is single-use — once someone joins with it, the code stops working. If it went to the wrong person, generate a new one.'
    },
    'share-partner_kk': {
        slug: 'share-partner',
        category: 'family',
        title: 'Серіктеспен, атаәжемен немесе күтушімен қатынасты қалай бөлісу',
        readMinutes: 2,
        keywords: ['ортақ қатынас', 'серіктес', 'күйеу', 'күтуші', 'әже', 'отбасы', 'шақыру коды'],
        related: ['add-child', 'switch-children'],
        tldr: 'Профиль → бала картасы → шақыру экраны. 6 таңбалы код жасалады — оны кез келген адамға жіберіңіз. Қосылғаннан кейін екі жақ бір жазбаларды көреді.',
        body:
            'Lupibu-де ортақ қатынас қысқа код арқылы жұмыс істейді — email де, соқыр тіркелу де жоқ.\n\n' +
            '## Қалай шақыру керек\n' +
            '- **Профильді** ашыңыз → бала картасын басыңыз → оң жақтағы бағыт\n' +
            '- Шақыру экранында код автоматты түрде жасалады — мысалы **ABC 123**\n' +
            '- **«Көшіру»** немесе **«Бөлісу»** басыңыз (iMessage, WhatsApp, Telegram — қайсысы ыңғайлы болса)\n' +
            '- Серіктесіңіз өз iPhone-ында Lupibu-ды ашып, кодты енгізіп, рөлді таңдайды: ана, әке, әже, ата, күтуші, туысқан, басқа\n\n' +
            '## Ол не көреді\n' +
            '- Бала жазбаларын\n' +
            '- Ұйқы болжамдары мен статистиканы\n' +
            '- Баланың ЖИ чатын\n\n' +
            'Ол жазбалар қосып, өңдей алады. Бала профилін жоюды немесе жазылымды басқаруды тек аккаунт иесі істей алады.\n\n' +
            '## Қатысушыны жою\n' +
            'Профиль → бала картасы → отбасы мүшелері тізімі → қажетті адамды жою.\n\n' +
            '## Құпиялылық туралы\n' +
            'Код бір реттік — адам қосылғаннан кейін код жұмыс істемей қалады. Код қате адамға жіберілсе, жаңасын жасаңыз.'
    },

    /* ======================================== */
    /*  PRO & SUBSCRIPTION (2 articles)         */
    /* ======================================== */

    'free-vs-pro_ru': {
        slug: 'free-vs-pro',
        category: 'pro',
        title: 'Что входит в Free и что даёт Lupibu Pro',
        readMinutes: 2,
        keywords: ['pro', 'подписка', 'бесплатно', 'платно', 'что входит', 'ограничения', 'тариф', 'лимиты'],
        related: ['cancel-subscription', 'add-child', 'sleep-stats-report'],
        tldr: 'Free — полноценный трекер без ограничений по записям. Pro открывает персональные прогнозы сна, полную статистику за 7 дней, до 4 детей и безлимитный AI-чат.',
        body:
            'Lupibu — soft freemium: приложение полезно бесплатно, но Pro снимает 4 конкретных ограничения.\n\n' +
            '## Что даёт Free\n' +
            '- Все 12 типов записей, таймеры, история целиком\n' +
            '- Голосовой ввод в чате\n' +
            '- Базовая статистика сна (первые 3 дня из 7 — дальше скрыто за Pro)\n' +
            '- Факты по последнему сну и окну бодрствования (без прогноза)\n' +
            '- **1 ребёнок**\n' +
            '- **3 AI-сообщения в день** (счётчик сбрасывается в полночь)\n' +
            '- iOS-виджет со статусом сна\n\n' +
            '## Что открывает Pro\n' +
            '- **Персональные прогнозы сна** — окно бодрствования подстраивается под ритм именно вашего ребёнка\n' +
            '- **Полная статистика за 7 дней** — не обрезанный график, полный PDF-отчёт\n' +
            '- **До 4 детей** в одном аккаунте\n' +
            '- **Безлимитный AI-чат** — без счётчика сообщений\n' +
            '- Пуш-оповещение о пробуждении (по прогнозу)\n\n' +
            '## Цена и пробный период\n' +
            '- **$6.99/мес** или **$39.99/год** (~$3.33/мес)\n' +
            '- **7 дней Pro бесплатно** для новых пользователей. Отмените в любой момент пробного периода — не спишется ни цента.\n\n' +
            'Оплата через Apple ID, управление подпиской — в Настройках iPhone.'
    },
    'free-vs-pro_en': {
        slug: 'free-vs-pro',
        category: 'pro',
        title: 'What\'s in Free vs Lupibu Pro',
        readMinutes: 2,
        keywords: ['pro', 'subscription', 'free', 'paid', 'features', 'limits', 'plan'],
        related: ['cancel-subscription', 'add-child', 'sleep-stats-report'],
        tldr: 'Free is a full tracker with no limits on logging. Pro unlocks personalized sleep predictions, the full 7-day stats, up to 4 children, and unlimited AI chat.',
        body:
            'Lupibu is soft freemium — the free app is genuinely useful, and Pro lifts 4 specific limits.\n\n' +
            '## What Free gives you\n' +
            '- All 12 entry types, timers, full history\n' +
            '- Voice input in chat\n' +
            '- Basic sleep stats (first 3 days of 7 — the rest is Pro)\n' +
            '- Facts about the last sleep and current wake window (no forecast)\n' +
            '- **1 child**\n' +
            '- **3 AI messages per day** (counter resets at midnight)\n' +
            '- iOS widget with sleep status\n\n' +
            '## What Pro unlocks\n' +
            '- **Personalized sleep predictions** — the wake window tunes to your actual baby\'s rhythm\n' +
            '- **Full 7-day stats** — uncut chart, full PDF report\n' +
            '- **Up to 4 children** in one account\n' +
            '- **Unlimited AI chat** — no daily counter\n' +
            '- Push notification at predicted wake time\n\n' +
            '## Price and trial\n' +
            '- **$6.99/mo** or **$39.99/year** (~$3.33/mo)\n' +
            '- **7 days of Pro free** for new users. Cancel any time during the trial — zero charge.\n\n' +
            'Billed through Apple ID. Manage the subscription in iPhone Settings.'
    },
    'free-vs-pro_kk': {
        slug: 'free-vs-pro',
        category: 'pro',
        title: 'Free-де не бар және Lupibu Pro не береді',
        readMinutes: 2,
        keywords: ['pro', 'жазылым', 'тегін', 'ақылы', 'шектеулер'],
        related: ['cancel-subscription', 'add-child', 'sleep-stats-report'],
        tldr: 'Тегін — жазбаларға шектеусіз толық трекер. Pro — жеке ұйқы болжамдары, 7 күндік толық статистика, 4 балаға дейін және шектеусіз ЖИ чат.',
        body:
            'Lupibu — soft freemium: тегін нұсқа шынында пайдалы, ал Pro нақты 4 шектеуді алып тастайды.\n\n' +
            '## Тегін нұсқада не бар\n' +
            '- 12 жазба түрі, таймерлер, толық тарих\n' +
            '- Чатта дауыспен енгізу\n' +
            '- Негізгі ұйқы статистикасы (7 күннің алғашқы 3-і — қалғаны Pro)\n' +
            '- Соңғы ұйқы мен ояу терезесі туралы дерек (болжамсыз)\n' +
            '- **1 бала**\n' +
            '- **Күніне 3 ЖИ хабарлама** (түнгі 12-де қайта басталады)\n' +
            '- Ұйқы күйімен iOS виджет\n\n' +
            '## Pro не ашады\n' +
            '- **Жеке ұйқы болжамдары** — ояу терезесі нақты сіздің балаңыздың ырғағына бейімделеді\n' +
            '- **7 күндік толық статистика** — қысқартылмаған график, PDF есеп\n' +
            '- Бір аккаунтта **4 балаға дейін**\n' +
            '- **Шектеусіз ЖИ чат** — тәуліктік есептегіш жоқ\n' +
            '- Болжамды ояну уақытында push хабарлама\n\n' +
            '## Бағасы және сынама кезеңі\n' +
            '- **$6.99/ай** немесе **$39.99/жыл** (~$3.33/ай)\n' +
            '- Жаңа қолданушыларға **7 күн Pro тегін**. Сынама ішінде кез келген уақытта бас тартсаңыз — ақы алынбайды.\n\n' +
            'Төлем Apple ID арқылы, жазылымды iPhone Баптауларында басқарасыз.'
    },

    'cancel-subscription_ru': {
        slug: 'cancel-subscription',
        category: 'pro',
        title: 'Как отменить подписку Pro',
        readMinutes: 1,
        keywords: ['отменить', 'подписка', 'pro', 'списание', 'вернуть', 'refund'],
        related: ['free-vs-pro'],
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
            '- Все ваши данные сохранятся — можно вернуться к Pro или продолжить на Free\n\n' +
            '## Если отменили в пробный период\n' +
            'Ничего не спишется. Доступ к Pro сохранится до окончания 7 дней, потом автоматически перейдёте на Free.\n\n' +
            '## Возврат денег\n' +
            'Возвраты обрабатывает Apple. Запросить возврат можно через [reportaproblem.apple.com](https://reportaproblem.apple.com) — обычно одобряют, если с момента оплаты прошло немного времени.'
    },
    'cancel-subscription_en': {
        slug: 'cancel-subscription',
        category: 'pro',
        title: 'How to cancel Pro',
        readMinutes: 1,
        keywords: ['cancel', 'subscription', 'pro', 'refund', 'stop'],
        related: ['free-vs-pro'],
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
            '- All your data stays — come back to Pro or stay on Free\n\n' +
            '## Canceling during the trial\n' +
            'Nothing charged. Pro stays until the 7-day trial ends, then you drop to Free automatically.\n\n' +
            '## Refunds\n' +
            'Apple handles refunds. Request via [reportaproblem.apple.com](https://reportaproblem.apple.com) — usually approved if not too much time has passed.'
    },
    'cancel-subscription_kk': {
        slug: 'cancel-subscription',
        category: 'pro',
        title: 'Pro жазылымын қалай бас тарту керек',
        readMinutes: 1,
        keywords: ['бас тарту', 'жазылым', 'pro'],
        related: ['free-vs-pro'],
        tldr: 'Apple ID → Жазылымдар арқылы кез келген уақытта бас тартуға болады. Pro-ға қатынас төленген кезеңнің соңына дейін сақталады.',
        body:
            '## Қалай бас тарту керек\n' +
            '- **iPhone Баптаулары** → атыңыз → **Жазылымдар**\n' +
            '- **Lupibu Pro**-ны табыңыз\n' +
            '- **«Жазылымды тоқтату»** басыңыз\n\n' +
            '## Не болады\n' +
            '- Pro мүмкіндіктері төленген кезеңнің соңына дейін сақталады\n' +
            '- Автоматты жаңарту өшеді\n' +
            '- Деректеріңіз сақталады\n\n' +
            '## Сынама кезеңінде бас тартсаңыз\n' +
            'Ешнәрсе алынбайды. 7 күннен кейін Free-ге көшесіз.\n\n' +
            '## Ақшаны қайтару\n' +
            'Apple өңдейді: [reportaproblem.apple.com](https://reportaproblem.apple.com).'
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
        tldr: 'Отчёт о сне выгружается PDF из вкладки «Статистика». Полной выгрузки всей истории в CSV пока нет. Удалить аккаунт — в «Профиле», в два шага.',
        body:
            'Говорим честно — без маркетинга.\n\n' +
            '## Что можно выгрузить сейчас\n' +
            '- **PDF-отчёт о сне за 7 дней** — вкладка **Статистика** → кнопка **«Поделиться отчётом»**. В отчёте: таймлайн каждого дня, средние, нормы по возрасту.\n' +
            '- Отчёт отправляется через iOS share sheet — в почту, AirDrop, мессенджер.\n\n' +
            '## Чего пока нет\n' +
            'Кнопки «выгрузить всё в CSV/JSON» в приложении нет. Если вам нужна выгрузка всех записей для GDPR-запроса — напишите на [contact@lupibu.com](mailto:contact@lupibu.com), мы подготовим вручную в разумный срок.\n\n' +
            'Мы не хотим обещать то, чего ещё не построили. Автоматическую выгрузку в CSV планируем добавить.\n\n' +
            '## Удалить аккаунт\n' +
            'Профиль → внизу экрана красная кнопка **«Удалить аккаунт»** → два подтверждения. Подробно — в статье «Удалить аккаунт или ребёнка».\n\n' +
            '## Приватность\n' +
            'Подробности о том, какие данные и куда уходят, — в [Политике конфиденциальности](legal.html?doc=privacy).'
    },
    'data-export-delete_en': {
        slug: 'data-export-delete',
        category: 'privacy',
        title: 'Exporting data and deleting your account',
        readMinutes: 2,
        keywords: ['export', 'delete', 'data', 'account', 'report', 'gdpr', 'right'],
        related: ['delete-account', 'voice-privacy', 'sleep-stats-report'],
        tldr: 'Sleep report exports as PDF from the Insights tab. A full CSV history export isn\'t in the app yet. Deleting the account is a 2-step flow in Profile.',
        body:
            'Straight talk, no marketing.\n\n' +
            '## What you can export today\n' +
            '- **7-day sleep PDF report** — **Insights** tab → **"Share report"** button. Includes: day-by-day timeline, averages, age-range norms.\n' +
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
        tldr: 'Ұйқы есебі «Статистика» қойындысынан PDF болып шығарылады. Барлық тарихты CSV-ге толық шығару әзірге жоқ. Аккаунтты жою — «Профильде», екі қадамда.',
        body:
            'Маркетингсіз, шынайы сөз.\n\n' +
            '## Қазір не шығаруға болады\n' +
            '- **7 күндік ұйқы PDF есебі** — **Статистика** қойындысы → **«Есеппен бөлісу»** батырмасы. Есепте: күн сайынғы таймлайн, орташа көрсеткіштер, жасқа қарай нормалар.\n' +
            '- iOS share sheet арқылы: поштаға, AirDrop-қа, мессенджерге.\n\n' +
            '## Қазір жоқ нәрсе\n' +
            'Қолданбада «бәрін CSV/JSON-ға шығару» батырмасы жоқ. Егер GDPR сұрауы үшін толық көшірме керек болса, [contact@lupibu.com](mailto:contact@lupibu.com) жазыңыз — қисынды уақытта қолмен дайындаймыз.\n\n' +
            'Әлі салынбаған нәрсені уәде беруді қаламаймыз. Автоматты CSV шығаруды қосуды жоспарлап отырмыз.\n\n' +
            '## Аккаунтты жою\n' +
            'Профиль → экранның төменгі жағындағы қызыл **«Аккаунтты жою»** батырмасы → екі растау. Толығырақ — «Аккаунтты немесе баланы жою» мақаласында.\n\n' +
            '## Құпиялылық\n' +
            'Қандай деректер сақталады, толық — [Құпиялық саясатында](legal.html?doc=privacy).'
    },

    /* ======================================== */
    /*  SLEEP STATS & REPORT (Insights tab)     */
    /* ======================================== */

    'sleep-stats-report_ru': {
        slug: 'sleep-stats-report',
        category: 'sleep',
        title: 'Как посмотреть статистику сна и выгрузить отчёт',
        readMinutes: 2,
        keywords: ['статистика', 'отчёт', 'pdf', 'график', 'insights', 'сон', 'экспорт', 'share report'],
        related: ['prediction-accuracy', 'data-export-delete', 'free-vs-pro'],
        tldr: 'Вкладка «Статистика» показывает 7-дневный таймлайн сна и средние. Кнопка «Поделиться отчётом» создаёт PDF и шлёт его через iOS share sheet.',
        body:
            'Вся аналитика сна собрана на вкладке **Статистика** — это вторая иконка внизу (диаграмма).\n\n' +
            '## Что показывается\n' +
            '- **Таймлайн за последние 7 дней** — каждый день как горизонтальная полоса на 24 часа; сны покрашены по качеству.\n' +
            '- **Средние:** общий сон за сутки, длительность наpа, количество напов, ночной сон.\n' +
            '- **Дельта от нормы** — сколько ваш ребёнок спит относительно возрастной нормы для его пола.\n' +
            '- **Кормления** — кол-во и разбивка (грудь / бутылочка / еда) ниже по экрану.\n\n' +
            '## Ограничения периода\n' +
            'Статистика фиксирована на последние 7 дней — выбора диапазона пока нет.\n\n' +
            '## Как выгрузить PDF-отчёт\n' +
            '- Прокрутите вниз до кнопки **«Поделиться отчётом»**\n' +
            '- Генерируется PDF: имя ребёнка, период, таймлайн по дням, средние\n' +
            '- Откроется стандартное окно «Поделиться» — отправьте в почту, AirDrop, мессенджер\n\n' +
            '## Что от Pro\n' +
            'На Free видны первые 3 дня из 7 — остальной график и PDF заблокированы. На Pro доступны все 7 дней и полный отчёт.'
    },
    'sleep-stats-report_en': {
        slug: 'sleep-stats-report',
        category: 'sleep',
        title: 'How to view sleep stats and share a report',
        readMinutes: 2,
        keywords: ['stats', 'report', 'pdf', 'chart', 'insights', 'sleep', 'export', 'share report'],
        related: ['prediction-accuracy', 'data-export-delete', 'free-vs-pro'],
        tldr: 'The Insights tab shows a 7-day sleep timeline and averages. "Share report" generates a PDF and sends it through the iOS share sheet.',
        body:
            'All sleep analytics live on the **Insights** tab — the second icon at the bottom (chart).\n\n' +
            '## What it shows\n' +
            '- **7-day timeline** — each day as a 24-hour horizontal bar; naps colored by quality.\n' +
            '- **Averages:** total sleep per day, nap duration, nap count, night sleep.\n' +
            '- **Delta from norm** — how much your baby sleeps relative to the age+gender range.\n' +
            '- **Feeds** — count and breakdown (breast / bottle / food) further down.\n\n' +
            '## Time range\n' +
            'Stats are fixed to the last 7 days — no custom range picker yet.\n\n' +
            '## Sharing the PDF report\n' +
            '- Scroll to the **"Share report"** button\n' +
            '- A PDF is generated: child name, period, day-by-day timeline, averages\n' +
            '- The iOS share sheet opens — send via mail, AirDrop, messenger\n\n' +
            '## What Pro unlocks\n' +
            'On Free, only the first 3 of 7 days are visible — the rest of the chart and the PDF are locked. Pro shows all 7 days and the full report.'
    },
    'sleep-stats-report_kk': {
        slug: 'sleep-stats-report',
        category: 'sleep',
        title: 'Ұйқы статистикасын қалай көру және есеп жасау',
        readMinutes: 2,
        keywords: ['статистика', 'есеп', 'pdf', 'график', 'insights', 'ұйқы', 'экспорт'],
        related: ['prediction-accuracy', 'data-export-delete', 'free-vs-pro'],
        tldr: 'Статистика қойындысы 7 күндік ұйқы таймлайнін және орташа көрсеткіштерді көрсетеді. «Есеппен бөлісу» батырмасы PDF жасап, iOS share sheet арқылы жібереді.',
        body:
            'Барлық ұйқы аналитикасы **Статистика** қойындысында — төменгі панельдегі екінші белгіше (график).\n\n' +
            '## Не көрсетіледі\n' +
            '- **Соңғы 7 күндік таймлайн** — әр күн 24 сағаттық көлденең жолақ; ұйқылар сапа бойынша боялған.\n' +
            '- **Орташа көрсеткіштер:** тәулігіне жалпы ұйқы, нап ұзақтығы, нап саны, түнгі ұйқы.\n' +
            '- **Нормадан ауытқу** — балаңыз жасына мен жынысына сәйкес нормамен салыстырғанда қанша ұйықтайды.\n' +
            '- **Тамақ** — саны және бөлінісі (ГС / бөтелке / тамақ) төменде.\n\n' +
            '## Кезең шектеуі\n' +
            'Статистика соңғы 7 күнге белгіленген — диапазонды таңдау әзірге жоқ.\n\n' +
            '## PDF есепті қалай жіберу\n' +
            '- **«Есеппен бөлісу»** батырмасына дейін жылжыңыз\n' +
            '- PDF жасалады: бала аты, кезең, күн сайынғы таймлайн, орташалар\n' +
            '- iOS «Бөлісу» терезесі ашылады — поштаға, AirDrop-қа, мессенджерге жіберіңіз\n\n' +
            '## Pro не ашады\n' +
            'Тегінде тек 7 күннің алғашқы 3-уі көрінеді — қалған график пен PDF құлыпталған. Pro-да 7 күннің бәрі және толық есеп.'
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
        tldr: 'История открывается из блока «Последние события» на главной. Есть два режима периода (24 часа или произвольный), фильтр по типу и редактирование/удаление по долгому нажатию.',
        body:
            'Полная история записей — не вкладка, а отдельный экран. Открывается кнопкой **«Смотреть все»** в блоке «Последние события» на главной.\n\n' +
            '## Выбор периода\n' +
            'Вверху экрана — переключатель режимов:\n' +
            '- **«Последние 24 часа»** — быстрый пресет, ничего настраивать не нужно\n' +
            '- **«Произвольный период»** — открывается календарь; выберите две даты, чтобы задать диапазон\n\n' +
            '## Фильтр по типу\n' +
            'Рядом — выпадающий фильтр: «Все типы» или один конкретный (сон, кормление, подгузник и т.д.). Фильтр применяется мгновенно.\n\n' +
            '## Группировка\n' +
            'Записи группируются по дням с заголовками «Сегодня», «Вчера», «Сб, 29 марта» и т.д. Внутри дня — в обратном хронологическом порядке (последние сверху).\n\n' +
            '## Редактировать или удалить\n' +
            '- **Тап по записи** открывает детали\n' +
            '- **Долгое нажатие** — контекстное меню: «Редактировать» или «Удалить»\n' +
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
        tldr: 'History opens from the "Recent events" block on home. Two period modes (last 24h or custom), a type filter, and long-press to edit or delete.',
        body:
            'Full entry history isn\'t a tab — it\'s a dedicated screen. Open via **"See all"** in the "Recent events" block on home.\n\n' +
            '## Period selection\n' +
            'Top of the screen — a mode switch:\n' +
            '- **"Last 24 hours"** — quick preset, no setup\n' +
            '- **"Custom range"** — opens a calendar; pick two dates to define the range\n\n' +
            '## Type filter\n' +
            'Next to it — a dropdown: "All types" or a single type (sleep, feed, diaper, etc.). Applies instantly.\n\n' +
            '## Grouping\n' +
            'Entries group by day with headers like "Today", "Yesterday", "Sat, Mar 29". Inside a day: newest at the top.\n\n' +
            '## Edit or delete\n' +
            '- **Tap** an entry to see details\n' +
            '- **Long-press** — context menu: "Edit" or "Delete"\n' +
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
        tldr: 'Тарих басты экрандағы «Соңғы оқиғалар» блогынан ашылады. Екі кезең режимі (24 сағат немесе кез келген), түр бойынша сүзгі, ұзақ басу арқылы өңдеу/жою.',
        body:
            'Жазбалардың толық тарихы — қойынды емес, жеке экран. Басты экрандағы «Соңғы оқиғалар» блогындағы **«Барлығын көру»** арқылы ашылады.\n\n' +
            '## Кезеңді таңдау\n' +
            'Экранның жоғарғы жағында — режим ауыстырғышы:\n' +
            '- **«Соңғы 24 сағат»** — жылдам пресет, баптау қажет емес\n' +
            '- **«Кез келген кезең»** — күнтізбе ашылады; диапазонды анықтау үшін екі күнді таңдаңыз\n\n' +
            '## Түр бойынша сүзгі\n' +
            'Жанында — ашылмалы сүзгі: «Барлық түрлер» немесе біреуі (ұйқы, тамақ, жөргек т.с.с.). Бірден қолданылады.\n\n' +
            '## Топтастыру\n' +
            'Жазбалар «Бүгін», «Кеше», «Сб, 29 наурыз» сияқты күндер бойынша топталады. Күн ішінде — жаңалары жоғарыда.\n\n' +
            '## Өңдеу немесе жою\n' +
            '- Жазбаны **басу** — толық ашады\n' +
            '- **Ұзақ басу** — мәзір: «Өңдеу» немесе «Жою»\n' +
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
        related: ['add-child', 'share-partner'],
        tldr: 'В шапке главного экрана — плашка с именем ребёнка. Нажмите на неё, чтобы выбрать другого. Приложение запоминает выбор между запусками.',
        body:
            'Если у вас больше одного ребёнка, в Lupibu есть быстрый переключатель.\n\n' +
            '## Где он\n' +
            'Сверху главного экрана — плашка с именем и фото ребёнка (между иконкой меню слева и иконкой AI справа). Нажмите, чтобы открыть список.\n\n' +
            '## Как выбрать другого\n' +
            '- Откроется список всех ваших детей\n' +
            '- Нажмите на нужного\n' +
            '- Все экраны — главная, статистика, история, AI-чат — сразу показывают его данные\n\n' +
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
        related: ['add-child', 'share-partner'],
        tldr: 'Tap the name pill in the home header to pick a different child. The app remembers your choice across launches.',
        body:
            'With more than one child, Lupibu gives you a fast switcher.\n\n' +
            '## Where it is\n' +
            'At the top of the home screen — a pill with the child\'s name and photo (between the menu icon on the left and the AI icon on the right). Tap to open the list.\n\n' +
            '## How to switch\n' +
            '- The list shows all your children\n' +
            '- Tap the one you want\n' +
            '- Every screen — home, insights, history, AI chat — immediately shows that child\'s data\n\n' +
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
        related: ['add-child', 'share-partner'],
        tldr: 'Басты экран шапкасындағы бала аты жазылған плиткаға басыңыз. Қолданба таңдауыңызды келесі іске қосуларға дейін сақтайды.',
        body:
            'Бірден көп бала болса, Lupibu-де жылдам ауыстырғыш бар.\n\n' +
            '## Ол қайда\n' +
            'Басты экранның жоғарғы жағында — бала аты мен фотосы бар плитка (сол жақтағы мәзір мен оң жақтағы ЖИ белгішесінің арасында). Тізімді ашу үшін басыңыз.\n\n' +
            '## Қалай ауыстыру\n' +
            '- Тізімде барлық балаларыңыз көрінеді\n' +
            '- Керектісін басыңыз\n' +
            '- Барлық экран — басты, статистика, тарих, ЖИ чат — бірден сол баланың деректерін көрсетеді\n\n' +
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
        tldr: 'Всё управление аккаунтом — в одном экране «Профиль» (иконка меню в шапке). Там: имя, язык, уведомления, единицы измерения, дети, семья, Pro и удаление аккаунта.',
        body:
            'В Lupibu нет отдельного меню настроек — всё собрано в одном экране **«Профиль»**. Открывается иконкой меню слева в шапке главного.\n\n' +
            '## Что там сверху\n' +
            '- **Имя** — редактируется на месте: нажмите на карандаш, введите, сохраните\n' +
            '- **Метод входа** — Apple Sign In (только он). Email в интерфейсе не показываем — только Firebase-идентификатор внутри\n\n' +
            '## Дети и семья\n' +
            '- Список ваших детей (до 4 на Pro)\n' +
            '- **«Добавить ребёнка»** внизу списка\n' +
            '- Тап по карточке — редактировать или посмотреть список семейных участников\n\n' +
            '## Настройки приложения\n' +
            '- **Язык** — English, Русский, Қазақша. Изменение синхронизируется в облако и применяется сразу\n' +
            '- **Единицы объёма** — мл или oz (для кормлений)\n' +
            '- **Уведомления** — тумблер; если iOS не разрешены, появится подсказка и кнопка «Открыть настройки»\n\n' +
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
        tldr: 'Everything account-related lives on one **Profile** screen (menu icon in the header): name, language, notifications, units, kids, family, Pro, and account deletion.',
        body:
            'Lupibu doesn\'t have a separate settings menu — it\'s all on one **Profile** screen. Open it via the menu icon on the left of the home header.\n\n' +
            '## At the top\n' +
            '- **Display name** — edit inline: tap the pencil, type, save\n' +
            '- **Sign-in method** — Apple Sign In only. Email is not shown in the UI; only a Firebase ID is used internally\n\n' +
            '## Children & family\n' +
            '- List of your kids (up to 4 on Pro)\n' +
            '- **"Add child"** at the bottom of the list\n' +
            '- Tap a card to edit or see family members\n\n' +
            '## App settings\n' +
            '- **Language** — English, Русский, Қазақша. Change syncs to cloud and applies instantly\n' +
            '- **Volume units** — ml or oz (for feeds)\n' +
            '- **Notifications** — toggle; if iOS permission is off, a hint + "Open Settings" shortcut appears\n\n' +
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
        tldr: 'Аккаунтқа қатысты бәрі бір **Профиль** экранында (шапкадағы мәзір белгішесі): ат, тіл, хабарламалар, бірліктер, балалар, отбасы, Pro және аккаунтты жою.',
        body:
            'Lupibu-де жеке баптаулар мәзірі жоқ — барлығы бір **Профиль** экранында. Басты экран шапкасының сол жағындағы мәзір белгішесі арқылы ашылады.\n\n' +
            '## Жоғарғы жағында\n' +
            '- **Көрсетілетін ат** — орнында өңделеді: қарандашты басып, жазып, сақтаңыз\n' +
            '- **Кіру әдісі** — тек Apple Sign In. Email интерфейсте көрсетілмейді; ішінде тек Firebase ID қолданылады\n\n' +
            '## Балалар мен отбасы\n' +
            '- Балаларыңыздың тізімі (Pro-да 4-ке дейін)\n' +
            '- Тізімнің төменгі жағында **«Бала қосу»**\n' +
            '- Картаны басу — өңдеу немесе отбасы мүшелерін қарау\n\n' +
            '## Қолданба баптаулары\n' +
            '- **Тіл** — English, Русский, Қазақша. Өзгеріс бұлтқа синхрондалып, бірден қолданылады\n' +
            '- **Көлем бірлігі** — мл немесе oz (тамақтандыру үшін)\n' +
            '- **Хабарламалар** — ауыстырғыш; iOS рұқсаты болмаса, кеңес пен «Баптауларды ашу» шолғышы пайда болады\n\n' +
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
        tldr: 'Lupibu присылает пуш о предполагаемом пробуждении (если Pro и идёт сон) и одно утреннее сообщение с инсайтом. Тумблер — в Профиле; iOS-разрешение — системное.',
        body:
            'Мы сознательно присылаем мало пушей — только когда есть что сказать по делу.\n\n' +
            '## Какие пуши бывают\n' +
            '- **Окно пробуждения** — за 15 минут до прогнозируемого конца сна, если сон сейчас идёт. Только для Pro с персональным прогнозом.\n' +
            '- **Утренний инсайт** — один раз в день, с коротким выводом по ритму ребёнка (сгенерирован AI по вашим данным). Открывается в чате.\n\n' +
            '## Как включить\n' +
            '- **Профиль → «Уведомления»** — тумблер\n' +
            '- Впервые включите — iOS спросит системное разрешение\n' +
            '- Если разрешение заблокировано, появится кнопка **«Открыть настройки»** → iOS Настройки → Lupibu → Уведомления\n\n' +
            '## Когда приходит запрос на разрешение\n' +
            'iOS-разрешение запрашивается не сразу при старте, а **после первого записанного сна** — чтобы вы уже понимали, зачем оно. Можно отклонить и включить потом вручную.\n\n' +
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
        tldr: 'Lupibu sends a push near the predicted wake-up (Pro-only, while sleeping) and one morning insight. Toggle lives in Profile; iOS permission is system-level.',
        body:
            'We deliberately keep pushes rare — only when there\'s something worth saying.\n\n' +
            '## What pushes exist\n' +
            '- **Wake-window alert** — 15 minutes before the predicted end of an ongoing sleep. Pro only, with personalized predictions.\n' +
            '- **Morning insight** — once a day, a short AI-generated note about your baby\'s rhythm. Opens in chat.\n\n' +
            '## Turning it on\n' +
            '- **Profile → "Notifications"** — toggle\n' +
            '- First time you flip it on, iOS asks for system permission\n' +
            '- If permission is blocked, you\'ll see an **"Open Settings"** shortcut → iOS Settings → Lupibu → Notifications\n\n' +
            '## When the permission prompt appears\n' +
            'iOS permission isn\'t requested at launch — it\'s shown **after your first logged sleep**, so you already understand the value. You can decline and enable later.\n\n' +
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
        tldr: 'Lupibu болжамды оянуға жақын push және күніне бір таңғы хабарлама жібереді. Ауыстырғыш — Профильде; iOS рұқсаты — жүйелік.',
        body:
            'Біз әдейі аз хабарлама жібереміз — тек айтуға тұрарлық нәрсе болғанда.\n\n' +
            '## Қандай push бар\n' +
            '- **Ояу терезесі ескертуі** — жалғасып жатқан ұйқының болжамды аяқталуынан 15 минут бұрын. Тек Pro-да, жеке болжаммен.\n' +
            '- **Таңғы инсайт** — күніне бір рет, баланың ырғағы туралы қысқа ЖИ жазбасы. Чатта ашылады.\n\n' +
            '## Қалай қосу\n' +
            '- **Профиль → «Хабарламалар»** — ауыстырғыш\n' +
            '- Алғаш қосқанда, iOS жүйелік рұқсат сұрайды\n' +
            '- Рұқсат бұғатталса, **«Баптауларды ашу»** батырмасы көрінеді → iOS Баптаулары → Lupibu → Хабарламалар\n\n' +
            '## Рұқсат сұрағы қашан шығады\n' +
            'iOS рұқсаты іске қосуда сұралмайды — **алғашқы ұйқыны жазғаннан кейін** көрінеді, сонда сіз пайданы түсініп үлгересіз. Қабылдамай, кейін қосуға болады.\n\n' +
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
        related: ['data-export-delete', 'cancel-subscription', 'free-vs-pro'],
        tldr: 'Удалить ребёнка: Профиль → карточка ребёнка → Удалить (только владелец). Удалить аккаунт: красная кнопка внизу Профиля → два подтверждения, данные стираются сразу.',
        body:
            'Lupibu не прячет удаление — всё делается в два тапа и не требует писем в поддержку.\n\n' +
            '## Удалить ребёнка\n' +
            '- Откройте **Профиль** → нажмите на карточку ребёнка\n' +
            '- На экране редактирования внизу — **«Удалить ребёнка»** (красная)\n' +
            '- Подтвердите\n\n' +
            'Удалять ребёнка может только **владелец аккаунта**. Если вы добавлены как член семьи — удалить не получится; попросите владельца или отвяжите себя.\n\n' +
            '## Удалить аккаунт\n' +
            '- **Профиль** → прокрутите вниз → красная кнопка **«Удалить аккаунт»**\n' +
            '- Появится экран с опциями (если есть Pro — сначала предложат управлять подпиской)\n' +
            '- **Второе подтверждение** — «Точно удалить?» с предупреждением\n' +
            '- После подтверждения: локальные данные стираются сразу (MMKV + AsyncStorage + RevenueCat), на сервере аккаунт удаляется\n\n' +
            '## Что уходит вместе с аккаунтом\n' +
            '- Все профили детей и их записи\n' +
            '- История AI-чата\n' +
            '- Связи с членами семьи (они теряют доступ к вашим детям)\n' +
            '- Подписка — автопродление нужно отдельно отменить в Apple ID, если вы в пробном периоде (см. «Как отменить подписку Pro»)\n\n' +
            '## Восстановление\n' +
            'После удаления аккаунта восстановление невозможно — вы должны начать с нуля. Поэтому подумайте дважды или напишите нам сначала: [contact@lupibu.com](mailto:contact@lupibu.com).'
    },
    'delete-account_en': {
        slug: 'delete-account',
        category: 'privacy',
        title: 'Deleting a child or your account',
        readMinutes: 2,
        keywords: ['delete account', 'delete child', 'close account', 'forget me', 'gdpr'],
        related: ['data-export-delete', 'cancel-subscription', 'free-vs-pro'],
        tldr: 'Delete a child: Profile → child card → Delete (owner only). Delete account: red button at the bottom of Profile → two confirmations, data is wiped immediately.',
        body:
            'Lupibu doesn\'t hide deletion — it\'s two taps, no support tickets.\n\n' +
            '## Delete a child\n' +
            '- Open **Profile** → tap the child card\n' +
            '- On the edit screen, at the bottom — **"Delete child"** (red)\n' +
            '- Confirm\n\n' +
            'Only the **account owner** can delete a child. If you were added as a family member, you can\'t delete — ask the owner, or remove yourself.\n\n' +
            '## Delete account\n' +
            '- **Profile** → scroll to the bottom → red **"Delete account"** button\n' +
            '- A sheet appears with options (if you\'re on Pro, it nudges you to manage the subscription first)\n' +
            '- **Second confirmation** — "Really delete?" with a warning\n' +
            '- After confirming: local data is cleared immediately (MMKV + AsyncStorage + RevenueCat), the account is deleted on the server\n\n' +
            '## What\'s gone\n' +
            '- All child profiles and their entries\n' +
            '- AI chat history\n' +
            '- Family-member links (they lose access to your children)\n' +
            '- The subscription itself — auto-renew has to be canceled separately via Apple ID if you\'re still in trial (see "How to cancel Pro")\n\n' +
            '## Restore\n' +
            'Once the account is deleted, there is no restore — you\'d start from scratch. So think twice, or write us first: [contact@lupibu.com](mailto:contact@lupibu.com).'
    },
    'delete-account_kk': {
        slug: 'delete-account',
        category: 'privacy',
        title: 'Баланы немесе аккаунтты қалай жою керек',
        readMinutes: 2,
        keywords: ['аккаунтты жою', 'баланы жою', 'аккаунт жабу', 'мені ұмыт'],
        related: ['data-export-delete', 'cancel-subscription', 'free-vs-pro'],
        tldr: 'Баланы жою: Профиль → бала картасы → Жою (тек иесі). Аккаунтты жою: Профильдің төменгі жағындағы қызыл батырма → екі растау, деректер бірден жойылады.',
        body:
            'Lupibu жоюды жасырмайды — екі басу, қолдауға хат жазудың қажеті жоқ.\n\n' +
            '## Баланы жою\n' +
            '- **Профильді** ашыңыз → бала картасын басыңыз\n' +
            '- Өңдеу экранының төменгі жағында — **«Баланы жою»** (қызыл)\n' +
            '- Растаңыз\n\n' +
            'Баланы **тек аккаунт иесі** жоя алады. Сіз отбасы мүшесі ретінде қосылсаңыз — жою мүмкін емес; иесіне айтыңыз немесе өзіңізді алып тастаңыз.\n\n' +
            '## Аккаунтты жою\n' +
            '- **Профиль** → төменге жылжыңыз → қызыл **«Аккаунтты жою»** батырмасы\n' +
            '- Опциялары бар терезе ашылады (Pro болсаңыз, алдымен жазылымды басқаруды ұсынады)\n' +
            '- **Екінші растау** — «Шынымен жою керек пе?» ескертуімен\n' +
            '- Растағаннан кейін: жергілікті деректер бірден өшіріледі (MMKV + AsyncStorage + RevenueCat), серверде аккаунт жойылады\n\n' +
            '## Немен бірге кетеді\n' +
            '- Барлық бала профильдері мен олардың жазбалары\n' +
            '- ЖИ чат тарихы\n' +
            '- Отбасы мүшелерінің байланысы (олар балаларыңызға қатынасты жоғалтады)\n' +
            '- Жазылымның өзі — сынама кезеңінде болсаңыз, автожаңартуды Apple ID арқылы бөлек тоқтату керек\n\n' +
            '## Қалпына келтіру\n' +
            'Аккаунт жойылғаннан кейін қалпына келтіру жоқ — нөлден бастайсыз. Сондықтан екі рет ойланыңыз немесе алдымен жазыңыз: [contact@lupibu.com](mailto:contact@lupibu.com).'
    }

};
