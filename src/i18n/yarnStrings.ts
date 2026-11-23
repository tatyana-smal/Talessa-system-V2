import type { Lang } from './config'

/* Texts of the "My yarn collection" case page.
   **bold** marks bold text, "\n" is a line break. */
export interface YarnTexts {
  heroTitle: string[]
  heroTagline: string
  aboutTitle: string
  aboutQuote: string
  aboutText: string
  featuresTitle: string
  doneHead: string
  done: string[]
  planHead: string
  plan: string[]
  registrationTitle: string
  registrationText: string
  detailTitle: string
  detailText: string
  platformsTitle: string
  platformsText: string
  nightTitle: string
  nightText: string
  endText: string[]
  alt: { onboarding: string; registration: string; detail: string; platforms: string; night: string }
}

export const yarn: Record<Lang, YarnTexts> = {
  uk: {
    heroTitle: ['Моя', 'колекція пряжі'],
    heroTagline: 'Для в’язальниць, у яких пряжі стає все більше, а місця для неї — все менше',
    aboutTitle: 'Про проєкт',
    aboutQuote:
      '«В’язання речей та колекціонування пряжі – це два окремих хобі». Цей проєкт допомагає в’язальщіцям швидко ореєнтуватися у своїх запасах пряжі, а також надає можливість обмінюватися залишками пряжі і мати всі свої проєкти в одному додатку',
    aboutText:
      'Платформа створює єдиний цифровий простір для рукодільниць, де можна зберігати та впорядковувати колекцію пряжі, працювати з проєктами й знаходити натхнення. Додаток допомагає вести детальний облік матеріалів, автоматично розраховувати залишки та орієнтовну собівартість виробів, швидко знаходити потрібну пряжу, а в подальшому — розширити можливості для обміну матеріалами та взаємодії зі спільнотою.',
    featuresTitle: 'Функціонал додатку',
    doneHead: 'Вже реалізовано:',
    done: [
      '**Склад**, фільтр по складу пряжі, товщині, відстежування залишків.',
      '**Профіль** з можливістю зберігання ідей та фото проектів.',
    ],
    planHead: 'В подальшому планується розробити:',
    plan: [
      '**Обмін залишків** з фото, цінами, описом, фільтру по цінам, назві та складу (щось на кшталт маркетплейсу)',
      '**Чат** для спілкування. Галерея робіт з рейтингом або просто «лайками»',
      '**Блог** з технологіями, прикладами для розрахунків тих чи інших конструкцій одягу та інших речей у проектах.',
    ],
    registrationTitle: 'Зручна реєстрація та авторизація',
    registrationText:
      '**Простий** та зрозумілий **процес входу** без зайвих кроків. Користувач може зареєструватися за **email** або швидко увійти за допомогою **Google чи Apple.**',
    detailTitle: 'Детальна картка пряжі та зручні фільтри',
    detailText: 'Уся інформація про пряжу — в одному місці. **Пошук** потрібного матеріалу — **у кілька дотиків.**',
    platformsTitle: 'Android & iOS',
    platformsText:
      'Застосунок **адаптований для** обох основних мобільних платформ — **Android та iOS.**\nІнтерфейс зберігає єдину візуальну концепцію, водночас враховуючи особливості кожної платформи: навігацію, системні елементи та звичні для користувачів патерни взаємодії.',
    nightTitle: 'Адаптація для нічного режиму',
    nightText:
      'В’язання часто стає частиною вечірнього ритуалу — часом для спокою, творчості та затишку.\nТому я додала **Темний режим**, адаптований не лише за кольорами, а й за атмосферою. Темний фон **робить** інтерфейс **комфортнішим у вечірній час**, а теплі відтінки та яскраві акценти зберігають характер застосунку.\nЗатишне в’язання — у будь-який час доби.',
    endText: ['Уся пряжа в одному місці — більше часу', 'на те, що ти любиш'],
    alt: {
      onboarding: 'Екрани знайомства із застосунком',
      registration: 'Екрани реєстрації та входу',
      detail: 'Каталог, фільтри та детальна картка пряжі',
      platforms: 'Фільтр на Android та iOS',
      night: 'Скриня з пряжею вечірнього затишку',
    },
  },
  en: {
    heroTitle: ['My yarn', 'collection'],
    heroTagline: 'For knitters who have more and more yarn but less and less space for it',
    aboutTitle: 'About the project',
    aboutQuote:
      '“Knitting and collecting yarn are two separate hobbies.” This app helps knitters easily manage their yarn stashes, offers a way to swap leftover yarn, and keeps all their projects in one place.',
    aboutText:
      'The platform creates a unified digital space for crafters to store and organize their yarn collections, manage projects, and find inspiration. The app helps keep detailed records of materials, automatically calculate remaining stock and estimated production costs, and quickly locate specific yarns, while also paving the way for future features such as material swapping and community interaction.',
    featuresTitle: 'App functionality',
    doneHead: 'Already implemented:',
    done: [
      '**Warehouse**, filtering by composition and yarn thickness, inventory management.',
      '**A profile** with the ability to save ideas and project photos.',
    ],
    planHead: 'Future plans include developing:',
    plan: [
      '**Yarn Scrap Swap** featuring photos, prices, and descriptions, with filters for price, name, and composition (similar to a marketplace).',
      '**Chat** for communication. Gallery of works with ratings or simply "likes."',
      '**A blog** featuring technologies and calculation examples for various garment designs and other project items.',
    ],
    registrationTitle: 'Convenient registration and login',
    registrationText:
      'A **simple** and straightforward **login** process without unnecessary steps. Users can sign up **via email** or quickly log in using **Google or Apple.**',
    detailTitle: 'Detailed yarn card and convenient filters',
    detailText: 'All yarn information in one place. **Find** the material you need in just **a few taps.**',
    platformsTitle: 'Android & iOS',
    platformsText:
      'The app is **adapted for** both major mobile platforms—**Android and iOS.**\nThe interface maintains a unified visual concept while accounting for the specific characteristics of each platform—such as navigation, system elements, and familiar user interaction patterns.',
    nightTitle: 'Adaptation for night mode',
    nightText:
      'Knitting often becomes part of an evening ritual—a time for calm, creativity, and coziness.\nThat’s why I added **Dark Mode**, tailored not only in terms of color but also atmosphere. The dark background **makes the interface more comfortable to use in the evening**, while warm tones and vibrant accents preserve the app’s character.\nCozy knitting—any time of day.',
    endText: ['All your yarn in one place - more time for what you love'],
    alt: {
      onboarding: 'App introduction screens',
      registration: 'Registration and login screens',
      detail: 'Catalog, filters and a detailed yarn card',
      platforms: 'The filter on Android and iOS',
      night: 'A chest of yarn in the evening light',
    },
  },
}
