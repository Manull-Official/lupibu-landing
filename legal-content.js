var docs = {
  privacy_en: `

PRIVACY POLICY
Version 2.0 dated 03.04.2026

1. INTRODUCTION
1.1. Lupibu ("We", "Us", "Our") respects your privacy. This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you use the Lupibu mobile application (the "App").
1.2. By using the App, you consent to the data practices described in this Privacy Policy. If you do not agree with this Policy, please do not use the App.
1.3. **Governing Law:** This Policy is governed by the Law of the Republic of Kazakhstan "On Personal Data and their Protection" (No. 94-V, dated 21 May 2013). We also adhere to applicable principles of the EU General Data Protection Regulation (GDPR) and the US Children's Online Privacy Protection Act (COPPA).
1.4. **Data Controller:** The developer of the Lupibu mobile application. Contact: contact@lupibu.com.

2. INFORMATION WE COLLECT
We collect personal information only to the extent necessary for the App to function and to improve your experience.

2.1. **Information You Provide Directly:**
*   **Account Data:** Your name and email address, as provided through Apple Sign-In during registration. If you chose "Hide My Email" in Apple Sign-In, we receive only a private Apple relay address (e.g. \`xxx@privaterelay.appleid.com\`), not your real email. The email is used for essential service communications (account recovery, legal notices) only; we do not send marketing emails.
*   **Child Data:** Name, gender, and date of birth of your child. **By providing this data, you confirm that you are the parent or legal guardian of the child and have full authority to provide this information.**
*   **Entries and Logs:** Sleep records (start time, end time, quality rating), feeding records (breast/bottle/food, timestamps), and other daily tracking entries (diaper, walk, doctor visit, medication, vaccination, symptoms, massage, custom entries).
*   **Photos:** Photos you attach to entries. A single photo can be attached to any entry. Photos are uploaded to and stored in Google Cloud Storage.
*   **AI Assistant Conversations:** Text messages you send to the built-in AI assistant.
*   **Voice Input:** Audio recordings you make through the App's voice input feature. Voice recordings are transmitted to Google Gemini AI for transcription and are **not stored** by Us or by Google after processing. Only the resulting text is saved as an entry.

2.2. **Information Collected Automatically:**
*   **Device Information:** Device type, operating system version.
*   **Usage Analytics:** App usage patterns and feature interactions, collected via Firebase Analytics and PostHog.
*   **Crash Reports:** Technical error data, device state, and stack traces, collected via Sentry to diagnose and fix bugs.
*   **Session Replay (sampled):** Sentry records anonymized replays of app sessions for approximately 10% of users (100% of sessions where an error occurs). Replays capture screen navigation, taps, and scroll events. **All text inputs and images are masked by default**, so typed content, child names, and photos are not visible in the recording. You can disable crash and replay collection in the device's system diagnostics settings (iOS: Settings → Privacy & Security → Analytics & Improvements).
*   **Push Notification Tokens:** Device tokens used to deliver push notifications (sleep reminders, daily tips).

2.3. **Information We Do NOT Collect:**
*   We do not collect your phone number or location data.
*   We do not collect biometric data.
*   We do not collect payment or financial information.
*   We do not serve ads or collect data for advertising purposes.

3. HOW WE USE YOUR INFORMATION
We use collected information for the following purposes:
*   **Core Functionality:** To provide sleep tracking, feeding logs, daily routines, and personalized schedule recommendations.
*   **AI-Powered Features:** To power the AI assistant (answering questions, generating tips) and to transcribe voice input into structured entries. AI features use automated decision-making to generate personalized recommendations based on your child's data. These recommendations are informational only and are not a substitute for medical advice.
*   **Push Notifications:** To send you sleep reminders, daily tips, and important updates. You can disable notifications at any time through your device settings.
*   **Analytics and Improvement:** To understand how the App is used and to improve its features, stability, and performance.
*   **Technical Support:** To diagnose crashes and resolve technical issues.
*   **Legal Compliance:** To comply with legal obligations and respond to lawful requests from authorities.

4. AI AND AUTOMATED PROCESSING DISCLOSURE
4.1. The App uses artificial intelligence (Google Gemini AI via Vertex AI) for the following purposes:
*   **Voice Transcription:** Converting voice recordings into text entries. Audio is processed in real time and is not stored after transcription.
*   **AI Assistant:** Generating personalized responses, tips, and recommendations based on your child's tracking data.
*   **Proactive Insights:** Generating daily observations and suggestions based on patterns in your child's data.
4.2. **Automated Decision-Making:** The App uses automated algorithms (including AI models and statistical methods) to generate sleep schedule recommendations, bedtime predictions, and wake window estimates. These outputs are informational only. No significant decisions affecting your legal rights are made solely through automated processing.
4.3. **Human Oversight:** You may contact us at any time to request human review of any automated recommendation or to opt out of AI-powered features.

5. DATA SHARING AND THIRD-PARTY PROCESSORS
5.1. **We do not sell, rent, or trade your personal information.** We do not share data with advertisers.
5.2. We use the following trusted service providers (subprocessors) to operate the App:

| **Provider** | **Purpose** | **Data Processed** | **Server Location** |
|---|---|---|---|
| Google Cloud Platform | Hosting, database, photo storage | All app data, uploaded photos | European Union (Warsaw, Poland — \`europe-central2\`) |
| Firebase Auth | User authentication | Apple Sign-In token, user ID, email (possibly Apple relay) | United States |
| Firebase Analytics | Usage analytics | Anonymous usage events, device info | United States |
| PostHog | Product analytics | Anonymous usage events, device info | EU (Frankfurt, Germany) |
| Sentry | Crash reporting, sampled session replay (masked text and images) | Error logs, device state, stack traces, anonymized session recordings | United States |
| Google Gemini AI / Vertex AI | Voice transcription, AI assistant | Voice audio (real-time, not stored), conversation text, child tracking data | United States |
| Telegram Bot API | Feedback delivery to our support team | Feedback message text, attached screenshots, technical logs (when you submit feedback in-app) | Global (routed through Telegram infrastructure) |

5.3. Each subprocessor is bound by data processing agreements that require them to protect your data in accordance with applicable laws.
5.4. **Legal Disclosure:** We may disclose your information if required to do so by law, court order, or a valid request from a government authority of the Republic of Kazakhstan.

6. INTERNATIONAL DATA TRANSFERS
6.1. Your data may be transferred to and processed in countries outside the Republic of Kazakhstan, including EU member states (Poland for backend hosting and photo storage; Germany for product analytics) and the United States (for Firebase Auth, Firebase Analytics, Sentry, and Google Gemini AI / Vertex AI).
6.2. When transferring data internationally, we ensure that adequate safeguards are in place, including data processing agreements with our subprocessors that meet the requirements of Kazakhstan's data protection law and GDPR standards.

7. DATA RETENTION
We retain your data for specific periods depending on its category:

| **Data Category** | **Retention Period** |
|---|---|
| Account data (name, user ID) | While your account is active + 1 year after deletion |
| Child data (name, gender, DOB) | While your account is active + 1 year after deletion |
| Tracking entries (sleep, feeding, etc.) | While your account is active + 1 year after deletion |
| Photos attached to entries | While your account is active + 1 year after deletion |
| AI assistant conversations | 90 days from creation |
| Voice recordings | Not stored — processed in real time and discarded |
| Analytics data (Firebase, PostHog) | 14 months (Firebase default), 12 months (PostHog) |
| Crash reports (Sentry) | 90 days |
| Push notification tokens | While your account is active; removed on account deletion |

7.1. After the retention period expires, data is permanently deleted or irreversibly anonymized.
7.2. We may retain certain data longer if required by applicable law (e.g., for dispute resolution or tax obligations), but no longer than 3 years after account deletion.

8. CHILDREN'S PRIVACY
8.1. The App is designed for parents and legal guardians to track their children's daily routines. **The App does not target children and is not intended to be used by children directly.**
8.2. We do not knowingly collect personal information directly from children under the age of 13 (or 16, where GDPR applies) without verified parental consent.
8.3. By creating a child profile in the App, you, as the parent or legal guardian, provide explicit, informed consent for the collection and processing of your child's data for the purposes described in this Policy.
8.4. If you believe that a child's data has been collected without proper parental consent, please contact us immediately at contact@lupibu.com, and we will delete the data promptly.

9. DATA SECURITY
9.1. We implement industry-standard administrative, technical, and organizational security measures to protect your personal information, including:
*   **Encryption in Transit:** All data transmitted between the App and our servers is encrypted using TLS 1.2+.
*   **Encryption at Rest:** Data stored in our databases is encrypted at rest.
*   **Access Control:** Access to personal data is restricted to authorized personnel on a need-to-know basis.
*   **Authentication Security:** We use Firebase Auth with Apple Sign-In, which provides cryptographic identity verification.
*   **Infrastructure Security:** Our servers are hosted on Google Cloud Platform, which maintains SOC 2, ISO 27001, and other security certifications.
9.2. Despite these measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security, but we continuously review and improve our security practices.

10. YOUR RIGHTS
You have the following rights regarding your personal data:
*   **Right of Access:** Request a copy of the personal data we hold about you.
*   **Right to Rectification:** Request correction of inaccurate or incomplete personal data.
*   **Right to Deletion ("Right to be Forgotten"):** Request deletion of your personal data. You can delete your account and all associated data directly in the App settings.
*   **Right to Restrict Processing:** Request that we limit how we process your data.
*   **Right to Data Portability:** Request that we provide your data in a structured, commonly used, machine-readable format.
*   **Right to Object:** Object to the processing of your personal data for specific purposes.
*   **Right to Withdraw Consent:** Withdraw your consent to data processing at any time. Withdrawal does not affect the lawfulness of processing performed before the withdrawal.
*   **Right to Human Review:** Request human review of any decision made through automated processing.

10.1. To exercise any of these rights, contact us at contact@lupibu.com. We will respond within 30 calendar days.
10.2. If you believe your rights have been violated, you have the right to file a complaint with the authorized body for the protection of personal data of the Republic of Kazakhstan.

11. CHANGES TO THIS POLICY
11.1. We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Version" date at the top of this document.
11.2. We will notify you of material changes through the App (e.g., via push notification or an in-app notice) before they take effect.
11.3. Continued use of the App after the changes take effect constitutes your acceptance of the updated Policy.

12. CONTACT US
If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
*   **Privacy inquiries:** contact@lupibu.com
*   **General support:** contact@lupibu.com
`,
  privacy_ru: `

ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
Версия 2.0 от 03.04.2026

1. ВВЕДЕНИЕ
1.1. Lupibu («Мы», «Нас», «Наш») уважает вашу конфиденциальность. Настоящая Политика конфиденциальности описывает, как мы собираем, используем, храним, передаём и защищаем ваши персональные данные при использовании мобильного приложения Lupibu (далее — «Приложение»).
1.2. Используя Приложение, вы соглашаетесь с практиками обработки данных, изложенными в настоящей Политике. Если вы не согласны, пожалуйста, не используйте Приложение.
1.3. **Применимое право:** Настоящая Политика регулируется Законом Республики Казахстан «О персональных данных и их защите» (№ 94-V от 21 мая 2013 г.). Мы также соблюдаем применимые принципы Общего регламента защиты данных ЕС (GDPR) и Закона США о защите конфиденциальности детей в Интернете (COPPA).
1.4. **Оператор данных:** Разработчик мобильного приложения Lupibu. Контакт: contact@lupibu.com.

2. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ
Мы собираем персональные данные только в объёме, необходимом для работы Приложения и улучшения вашего опыта.

2.1. **Данные, которые вы предоставляете:**
*   **Данные аккаунта:** Ваше имя и адрес электронной почты, полученные через Apple Sign-In при регистрации. Если вы выбрали «Скрыть e-mail» при входе через Apple, мы получаем только приватный релей Apple (например, \`xxx@privaterelay.appleid.com\`), а не ваш реальный адрес. Email используется исключительно для сервисных коммуникаций (восстановление аккаунта, юридические уведомления); маркетинговые рассылки мы не отправляем.
*   **Данные ребёнка:** Имя, пол и дата рождения вашего ребёнка. **Предоставляя эти данные, вы подтверждаете, что являетесь родителем или законным представителем ребёнка и имеете полное право предоставлять эту информацию.**
*   **Записи и журналы:** Данные сна (время начала, время окончания, оценка качества), данные кормления (грудь/бутылочка/прикорм, время), а также другие ежедневные записи (подгузник, прогулка, визит к врачу, приём лекарств, вакцинация, симптомы, массаж, пользовательские записи).
*   **Фотографии:** Фотографии, которые вы прикрепляете к записям. К любой записи можно прикрепить одну фотографию. Фотографии загружаются и хранятся в Google Cloud Storage.
*   **Диалоги с AI-ассистентом:** Текстовые сообщения, которые вы отправляете встроенному AI-ассистенту.
*   **Голосовой ввод:** Аудиозаписи, которые вы делаете через функцию голосового ввода в Приложении. Голосовые записи передаются в Google Gemini AI для транскрибации и **не сохраняются** ни нами, ни Google после обработки. Сохраняется только результирующий текст в виде записи.

2.2. **Данные, собираемые автоматически:**
*   **Информация об устройстве:** Тип устройства, версия операционной системы.
*   **Аналитика использования:** Паттерны использования Приложения и взаимодействия с функциями, собираемые через Firebase Analytics и PostHog.
*   **Отчёты об ошибках:** Технические данные об ошибках, состояние устройства и стек вызовов, собираемые через Sentry для диагностики и исправления сбоев.
*   **Воспроизведение сессий (выборочно):** Sentry записывает обезличенные повторы сессий приложения примерно для 10% пользователей (100% сессий, в которых произошла ошибка). Повторы фиксируют навигацию по экранам, нажатия и прокрутку. **Все текстовые поля ввода и изображения маскируются по умолчанию**, поэтому введённый текст, имена детей и фотографии не видны в записи. Вы можете отключить сбор отчётов и воспроизведений в системных настройках диагностики (iOS: «Настройки» → «Конфиденциальность и безопасность» → «Аналитика и улучшения»).
*   **Токены push-уведомлений:** Токены устройства, используемые для доставки push-уведомлений (напоминания о сне, ежедневные советы).

2.3. **Данные, которые мы НЕ собираем:**
*   Мы не собираем ваш номер телефона или данные о местоположении.
*   Мы не собираем биометрические данные.
*   Мы не собираем платёжные или финансовые данные.
*   Мы не показываем рекламу и не собираем данные в рекламных целях.

3. КАК МЫ ИСПОЛЬЗУЕМ ВАШИ ДАННЫЕ
Мы используем собранные данные в следующих целях:
*   **Основная функциональность:** Обеспечение трекинга сна, журнала кормлений, учёта ежедневных процедур и персонализированных рекомендаций по расписанию.
*   **AI-функции:** Обеспечение работы AI-ассистента (ответы на вопросы, генерация советов) и транскрибация голосового ввода в структурированные записи. AI-функции используют автоматизированную обработку для формирования персонализированных рекомендаций на основе данных вашего ребёнка. Эти рекомендации носят исключительно информационный характер и не являются заменой медицинских консультаций.
*   **Push-уведомления:** Отправка напоминаний о сне, ежедневных советов и важных обновлений. Вы можете отключить уведомления в любой момент через настройки устройства.
*   **Аналитика и улучшение:** Анализ использования Приложения для улучшения функций, стабильности и производительности.
*   **Техническая поддержка:** Диагностика сбоев и решение технических проблем.
*   **Соблюдение законодательства:** Выполнение требований закона и ответ на законные запросы уполномоченных органов.

4. РАСКРЫТИЕ ИНФОРМАЦИИ ОБ ИСКУССТВЕННОМ ИНТЕЛЛЕКТЕ И АВТОМАТИЗИРОВАННОЙ ОБРАБОТКЕ
4.1. Приложение использует искусственный интеллект (Google Gemini AI через Vertex AI) для следующих целей:
*   **Транскрибация голоса:** Преобразование голосовых записей в текстовые записи. Аудио обрабатывается в режиме реального времени и не сохраняется после транскрибации.
*   **AI-ассистент:** Генерация персонализированных ответов, советов и рекомендаций на основе данных отслеживания вашего ребёнка.
*   **Проактивные наблюдения:** Формирование ежедневных наблюдений и предложений на основе паттернов в данных вашего ребёнка.
4.2. **Автоматизированное принятие решений:** Приложение использует автоматизированные алгоритмы (включая AI-модели и статистические методы) для формирования рекомендаций по режиму сна, прогнозирования времени укладывания и оценки «окон бодрствования». Эти результаты носят исключительно информационный характер. Никакие значимые решения, затрагивающие ваши законные права, не принимаются исключительно на основе автоматизированной обработки.
4.3. **Человеческий контроль:** Вы можете в любое время обратиться к нам с просьбой о пересмотре человеком любой автоматизированной рекомендации или отказе от AI-функций.

5. ПЕРЕДАЧА ДАННЫХ И СТОРОННИЕ ОБРАБОТЧИКИ
5.1. **Мы не продаём, не сдаём в аренду и не обмениваем ваши персональные данные.** Мы не передаём данные рекламодателям.
5.2. Для функционирования Приложения мы используем следующих доверенных поставщиков услуг (субоператоров):

| **Поставщик** | **Назначение** | **Обрабатываемые данные** | **Расположение серверов** |
|---|---|---|---|
| Google Cloud Platform | Хостинг, база данных, хранение фотографий | Все данные приложения, загруженные фотографии | Европейский Союз (Варшава, Польша — \`europe-central2\`) |
| Firebase Auth | Аутентификация пользователей | Токен Apple Sign-In, ID пользователя, email (возможно релей Apple) | США |
| Firebase Analytics | Аналитика использования | Анонимные события использования, данные устройства | США |
| PostHog | Продуктовая аналитика | Анонимные события использования, данные устройства | ЕС (Франкфурт, Германия) |
| Sentry | Отчёты об ошибках, выборочное воспроизведение сессий (с маскировкой текста и изображений) | Логи ошибок, состояние устройства, стек вызовов, обезличенные записи сессий | США |
| Google Gemini AI / Vertex AI | Транскрибация голоса, AI-ассистент | Голосовое аудио (в реальном времени, не сохраняется), текст диалогов, данные отслеживания ребёнка | США |
| Telegram Bot API | Доставка обратной связи нашей службе поддержки | Текст сообщения обратной связи, приложенные скриншоты, технические логи (при отправке фидбека из приложения) | Глобально (маршрутизируется через инфраструктуру Telegram) |

5.3. Каждый субоператор связан соглашением об обработке данных, обязывающим его защищать ваши данные в соответствии с применимым законодательством.
5.4. **Раскрытие по закону:** Мы можем раскрыть вашу информацию, если это требуется по закону, решению суда или действительному запросу государственного органа Республики Казахстан.

6. МЕЖДУНАРОДНАЯ ПЕРЕДАЧА ДАННЫХ
6.1. Ваши данные могут передаваться и обрабатываться в странах за пределами Республики Казахстан, включая государства — члены ЕС (Польша — хостинг бэкенда и хранение фото; Германия — продуктовая аналитика) и Соединённые Штаты Америки (Firebase Auth, Firebase Analytics, Sentry, Google Gemini AI / Vertex AI).
6.2. При международной передаче данных мы обеспечиваем надлежащие гарантии защиты, включая соглашения об обработке данных с нашими субоператорами, соответствующие требованиям законодательства Казахстана о защите персональных данных и стандартам GDPR.

7. СРОКИ ХРАНЕНИЯ ДАННЫХ
Мы храним ваши данные в течение определённых сроков в зависимости от категории:

| **Категория данных** | **Срок хранения** |
|---|---|
| Данные аккаунта (имя, ID пользователя) | Пока аккаунт активен + 1 год после удаления |
| Данные ребёнка (имя, пол, дата рождения) | Пока аккаунт активен + 1 год после удаления |
| Записи (сон, кормление и пр.) | Пока аккаунт активен + 1 год после удаления |
| Фотографии, прикреплённые к записям | Пока аккаунт активен + 1 год после удаления |
| Диалоги с AI-ассистентом | 90 дней с момента создания |
| Голосовые записи | Не сохраняются — обрабатываются в реальном времени и удаляются |
| Аналитические данные (Firebase, PostHog) | 14 месяцев (Firebase), 12 месяцев (PostHog) |
| Отчёты об ошибках (Sentry) | 90 дней |
| Токены push-уведомлений | Пока аккаунт активен; удаляются при удалении аккаунта |

7.1. По истечении срока хранения данные безвозвратно удаляются или необратимо анонимизируются.
7.2. Мы можем хранить определённые данные дольше указанных сроков, если это требуется применимым законодательством (например, для разрешения споров или выполнения налоговых обязательств), но не более 3 лет после удаления аккаунта.

8. КОНФИДЕНЦИАЛЬНОСТЬ ДЕТЕЙ
8.1. Приложение предназначено для родителей и законных представителей для отслеживания ежедневного распорядка их детей. **Приложение не ориентировано на детей и не предназначено для непосредственного использования детьми.**
8.2. Мы сознательно не собираем персональные данные непосредственно от детей младше 13 лет (или 16 лет, если применяется GDPR) без верифицированного согласия родителей.
8.3. Создавая профиль ребёнка в Приложении, вы как родитель или законный представитель даёте явное, информированное согласие на сбор и обработку данных вашего ребёнка в целях, описанных в настоящей Политике.
8.4. Если вы полагаете, что данные ребёнка были собраны без надлежащего согласия родителя, незамедлительно свяжитесь с нами по адресу contact@lupibu.com — мы оперативно удалим такие данные.

9. БЕЗОПАСНОСТЬ ДАННЫХ
9.1. Мы применяем стандартные административные, технические и организационные меры безопасности для защиты ваших персональных данных, в том числе:
*   **Шифрование при передаче:** Все данные, передаваемые между Приложением и нашими серверами, шифруются с использованием TLS 1.2+.
*   **Шифрование при хранении:** Данные в наших базах данных зашифрованы.
*   **Контроль доступа:** Доступ к персональным данным ограничен уполномоченным персоналом по принципу минимальных привилегий.
*   **Безопасность аутентификации:** Мы используем Firebase Auth с Apple Sign-In, обеспечивающий криптографическую верификацию личности.
*   **Безопасность инфраструктуры:** Наши серверы размещены на Google Cloud Platform, имеющей сертификации SOC 2, ISO 27001 и другие.
9.2. Несмотря на принятые меры, ни один способ электронной передачи или хранения данных не является абсолютно безопасным. Мы не можем гарантировать абсолютную безопасность, но постоянно совершенствуем наши практики защиты данных.

10. ВАШИ ПРАВА
Вы обладаете следующими правами в отношении ваших персональных данных:
*   **Право на доступ:** Запросить копию персональных данных, которые мы храним о вас.
*   **Право на исправление:** Запросить исправление неточных или неполных данных.
*   **Право на удаление («Право на забвение»):** Запросить удаление ваших персональных данных. Вы можете удалить аккаунт и все связанные данные непосредственно в настройках Приложения.
*   **Право на ограничение обработки:** Запросить ограничение способов обработки ваших данных.
*   **Право на переносимость данных:** Запросить предоставление ваших данных в структурированном, общепринятом, машиночитаемом формате.
*   **Право на возражение:** Возразить против обработки ваших персональных данных для определённых целей.
*   **Право на отзыв согласия:** Отозвать своё согласие на обработку данных в любое время. Отзыв не влияет на законность обработки, осуществлённой до отзыва.
*   **Право на пересмотр человеком:** Запросить пересмотр человеком любого решения, принятого посредством автоматизированной обработки.

10.1. Для реализации любого из этих прав свяжитесь с нами по адресу contact@lupibu.com. Мы ответим в течение 30 календарных дней.
10.2. Если вы считаете, что ваши права нарушены, вы вправе обратиться с жалобой в уполномоченный орган по защите персональных данных Республики Казахстан.

11. ИЗМЕНЕНИЯ В НАСТОЯЩЕЙ ПОЛИТИКЕ
11.1. Мы можем обновлять настоящую Политику конфиденциальности время от времени. Обновлённая версия будет обозначена пересмотренной датой «Версия» в начале документа.
11.2. О существенных изменениях мы уведомим вас через Приложение (например, push-уведомлением или уведомлением внутри Приложения) до их вступления в силу.
11.3. Продолжение использования Приложения после вступления изменений в силу означает ваше согласие с обновлённой Политикой.

12. КОНТАКТЫ
Если у вас есть вопросы, замечания или запросы, касающиеся настоящей Политики конфиденциальности или ваших персональных данных, свяжитесь с нами:
*   **По вопросам конфиденциальности:** contact@lupibu.com
*   **Общая поддержка:** contact@lupibu.com
`,
  privacy_kk: `

ҚҰПИЯЛЫЛЫҚ САЯСАТЫ
Нұсқа 2.0, 03.04.2026 ж.

1. КІРІСПЕ
1.1. Lupibu («Біз», «Біздің») сіздің құпиялылығыңызды құрметтейді. Осы Құпиялылық саясаты Lupibu мобильді қосымшасын (бұдан әрі — «Қосымша») пайдалану кезінде біздің сіздің дербес деректеріңізді қалай жинайтынымызды, пайдаланатынымызды, сақтайтынымызды, беретінімізді және қорғайтынымызды түсіндіреді.
1.2. Қосымшаны пайдалана отырып, сіз осы Саясатта сипатталған деректерді өңдеу тәжірибелерімен келісесіз. Егер сіз келіспесеңіз, Қосымшаны пайдаланбауыңызды сұраймыз.
1.3. **Қолданылатын құқық:** Осы Саясат Қазақстан Республикасының «Дербес деректер және оларды қорғау туралы» Заңымен (2013 жылғы 21 мамырдағы № 94-V) реттеледі. Біз сондай-ақ ЕО Деректерді қорғаудың жалпы регламентінің (GDPR) және АҚШ-тың Интернеттегі балалардың құпиялылығын қорғау туралы заңының (COPPA) қолданылатын принциптерін ұстанамыз.
1.4. **Деректер операторы:** Lupibu мобильді қосымшасының әзірлеушісі. Байланыс: contact@lupibu.com.

2. БІЗ ҚАНДАЙ ДЕРЕКТЕРДІ ЖИНАЙМЫЗ
Біз дербес деректерді тек Қосымшаның жұмыс істеуіне және сіздің тәжірибеңізді жақсартуға қажетті көлемде жинаймыз.

2.1. **Сіз ұсынатын деректер:**
*   **Аккаунт деректері:** Тіркелу кезінде Apple Sign-In арқылы алынған сіздің есіміңіз және электрондық пошта мекенжайыңыз. Егер Apple Sign-In кезінде «Email-ді жасыру» функциясын таңдасаңыз, біз сіздің нақты мекенжайыңызды емес, тек Apple-дың жеке релей мекенжайын (мысалы, \`xxx@privaterelay.appleid.com\`) аламыз. Email тек маңызды сервистік хабарламалар үшін (аккаунтты қалпына келтіру, құқықтық хабарламалар) пайдаланылады; маркетингтік хаттар жіберілмейді.
*   **Бала деректері:** Балаңыздың есімі, жынысы және туған күні. **Осы деректерді ұсына отырып, сіз баланың ата-анасы немесе заңды өкілі екеніңізді және осы ақпаратты ұсынуға толық құқығыңыз бар екенін растайсыз.**
*   **Жазбалар мен журналдар:** Ұйқы деректері (басталу уақыты, аяқталу уақыты, сапа бағасы), тамақтану деректері (ана сүті/бөтелке/қосымша тамақ, уақыт), сондай-ақ басқа күнделікті жазбалар (тәрелік, серуен, дәрігерге бару, дәрі қабылдау, вакцинация, белгілер, массаж, пайдаланушы жазбалары).
*   **Фотосуреттер:** Жазбаларға тіркелетін фотосуреттер. Кез келген жазбаға бір фотосурет тіркеуге болады. Фотосуреттер Google Cloud Storage-ға жүктеледі және онда сақталады.
*   **AI-ассистентпен диалогтар:** Сіз кірістірілген AI-ассистентке жіберетін мәтіндік хабарламалар.
*   **Дауыстық енгізу:** Қосымшаның дауыстық енгізу функциясы арқылы жасалатын аудиожазбалар. Дауыстық жазбалар транскрибация үшін Google Gemini AI-ға жіберіледі және өңделгеннен кейін біз де, Google да **сақтамайды**. Тек нәтижелік мәтін жазба ретінде сақталады.

2.2. **Автоматты түрде жиналатын деректер:**
*   **Құрылғы ақпараты:** Құрылғы түрі, операциялық жүйе нұсқасы.
*   **Пайдалану аналитикасы:** Firebase Analytics және PostHog арқылы жиналатын Қосымшаны пайдалану заңдылықтары мен функциялармен өзара әрекеттесу.
*   **Қателер туралы есептер:** Sentry арқылы ақауларды диагностикалау және жөндеу үшін жиналатын техникалық қате деректері, құрылғы күйі мен шақырулар стегі.
*   **Сессияларды қайта ойнату (іріктемелі):** Sentry пайдаланушылардың шамамен 10%-ы үшін (қате болған сессиялардың 100%-ы үшін) қосымша сессияларының анонимді қайта ойнатуларын жазады. Қайта ойнатулар экрандар бойынша шарлауды, түртулерді және айналдыруды тіркейді. **Барлық мәтін енгізу өрістері мен суреттер әдепкі бойынша маскировкаланады**, сондықтан енгізілген мәтін, балалардың есімдері мен фотосуреттер жазбада көрінбейді. Есептер мен қайта ойнатуларды жинауды жүйелік диагностика баптауларында өшіруге болады (iOS: «Баптаулар» → «Құпиялылық және қауіпсіздік» → «Аналитика және жақсартулар»).
*   **Push-хабарлама токендері:** Push-хабарламаларды (ұйқы еске салғыштары, күнделікті кеңестер) жеткізу үшін пайдаланылатын құрылғы токендері.

2.3. **Біз ЖИНАМАЙТЫН деректер:**
*   Біз сіздің телефон нөміріңізді немесе орналасу деректеріңізді жинамаймыз.
*   Біз биометриялық деректерді жинамаймыз.
*   Біз төлем немесе қаржылық деректерді жинамаймыз.
*   Біз жарнама көрсетпейміз және жарнамалық мақсаттарда деректер жинамаймыз.

3. ДЕРЕКТЕРІҢІЗДІ ҚАЛАЙ ПАЙДАЛАНАМЫЗ
Біз жиналған деректерді мынадай мақсаттарда пайдаланамыз:
*   **Негізгі функционалдық:** Ұйқыны бақылау, тамақтану журналы, күнделікті тәртіпті есепке алу және дербестендірілген кесте бойынша ұсынымдарды қамтамасыз ету.
*   **AI-функциялар:** AI-ассистенттің жұмысын қамтамасыз ету (сұрақтарға жауап беру, кеңестер беру) және дауыстық енгізуді құрылымдық жазбаларға транскрибациялау. AI-функциялар балаңыздың деректері негізінде дербестендірілген ұсынымдар қалыптастыру үшін автоматтандырылған өңдеуді пайдаланады. Бұл ұсынымдар тек ақпараттық сипатта болып табылады және медициналық кеңестерді алмастырмайды.
*   **Push-хабарламалар:** Ұйқы еске салғыштарын, күнделікті кеңестерді және маңызды жаңартуларды жіберу. Хабарламаларды кез келген уақытта құрылғы баптауларынан өшіруге болады.
*   **Аналитика және жақсарту:** Қосымшаның қалай пайдаланылатынын түсіну және оның функцияларын, тұрақтылығы мен өнімділігін жақсарту.
*   **Техникалық қолдау:** Ақауларды диагностикалау және техникалық мәселелерді шешу.
*   **Заңнаманы сақтау:** Заңды міндеттемелерді орындау және уәкілетті органдардың заңды сұрауларына жауап беру.

4. ЖАСАНДЫ ИНТЕЛЛЕКТ ЖӘНЕ АВТОМАТТАНДЫРЫЛҒАН ӨҢДЕУ ТУРАЛЫ АҚПАРАТ
4.1. Қосымша жасанды интеллектті (Vertex AI арқылы Google Gemini AI) мынадай мақсаттарда пайдаланады:
*   **Дауысты транскрибациялау:** Дауыстық жазбаларды мәтіндік жазбаларға түрлендіру. Аудио нақты уақыт режимінде өңделеді және транскрибациядан кейін сақталмайды.
*   **AI-ассистент:** Балаңыздың бақылау деректеріне негізделген дербестендірілген жауаптар, кеңестер мен ұсынымдарды генерациялау.
*   **Проактивті байқаулар:** Балаңыздың деректеріндегі заңдылықтарға негізделген күнделікті байқаулар мен ұсыныстарды қалыптастыру.
4.2. **Автоматтандырылған шешім қабылдау:** Қосымша ұйқы режимі бойынша ұсынымдарды, ұйқыға жату уақытын болжауды және «ояу болу терезелерін» бағалауды қалыптастыру үшін автоматтандырылған алгоритмдерді (AI-модельдерді және статистикалық әдістерді қоса) пайдаланады. Бұл нәтижелер тек ақпараттық сипатта. Сіздің заңды құқықтарыңызға қатысты ешқандай маңызды шешімдер тек автоматтандырылған өңдеу негізінде қабылданбайды.
4.3. **Адами бақылау:** Сіз кез келген уақытта кез келген автоматтандырылған ұсынымды адамның қарауын сұрау немесе AI-функциялардан бас тарту үшін бізге хабарласа аласыз.

5. ДЕРЕКТЕРДІ БЕРУ ЖӘНЕ ҮШІНШІ ТАРАП ӨҢДЕУШІЛЕРІ
5.1. **Біз сіздің дербес деректеріңізді сатпаймыз, жалға бермейміз және айырбастамаймыз.** Біз жарнама берушілерге деректер бермейміз.
5.2. Қосымшаның жұмысын қамтамасыз ету үшін біз мынадай сенімді қызмет көрсетушілерді (субоператорларды) пайдаланамыз:

| **Көрсетуші** | **Мақсаты** | **Өңделетін деректер** | **Серверлер орналасқан жері** |
|---|---|---|---|
| Google Cloud Platform | Хостинг, деректер қоры, фотосуреттерді сақтау | Қосымшаның барлық деректері, жүктелген фотосуреттер | Еуропалық Одақ (Варшава, Польша — \`europe-central2\`) |
| Firebase Auth | Пайдаланушы аутентификациясы | Apple Sign-In токені, пайдаланушы ID, email (мүмкін Apple релейі) | АҚШ |
| Firebase Analytics | Пайдалану аналитикасы | Анонимді пайдалану оқиғалары, құрылғы деректері | АҚШ |
| PostHog | Өнімдік аналитика | Анонимді пайдалану оқиғалары, құрылғы деректері | ЕО (Франкфурт, Германия) |
| Sentry | Қателер туралы есептер, іріктемелі сессия қайта ойнату (мәтін мен суреттер маскировкаланған) | Қате журналдары, құрылғы күйі, шақырулар стегі, сессиялардың анонимді жазбалары | АҚШ |
| Google Gemini AI / Vertex AI | Дауысты транскрибациялау, AI-ассистент | Дауыстық аудио (нақты уақытта, сақталмайды), диалог мәтіні, баланы бақылау деректері | АҚШ |
| Telegram Bot API | Қолдау қызметіне кері байланыс жеткізу | Кері байланыс мәтіні, тіркелген скриншоттар, техникалық журналдар (қосымшадан фидбэк жіберу кезінде) | Ғаламдық (Telegram инфрақұрылымы арқылы) |

5.3. Әрбір субоператор сіздің деректеріңізді қолданылатын заңнамаға сәйкес қорғауды міндеттейтін деректерді өңдеу келісімімен байланысты.
5.4. **Заң бойынша ашу:** Егер бұл заң, сот шешімі немесе Қазақстан Республикасы мемлекеттік органының жарамды сұрауы бойынша талап етілсе, біз сіздің ақпаратыңызды ашуымыз мүмкін.

6. ДЕРЕКТЕРДІ ХАЛЫҚАРАЛЫҚ БЕРУ
6.1. Сіздің деректеріңіз Қазақстан Республикасынан тыс елдерге, соның ішінде ЕО мүше мемлекеттеріне (Польша — бэкенд хостингі және фотосуреттерді сақтау; Германия — өнімдік аналитика) және Америка Құрама Штаттарына (Firebase Auth, Firebase Analytics, Sentry, Google Gemini AI / Vertex AI) берілуі және өңделуі мүмкін.
6.2. Деректерді халықаралық деңгейде беру кезінде біз тиісті қорғау кепілдіктерін, соның ішінде Қазақстанның дербес деректерді қорғау заңнамасы мен GDPR стандарттарының талаптарына сай келетін субоператорлармен деректерді өңдеу келісімдерін қамтамасыз етеміз.

7. ДЕРЕКТЕРДІ САҚТАУ МЕРЗІМДЕРІ
Біз сіздің деректеріңізді санатына қарай белгілі бір мерзімдерде сақтаймыз:

| **Деректер санаты** | **Сақтау мерзімі** |
|---|---|
| Аккаунт деректері (есім, пайдаланушы ID) | Аккаунт белсенді болған кезде + жойылғаннан кейін 1 жыл |
| Бала деректері (есім, жынысы, туған күні) | Аккаунт белсенді болған кезде + жойылғаннан кейін 1 жыл |
| Жазбалар (ұйқы, тамақтану және т.б.) | Аккаунт белсенді болған кезде + жойылғаннан кейін 1 жыл |
| Жазбаларға тіркелген фотосуреттер | Аккаунт белсенді болған кезде + жойылғаннан кейін 1 жыл |
| AI-ассистентпен диалогтар | Жасалғаннан бастап 90 күн |
| Дауыстық жазбалар | Сақталмайды — нақты уақытта өңделеді және жойылады |
| Аналитикалық деректер (Firebase, PostHog) | 14 ай (Firebase), 12 ай (PostHog) |
| Қателер туралы есептер (Sentry) | 90 күн |
| Push-хабарлама токендері | Аккаунт белсенді болған кезде; аккаунт жойылғанда жойылады |

7.1. Сақтау мерзімі аяқталғаннан кейін деректер біржола жойылады немесе қайтымсыз иесіздендіріледі.
7.2. Біз белгілі бір деректерді қолданылатын заңнама талап етсе (мысалы, дауларды шешу немесе салықтық міндеттемелерді орындау үшін) көрсетілген мерзімнен ұзақ сақтай аламыз, бірақ аккаунт жойылғаннан кейін 3 жылдан аспайтын мерзімде.

8. БАЛАЛАРДЫҢ ҚҰПИЯЛЫЛЫҒЫ
8.1. Қосымша ата-аналар мен заңды өкілдерге балаларының күнделікті тәртібін бақылауға арналған. **Қосымша балаларға бағытталмаған және балалардың тікелей пайдалануына арналмаған.**
8.2. Біз ата-анасының верификацияланған келісімінсіз 13 жасқа (немесе GDPR қолданылатын жерде 16 жасқа) толмаған балалардан тікелей дербес деректерді әдейі жинамаймыз.
8.3. Қосымшада баланың профилін жасай отырып, сіз ата-ана немесе заңды өкіл ретінде балаңыздың деректерін осы Саясатта сипатталған мақсаттарда жинауға және өңдеуге нақты, хабардар келісім бересіз.
8.4. Егер сіз баланың деректері тиісті ата-ана келісімінсіз жиналды деп санасаңыз, бізге contact@lupibu.com мекенжайы бойынша дереу хабарласыңыз — біз деректерді тез арада жоямыз.

9. ДЕРЕКТЕР ҚАУІПСІЗДІГІ
9.1. Біз сіздің дербес деректеріңізді қорғау үшін стандартты әкімшілік, техникалық және ұйымдастырушылық қауіпсіздік шараларын қолданамыз, оның ішінде:
*   **Тасымалдау кезінде шифрлау:** Қосымша мен серверлеріміз арасында тасымалданатын барлық деректер TLS 1.2+ көмегімен шифрланады.
*   **Сақтау кезінде шифрлау:** Деректер қорларымыздағы деректер шифрланған.
*   **Кіруді бақылау:** Дербес деректерге қол жеткізу «білуі қажет» принципі бойынша уәкілетті персоналмен шектелген.
*   **Аутентификация қауіпсіздігі:** Біз криптографиялық жеке тұлғаны верификациялауды қамтамасыз ететін Apple Sign-In бар Firebase Auth пайдаланамыз.
*   **Инфрақұрылым қауіпсіздігі:** Серверлеріміз SOC 2, ISO 27001 және басқа қауіпсіздік сертификаттары бар Google Cloud Platform-да орналасқан.
9.2. Қабылданған шараларға қарамастан, электрондық тасымалдау немесе сақтаудың ешбір әдісі 100% қауіпсіз емес. Біз абсолютті қауіпсіздікке кепілдік бере алмаймыз, бірақ деректерді қорғау тәжірибелерімізді үнемі жетілдіріп отырамыз.

10. СІЗДІҢ ҚҰҚЫҚТАРЫҢЫЗ
Сіздің дербес деректеріңізге қатысты мынадай құқықтарыңыз бар:
*   **Қол жеткізу құқығы:** Біз сіз туралы сақтайтын дербес деректердің көшірмесін сұрау.
*   **Түзету құқығы:** Дұрыс емес немесе толық емес дербес деректерді түзетуді сұрау.
*   **Жою құқығы («Ұмытылу құқығы»):** Дербес деректеріңіздің жойылуын сұрау. Аккаунтыңызды және барлық байланысты деректерді тікелей Қосымша баптауларында жоюға болады.
*   **Өңдеуді шектеу құқығы:** Деректеріңізді өңдеу тәсілдерін шектеуді сұрау.
*   **Деректердің тасымалдануы құқығы:** Деректеріңізді құрылымдық, жалпы қабылданған, машинамен оқылатын форматта ұсынуды сұрау.
*   **Қарсылық білдіру құқығы:** Белгілі бір мақсаттар үшін дербес деректеріңізді өңдеуге қарсылық білдіру.
*   **Келісімді қайтарып алу құқығы:** Деректерді өңдеуге келісіміңізді кез келген уақытта қайтарып алу. Қайтарып алу бұрын жүргізілген өңдеудің заңдылығына әсер етпейді.
*   **Адамның қарауын сұрау құқығы:** Автоматтандырылған өңдеу арқылы қабылданған кез келген шешімді адамның қарауын сұрау.

10.1. Осы құқықтардың кез келгенін жүзеге асыру үшін бізге contact@lupibu.com мекенжайы бойынша хабарласыңыз. Біз 30 күнтізбелік күн ішінде жауап береміз.
10.2. Егер сіз құқықтарыңыз бұзылды деп санасаңыз, Қазақстан Республикасының дербес деректерді қорғау жөніндегі уәкілетті органына шағыммен жүгінуге құқылысыз.

11. ОСЫ САЯСАТҚА ӨЗГЕРІСТЕР
11.1. Біз осы Құпиялылық саясатын мезгіл-мезгіл жаңартуымыз мүмкін. Жаңартылған нұсқа осы құжаттың басындағы қайта қаралған «Нұсқа» күнімен белгіленеді.
11.2. Елеулі өзгерістер туралы біз сізге Қосымша арқылы (мысалы, push-хабарлама немесе қосымша ішіндегі хабарлама арқылы) олардың күшіне енуіне дейін хабарлаймыз.
11.3. Өзгерістер күшіне енгеннен кейін Қосымшаны пайдалануды жалғастыру жаңартылған Саясатпен келісуіңізді білдіреді.

12. БАЙЛАНЫС
Егер сізде осы Құпиялылық саясатына немесе дербес деректеріңізге қатысты сұрақтар, ескертулер немесе сұраулар болса, бізге хабарласыңыз:
*   **Құпиялылық мәселелері бойынша:** contact@lupibu.com
*   **Жалпы қолдау:** contact@lupibu.com
`,
  terms_en: `

TERMS OF USE
Version 2.0 dated 03.04.2026

1. GENERAL PROVISIONS
1.1. These Terms of Use (hereinafter — "Agreement") constitute a legally binding agreement between the Developer of the mobile application "Lupibu" (hereinafter — "App", "We") and you (hereinafter — "User").
1.2. By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not use the App.
1.3. **Governing Law:** This Agreement is governed by the laws of the Republic of Kazakhstan.

2. LICENSE GRANT
2.1. We grant you a revocable, non-exclusive, non-transferable, limited license to use the App solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.
2.2. You agree not to reverse engineer, decompile, disassemble, or attempt to derive the source code of the App.

3. MEDICAL DISCLAIMER
3.1. **THE APP IS NOT A MEDICAL DEVICE AND IS NOT INTENDED TO REPLACE PROFESSIONAL MEDICAL JUDGMENT.**
3.2. The App provides information (sleep norms, schedule recommendations) for **informational and educational purposes only**.
3.3. The content provided by the App is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
3.4. While we reference reputable sources (e.g., WHO), medical protocols vary by region and change over time. We do not warrant that the information constitutes the most up-to-date medical standards.
3.5. **IF YOU THINK YOUR CHILD MAY HAVE A MEDICAL EMERGENCY, CALL YOUR DOCTOR OR EMERGENCY SERVICES IMMEDIATELY.** Do not rely on this App for immediate medical assistance.
3.6. Reliance on any information provided by the App is solely at your own risk.

4. USER ACCOUNTS
4.1. You are responsible for maintaining the confidentiality of your account and password.
4.2. You agree to accept responsibility for all activities that occur under your account.

5. INTELLECTUAL PROPERTY
5.1. The App and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of the Developer and its licensors.

6. PRIVACY AND PERSONAL DATA
6.1. Your use of the App is also governed by our **Privacy Policy**, available in the App under Settings > Legal. The Privacy Policy describes in detail what data we collect, how we use it, who we share it with, and your rights.
6.2. By using the App, you acknowledge that you have read and understood the Privacy Policy.
6.3. If you are providing data about your child, you confirm that you are the parent or legal guardian and have the authority to consent on their behalf.

7. APPLE APP STORE REQUIREMENTS
If you downloaded the App from the Apple App Store, the following terms apply:
7.1. **Acknowledgement:** You and We acknowledge that this Agreement is concluded between You and Us only, and not with Apple. We, not Apple, are solely responsible for the App and the content thereof.
7.2. **Scope of License:** The license is limited to use on Apple-branded Products that you own or control, as permitted by the Apple Media Services Terms and Conditions.
7.3. **Maintenance and Support:** We are solely responsible for providing any maintenance and support services. Apple has no obligation to furnish any maintenance and support services with respect to the App.
7.4. **Warranty:** We are solely responsible for any product warranties. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price.
7.5. **Product Claims:** We, not Apple, are responsible for addressing any claims relating to the App or your use of the App.
7.6. **Intellectual Property Rights:** In the event of any third party intellectual property infringement claim, We, not Apple, will be solely responsible.
7.7. **Third Party Beneficiary:** Apple and Apple's subsidiaries are third party beneficiaries of this Agreement.

8. SUBSCRIPTIONS AND PAYMENTS
8.1. **Free Tier and Lupibu Pro.** Core features of the App are available free of charge. A paid subscription ("Lupibu Pro") unlocks additional features such as advanced analytics, unlimited AI assistant usage, and other premium capabilities described in-app at the time of purchase.
8.2. **Pricing and Billing.** Current pricing is displayed in the App prior to purchase and may vary by region and currency. As of the version date of this Agreement, Lupibu Pro is offered as a monthly plan (approx. USD 6.99 per month) and an annual plan (approx. USD 39.99 per year), subject to change. All prices are shown inclusive of applicable taxes where required by law.
8.3. **Free Trial.** New subscribers may be offered a free trial period (typically 7 days). If you do not cancel before the trial ends, the subscription will automatically convert to a paid subscription and your Apple ID will be charged at the rate shown at the time of sign-up. Trial eligibility is determined by Apple and may be limited to one trial per Apple ID household.
8.4. **Auto-Renewal.** Subscriptions automatically renew for successive periods of the same length unless auto-renew is turned off at least 24 hours before the end of the current period. Your Apple ID will be charged for renewal within 24 hours before the end of the current period.
8.5. **Payment Processing.** All subscriptions are sold and billed by Apple through your Apple ID, subject to the Apple Media Services Terms and Conditions. We do not process, store, or have access to your payment card details.
8.6. **Managing and Cancelling Your Subscription.** You can manage or cancel your subscription at any time in iOS Settings → [your name] → Subscriptions. Cancellation takes effect at the end of the current billing period; you retain access to Pro features until then. **Deleting the App or deleting your Lupibu account does NOT cancel an active subscription** — you must cancel through Apple's subscription settings separately.
8.7. **Refunds.** All refund requests are handled by Apple under Apple's refund policy. To request a refund, visit reportaproblem.apple.com. We cannot issue refunds directly and have no control over Apple's refund decisions.
8.8. **Changes to Pricing and Features.** We may change subscription prices, plan structure, or the specific features included in Pro. For existing subscribers, material price increases will take effect only at the next renewal and will be communicated in advance as required by Apple.
8.9. **Family Sharing.** Where supported, subscriptions may be shared with members of your Apple Family Sharing group per Apple's rules. We do not control the availability or limits of Family Sharing.

9. LIMITATION OF LIABILITY
9.1. To the fullest extent permitted by applicable law, in no event will We be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the App.

10. CHANGES TO THIS AGREEMENT
10.1. We reserve the right, at our sole discretion, to modify or replace these Terms at any time.

11. CONTACT INFORMATION
For any questions regarding this Agreement, please contact us at: contact@lupibu.com
`,
  terms_ru: `

ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
Версия 2.0 от 03.04.2026

1. ОБЩИЕ ПОЛОЖЕНИЯ
1.1. Настоящее Пользовательское соглашение (далее — «Соглашение») является юридически обязательным договором между Разработчиком мобильного приложения «Lupibu» (далее — «Приложение», «Мы») и вами (далее — «Пользователь»).
1.2. Скачивая, устанавливая или используя Приложение, вы соглашаетесь с условиями настоящего Соглашения. Если вы не согласны, не используйте Приложение.
1.3. **Применимое право:** Настоящее Соглашение регулируется законодательством Республики Казахстан.

2. ЛИЦЕНЗИЯ
2.1. Мы предоставляем вам отзывную, неисключительную, непередаваемую, ограниченную лицензию на использование Приложения исключительно в личных некоммерческих целях в строгом соответствии с условиями настоящего Соглашения.
2.2. Вы обязуетесь не декомпилировать, не разбирать и не пытаться извлечь исходный код Приложения.

3. МЕДИЦИНСКИЙ ОТКАЗ
3.1. **ПРИЛОЖЕНИЕ НЕ ЯВЛЯЕТСЯ МЕДИЦИНСКИМ ИЗДЕЛИЕМ И НЕ ПРЕДНАЗНАЧЕНО ДЛЯ ЗАМЕНЫ ПРОФЕССИОНАЛЬНОГО МЕДИЦИНСКОГО СУЖДЕНИЯ.**
3.2. Приложение предоставляет информацию (нормы сна, рекомендации по режиму) **исключительно в информационных и образовательных целях**.
3.3. Контент, предоставляемый Приложением, не предназначен для замены профессиональной медицинской консультации, диагностики или лечения. Всегда обращайтесь к врачу или другому квалифицированному специалисту с любыми вопросами о состоянии здоровья.
3.4. Хотя мы ссылаемся на авторитетные источники (ВОЗ и др.), медицинские протоколы могут отличаться в зависимости от региона и меняться со временем. Мы не гарантируем, что информация является самым актуальным медицинским стандартом.
3.5. **ЕСЛИ ВЫ СЧИТАЕТЕ, ЧТО У РЕБЕНКА ВОЗНИКЛА КРИТИЧЕСКАЯ СИТУАЦИЯ, НЕМЕДЛЕННО ВЫЗОВИТЕ ВРАЧА ИЛИ СКОРУЮ ПОМОЩЬ.** Не полагайтесь на Приложение для получения неотложной помощи.
3.6. Использование любой информации, предоставленной Приложением, осуществляется исключительно на ваш страх и риск.

4. АККАУНТ ПОЛЬЗОВАТЕЛЯ
4.1. Вы несете ответственность за сохранение конфиденциальности вашего аккаунта и пароля.
4.2. Вы соглашаетесь принять на себя ответственность за все действия, происходящие под вашим аккаунтом.

5. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ
5.1. Приложение и его оригинальный контент (за исключением контента, предоставленного пользователями), функции и функциональность являются и останутся исключительной собственностью Разработчика и его лицензиаров.

6. КОНФИДЕНЦИАЛЬНОСТЬ И ПЕРСОНАЛЬНЫЕ ДАННЫЕ
6.1. Использование Приложения также регулируется нашей **Политикой конфиденциальности**, доступной в Приложении в разделе Настройки > Юридические документы. Политика конфиденциальности подробно описывает, какие данные мы собираем, как их используем, кому передаём и какие у вас права.
6.2. Используя Приложение, вы подтверждаете, что ознакомились с Политикой конфиденциальности.
6.3. Если вы предоставляете данные о своём ребёнке, вы подтверждаете, что являетесь родителем или законным опекуном и имеете право давать согласие от его имени.

7. ТРЕБОВАНИЯ APPLE APP STORE
Если вы загрузили Приложение из Apple App Store, применяются следующие условия:
7.1. **Подтверждение:** Вы и Мы подтверждаем, что настоящее Соглашение заключено только между Вами и Нами, а не с Apple. Мы, а не Apple, несем полную ответственность за Приложение и его контент.
7.2. **Объем лицензии:** Лицензия ограничена использованием Приложения на продуктах Apple, которыми вы владеете или управляете, в соответствии с Правилами использования Apple Media Services.
7.3. **Обслуживание и поддержка:** Мы несем полную ответственность за предоставление услуг по обслуживанию и поддержке. Apple не обязана предоставлять какие-либо услуги по обслуживанию и поддержке Приложения.
7.4. **Гарантия:** Мы несем ответственность за любые гарантии продукта. В случае несоответствия Приложения гарантии, вы можете уведомить Apple, и Apple вернет вам стоимость покупки.
7.5. **Претензии по продукту:** Мы, а не Apple, несем ответственность за рассмотрение любых претензий, касающихся Приложения.
7.6. **Интеллектуальная собственность:** В случае претензий третьих лиц о нарушении интеллектуальных прав, Мы, а не Apple, будем нести исключительную ответственность.
7.7. **Сторонний бенефициар:** Apple и дочерние компании Apple являются сторонними бенефициарами настоящего Соглашения.

8. ПОДПИСКИ И ПЛАТЕЖИ
8.1. **Бесплатный тариф и Lupibu Pro.** Основные функции Приложения доступны бесплатно. Платная подписка («Lupibu Pro») открывает дополнительные возможности, включая расширенную аналитику, безлимитного AI-ассистента и другие премиум-функции, описанные в Приложении на момент покупки.
8.2. **Цена и биллинг.** Актуальные цены отображаются в Приложении до совершения покупки и могут отличаться в зависимости от региона и валюты. На дату настоящего Соглашения Lupibu Pro предлагается по месячной подписке (около 6,99 USD в месяц) и годовой подписке (около 39,99 USD в год), цена может изменяться. Все цены указаны с учётом применимых налогов, если это требуется законодательством.
8.3. **Бесплатный пробный период.** Новым подписчикам может быть предложен бесплатный пробный период (как правило, 7 дней). Если вы не отмените подписку до окончания пробного периода, она автоматически перейдёт в платную, и оплата будет списана с вашего Apple ID по цене, действовавшей на момент оформления. Право на пробный период определяется Apple и может быть ограничено одним триалом на семью Apple ID.
8.4. **Автопродление.** Подписки автоматически продлеваются на последующие периоды той же продолжительности, если автопродление не отключено как минимум за 24 часа до окончания текущего периода. Оплата за продление списывается с Apple ID в течение 24 часов до окончания текущего периода.
8.5. **Обработка платежей.** Все подписки продаются и биллингуются Apple через ваш Apple ID в соответствии с Правилами Apple Media Services. Мы не обрабатываем, не храним и не имеем доступа к данным вашей платёжной карты.
8.6. **Управление и отмена подписки.** Вы можете управлять подпиской или отменить её в любое время в «Настройки iOS» → [ваше имя] → «Подписки». Отмена вступает в силу по окончании текущего платёжного периода; доступ к Pro-функциям сохраняется до этого момента. **Удаление Приложения или удаление аккаунта Lupibu НЕ отменяет активную подписку** — её необходимо отменить отдельно в настройках подписок Apple.
8.7. **Возвраты.** Все заявки на возврат обрабатываются Apple в соответствии с политикой возвратов Apple. Чтобы запросить возврат, перейдите на reportaproblem.apple.com. Мы не можем производить возвраты напрямую и не влияем на решения Apple.
8.8. **Изменение цен и состава функций.** Мы можем изменять цены подписки, структуру тарифов или состав Pro-функций. Для действующих подписчиков существенные повышения цен вступают в силу только со следующего продления и сообщаются заранее в соответствии с требованиями Apple.
8.9. **Семейный доступ.** Там, где это поддерживается, подписка может быть доступна участникам группы «Семейный доступ» Apple в соответствии с правилами Apple. Мы не контролируем доступность и ограничения «Семейного доступа».

9. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ
9.1. В максимальной степени, разрешенной законом, Мы не несем ответственности за любые косвенные, случайные или штрафные убытки, включая упущенную выгоду или потерю данных, возникшие в результате использования Приложения.

10. ИЗМЕНЕНИЯ СОГЛАШЕНИЯ
10.1. Мы оставляем за собой право по своему усмотрению изменять или заменять настоящие Условия в любое время.

11. КОНТАКТЫ
По вопросам, касающимся настоящего Соглашения, свяжитесь с нами: contact@lupibu.com
`,
  terms_kk: `

ПАЙДАЛАНУ ШАРТТАРЫ
Нұсқа 2.0, 03.04.2026 ж.

1. ЖАЛПЫ ЕРЕЖЕЛЕР
1.1. Осы Пайдалану шарттары (бұдан әрі — «Келісім») «Lupibu» мобильді қосымшасын Әзірлеуші (бұдан әрі — «Қосымша», «Біз») мен сіз (бұдан әрі — «Пайдаланушы») арасындағы заңды күші бар шарт болып табылады.
1.2. Қосымшаны жүктеп алу, орнату немесе пайдалану арқылы сіз осы Келісім шарттарымен келісесіз. Егер келіспесеңіз, Қосымшаны пайдаланбаңыз.
1.3. **Қолданылатын құқық:** Осы Келісім Қазақстан Республикасының заңнамасымен реттеледі.

2. ЛИЦЕНЗИЯ
2.1. Біз сізге Қосымшаны тек жеке коммерциялық емес мақсаттарда, осы Келісім шарттарына қатаң сәйкес пайдалануға шектеулі, айрықша емес, берілмейтін лицензия береміз.
2.2. Сіз Қосымшаның бастапқы кодын декомпиляцияламауға, бөлшектемеуге және алуға тырыспауға міндеттенесіз.

3. МЕДИЦИНАЛЫҚ БАС ТАРТУ
3.1. **ҚОСЫМША МЕДИЦИНАЛЫҚ БҰЙЫМ БОЛЫП ТАБЫЛМАЙДЫ ЖӘНЕ КӘСІБИ МЕДИЦИНАЛЫҚ ПІКІРДІ АЛМАСТЫРУҒА АРНАЛМАҒАН.**
3.2. Қосымша ақпаратты (ұйқы нормалары, режим бойынша ұсыныстар) **тек ақпараттық және танымдық мақсаттарда** ұсынады.
3.3. Қосымша ұсынатын мазмұн кәсіби медициналық кеңесті, диагностиканы немесе емдеуді алмастыруға арналмаған. Денсаулық жағдайына қатысты сұрақтар бойынша әрқашан дәрігерге немесе басқа білікті маманға жүгініңіз.
3.4. Біз беделді көздерге (ДДСҰ және т.б.) сілтеме жасасақ та, медициналық хаттамалар аймаққа байланысты өзгешеленуі мүмкін. Біз ақпараттың ең өзекті медициналық стандарт екендігіне кепілдік бермейміз.
3.5. **ЕГЕР БАЛАҢЫЗ ШҰҒЫЛ ЖАҒДАЙДА ДЕП ОЙЛАСАҢЫЗ, ДЕРЕУ ДӘРІГЕРГЕ НЕМЕСЕ ЖЕДЕЛ ЖӘРДЕМГЕ ХАБАРЛАСЫҢЫЗ.** Шұғыл көмек алу үшін Қосымшаға сенбеңіз.
3.6. Қосымша ұсынған кез келген ақпаратты пайдалану тек сіздің тәуекеліңізбен жүзеге асырылады.

4. ПАЙДАЛАНУШЫ АККАУНТЫ
4.1. Сіз аккаунтыңыз бен құпия сөзіңіздің құпиялылығын сақтауға жауаптысыз.
4.2. Сіз өз аккаунтыңызбен жасалған барлық әрекеттер үшін жауапкершілікті қабылдауға келісесіз.

5. ЗИЯТКЕРЛІК МЕНШІК
5.1. Қосымша және оның түпнұсқалық мазмұны, мүмкіндіктері мен функционалдығы Әзірлеушінің және оның лицензиарларының айрықша меншігі болып табылады.

6. ҚҰПИЯЛЫЛЫҚ ЖӘНЕ ДЕРБЕС ДЕРЕКТЕР
6.1. Қосымшаны пайдалану біздің **Құпиялылық саясатымызбен** де реттеледі, ол Қосымшада Баптаулар > Заңды құжаттар бөлімінде қолжетімді. Құпиялылық саясаты біз қандай деректерді жинайтынымызды, оларды қалай пайдаланатынымызды, кімге беретінімізді және сіздің құқықтарыңызды толық сипаттайды.
6.2. Қосымшаны пайдалана отырып, сіз Құпиялылық саясатымен танысқаныңызды растайсыз.
6.3. Егер сіз балаңыз туралы деректер ұсынсаңыз, сіз ата-ана немесе заңды қамқоршы екеніңізді және оның атынан келісім беруге құқылы екеніңізді растайсыз.

7. APPLE APP STORE ТАЛАПТАРЫ
Егер сіз Қосымшаны Apple App Store дүкенінен жүктеп алсаңыз:
7.1. **Растау:** Осы Келісім тек Сіз бен Біздің арамызда жасалған, Apple-мен емес. Қосымша мен оның мазмұны үшін Біз жауаптымыз.
7.2. **Лицензия көлемі:** Лицензия Apple Media Services ережелеріне сәйкес сіз иелік ететін Apple өнімдерінде пайдаланумен шектеледі.
7.3. **Қызмет көрсету және қолдау:** Қызмет көрсету бойынша жауапкершілік толығымен Бізде. Apple Қосымшаға қатысты қызмет көрсетуге міндетті емес.
7.4. **Кепілдік:** Өнім кепілдіктері үшін Біз жауаптымыз. Қосымша кепілдікке сәйкес келмеген жағдайда Apple сауда бағасын қайтарады.
7.5. **Претензиялар:** Қосымшаға қатысты кез келген претензияларды Apple емес, Біз қарастырамыз.
7.6. **Зияткерлік меншік:** Зияткерлік құқықтардың бұзылуы туралы талаптар үшін Apple емес, Біз жауаптымыз.
7.7. **Үшінші тарап бенефициары:** Apple және оның еншілес компаниялары осы Келісімнің үшінші тарап бенефициарлары болып табылады.

8. ЖАЗЫЛЫМДАР МЕН ТӨЛЕМДЕР
8.1. **Тегін тариф және Lupibu Pro.** Қосымшаның негізгі функциялары тегін қолжетімді. Ақылы жазылым («Lupibu Pro») қосымша мүмкіндіктерді ашады: кеңейтілген аналитика, шектеусіз AI-көмекші және сатып алу сәтінде Қосымшада сипатталған басқа премиум-функциялар.
8.2. **Баға және төлем.** Ағымдағы бағалар сатып алғанға дейін Қосымшада көрсетіледі және аймаққа, валютаға байланысты өзгеше болуы мүмкін. Осы Келісімнің күніне Lupibu Pro айлық жазылым (шамамен 6,99 USD/ай) және жылдық жазылым (шамамен 39,99 USD/жыл) түрінде ұсынылады; баға өзгеруі мүмкін. Барлық бағалар заңнама талап етсе, қолданылатын салықтарды қоса көрсетілген.
8.3. **Тегін сынақ мерзімі.** Жаңа жазылушыларға тегін сынақ мерзімі ұсынылуы мүмкін (әдетте 7 күн). Егер сіз сынақ мерзімі аяқталғанға дейін жазылымды тоқтатпасаңыз, ол автоматты түрде ақылы жазылымға ауысады және тіркелу сәтіндегі бағамен Apple ID-дан ақы алынады. Сынақ мерзіміне құқық Apple-мен анықталады және бір Apple ID отбасына бір сынақпен шектелуі мүмкін.
8.4. **Автоматты түрде жаңарту.** Жазылымдар ағымдағы мерзімнің аяқталуына дейін кемінде 24 сағат бұрын автоматты жаңарту сөндірілмесе, бір ұзақтықтағы келесі кезеңдерге автоматты түрде жаңартылады. Ағымдағы мерзімнің аяқталуына дейін 24 сағат ішінде жаңарту үшін төлем Apple ID-дан алынады.
8.5. **Төлемді өңдеу.** Барлық жазылымдар Apple Media Services ережелеріне сәйкес Apple арқылы Apple ID-ыңыз бойынша сатылады және биллингтенеді. Біз сіздің төлем картаңыздың деректерін өңдемейміз, сақтамаймыз және оған қол жеткізе алмаймыз.
8.6. **Жазылымды басқару және тоқтату.** Жазылымды кез келген уақытта «iOS Баптаулары» → [сіздің атыңыз] → «Жазылымдар» арқылы басқара немесе тоқтата аласыз. Тоқтату ағымдағы төлем кезеңі аяқталғанда күшіне енеді; сол сәтке дейін Pro-функциялар қолжетімді болып қалады. **Қосымшаны немесе Lupibu аккаунтын жою белсенді жазылымды тоқтатпайды** — оны Apple жазылым баптауларында бөлек тоқтату қажет.
8.7. **Қаражатты қайтару.** Барлық қаражатты қайтару сұраулары Apple-дің қайтару саясатына сәйкес Apple арқылы өңделеді. Қаражатты қайтаруды сұрау үшін reportaproblem.apple.com сайтына кіріңіз. Біз қаражатты тікелей қайтара алмаймыз және Apple-дің шешіміне әсер ете алмаймыз.
8.8. **Баға мен функциялар құрамының өзгеруі.** Біз жазылым бағаларын, тарифтер құрылымын немесе Pro функцияларының құрамын өзгерте аламыз. Әрекетті жазылушылар үшін елеулі баға өсуі тек келесі жаңартудан күшіне енеді және Apple талаптарына сай алдын ала хабарланады.
8.9. **Отбасылық қолжетімділік.** Қолдау көрсетілген жағдайларда жазылым Apple-дің «Family Sharing» тобы мүшелеріне Apple ережелеріне сәйкес қолжетімді болуы мүмкін. «Family Sharing» қолжетімділігі мен шектеулерін біз бақыламаймыз.

9. ЖАУАПКЕРШІЛІКТІ ШЕКТЕУ
9.1. Заңмен рұқсат етілген максималды дәрежеде, Біз Қосымшаны пайдаланудан туындаған кез келген жанама, кездейсоқ немесе айыппұлдық шығындар үшін жауап бермейміз.

10. КЕЛІСІМНІҢ ӨЗГЕРУІ
10.1. Біз кез келген уақытта осы Шарттарды өзгерту немесе ауыстыру құқығын өзімізде қалдырамыз.

11. БАЙЛАНЫС
Осы Келісімге қатысты сұрақтар бойынша бізге жазыңыз: contact@lupibu.com
`,
  disclaimer_en: `

MEDICAL DISCLAIMER

1. NOT A MEDICAL DEVICE
**THIS APP IS NOT A MEDICAL DEVICE AND IS NOT INTENDED TO REPLACE PROFESSIONAL MEDICAL JUDGMENT.**
The Lupibu application provides information (sleep norms, schedule recommendations) for **informational and educational purposes only**.

2. NO PROFESSIONAL ADVICE
The content provided by this App, including text, graphics, and AI-generated recommendations, is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

3. ACCURACY OF DATA
While we reference reputable sources (e.g., WHO), medical protocols vary by region and change over time. We do not warrant that the information constitutes the most up-to-date medical standards.

4. EMERGENCY
**IF YOU THINK YOUR CHILD MAY HAVE A MEDICAL EMERGENCY, CALL YOUR DOCTOR OR EMERGENCY SERVICES IMMEDIATELY.** Do not rely on this App for immediate medical assistance.

5. LIMITATION OF LIABILITY
Reliance on any information provided by the App is solely at your own risk. The Developer is not responsible or liable for any advice, course of treatment, diagnosis or any other information, services or products that you obtain through the use of this App.
`,
  disclaimer_ru: `

МЕДИЦИНСКИЙ ОТКАЗ (DISCLAIMER)

1. НЕ ЯВЛЯЕТСЯ МЕДИЦИНСКИМ ИЗДЕЛИЕМ
**ДАННОЕ ПРИЛОЖЕНИЕ НЕ ЯВЛЯЕТСЯ МЕДИЦИНСКИМ ИЗДЕЛИЕМ И НЕ ПРЕДНАЗНАЧЕНО ДЛЯ ЗАМЕНЫ ПРОФЕССИОНАЛЬНОГО МЕДИЦИНСКОГО СУЖДЕНИЯ.**
Приложение Lupibu предоставляет информацию (нормы сна, рекомендации по режиму) **исключительно в информационных и образовательных целях**.

2. ОТСУТСТВИЕ ПРОФЕССИОНАЛЬНЫХ КОНСУЛЬТАЦИЙ
Контент, предоставляемый Приложением, включая текст, графику и рекомендации AI-ассистента, не предназначен для замены профессиональной медицинской консультации, диагностики или лечения. Всегда обращайтесь к врачу или другому квалифицированному специалисту с любыми вопросами о состоянии здоровья.

3. ТОЧНОСТЬ ДАННЫХ
Хотя мы ссылаемся на авторитетные источники (ВОЗ и др.), медицинские протоколы могут отличаться в зависимости от региона и меняться со временем. Мы не гарантируем, что информация является самым актуальным медицинским стандартом.

4. ЭКСТРЕННЫЕ СЛУЧАИ
**ЕСЛИ ВЫ СЧИТАЕТЕ, ЧТО У РЕБЕНКА ВОЗНИКЛА КРИТИЧЕСКАЯ СИТУАЦИЯ, НЕМЕДЛЕННО ВЫЗОВИТЕ ВРАЧА ИЛИ СКОРУЮ ПОМОЩЬ.** Не полагайтесь на Приложение для получения неотложной помощи.

5. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ
Использование любой информации, предоставленной Приложением, осуществляется исключительно на ваш страх и риск. Разработчик не несет ответственности за любые советы, курс лечения, диагноз или любую другую информацию, услуги или продукты, полученные с помощью этого Приложения.
`,
  disclaimer_kk: `

МЕДИЦИНАЛЫҚ ЖАУАПКЕРШІЛІКТЕН БАС ТАРТУ (DISCLAIMER)

1. МЕДИЦИНАЛЫҚ БҰЙЫМ ЕМЕС
**БҰЛ ҚОСЫМША МЕДИЦИНАЛЫҚ БҰЙЫМ БОЛЫП ТАБЫЛМАЙДЫ ЖӘНЕ КӘСІБИ МЕДИЦИНАЛЫҚ ПІКІРДІ АЛМАСТЫРУҒА АРНАЛМАҒАН.**
Lupibu қосымшасы ақпаратты (ұйқы нормалары, режим бойынша ұсыныстар) **тек ақпараттық және танымдық мақсаттарда** ұсынады.

2. КӘСІБИ КЕҢЕСТІҢ БОЛМАУЫ
Қосымша ұсынатын мазмұн (мәтін, графика, AI-көмекшінің ұсыныстары) кәсіби медициналық кеңесті, диагностиканы немесе емдеуді алмастыруға арналмаған. Денсаулық жағдайына қатысты сұрақтар бойынша әрқашан дәрігерге немесе басқа білікті маманға жүгініңіз.

3. ДЕРЕКТЕРДІҢ ДӘЛДІГІ
Біз беделді көздерге (ДДСҰ және т.б.) сілтеме жасасақ та, медициналық хаттамалар аймаққа байланысты өзгешеленуі және уақыт өте келе өзгеруі мүмкін. Біз ақпараттың ең өзекті медициналық стандарт екендігіне кепілдік бермейміз.

4. ШҰҒЫЛ ЖАҒДАЙЛАР
**ЕГЕР БАЛАҢЫЗ ШҰҒЫЛ ЖАҒДАЙДА ДЕП ОЙЛАСАҢЫЗ, ДЕРЕУ ДӘРІГЕРГЕ НЕМЕСЕ ЖЕДЕЛ ЖӘРДЕМГЕ ХАБАРЛАСЫҢЫЗ.** Шұғыл көмек алу үшін Қосымшаға сенбеңіз.

5. ЖАУАПКЕРШІЛІКТІ ШЕКТЕУ
Қосымша ұсынған кез келген ақпаратты пайдалану тек сіздің тәуекеліңізбен жүзеге асырылады. Әзірлеуші осы Қосымша арқылы алынған кеңестер, емдеу курсы, диагноз немесе кез келген басқа ақпарат, қызметтер немесе өнімдер үшін жауап бермейді.
`,
  data_consent_en: `

DATA PROCESSING CONSENT

Version 2.0 — 03.04.2026

1. CONSENT GRANT
I hereby grant my explicit consent to the collection, processing, and storage of my personal data and the personal data of my child by the Developer of the "Lupibu" application (hereinafter — the "Operator").

2. LEGAL BASIS
This consent is given pursuant to the Law of the Republic of Kazakhstan "On Personal Data and their Protection" and constitutes specific, informed, and unambiguous consent to the processing of personal data.

3. CATEGORIES OF PERSONAL DATA
I authorize the processing of the following categories of data:

**Parent data:**
*   Name (obtained via Apple Sign-In)
*   Email address (obtained via Apple Sign-In; may be an Apple private relay address)
*   Apple ID identifier (for authentication)

**Child data:**
*   Name, date of birth, gender

**Activity data:**
*   Sleep entries (start time, end time, quality rating)
*   Feeding entries (type: breast/bottle/solid food, timestamps, notes)
*   Other entries: diaper changes, walks, doctor visits, medications, vaccination records, symptoms, massage, custom entries (timestamps, optional notes)
*   AI assistant conversations (text queries and responses)

**Photo data:**
*   Photos attached to entries by the parent. A single photo can be attached to any entry. Photos are uploaded to and stored in Google Cloud Storage.

**Voice data:**
*   Voice recordings of the parent, used solely for the purpose of automatic transcription and creation of diary entries. Audio recordings are not stored — only the resulting text is retained.

**Technical data:**
*   Device type and operating system version
*   Crash reports and error logs
*   Push notification tokens
*   Usage analytics (screen views, feature interactions)

4. PURPOSES OF PROCESSING
The data is processed for the following purposes:
*   Creating and maintaining a digital diary of the child's daily routines
*   Providing personalized sleep analytics and recommendations
*   AI-powered voice input for convenient diary entry creation
*   AI assistant for answering parenting questions based on logged data
*   Sending push notifications (sleep reminders, daily tips)
*   Improving app stability and performance (crash analysis)
*   Analyzing usage patterns to improve the product

5. THIRD-PARTY DATA PROCESSORS
The Operator engages the following third parties for data processing:

| Processor | Purpose | Server Location |
|---|---|---|
| Google Cloud Platform | Database hosting, backend infrastructure, photo storage | European Union (Warsaw, Poland — \`europe-central2\`) |
| Firebase (Google) | User authentication, analytics | United States |
| PostHog | Product analytics | European Union (Frankfurt) |
| Sentry | Crash reporting, error monitoring, sampled session replay (masked text and images) | United States |
| Google Gemini AI / Vertex AI | Voice transcription, AI recommendations | United States |
| Telegram Bot API | In-app feedback delivery to support team | Global (Telegram infrastructure) |

Data is transmitted to these processors solely for the stated purposes and in compliance with applicable data protection agreements.

6. CROSS-BORDER DATA TRANSFER
I explicitly consent to the cross-border transfer of the above data to servers located outside my country of residence, as specified in Section 5. I acknowledge that the Operator has taken reasonable measures to ensure an adequate level of data protection with each processor.

7. DATA RETENTION
Personal data is retained for the duration of account existence. Upon account deletion, all personal data is permanently deleted within 30 days, except where retention is required by applicable law.

8. RIGHTS OF THE DATA SUBJECT
I have the right to:
*   Access my personal data held by the Operator
*   Request correction of inaccurate data
*   Withdraw this consent at any time
*   Request deletion of all my data

Withdrawal of consent is effected by deleting my account via the "Delete Account" function in the App settings. I understand that withdrawal of consent will result in the irreversible deletion of all data and the inability to continue using the App.

9. ELECTRONIC SIGNATURE
Tapping the "I agree" button constitutes my **Simple Electronic Signature** and has the same legal effect as a handwritten signature, in accordance with the Law of the Republic of Kazakhstan "On Electronic Document and Electronic Digital Signature."
`,
  data_consent_ru: `

СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ

Версия 2.0 — 03.04.2026

1. ПРЕДОСТАВЛЕНИЕ СОГЛАСИЯ
Настоящим я даю свое явное согласие на сбор, обработку и хранение моих персональных данных и персональных данных моего ребенка Разработчиком приложения «Lupibu» (далее — «Оператор»).

2. ПРАВОВЫЕ ОСНОВАНИЯ
Настоящее согласие дается в соответствии с Законом Республики Казахстан «О персональных данных и их защите» и является конкретным, информированным и сознательным согласием на обработку персональных данных.

3. КАТЕГОРИИ ПЕРСОНАЛЬНЫХ ДАННЫХ
Я разрешаю обработку следующих категорий данных:

**Данные родителя:**
*   Имя (полученное через Apple Sign-In)
*   Адрес электронной почты (полученный через Apple Sign-In; может быть приватным релеем Apple)
*   Идентификатор Apple ID (для аутентификации)

**Данные ребенка:**
*   Имя, дата рождения, пол

**Данные об активности:**
*   Записи о сне (время начала, время окончания, оценка качества)
*   Записи о кормлении (тип: грудное/бутылочка/прикорм, время, заметки)
*   Прочие записи: смена подгузника, прогулки, визиты к врачу, приём лекарств, вакцинация, симптомы, массаж, пользовательские записи (время, необязательные заметки)
*   Переписка с AI-ассистентом (текстовые запросы и ответы)

**Фотографии:**
*   Фотографии, прикрепляемые родителем к записям. К любой записи можно прикрепить одну фотографию. Фотографии загружаются и хранятся в Google Cloud Storage.

**Голосовые данные:**
*   Голосовые записи родителя, используемые исключительно для автоматической расшифровки и создания записей в дневнике. Аудиозаписи не сохраняются — хранится только результирующий текст.

**Технические данные:**
*   Тип устройства и версия операционной системы
*   Отчеты о сбоях и журналы ошибок
*   Токены push-уведомлений
*   Аналитика использования (просмотры экранов, взаимодействие с функциями)

4. ЦЕЛИ ОБРАБОТКИ
Данные обрабатываются для следующих целей:
*   Создание и ведение цифрового дневника режима дня ребенка
*   Предоставление персонализированной аналитики сна и рекомендаций
*   Голосовой ввод на основе AI для удобного создания записей
*   AI-ассистент для ответов на вопросы о воспитании на основе внесенных данных
*   Отправка push-уведомлений (напоминания о сне, ежедневные советы)
*   Повышение стабильности и производительности приложения (анализ сбоев)
*   Анализ паттернов использования для улучшения продукта

5. ТРЕТЬИ ЛИЦА — ОБРАБОТЧИКИ ДАННЫХ
Оператор привлекает следующих третьих лиц для обработки данных:

| Обработчик | Назначение | Расположение серверов |
|---|---|---|
| Google Cloud Platform | Хостинг базы данных, серверная инфраструктура, хранение фотографий | Европейский Союз (Варшава, Польша — \`europe-central2\`) |
| Firebase (Google) | Аутентификация пользователей, аналитика | США |
| PostHog | Продуктовая аналитика | Европейский Союз (Франкфурт) |
| Sentry | Мониторинг сбоев и ошибок, выборочное воспроизведение сессий (с маскировкой текста и изображений) | США |
| Google Gemini AI / Vertex AI | Расшифровка голоса, AI-рекомендации | США |
| Telegram Bot API | Доставка обратной связи из приложения в службу поддержки | Глобально (инфраструктура Telegram) |

Данные передаются указанным обработчикам исключительно для заявленных целей и в соответствии с действующими соглашениями о защите данных.

6. ТРАНСГРАНИЧНАЯ ПЕРЕДАЧА ДАННЫХ
Я выражаю явное согласие на трансграничную передачу указанных данных на серверы, расположенные за пределами страны моего проживания, как указано в разделе 5. Я признаю, что Оператор принял разумные меры для обеспечения надлежащего уровня защиты данных у каждого обработчика.

7. СРОКИ ХРАНЕНИЯ
Персональные данные хранятся в течение всего периода существования учетной записи. При удалении аккаунта все персональные данные безвозвратно удаляются в течение 30 дней, за исключением случаев, когда хранение требуется действующим законодательством.

8. ПРАВА СУБЪЕКТА ДАННЫХ
Я имею право:
*   Получить доступ к моим персональным данным, хранящимся у Оператора
*   Потребовать исправления неточных данных
*   Отозвать настоящее согласие в любой момент
*   Потребовать удаления всех моих данных

Отзыв согласия осуществляется путем удаления аккаунта через функцию «Удалить аккаунт» в настройках Приложения. Я понимаю, что отзыв согласия повлечет за собой безвозвратное удаление всех данных и невозможность дальнейшего использования Приложения.

9. ЭЛЕКТРОННАЯ ПОДПИСЬ
Нажатие кнопки «Я согласен» является моей **Простой электронной подписью** и имеет ту же юридическую силу, что и собственноручная подпись, в соответствии с Законом Республики Казахстан «Об электронном документе и электронной цифровой подписи».
`,
  data_consent_kk: `

ДЕРБЕС ДЕРЕКТЕРДІ ӨҢДЕУГЕ КЕЛІСІМ

Нұсқа 2.0 — 03.04.2026

1. КЕЛІСІМ БЕРУ
Осы арқылы мен «Lupibu» қосымшасын Әзірлеушіге (бұдан әрі — «Оператор») менің дербес деректерімді және баламның дербес деректерін жинауға, өңдеуге және сақтауға нақты келісімімді беремін.

2. ҚҰҚЫҚТЫҚ НЕГІЗДЕР
Бұл келісім Қазақстан Республикасының «Дербес деректер және оларды қорғау туралы» Заңына сәйкес беріледі және дербес деректерді өңдеуге нақты, хабардар етілген және саналы келісім болып табылады.

3. ДЕРБЕС ДЕРЕКТЕР САНАТТАРЫ
Мен деректердің келесі санаттарын өңдеуге рұқсат беремін:

**Ата-ана деректері:**
*   Аты (Apple Sign-In арқылы алынған)
*   Электрондық пошта мекенжайы (Apple Sign-In арқылы алынған; Apple жеке релейі болуы мүмкін)
*   Apple ID идентификаторы (аутентификация үшін)

**Бала деректері:**
*   Аты, туған күні, жынысы

**Белсенділік деректері:**
*   Ұйқы жазбалары (басталу уақыты, аяқталу уақыты, сапа бағасы)
*   Тамақтану жазбалары (түрі: емшек/бөтелке/қосымша тағам, уақыт, жазбалар)
*   Басқа жазбалар: жөргек ауыстыру, серуен, дәрігерге бару, дәрі қабылдау, вакцинация, белгілер, массаж, пайдаланушы жазбалары (уақыт, қосымша жазбалар)
*   AI-көмекшімен сұхбат (мәтіндік сұраулар мен жауаптар)

**Фотосуреттер:**
*   Ата-ана жазбаларға тіркейтін фотосуреттер. Кез келген жазбаға бір фотосурет тіркеуге болады. Фотосуреттер Google Cloud Storage-ға жүктеледі және онда сақталады.

**Дауыс деректері:**
*   Ата-ананың дауыстық жазбалары, тек күнделік жазбаларын автоматты түрде транскрипциялау және жасау мақсатында пайдаланылады. Аудиожазбалар сақталмайды — тек нәтижелік мәтін сақталады.

**Техникалық деректер:**
*   Құрылғы түрі және операциялық жүйе нұсқасы
*   Қателік есептері мен қате журналдары
*   Push-хабарлама токендері
*   Пайдалану аналитикасы (экран көрулері, функциялармен өзара әрекеттесу)

4. ӨҢДЕУ МАҚСАТТАРЫ
Деректер келесі мақсаттар үшін өңделеді:
*   Баланың күн тәртібінің сандық күнделігін жасау және жүргізу
*   Жекелендірілген ұйқы аналитикасы мен ұсыныстарды беру
*   Жазбаларды ыңғайлы жасау үшін AI негізіндегі дауыстық енгізу
*   Енгізілген деректер негізінде тәрбие сұрақтарына жауап беретін AI-көмекші
*   Push-хабарламалар жіберу (ұйқы еске салғыштары, күнделікті кеңестер)
*   Қосымшаның тұрақтылығы мен өнімділігін арттыру (қателіктерді талдау)
*   Өнімді жақсарту үшін пайдалану заңдылықтарын талдау

5. ҮШІНШІ ТАРАПТАР — ДЕРЕКТЕР ӨҢДЕУШІЛЕР
Оператор деректерді өңдеу үшін келесі үшінші тараптарды тартады:

| Өңдеуші | Мақсаты | Серверлер орналасқан жер |
|---|---|---|
| Google Cloud Platform | Деректер базасын хостинг, серверлік инфрақұрылым, фотосуреттерді сақтау | Еуропалық Одақ (Варшава, Польша — \`europe-central2\`) |
| Firebase (Google) | Пайдаланушыларды аутентификациялау, аналитика | АҚШ |
| PostHog | Өнімдік аналитика | Еуропалық Одақ (Франкфурт) |
| Sentry | Қателіктер мен ақаулар мониторингі, іріктемелі сессия қайта ойнату (мәтін мен суреттер маскировкаланған) | АҚШ |
| Google Gemini AI / Vertex AI | Дауысты транскрипциялау, AI-ұсыныстар | АҚШ |
| Telegram Bot API | Қосымшадан қолдау қызметіне кері байланыс жеткізу | Ғаламдық (Telegram инфрақұрылымы) |

Деректер аталған өңдеушілерге тек көрсетілген мақсаттар үшін және деректерді қорғау туралы қолданыстағы келісімдерге сәйкес беріледі.

6. ТРАНСШЕКАРАЛЫҚ ТАСЫМАЛДАУ
Мен жоғарыда аталған деректерді 5-бөлімде көрсетілгендей, тұратын елімнен тыс орналасқан серверлерге трансшекаралық тасымалдауға нақты келісімімді беремін. Мен Оператордың әрбір өңдеушіде деректерді қорғаудың тиісті деңгейін қамтамасыз ету үшін ақылға қонымды шаралар қолданғанын мойындаймын.

7. САҚТАУ МЕРЗІМДЕРІ
Дербес деректер есептік жазба бар болған кезеңде сақталады. Аккаунт жойылған кезде барлық дербес деректер 30 күн ішінде қайтарымсыз жойылады, қолданыстағы заңнамада сақтау талап етілетін жағдайларды қоспағанда.

8. ДЕРЕКТЕР СУБЪЕКТІСІНІҢ ҚҰҚЫҚТАРЫ
Менің келесі құқықтарым бар:
*   Оператордағы менің дербес деректеріме қол жеткізу
*   Дұрыс емес деректерді түзетуді талап ету
*   Осы келісімді кез келген уақытта қайтарып алу
*   Барлық деректерімді жоюды талап ету

Келісімді қайтарып алу Қосымша баптауларындағы «Аккаунтты жою» функциясы арқылы жүзеге асырылады. Мен келісімді қайтарып алу барлық деректердің қайтарымсыз жойылуына және Қосымшаны одан әрі пайдалану мүмкін еместігіне әкелетінін түсінемін.

9. ЭЛЕКТРОНДЫҚ ҚОЛТАҢБА
«Мен келісемін» түймесін басу менің **Қарапайым электрондық қолтаңбам** болып табылады және Қазақстан Республикасының «Электрондық құжат және электрондық цифрлық қолтаңба туралы» Заңына сәйкес қолымен қойылған қолтаңбамен бірдей заңды күшке ие.
`,
};
