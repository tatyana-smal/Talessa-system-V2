import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/sections/LegalPage";
import { hasLocale } from "@/i18n/config";
import { privacy } from "@/i18n/legalStrings";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: privacy[lang].title } : {};
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage lang={lang} doc={privacy[lang]} toc />;
}
