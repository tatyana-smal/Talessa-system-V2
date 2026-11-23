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
    <>
      <Header lang={lang} />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-4 pt-8 sm:px-6">
        <h1 className="font-heading text-display">{t.title}</h1>
        <p className="mt-6 font-body text-body">{t.intro}</p>
        <ContactForm lang={lang} />
        <p className="mt-8 font-body text-body text-ink-muted">
          {t.or}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-ink underline underline-offset-4 hover:decoration-2"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </main>
      <Footer lang={lang} />
    </>
  );
}
