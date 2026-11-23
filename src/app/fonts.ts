import { Inter, Lora } from "next/font/google";

// Заголовки: Lora Medium. Текст: Inter Regular (жирний 700 лише для <b> усередині тексту).
// Кирилиця потрібна, інакше next/font бере лише латиницю.
export const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  weight: "500",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const fontVariables = `${lora.variable} ${inter.variable}`;
