import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Текстове поле з підписом: імʼя, email, тема в формі «Написати мені». Підпис завжди над полем. Кути — \`rounded-control\`.

### Параметри
- \`label\`: підпис над полем (обов'язковий).
- \`defaultValue\` / \`value\`: значення поля. З значенням поле в стані «заповнене».
- \`error\`: стан помилки, \`false\` за замовчуванням.
- \`errorText\`: текст помилки під полем. Показується з іконкою, коли \`error\` увімкнено.
- \`disabled\`: вимкнене поле, \`false\` за замовчуванням.
- \`multiline\`: багаторядкове поле для довгого тексту (\`rows\` — висота в рядках, за замовчуванням 7).
- \`options\`: список \`{ value, label }\`; тоді поле стає випадним списком.
- \`type\` (за замовчуванням \`text\`), \`name\`, \`placeholder\`, \`onChange\` та інші атрибути \`<input>\` передаються далі.

### Варіанти і стани
- default (зі старого проєкту): межа 1 px \`ink-muted\` (6,21:1 на \`canvas\`), заливка \`canvas\`, відступ усередині 16 px, підпис і текст \`ink\`, підказка в полі \`ink-muted\`.
- hover: межа \`ink\`.
- focus з клавіатури чи мишею: контур 2 px \`ink\` із відступом (12,69:1 на \`canvas\`).
- заповнене: текст \`ink\`, межа та сама, що в default.
- помилка: межа \`danger\` (6,60:1), під полем іконка й текст \`danger\`. Поле має \`aria-invalid\`, текст помилки зв'язаний із полем через \`aria-describedby\`, тому екранний читач прочитає його разом із полем.
- disabled: межа \`line\`, текст \`ink-muted\`, курсор \`not-allowed\`. Вимкнене поле не отримує фокус.

### Токени
\`canvas\`, \`ink\`, \`ink-muted\`, \`line\`, \`danger\`, \`rounded-control\`, \`text-body\`, \`text-caption\` (текст помилки), \`font-body\`, відступи 8, 12 і 16 px.

### Коли використовувати
Для короткого однорядкового тексту: імʼя, email, тема. Для довгого тексту (повідомлення) потрібне окреме багаторядкове поле, його ще немає. Помилку показуй, коли користувач уже ввів некоректне значення або спробував надіслати форму, і пиши, що виправити, а не лише «помилка».

### Як брати в код
\`\`\`tsx
import { FormField } from "@/components/FormField";

<FormField label="Email" name="email" type="email" placeholder="name@example.com" />

<FormField label="Email" error errorText="Вкажіть email у форматі name@example.com" defaultValue="name@" />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    defaultValue: { control: "text" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    disabled: { control: "boolean" },
    multiline: { control: "boolean" },
  },
  args: {
    multiline: false,
    label: "Імʼя",
    placeholder: "Як до вас звертатись",
    defaultValue: "",
    error: false,
    errorText: "Вкажіть імʼя, щоб ми знали, як до вас звертатись",
    disabled: false,
  },
  // Зміна defaultValue у Controls сама поле не оновлює: key перемальовує поле.
  render: (args) => <FormField key={String(args.defaultValue)} {...args} />,
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
