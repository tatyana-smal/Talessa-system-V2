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
- \`variant\`: \`primary\` (за замовчуванням), \`secondary\`, \`menu\` (пункт меню), \`arrow\` (96×48, десктоп і планшет) або \`arrowMobile\` (80×24, мобільна). У стрілок додай \`aria-label\`, \`children\` не потрібні.
- \`size\`: \`md\` (за замовчуванням) або \`lg\`. Для стрілок не діє.
- \`disabled\`: недоступне посилання (\`aria-disabled\`), перехід не відбувається, лишається у фокусі.
- \`loading\`: стан «у процесі» (спінер, \`aria-busy\`), перехід не відбувається.
- \`children\`: підпис або підпис з іконкою. Для кнопки лише з іконкою додай \`aria-label\`.

### Варіанти і стани
Ті самі, що у \`Button\` (макет Figma «UI Kit»): Default, Focus (і наведення), Pressed, Processed (\`loading\`), Disabled (\`disabled\`). Деталі й токени дивись в історії \`Components/Button\`.

### Токени
\`canvas\`, \`ink\`, \`tint\`, \`rounded-control\`, \`shadow-button-primary\`, \`shadow-button-secondary\`, \`shadow-button-pressed\`, \`shadow-button-arrow-small\`, заливки \`bg-fill-*\`, \`text-body\`, \`text-lead\`, \`font-body\`, відступи 8 і 16 px.

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
    variant: { control: "select", options: ["primary", "secondary", "menu", "arrow", "arrowMobile"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    href: "/#apps",
    children: "Переглянути застосунки",
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
