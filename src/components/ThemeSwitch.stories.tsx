import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeSwitch } from "./ThemeSwitch";

const meta = {
  title: "Components/ThemeSwitch",
  component: ThemeSwitch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Перемикач світлої й темної теми у шапці: контурна доріжка, темна ручка їздить між сонцем і місяцем.

### Параметри
- \`label\`: підпис для екранних читачів і підказка при наведенні, наприклад «Світла / темна тема».
- \`disabled\`: вимкнений перемикач, \`false\` за замовчуванням.
- \`loading\`: стан «у процесі», \`false\` за замовчуванням.

### Варіанти і стани
- Світла тема: ручка зліва, іконка сонця.
- Темна тема: ручка справа, іконка місяця.
- **Focus** і наведення: ручка світлішає (\`bg-fill-primary-focus\`); з клавіатури додатково контур 2 px \`ink\`.
- **Pressed**: вигляд як default (так у макеті Figma).
- **Processed** (\`loading\`): спінер замість іконки, \`aria-busy\`.
- **Disabled** (\`disabled\`): увесь перемикач із прозорістю 50%.
- Перемикач має \`role="switch"\` і \`aria-checked\`.
- Поки темного дизайну немає, перемикач лише ставить \`data-theme="light|dark"\` на \`<html>\` і запам'ятовує вибір; кольори сторінки не змінюються.
- Анімація вимикається, якщо в системі ввімкнено «зменшити рух».

### Токени
\`canvas\`, \`line\`, \`ink\`, \`shadow-button-primary\`, \`bg-fill-primary-focus\`.

### Коли використовувати
Один раз у шапці поряд із перемикачем мови, коли готові темні токени кольорів. Раніше він нічого видимого не змінює.

### Як брати в код
\`\`\`tsx
import { ThemeSwitch } from "@/components/ThemeSwitch";

<ThemeSwitch label="Світла / темна тема" />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: { label: "Світла / темна тема", disabled: false, loading: false },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
