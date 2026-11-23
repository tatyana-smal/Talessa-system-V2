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
- \`variant\`: \`primary\` (за замовчуванням) або \`secondary\`.
- \`size\`: \`md\` (звичайна, \`text-body\`, за замовчуванням) або \`lg\` (велика, \`text-lead\`).
- \`disabled\`: вимкнена кнопка, \`false\` за замовчуванням. Робиться через \`aria-disabled\`, не через атрибут \`disabled\`.
- \`disabledReason\`: текст пояснення під вимкненою кнопкою. Зв'язується з кнопкою через \`aria-describedby\`, екранний читач прочитає його разом із кнопкою.
- \`children\`: підпис. Решта атрибутів \`<button>\` (\`onClick\`, \`type\`) передаються далі; \`type\` за замовчуванням \`button\`.

### Варіанти і стани
- Стан default узято зі старого проєкту (макет Figma): \`primary\` — заливка \`ink\`, підпис \`canvas\` жирним (12,69:1), обʼємна тінь \`shadow-button-primary\`; \`secondary\` — без заливки, межа \`ink\`, підпис \`ink\` (12,69:1), тінь \`shadow-button-secondary\`.
- Наведення (тимчасово, до макета Figma): \`primary\` — заливка \`ink-muted\`; \`secondary\` — заливка \`surface\`.
- Фокус з клавіатури (Tab): контур 2 px \`ink\` із відступом, контраст 12,69:1 на \`canvas\`.
- \`disabled\`: кнопка лишається у фокусі, натискання нічого не робить, кнопка не відправляє форму. Тінь зникає. У \`primary\` заливка й межа \`line\`, підпис \`ink\` (6,26:1). У \`secondary\` межа \`line\`, підпис \`ink-muted\` (6,21:1). Наведення стану не змінює.

### Токени
\`ink\`, \`ink-muted\`, \`canvas\`, \`surface\`, \`line\`, \`rounded-control\`, \`shadow-button-primary\`, \`shadow-button-secondary\`, \`text-body\`, \`text-lead\`, \`text-caption\` (пояснення), \`font-body\`, відступи 8 і 16 px. Контур фокусу — \`ink\`.

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
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    size: "md",
    disabled: false,
    disabledReason: "Кнопка недоступна, поки не заповнено форму",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
