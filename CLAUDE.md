@AGENTS.md

# Talessa (сайт-портфоліо)

## Стек

- Next.js (App Router), TypeScript, Tailwind CSS v4.
- Код у `src/` (`src/app/`), стилі й токени в `src/app/globals.css`.
- Сайт примусово світлий (`color-scheme: only light`).

## Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт (Vercel деплоїть кожен пуш), тому перед пушем питай мене.

## Токени

Єдине джерело значень: блок `@theme` у `src/app/globals.css`. Показані в Storybook: `Foundations/Tokens` (`npm run storybook`, порт 6006).

- Кольори: `canvas`, `surface`, `line`, `accent`, `ink`, `ink-muted`, `danger` (`danger` запропонований, на макеті його немає).
- Текст: `text-caption`, `text-body`, `text-lead`, `text-title`, `text-heading`, `text-display`; шрифти `font-heading` (Lora), `font-body` (Inter).
- Радіуси: `rounded-control`, `rounded-card`. Пропорції: `aspect-cover`, `aspect-picture`, `aspect-hero-*`.
- Відступи: тільки 8, 12, 16, 24, 32 px (класи 2, 3, 4, 6, 8).
- Стандартні шкали Tailwind (кольори, розміри тексту, радіуси) скинуто: класи на кшталт `text-white`, `bg-blue-600`, `text-sm` не працюють. Hex і значення в квадратних дужках не використовуємо.

## Компоненти

Лежать у `src/components/`, історія й docs у `<Компонент>.stories.tsx` поруч. Одна історія на компонент з Controls.

- `Button` (`src/components/Button.tsx`): `variant` primary/secondary, `size` md/lg, `disabled`.

Після додавання нового файлу з компонентом перезапусти Storybook (`npm run storybook`), інакше його класи Tailwind можуть не підхопитись.

## Правила

Заповнимо далі.

## Посилання

- План сайту: `docs/Чернетка плану сайту.md`
