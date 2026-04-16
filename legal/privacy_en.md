
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
*   **Account Data:** Your name and email address, as provided through Apple Sign-In during registration. If you chose "Hide My Email" in Apple Sign-In, we receive only a private Apple relay address (e.g. `xxx@privaterelay.appleid.com`), not your real email. The email is used for essential service communications (account recovery, legal notices) only; we do not send marketing emails.
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
| Google Cloud Platform | Hosting, database, photo storage | All app data, uploaded photos | European Union (Warsaw, Poland — `europe-central2`) |
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
