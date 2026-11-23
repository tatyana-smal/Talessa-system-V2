import { Inter, Lora, Playfair } from "next/font/google";

// Заголовки: Lora Medium. Текст: Inter (Regular, Bold; Extra Bold і Bold Italic для сторінок кейсів).
// Кирилиця потрібна, інакше next/font бере лише латиницю.
export const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  weight: "500",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

// Playfair: великі заголовки сторінок застосунків (кейсів).
export const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  axes: ["opsz", "wdth"],
});

export const fontVariables = `${lora.variable} ${inter.variable} ${playfair.variable}`;
