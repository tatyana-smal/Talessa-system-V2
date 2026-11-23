import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talessa",
  description: "Talessa — застосунки, що турбуються про те, що для нас важливе.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
