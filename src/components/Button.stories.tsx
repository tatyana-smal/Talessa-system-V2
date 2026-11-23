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
- \`primary\`: заливка \`accent\`, підпис \`canvas\` (контраст 6,02:1). Наведення: заливка й межа \`ink\`.
- \`secondary\`: без заливки, межа \`ink-muted\` (6,21:1 на \`canvas\`), підпис \`ink\` (12,69:1). Наведення: заливка \`surface\`.
- Фокус з клавіатури (Tab): контур 2 px \`ink\` із відступом, контраст 12,69:1 на \`canvas\`.
- \`disabled\`: кнопка лишається у фокусі, натискання нічого не робить, кнопка не відправляє форму. У \`primary\` заливка й межа \`line\`, підпис \`ink\` (6,26:1). У \`secondary\` межа \`line\`, підпис \`ink-muted\` (6,21:1). Наведення стану не змінює.

### Токени
\`accent\`, \`canvas\`, \`ink\`, \`ink-muted\`, \`surface\`, \`line\`, \`rounded-control\`, \`text-body\`, \`text-lead\`, \`text-caption\` (пояснення), \`font-body\`, відступи 8, 12, 16 і 24 px.

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
