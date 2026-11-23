import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonLink } from "./ButtonLink";

const meta = {
  title: "Components/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Посилання у вигляді кнопки: «Переглянути застосунки», «Написати мені». Вигляд і стани такі самі, як у кнопки (\`Components/Button\`), але елемент — посилання, тому веде на іншу сторінку чи розділ.

### Параметри
- \`href\`: куди веде посилання (обов'язковий).
- \`variant\`: \`primary\` (за замовчуванням) або \`secondary\`.
- \`size\`: \`md\` (за замовчуванням) або \`lg\`.
- \`children\`: підпис або підпис з іконкою. Для кнопки лише з іконкою додай \`aria-label\`.

### Варіанти і стани
Ті самі, що у \`Button\`: \`primary\` на \`accent\` (підпис \`canvas\`, 6,02:1), \`secondary\` з межею \`ink-muted\`; hover змінює заливку (\`ink\` або \`surface\`); фокус з клавіатури — контур 2 px \`ink\`. Вимкненого стану в посилання немає: недоступна дія має бути \`Button\` з \`disabled\`.

### Токени
\`accent\`, \`canvas\`, \`ink\`, \`ink-muted\`, \`surface\`, \`rounded-control\`, \`text-body\`, \`text-lead\`, \`font-body\`, відступи 8, 16, 24 px.

### Коли використовувати
Коли дія — це перехід: на сторінку застосунку, до розділу, на форму. Коли дія відбувається на цій сторінці (надіслати, зберегти), бери \`Button\`.

### Як брати в код
\`\`\`tsx
import { ButtonLink } from "@/components/ButtonLink";

<ButtonLink href="/#apps" size="lg">Переглянути застосунки</ButtonLink>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
  },
  args: {
    href: "/#apps",
    children: "Переглянути застосунки",
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
