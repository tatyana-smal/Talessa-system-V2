import type { Lang } from './config'

/* Texts of the "RISE" (health & wellness for young parents) case page. */
export interface HealthTexts {
  heroTitle: string[]
  aboutTitle: string
  aboutText: string
  solutionText: string
  adaptiveTitle: string
  adaptiveText: string
  dataTitle: string
  dataText: string
  mobileTitle: string
  errorsTitle: string
  errorsText: string
  nightTitle: string
  nightText: string
  endText: string[]
  alt: { hero: string; adaptive: string; data: string; mobile: string; errors: string; night: string }
}

export const health: Record<Lang, HealthTexts> = {
  uk: {
    heroTitle: ['Трекер здоров’я та самопочуття', 'для молодих батьків'],
    aboutTitle: 'Про проєкт',
    aboutText:
      'Багато застосунків для здоров’я зосереджені на показниках. У ході свого дослідження я з’ясувала, що молодим батькам часто потрібно дещо інше: чіткі поради, емоційна підтримка та впевненість у тому, що вони дбають не лише про своїх дітей, а й про себе. Ця ідея лягла в основу RISE.',
    solutionText:
      'RISE допомагає молодим батькам краще розуміти свій стан не тільки по показникам з приладів, а й помічати, чого потребує організм, і знаходити прості способи відновлювати сили. Щоб вистачало енергії не лише на турботу про дитину, а й на себе.',
    adaptiveTitle: 'Адаптивне налаштування',
    adaptiveText:
      'Користувач може вибрати лише ті параметри, які він хоче відстежувати. Також є окрема вкладка, де можна налаштувати власні трекери та робити нотатки',
    dataTitle: 'Чіткі дані та доступний аналіз',
    dataText: 'Чіткі дані з аналізом результатів і практичними рекомендаціями на основі ШІ',
    mobileTitle: 'Зручна для перегляду адаптація на мобільних пристроях',
    errorsTitle: 'Дружні та гумористичні повідомлення про помилки',
    errorsText:
      'Для людини, яка вже перебуває в стані хронічного стресу, сповіщення про неполадки в додатку стає додатковим джерелом напруги. Щоб пом’якшити цей ефект, повідомлення сформульовані в легкій, гумористичній манері й демонструють розуміння та співпереживання до користувача',
    nightTitle: 'Адаптація для нічного режиму',
    nightText:
      'Батьки часто знаходять час для себе лише пізно ввечері, тому важливо налаштовувати екран на комфортний нічний режим',
    endText: ['Адже здорові батьки', 'створюють щасливіші сім’ї'],
    alt: {
      hero: 'RISE на ноутбуці, планшеті та телефоні, молода сім’я на сході сонця',
      adaptive: 'Екран акаунта RISE на ноутбуці, планшеті та телефоні',
      data: 'Панелі RISE на планшетах',
      mobile: 'Тато з дитиною користуються RISE на телефоні',
      errors: 'Жартівливі екрани помилок 503 і 429',
      night: 'RISE у світлому та темному режимі',
    },
  },
  en: {
    heroTitle: ['Health & Wellness Tracker', 'for Young Parents'],
    aboutTitle: 'About the project',
    aboutText:
      'Many health apps focus on metrics. During my research, I discovered that young parents often need something different: clear guidance, emotional support, and confidence that they’re taking care of themselves as well as their children. This idea became the foundation of RISE',
    solutionText:
      'RISE transforms health data into clear, personalized guidance so young parents can understand themselves, recover faster and care for their families with more energy',
    adaptiveTitle: 'Adaptive setting',
    adaptiveText:
      'The user can select only the parameters they wish to track. There is also a separate tab where you can set up custom trackers and make notes',
    dataTitle: 'Clear data and accessible analysis',
    dataText: 'Clear data with result analysis and actionable AI-driven advice',
    mobileTitle: 'Mobile-friendly, easy-to-read adaptation',
    errorsTitle: 'Friendly and humorous error messages',
    errorsText:
      'For a person already experiencing chronic stress, encountering a notification about issues with their app creates additional stress. To mitigate this, the messages are lighthearted and humorous, and they resonate empathetically with the target user.',
    nightTitle: 'Adaptation for night mode',
    nightText:
      'Parents often find time for themselves only late at night, so it is important to adjust the screen to a comfortable night mode.',
    endText: ['Because healthy parents', 'raise happier families'],
    alt: {
      hero: 'RISE on laptop, tablet and phone, with a young family at sunrise',
      adaptive: 'RISE account screen on laptop, tablet and phone',
      data: 'RISE dashboards on tablets',
      mobile: 'A father with a child using RISE on a phone',
      errors: 'Humorous 503 and 429 error screens',
      night: 'RISE in light and dark mode',
    },
  },
}
