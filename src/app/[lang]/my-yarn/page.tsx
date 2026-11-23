import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CaseImage, Lines, Phone } from "@/sections/CasePieces";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Rich } from "@/components/Rich";
import { hasLocale } from "@/i18n/config";
import { yarn } from "@/i18n/yarnStrings";
import titleBg from "@/assets/img/yarn/title-bg.png";
import titleBgEn from "@/assets/img/yarn/title-bg-en.webp";
import endBg from "@/assets/img/yarn/end-bg.png";
import screen1 from "@/assets/img/yarn/screen1.png";
import screen2 from "@/assets/img/yarn/screen2.png";
import screen3 from "@/assets/img/yarn/screen3.png";
import onboarding from "@/assets/img/yarn/onboarding.webp";
import registration from "@/assets/img/yarn/registration.webp";
import detail from "@/assets/img/yarn/detail.webp";
import platforms from "@/assets/img/yarn/platforms.webp";
import night from "@/assets/img/yarn/night.webp";
import nightEn from "@/assets/img/yarn/night-en.webp";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/my-yarn">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: yarn[lang].heroTitle.join(" ") } : {};
}

export default async function MyYarnPage({ params }: PageProps<"/[lang]/my-yarn">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = yarn[lang];

  return (
    <>
      <div className="yarn">
          <Header lang={lang} />
        <div className="yarn-wrap">
          <section className="yarn-hero">
            <Image
              className="yarn-hero__bg"
              src={lang === "uk" ? titleBg : titleBgEn}
              alt=""
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
            <div className="yarn-hero__veil" />
            <div className="yarn-hero__text">
              <h1>
                <Lines lines={t.heroTitle} />
              </h1>
              <p>{t.heroTagline}</p>
            </div>
            <Phone screen={screen1} style={{ left: "63.75%", top: "41.9%" }} />
            <Phone screen={screen2} style={{ left: "80.7%", top: "46%" }} />
            <Phone screen={screen3} style={{ left: "69.8%", top: "57%" }} />
          </section>

          <section className="yarn-section">
            <h2 className="yarn-title">{t.aboutTitle}</h2>
            <p className="yarn-quote">{t.aboutQuote}</p>
            <p className="yarn-text">{t.aboutText}</p>
          </section>

          <section className="yarn-section">
            <h2 className="yarn-title">{t.featuresTitle}</h2>
            <div className="yarn-features">
              <div className="yarn-box">
                <h3 className="yarn-box__head">{t.doneHead}</h3>
                <ol className="yarn-list">
                  {t.done.map((item) => (
                    <li key={item}>
                      <Rich text={item} lang={lang} />
                    </li>
                  ))}
                </ol>
              </div>
              <div className="yarn-box yarn-box--plan">
                <h3 className="yarn-box__head">{t.planHead}</h3>
                <ol className="yarn-list">
                  {t.plan.map((item) => (
                    <li key={item}>
                      <Rich text={item} lang={lang} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <CaseImage src={onboarding} alt={t.alt.onboarding} />

          <section className="yarn-section">
            <h2 className="yarn-title">{t.registrationTitle}</h2>
            <p className="yarn-text">
              <Rich text={t.registrationText} lang={lang} />
            </p>
          </section>
          <CaseImage src={registration} alt={t.alt.registration} />

          <section className="yarn-section">
            <h2 className="yarn-title">{t.detailTitle}</h2>
            <p className="yarn-text">
              <Rich text={t.detailText} lang={lang} />
            </p>
          </section>
          <CaseImage src={detail} alt={t.alt.detail} />

          <section className="yarn-section">
            <h2 className="yarn-title">{t.platformsTitle}</h2>
            <p className="yarn-text">
              <Rich text={t.platformsText} lang={lang} />
            </p>
          </section>
          <CaseImage src={platforms} alt={t.alt.platforms} />

          <section className="yarn-section">
            <h2 className="yarn-title">{t.nightTitle}</h2>
            <p className="yarn-text">
              <Rich text={t.nightText} lang={lang} />
            </p>
          </section>
          <CaseImage src={lang === "uk" ? night : nightEn} alt={t.alt.night} />

          <section className="yarn-end">
            <Image className="yarn-end__bg" src={endBg} alt="" sizes="(min-width: 1280px) 1280px, 100vw" />
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
