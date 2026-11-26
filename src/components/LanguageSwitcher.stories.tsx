import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LanguageSwitcher } from "./LanguageSwitcher";

const meta = {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
  tags: ["autodocs"],
  parameters: {
    // Адреса «поточної сторінки» для історії: за нею перемикач будує посилання на іншу мову
    nextjs: { navigation: { pathname: "/uk/privacy" } },
    docs: {
      description: {
        component: `
Перемикач мови сайту (UA / EN) у шапці. Пігулка показує тільки поточну мову; натискання розгортає її й показує всі мови.

### Параметри
- \`lang\`: поточна мова сторінки, \`uk\` або \`en\`.
- \`label\`: підпис групи для екранних читачів, наприклад «Мова».
- \`disabled\`: вимкнений перемикач, \`false\` за замовчуванням.
- \`loading\`: стан «у процесі», \`false\` за замовчуванням.

### Варіанти і стани
- **Default** (згорнутий): видно лише активну мову (заливка \`ink\`, підпис \`canvas\`, тінь \`shadow-button-primary\`).
- **Focus** і наведення: активна мова світлішає (\`bg-fill-primary-focus\`).
- **Pressed**: уся пігулка отримує тінь \`shadow-button-pressed\`.
- **Processed** (\`loading\`): спінер замість назви мови, \`aria-busy\`.
- **Disabled** (\`disabled\`): активна мова з прозорістю 50%, перемикач не розгортається.
- Розгорнутий: поруч з активною видно інші мови; інша мова виглядає як пункт меню (наведення: \`bg-fill-menu-focus\`).
- Вибір іншої мови відкриває ту саму сторінку цією мовою (\`/uk/privacy\` → \`/en/privacy\`) і запам'ятовує вибір у cookie. Тоді вона розгорнеться вже в новій мові. У Storybook перехід не відбувається, бо сторінок немає.
- Закривається клавішею Escape, натисканням поза пігулкою або повторним натисканням на активну мову.
- Focus з клавіатури: контур 2 px \`ink\`. Приховані мови не потрапляють у Tab.
- Анімація вимикається, якщо в системі ввімкнено «зменшити рух».

### Токени
\`ink\`, \`canvas\`, \`line\`, \`tint\`, \`shadow-button-primary\`, \`shadow-button-pressed\`, \`bg-fill-primary-focus\`, \`text-body\`, \`font-body\`, відступи 4 (пігулка), 12 px (підпис).

### Коли використовувати
Один раз у шапці сайту (у вузькому меню разом з іншими пунктами). Для підвалу окремий невеликий перемикач.

### Як брати в код
\`\`\`tsx
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

<LanguageSwitcher lang={lang} label="Мова" />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    lang: { control: "select", options: ["uk", "en"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: { lang: "uk", label: "Мова", disabled: false, loading: false },
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
