import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/sections/ContactForm";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { CONTACT_EMAIL } from "@/config";
import { hasLocale } from "@/i18n/config";
import { contact } from "@/i18n/contactStrings";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: contact[lang].title } : {};
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = contact[lang];

  return (
    <div className="legal">
      <Header lang={lang} />
      <main className="legal__main">
        <h1>{t.title}</h1>
        <p className="legal__intro">{t.intro}</p>
        <ContactForm lang={lang} />
        <p className="contact__direct">
          {t.or} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
