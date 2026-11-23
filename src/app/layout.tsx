import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
  title: "Talessa",
  description: "Talessa — застосунки, що турбуються про те, що для нас важливе.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
