import type { ComponentProps } from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import "../src/app/globals.css";
import { fontVariables } from "../src/app/fonts";

// Змінні шрифтів (--font-lora, --font-inter) живуть на класах next/font,
// тому обгортаємо і історії, і сторінки docs.
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: (props: ComponentProps<typeof DocsContainer>) => (
        <div className={fontVariables}>
          <DocsContainer {...props} />
        </div>
      ),
    },
  },
  decorators: [
    (Story) => (
      <div className={`${fontVariables} font-body`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
