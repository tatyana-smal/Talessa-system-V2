import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CaseImage, Lines } from "@/sections/CasePieces";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { hasLocale } from "@/i18n/config";
import { health } from "@/i18n/healthStrings";
import heroPhoto from "@/assets/img/app-health.png";
import hero from "@/assets/img/health/hero.webp";
import adaptive from "@/assets/img/health/adaptive.webp";
import data from "@/assets/img/health/data.webp";
import mobile from "@/assets/img/health/mobile.webp";
import errors from "@/assets/img/health/errors.webp";
import night from "@/assets/img/health/night.webp";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/health">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: health[lang].heroTitle.join(" ") } : {};
}

/** Сторінка застосунку «RISE»: підтримка здоров'я молодих батьків (українською й англійською). */
export default async function HealthPage({ params }: PageProps<"/[lang]/health">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = health[lang];

  return (
    <>
      <div className="yarn yarn--health">
          <Header lang={lang} />
        <div className="yarn-wrap">
          <section className="yarn-hero yarn-hero--health">
            <Image
              className="yarn-hero__bg"
              src={hero}
              alt={t.alt.hero}
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
            <div className="yarn-hero__veil" />
            <div className="yarn-hero__text yarn-hero__text--center">
              <h1>
                <Lines lines={t.heroTitle} />
              </h1>
            </div>
          </section>

          <section className="yarn-section yarn-section--intro">
            <h2 className="yarn-title">{t.aboutTitle}</h2>
            <p className="yarn-text yarn-text--indent">{t.aboutText}</p>
          </section>

          <section className="yarn-section yarn-section--after-intro">
            <p className="yarn-text">{t.solutionText}</p>
          </section>

          <section className="yarn-section">
            <h2 className="yarn-title">{t.adaptiveTitle}</h2>
            <p className="yarn-text">{t.adaptiveText}</p>
          </section>
          <CaseImage src={adaptive} alt={t.alt.adaptive} className="health-img" />

          <section className="yarn-section">
            <h2 className="yarn-title">{t.dataTitle}</h2>
            <p className="yarn-text">{t.dataText}</p>
          </section>
          <div className="health-band">
            <CaseImage src={data} alt={t.alt.data} className="health-img health-img--narrow" />
          </div>

          <section className="yarn-section">
            <h2 className="yarn-title">{t.mobileTitle}</h2>
          </section>
          <div className="health-band">
            <CaseImage src={mobile} alt={t.alt.mobile} className="health-img" />
          </div>

          <section className="yarn-section">
            <h2 className="yarn-title">{t.errorsTitle}</h2>
            <p className="yarn-text">{t.errorsText}</p>
          </section>
          <CaseImage src={errors} alt={t.alt.errors} className="health-img" />

          <section className="yarn-section">
            <h2 className="yarn-title">{t.nightTitle}</h2>
            <p className="yarn-text">{t.nightText}</p>
          </section>
          <CaseImage src={night} alt={t.alt.night} className="health-img" />

          <section className="yarn-end">
            <Image className="yarn-end__bg" src={heroPhoto} alt="" sizes="(min-width: 1280px) 1280px, 100vw" />
            <p>
              <Lines lines={t.endText} />
            </p>
          </section>
        </div>
        <Footer lang={lang} />
      </div>
    </>
  );
}
