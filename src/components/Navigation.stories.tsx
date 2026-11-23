import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { label: "Застосунки", href: "/apps" },
  { label: "Дизайн", href: "/design" },
  { label: "Блог", href: "/blog" },
  { label: "Про мене", href: "/about" },
];

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Меню сайту: «Застосунки», «Дизайн», «Блог», «Про мене». Кнопку «Написати мені» і перемикачі мови й теми передають окремо (\`action\` і \`bar\`).

### Параметри
- \`items\`: пункти меню, кожен має \`label\` і \`href\`.
- \`activeHref\`: \`href\` активного пункту; без нього активного пункту немає.
- \`label\`: підпис навігації для екранних читачів, за замовчуванням «Головне меню».
- \`menuLabel\`, \`closeLabel\`: підписи іконки-бургера для екранних читачів («Меню» / «Закрити»), для іншої мови.
- \`bar\`: елементи, які видно завжди, також на вузькому екрані поруч із бургером (перемикач мови, перемикач теми).
- \`action\`: головна дія («Написати мені»). На широкому екрані стоїть у рядок після \`bar\`, на вузькому лежить усередині відкритого меню.

### Варіанти і стани
- Широкий екран (від 1024 px): пункти в рядок, \`text-lead\`.
- Вузький екран (до 1024 px): меню згортається в іконку-бургер 24 px (під час відкриття вона стає хрестиком). Відкрите меню лежить поверх контенту на заливці \`surface\` і не зсуває сторінку вниз. Закривається клавішею Escape (фокус повертається на кнопку), повторним натисканням на кнопку або вибором пункту.
- Пункт default: текст \`ink\`.
- hover: підкреслення \`ink-muted\`.
- focus з клавіатури: контур 2 px \`ink\` із відступом (12,69:1 на \`canvas\`, 10,77:1 на \`surface\`).
- активний пункт: підкреслення \`accent\`, \`aria-current="page"\`. Активність видно за підкресленням, а не лише за кольором.

### Токени
\`ink\`, \`ink-muted\`, \`accent\`, \`surface\`, \`rounded-control\`, \`text-body\`, \`text-lead\`, \`font-body\`, відступи 8, 12, 16 і 24 px. Межа між вузьким і широким екраном — стандартна точка \`lg\` (1024 px).

### Коли використовувати
Одне головне меню в шапці кожної сторінки. Для другорядних посилань (підвал, політика) потрібні інші списки.

### Як брати в код
\`\`\`tsx
import { Navigation } from "@/components/Navigation";

<Navigation
  items={[{ label: "Блог", href: "/blog" }, { label: "Про мене", href: "/about" }]}
  activeHref="/blog"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    activeHref: {
      control: "select",
      options: ["", ...items.map((item) => item.href)],
      description: "Активний пункт (порожньо — жодного)",
    },
  },
  args: {
    items,
    activeHref: "/apps",
  },
  // Під меню стоїть текст, щоб було видно: відкрите меню лягає поверх, а не штовхає його вниз.
  render: (args) => (
    <div>
      <div className="flex justify-end">
        <Navigation {...args} />
      </div>
      <p className="mt-6 text-body text-ink">
        Контент сторінки. Відкрите меню на вузькому екрані лягає поверх цього тексту й не
        зсуває його вниз.
      </p>
    </div>
  ),
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
