import type { Lang } from './config'

export const header: Record<
  Lang,
  { apps: string; design: string; blog: string; about: string; contact: string; switchTo: string; language: string; theme: string; menu: string; close: string }
> = {
  uk: {
    apps: 'Застосунки',
    design: 'Дизайн',
    blog: 'Блог',
    about: 'Про мене',
    contact: 'Написати мені',
    switchTo: 'Switch to English',
    language: 'Language',
    theme: 'Light / dark theme',
    menu: 'Меню',
    close: 'Закрити',
  },
  en: {
    apps: 'Apps',
    design: 'Design',
    blog: 'Blog',
    about: 'About me',
    contact: 'Contact me',
    switchTo: 'Перемкнути на українську',
    language: 'Мова',
    theme: 'Світла / темна тема',
    menu: 'Menu',
    close: 'Close',
  },
}

export const footer: Record<
  Lang,
  {
    tagline: string
    pages: string
    apps: string
    help: string
    appsLinks: { yarn: string; health: string; plants: string }
    inDevelopment: string
    support: string
    privacy: string
    write: string
    rights: string
  }
> = {
  uk: {
    tagline: 'Застосунки, що турбуються про те, що для нас важливе',
    pages: 'Сторінки',
    apps: 'Застосунки',
    help: 'Допомога',
    appsLinks: { yarn: 'Моя колекція пряжі', health: 'Підтримка здоров’я', plants: 'Мій календар рослин' },
    inDevelopment: 'у розробці',
    support: 'Підтримка',
    privacy: 'Політика конфіденційності',
    write: 'Написати нам',
    rights: 'Усі права захищено.',
  },
  en: {
    tagline: 'Apps that care about what matters to us',
    pages: 'Pages',
    apps: 'Apps',
    help: 'Help',
    appsLinks: { yarn: 'My yarn collection', health: 'New Parent Wellness', plants: 'My Plant Calendar' },
    inDevelopment: 'in development',
    support: 'Support',
    privacy: 'Privacy Policy',
    write: 'Contact us',
    rights: 'All rights reserved.',
  },
}

export const home: Record<
  Lang,
  {
    heroTitle: string[]
    heroText: string
    exploreApps: string
    exploreAppsShort: string
    about: string
    myApps: string
    apps: { yarn: string; health: string; plants: string }
    inDevelopment: string
    designTitle: string
    designText: string
    blogTitle: string
    blogText: string
  }
> = {
  uk: {
    heroTitle: ['Застосунки,', 'що турбуються про те, що для нас важливе'],
    heroText:
      'Люблю перетворювати ідеї на щось корисне і цікаве: створюю власні застосунки, проєктую інтерфейси та ділюся тим, чим живу, що мене захоплює і надихає',
    exploreApps: 'Переглянути застосунки',
    exploreAppsShort: 'Застосунки',
    about: 'Про мене',
    myApps: 'Мої застосунки',
    apps: {
      yarn: 'Моя колекція пряжі',
      health: 'Підтримка здоров’я батьків немовляти',
      plants: 'Мій календар рослин',
    },
    inDevelopment: 'У розробці',
    designTitle: 'Дизайн',
    designText: 'Розробка, дизайн, програмування цифрових продуктів та підтримка їх на різних етапах',
    blogTitle: 'Блог',
    blogText: 'Про творчість, в’язання, навчання, дизайн, рослини і життя у балансі (наскільки це можливо)))',
  },
  en: {
    heroTitle: ['Apps that care about what matters to us'],
    heroText:
      'I love turning ideas into something useful and inspiring. I create my own apps, design user interfaces, and share the things I’m passionate about, what I love, and what inspires me',
    exploreApps: 'Explore Apps',
    exploreAppsShort: 'Apps',
    about: 'About me',
    myApps: 'My apps',
    apps: {
      yarn: 'My yarn collection',
      health: 'New Parent Wellness',
      plants: 'My Plant Calendar',
    },
    inDevelopment: 'In Development',
    designTitle: 'Design',
    designText:
      'Development, design, and programming of digital products, with support throughout every stage of their lifecycle',
    blogTitle: 'Blog',
    blogText:
      'A little bit of creativity, knitting, learning, design, plants, and finding balance in everyday life (as much as possible, anyway!)))',
  },
}
