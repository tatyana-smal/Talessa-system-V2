import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckboxField } from "./CheckboxField";

const meta = {
  title: "Components/CheckboxField",
  component: CheckboxField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Прапорець із текстом, наприклад згода на обробку даних у формі «Написати мені».

### Параметри
- \`children\`: текст поруч із прапорцем (може містити посилання).
- \`checked\` / \`defaultChecked\`: чи прапорець увімкнений.
- \`disabled\`: вимкнений прапорець, \`false\` за замовчуванням.
- \`name\`, \`required\`, \`onChange\` та інші атрибути \`<input>\` передаються далі.

### Варіанти і стани
- Увімкнений прапорець має колір \`accent\`, розмір 20 px; текст \`ink\` (\`text-caption\`).
- Focus з клавіатури: контур 2 px \`ink\`.
- \`disabled\`: курсор \`not-allowed\`.

### Токени
\`accent\`, \`ink\`, \`text-caption\`, \`font-body\`, відступ 12 px.

### Коли використовувати
Для явної згоди чи вибору «так/ні» у формі. Для вибору одного варіанта зі списку потрібне інше поле.

### Як брати в код
\`\`\`tsx
import { CheckboxField } from "@/components/CheckboxField";

<CheckboxField name="consent">Я погоджуюсь на обробку даних</CheckboxField>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Я погоджуюсь, що моє імʼя, email і повідомлення буде оброблено, щоб відповісти мені",
    disabled: false,
    defaultChecked: false,
  },
  // Зміна defaultChecked у Controls сама прапорець не оновлює: key перемальовує його.
  render: (args) => <CheckboxField key={String(args.defaultChecked)} {...args} />,
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
