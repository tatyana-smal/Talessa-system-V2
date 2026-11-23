import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import "../../styles/legacy.css";
import { fontVariables } from "../fonts";
import { hasLocale, locales } from "@/i18n/config";

const description = {
  uk: "Талесса (Talessa): застосунки, що турбуються про те, що для нас важливе.",
  en: "Talessa: apps that care about what matters to us.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: { default: "Талесса — Talessa", template: "%s | Talessa" },
    description: description[lang],
    alternates: { languages: { uk: "/uk", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
