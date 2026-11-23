import type { Lang } from './config'
import { CONTACT_EMAIL } from '../config'

/* Draft texts of the Privacy Policy and the Support page (both languages).
   **bold**, [link](url) and "\n" are supported by <Rich>.
   These are working drafts: review them (ideally with a lawyer) before the apps go live. */

export type Block = { p: string } | { ul: string[] }

export interface LegalSection {
  id: string
  title: string
  blocks: Block[]
}

export interface LegalDoc {
  title: string
  updatedLabel: string
  intro: string
  tocLabel?: string
  sections: LegalSection[]
}

const mail = `[${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})`

export const privacy: Record<Lang, LegalDoc> = {
  uk: {
    title: 'Політика конфіденційності',
    updatedLabel: 'Остання редакція',
    tocLabel: 'Зміст',
    intro: `Ця політика пояснює, які дані обробляють сайт **Talessa** та застосунки, представлені на ньому, навіщо це потрібно і як ви можете керувати своїми даними. Розробниця: Talessa. З усіх питань пишіть на ${mail}.`,
    sections: [
      {
        id: 'site',
        title: 'Сайт Talessa',
        blocks: [
          { p: 'На сайті немає реєстрації та форм, які збирають особисті дані.' },
          {
            ul: [
              '**Аналітика й реклама.** Ми не використовуємо cookie для аналітики чи реклами й не показуємо рекламу.',
              '**Що зберігається у браузері.** Лише вибір мови (локальне сховище вашого браузера). Він не покидає ваш пристрій.',
              '**Хостинг.** Сайт розміщено на платформі Vercel. Як і будь-який хостинг, вона автоматично обробляє технічні дані запиту (IP-адреса, тип браузера, час запиту) для безпеки й стабільної роботи. Ми не використовуємо ці дані, щоб стежити за окремими відвідувачами.',
              '**Листи та форма зворотного зв’язку.** Якщо ви напишете нам листом або через форму на сторінці [Написати мені](/contact), ми отримаємо вашу адресу, імʼя (якщо ви його вказали), тему й текст повідомлення. Форма передає їх на нашу пошту через сервіс доставки форм (Web3Forms), сам сайт їх не зберігає. Ми використовуємо ці дані лише для відповіді й не передаємо третім особам.',
              '**Посилання на інші сайти** (Google Play, App Store тощо) ведуть на ресурси з власними політиками конфіденційності.',
            ],
          },
        ],
      },
      {
        id: 'my-yarn',
        title: 'Застосунок «Моя колекція пряжі»',
        blocks: [
          { p: 'Застосунок у розробці. Перша версія працює без реєстрації. Цей розділ описує дані, з якими працюватиме застосунок, коли з’являться акаунти, і буде оновлений перед публікацією.' },
          {
            ul: [
              '**Акаунт:** email та пароль або вхід через Google чи Apple (ми отримуємо адресу, імʼя та фото профілю, які надає сервіс входу).',
              '**Ваші записи:** інформація про пряжу (склад, товщина, кількість, ціна, місце зберігання), фото, нотатки та проєкти.',
              '**Технічні дані:** версія застосунку, модель пристрою й системи, звіти про збої, щоб виправляти помилки.',
            ],
          },
          {
            p: 'Ми використовуємо ці дані, щоб застосунок працював: зберігав вашу колекцію, рахував залишки та вартість, відновлював дані на новому пристрої. Ми **не продаємо** персональні дані й не передаємо їх третім особам, окрім сервісів, без яких застосунок не працює (хмарне сховище, вхід через Google/Apple, оплата через Google Play чи App Store). Платіжні дані обробляють магазини, ми їх не бачимо.',
          },
          { p: 'Видалення акаунта й даних: див. розділ «Видалення акаунта» на сторінці [Підтримка](/support#delete-account).' },
        ],
      },
      {
        id: 'rise',
        title: 'Застосунок «Підтримка здоров’я» (RISE)',
        blocks: [
          { p: 'Зараз це дизайн-кейс і прототип, а не опублікований застосунок, тому він **не збирає жодних даних**. Сторінка проєкту на сайті — це тільки опис.' },
          {
            p: 'Коли застосунок вийде, він працюватиме з даними про здоров’я (сон, активність, стрес, нотатки), які належать до особливої категорії. Ми обробляємо їх лише за вашою явною згодою, збираємо мінімум потрібного, не продаємо й не використовуємо для реклами. Ви зможете вимкнути будь-який показник, вивантажити свої дані та видалити їх. Застосунок не є медичною послугою й не замінює консультацію лікаря. Цей розділ буде розширено до публікації.',
          },
        ],
      },
      {
        id: 'plants',
        title: 'Застосунок «Мій календар рослин»',
        blocks: [{ p: 'Застосунок у розробці та наразі **не збирає даних**. Розділ буде доповнено перед публікацією.' }],
      },
      {
        id: 'rights',
        title: 'Ваші права',
        blocks: [
          {
            ul: [
              'дізнатися, які дані про вас ми зберігаємо, та отримати їх копію;',
              'виправити неточні дані;',
              'видалити дані або обмежити їх обробку;',
              'відкликати надану згоду в будь-який момент;',
              'подати скаргу до органу із захисту даних (в Україні це Уповноважений Верховної Ради України з прав людини, у країнах ЄС — національний орган).',
            ],
          },
          { p: `Щоб скористатися правами, напишіть на ${mail}. Ми відповімо протягом 30 днів.` },
        ],
      },
      {
        id: 'children',
        title: 'Діти',
        blocks: [{ p: 'Сайт і застосунки не призначені для дітей до 13 років (до 16 років у країнах ЄС), і ми свідомо не збираємо їхніх даних. Якщо ви вважаєте, що дитина надала нам дані, напишіть нам, і ми їх видалимо.' }],
      },
      {
        id: 'security',
        title: 'Безпека та зберігання',
        blocks: [{ p: 'Сайт працює через захищене з’єднання (HTTPS). Доступ до даних обмежений, а зберігаємо їх лише стільки, скільки потрібно для роботи сервісу або вимагає закон. Жоден спосіб передавання й зберігання даних не буває абсолютно безпечним, але ми дбаємо про їх захист.' }],
      },
      {
        id: 'changes',
        title: 'Зміни політики',
        blocks: [{ p: 'Ми можемо оновлювати цю політику. Дата останньої редакції вказана вгорі сторінки. Про суттєві зміни повідомимо на сайті або в застосунку.' }],
      },
      {
        id: 'contact',
        title: 'Контакти',
        blocks: [{ p: `Talessa\nEmail: ${mail}\nСторінка підтримки: [Підтримка](/support)` }],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    tocLabel: 'Contents',
    intro: `This policy explains what data the **Talessa** website and the apps presented on it process, why, and how you can control your data. Developer: Talessa. For any questions, write to ${mail}.`,
    sections: [
      {
        id: 'site',
        title: 'The Talessa website',
        blocks: [
          { p: 'The website has no registration and no forms that collect personal data.' },
          {
            ul: [
              '**Analytics and ads.** We do not use cookies for analytics or advertising, and we do not show ads.',
              '**What is stored in your browser.** Only your language choice (your browser’s local storage). It never leaves your device.',
              '**Hosting.** The website is hosted on Vercel. Like any hosting provider, it automatically processes technical request data (IP address, browser type, time of request) for security and reliability. We do not use this data to track individual visitors.',
              '**Emails and the contact form.** If you write to us by email or through the form on the [Contact me](/contact) page, we receive your address, your name (if you give it), the topic and the text of your message. The form passes them to our mailbox through a form delivery service (Web3Forms); the website itself does not store them. We use this data only to reply and do not share it with third parties.',
              '**Links to other sites** (Google Play, App Store, etc.) lead to services that have their own privacy policies.',
            ],
          },
        ],
      },
      {
        id: 'my-yarn',
        title: 'The “My yarn collection” app',
        blocks: [
          { p: 'The app is in development. The first version works without registration. This section describes the data the app will handle once accounts are introduced, and it will be updated before release.' },
          {
            ul: [
              '**Account:** email and password, or sign-in with Google or Apple (we receive the address, name and profile photo provided by the sign-in service).',
              '**Your entries:** yarn information (composition, thickness, quantity, price, storage place), photos, notes and projects.',
              '**Technical data:** app version, device and OS model, crash reports, used to fix bugs.',
            ],
          },
          {
            p: 'We use this data to make the app work: store your collection, calculate stock and cost, and restore your data on a new device. We **do not sell** personal data and do not share it with third parties, except for services the app cannot work without (cloud storage, Google/Apple sign-in, payments through Google Play or the App Store). Payment details are processed by the stores; we never see them.',
          },
          { p: 'To delete your account and data, see “Account deletion” on the [Support](/support#delete-account) page.' },
        ],
      },
      {
        id: 'rise',
        title: 'The “New Parent Wellness” (RISE) app',
        blocks: [
          { p: 'Right now this is a design case and a prototype, not a published app, so it **collects no data at all**. The project page on the website is a description only.' },
          {
            p: 'Once released, the app will work with health data (sleep, activity, stress, notes), which is a special category of data. We will process it only with your explicit consent, collect the minimum necessary, and never sell it or use it for advertising. You will be able to turn off any metric, export your data and delete it. The app is not a medical service and does not replace a doctor’s advice. This section will be expanded before release.',
          },
        ],
      },
      {
        id: 'plants',
        title: 'The “My Plant Calendar” app',
        blocks: [{ p: 'The app is in development and **does not collect data** at the moment. This section will be extended before release.' }],
      },
      {
        id: 'rights',
        title: 'Your rights',
        blocks: [
          {
            ul: [
              'find out what data we hold about you and get a copy;',
              'correct inaccurate data;',
              'delete your data or restrict its processing;',
              'withdraw your consent at any time;',
              'lodge a complaint with a data protection authority (in Ukraine, the Ukrainian Parliament Commissioner for Human Rights; in the EU, your national authority).',
            ],
          },
          { p: `To exercise your rights, write to ${mail}. We will reply within 30 days.` },
        ],
      },
      {
        id: 'children',
        title: 'Children',
        blocks: [{ p: 'The website and apps are not intended for children under 13 (under 16 in the EU), and we do not knowingly collect their data. If you believe a child has given us data, write to us and we will delete it.' }],
      },
      {
        id: 'security',
        title: 'Security and storage',
        blocks: [{ p: 'The website uses a secure connection (HTTPS). Access to data is restricted, and we keep it only as long as needed to run the service or as required by law. No method of transmission or storage is completely secure, but we do our best to protect it.' }],
      },
      {
        id: 'changes',
        title: 'Changes to this policy',
        blocks: [{ p: 'We may update this policy. The date of the latest version is shown at the top of the page. We will announce material changes on the website or in the app.' }],
      },
      {
        id: 'contact',
        title: 'Contact',
        blocks: [{ p: `Talessa\nEmail: ${mail}\nSupport page: [Support](/support)` }],
      },
    ],
  },
}

export const support: Record<Lang, LegalDoc> = {
  uk: {
    title: 'Підтримка',
    updatedLabel: 'Оновлено',
    intro: 'Маєте питання про застосунок, знайшли помилку або хочете запропонувати ідею? Ми з радістю допоможемо.',
    sections: [
      {
        id: 'contact',
        title: 'Як з нами зв’язатися',
        blocks: [
          { p: `Напишіть на ${mail}. Можна українською або англійською. Зазвичай відповідаємо протягом 2–3 робочих днів.` },
        ],
      },
      {
        id: 'report',
        title: 'Повідомити про помилку',
        blocks: [
          { p: 'Щоб ми швидше знайшли причину, вкажіть у листі:' },
          {
            ul: [
              'назву застосунку та його версію;',
              'модель пристрою й версію системи (Android або iOS);',
              'що ви робили, що очікували побачити і що сталося;',
              'скриншот або запис екрана, якщо можливо.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Часті питання',
        blocks: [
          { p: '**Де завантажити застосунки?**\n«Моя колекція пряжі» зараз у розробці. Спочатку застосунок з’явиться в Google Play, пізніше — в App Store. Слідкуйте за оновленнями на сайті.' },
          { p: '**Застосунки платні?**\nПлануємо платну підписку з обмеженим безкоштовним доступом. Деталі повідомимо перед запуском.' },
          { p: '**Чи потрібна реєстрація?**\nПерша версія працює без неї. Коли з’являться акаунти, можна буде увійти через email, Google або Apple.' },
          { p: '**Як ви використовуєте мої дані?**\nДив. [Політику конфіденційності](/privacy).' },
        ],
      },
      {
        id: 'delete-account',
        title: 'Видалення акаунта й даних',
        blocks: [
          { p: `Щоб видалити акаунт і всі пов’язані дані, напишіть на ${mail} з адреси, яка вказана в акаунті, з темою «Видалити акаунт». Ми видалимо дані протягом 30 днів і підтвердимо це листом. Коли в застосунках з’являться акаунти, видалити їх можна буде також у налаштуваннях.` },
        ],
      },
      {
        id: 'privacy',
        title: 'Конфіденційність',
        blocks: [{ p: 'Як ми працюємо з даними: [Політика конфіденційності](/privacy).' }],
      },
    ],
  },
  en: {
    title: 'Support',
    updatedLabel: 'Updated',
    intro: 'Have a question about an app, found a bug, or want to suggest an idea? We are happy to help.',
    sections: [
      {
        id: 'contact',
        title: 'How to contact us',
        blocks: [
          { p: `Write to ${mail}. Ukrainian or English is fine. We usually reply within 2–3 business days.` },
        ],
      },
      {
        id: 'report',
        title: 'Report a bug',
        blocks: [
          { p: 'To help us find the cause faster, please include:' },
          {
            ul: [
              'the app name and its version;',
              'your device model and OS version (Android or iOS);',
              'what you did, what you expected to see, and what happened;',
              'a screenshot or screen recording, if possible.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'FAQ',
        blocks: [
          { p: '**Where can I download the apps?**\n“My yarn collection” is in development. It will appear on Google Play first and on the App Store later. Follow the updates on this website.' },
          { p: '**Are the apps paid?**\nWe plan a paid subscription with limited free access. We will share the details before launch.' },
          { p: '**Do I need to register?**\nThe first version works without it. When accounts appear, you will be able to sign in with email, Google or Apple.' },
          { p: '**How do you use my data?**\nSee the [Privacy Policy](/privacy).' },
        ],
      },
      {
        id: 'delete-account',
        title: 'Account and data deletion',
        blocks: [
          { p: `To delete your account and all related data, write to ${mail} from the address used for the account, with the subject “Delete account”. We will delete the data within 30 days and confirm it by email. Once the apps have accounts, you will also be able to delete them in the settings.` },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacy',
        blocks: [{ p: 'How we handle data: [Privacy Policy](/privacy).' }],
      },
    ],
  },
}
