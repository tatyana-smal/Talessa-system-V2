import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Кнопка для дій на сторінці: «Написати мені», «Переглянути застосунки». Кути — \`rounded-control\`.

### Параметри
- \`variant\`: \`primary\` (за замовчуванням), \`secondary\`, \`menu\` (пункт меню без заливки й межі, відступи задає контекст), \`arrow\` (темна кругла стрілка 96×48 для десктопа й планшета) або \`arrowMobile\` (світла пігулка зі стрілкою 80×24 для мобільної). У стрілок підпис дає \`aria-label\`, \`children\` не потрібні.
- \`size\`: \`md\` (звичайна, \`text-body\`, за замовчуванням) або \`lg\` (велика: \`text-body\` до 1024 px і \`text-lead\` від 1024 px). Для стрілок не діє.
- \`loading\`: стан «у процесі» (Processed у Figma), \`false\` за замовчуванням. Спінер, \`aria-busy\`, натискання нічого не робить. У стрілок спінер замінює стрілку, у текстових кнопок стоїть перед підписом.
- \`disabled\`: вимкнена кнопка, \`false\` за замовчуванням. Робиться через \`aria-disabled\`, не через атрибут \`disabled\`.
- \`disabledReason\`: текст пояснення під вимкненою кнопкою. Зв'язується з кнопкою через \`aria-describedby\`, екранний читач прочитає його разом із кнопкою.
- \`children\`: підпис. Решта атрибутів \`<button>\` (\`onClick\`, \`type\`) передаються далі; \`type\` за замовчуванням \`button\`.

### Варіанти і стани
Усі стани взято з макета Figma «UI Kit», значення лежать у токенах (\`globals.css\`).
- **Default.** \`primary\`: заливка \`ink\` з легким градієнтом \`bg-fill-primary\`, підпис \`canvas\` жирним (12,69:1), тінь \`shadow-button-primary\`. \`secondary\`: без заливки, межа й підпис \`ink\`, тінь \`shadow-button-secondary\`. \`arrow\`: як \`primary\`, 96×48. \`arrowMobile\`: заливка \`canvas\`, стрілка \`ink\`, тінь \`shadow-button-arrow-small\`.
- **Focus.** Фокус з клавіатури (Tab) і наведення: світліша заливка (\`bg-fill-primary-focus\`; у \`secondary\` градієнт від білого до \`tint\`; у \`arrowMobile\` \`bg-fill-arrow-small-active\`). Для фокусу з клавіатури додатково контур 2 px \`ink\` з відступом (12,69:1 на \`canvas\`).
- **Pressed.** Натиснута кнопка: сірувата заливка (\`bg-fill-primary-pressed\`) і тінь \`shadow-button-pressed\` зі зсувом 8 px.
- **Processed.** \`loading\`: вигляд як Pressed, але зі спінером.
- **Disabled.** \`disabled\`: прозорість 50%, решта як default; кнопка лишається у фокусі, натискання нічого не робить і не відправляє форму. Наведення стану не змінює.

### Токени
\`ink\`, \`ink-muted\`, \`canvas\`, \`tint\`, \`rounded-control\`, \`shadow-button-primary\`, \`shadow-button-secondary\`, \`shadow-button-pressed\`, \`shadow-button-arrow-small\`, заливки \`bg-fill-*\`, \`text-body\`, \`text-lead\`, \`text-caption\` (пояснення), \`font-body\`, відступи 8 і 16 px. Контур фокусу — \`ink\`.

### Коли використовувати
Одна \`primary\` на екран для головної дії, поруч за потреби \`secondary\`. Вимикай кнопку тільки разом із \`disabledReason\`: користувач має зрозуміти, чому дія недоступна. Кнопка виконує дію на сторінці; для переходу на іншу сторінку компонента-посилання поки немає.

### Як брати в код
\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="secondary" size="lg" onClick={save}>Зберегти</Button>

<Button disabled disabledReason="Заповніть імʼя, щоб надіслати">Надіслати</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "menu", "arrow", "arrowMobile"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
    disabledReason: "Кнопка недоступна, поки не заповнено форму",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
