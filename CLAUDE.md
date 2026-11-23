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
- Відступи: тільки 8, 12, 16, 24, 32 px (класи 2, 3, 4, 6, 8). Для великих секцій окремі токени: `max-w-page` (ширина контенту 1440 px) і `mt-section` (96 px між великими секціями).
- Стандартні шкали Tailwind (кольори, розміри тексту, радіуси) скинуто: класи на кшталт `text-white`, `bg-blue-600`, `text-sm` не працюють. Hex і значення в квадратних дужках не використовуємо.

## Компоненти

Лежать у `src/components/`, історія й docs у `<Компонент>.stories.tsx` поруч. Одна історія на компонент з Controls.

- `Button` (`src/components/Button.tsx`): `variant` primary/secondary, `size` md/lg, `disabled` (через `aria-disabled`, кнопка лишається у фокусі) і `disabledReason` (пояснення під кнопкою).
- `FormField` (`src/components/FormField.tsx`): текстове поле з підписом над ним; `label`, `error`, `errorText`, `disabled`, значення через `defaultValue`/`value`.
- `Navigation` (`src/components/Navigation.tsx`): меню сайту; `items`, `activeHref`, `bar` (завжди видно: перемикачі мови й теми), `action` (кнопка «Написати мені»); до 1024 px згортається в іконку-бургер, відкрите меню лежить поверх контенту, закривається Escape.

- `ButtonLink` (`src/components/ButtonLink.tsx`): посилання у вигляді кнопки, ті самі `variant` і `size`.

- `LanguageSwitcher`, `ThemeSwitch` (поки лише ставить `data-theme`, темних кольорів ще немає), `CheckboxField`; `FormField` вміє `multiline` і `options` (випадний список).
- Стан default кнопок і полів узято зі старого проєкту (з тінями). Стани hover/focus/disabled тимчасові, їх доведе макет Figma.

Блоки сторінок (шапка, hero, картки застосунків, дизайн і блог, підвал, форма, юридичні сторінки) лежать у `src/sections/`. Розмітка й розміри перенесені зі старого проєкту як є: `src/styles/legacy.css` (старий App.css; кольори, шрифти, радіуси й тіні з токенів). Кнопки, перемикачі мови й теми, стрілки й поля форми — компоненти зі Storybook у стані default; `legacy.css` лише задає їм розміри в контексті (через класи-маркери `btn`, `btn--pill`, `nav__cta`, `langsw`, `themesw`). Відстані 10 px округлено до 12 px. `Navigation` лишається в Storybook, але шапка сайту йде за старою розміткою. Зображення: `src/assets/img/`.

Сторінки застосунків (`my-yarn`, `health`) стилізовані окремим `src/sections/case.css` (артборд 1920 px, Playfair, золота смужка): це винятки, які не є токенами сайту.

## Мови

- Адреси з префіксом мови: `/uk/...` і `/en/...` (`src/app/[lang]/`). `src/proxy.ts` перенаправляє адреси без мови за cookie `NEXT_LOCALE` або мовою браузера, інакше українська.
- Тексти лежать у `src/i18n/*Strings.ts` за мовами; посилання в сторінках будуємо через `path(lang, "/...")`. Перемикач мови зберігає вибір у cookie.
- Форма «Написати мені»: змінна `NEXT_PUBLIC_WEB3FORMS_KEY` у Vercel (Settings, Environment Variables). Без неї форма відкриває поштовий застосунок.

Після додавання нового файлу з компонентом перезапусти Storybook (`npm run storybook`), інакше його класи Tailwind можуть не підхопитись.

## Правила

Заповнимо далі.

## Посилання

- План сайту: `docs/Чернетка плану сайту.md`
