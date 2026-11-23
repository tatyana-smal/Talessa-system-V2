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
Кнопка для дій: «Написати мені», «Переглянути застосунки», «Про мене». Форма — пігулка (\`rounded-control\`).

### Параметри
- \`variant\`: \`primary\` (за замовчуванням) або \`secondary\`.
- \`size\`: \`md\` (за замовчуванням, \`text-body\`) або \`lg\` (\`text-lead\`).
- \`disabled\`: вимкнена кнопка, \`false\` за замовчуванням.
- \`children\`: підпис. Решта атрибутів \`<button>\` (\`onClick\`, \`type\`) передаються далі; \`type\` за замовчуванням \`button\`.

### Варіанти і стани
- \`primary\`: заливка \`ink\`, підпис \`canvas\`. Наведення: заливка \`ink-muted\`.
- \`secondary\`: без заливки, межа \`ink-muted\`, підпис \`ink\`. Наведення: заливка \`surface\`.
- Фокус з клавіатури (Tab): контур \`accent\`.
- \`disabled\`: заливка й межа \`line\`, підпис \`ink-muted\`.

### Токени
\`ink\`, \`ink-muted\`, \`canvas\`, \`surface\`, \`line\`, \`accent\`, \`rounded-control\`, \`text-body\`, \`text-lead\`, \`font-body\`, відступи 8 і 16 px.

### Коли використовувати
Одна \`primary\` на екран для головної дії, поруч за потреби \`secondary\`. Кнопка виконує дію на сторінці. Для переходу на іншу сторінку компонента-посилання поки немає. Кругла кнопка зі стрілкою й кнопка з іконкою на макеті — окремі компоненти, цей їх не покриває.

### Як брати в код
\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="secondary" size="lg" onClick={...}>Про мене</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    size: "md",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
