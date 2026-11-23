import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/sections/LegalPage";
import { hasLocale } from "@/i18n/config";
import { support } from "@/i18n/legalStrings";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/support">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: support[lang].title } : {};
}

export default async function SupportPage({ params }: PageProps<"/[lang]/support">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage lang={lang} doc={support[lang]} />;
}
