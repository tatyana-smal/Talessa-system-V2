import { notFound } from "next/navigation";
import { Apps } from "@/sections/Apps";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { hasLocale } from "@/i18n/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Apps lang={lang} />
        <Features lang={lang} />
        <span id="about" />
      </main>
      <Footer lang={lang} />
    </>
  );
}
