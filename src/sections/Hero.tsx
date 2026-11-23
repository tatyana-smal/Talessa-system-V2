import { Fragment } from "react";
import { getImageProps } from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import heroDesktop from "@/assets/img/hero-full.webp";
import heroTablet from "@/assets/img/hero-full-tablet.webp";
import heroMobile from "@/assets/img/hero-full-mobile.webp";
import { home } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

export function Hero({ lang }: { lang: Lang }) {
  const t = home[lang];

  // Одна картина на розмір екрана (фон + фото + плавний перехід під текст).
  const common = { alt: "", sizes: "100vw" };
  const desktop = getImageProps({ ...common, src: heroDesktop }).props.srcSet;
  const tablet = getImageProps({ ...common, src: heroTablet }).props.srcSet;
  const { srcSet: mobile, ...img } = getImageProps({
    ...common,
    src: heroMobile,
    priority: true,
  }).props;

  return (
    <section
      id="top"
      className="relative flex flex-col md:block md:aspect-hero-tablet lg:aspect-hero-desktop"
    >
      {/* Вузький екран: текст зверху, картина під ним. Від 768 px текст лежить поверх картини. */}
      <div className="relative order-2 aspect-cover overflow-hidden md:absolute md:inset-0 md:order-none md:aspect-auto">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <img
            {...img}
            srcSet={mobile}
            alt=""
            className="absolute inset-0 size-full object-cover object-bottom md:object-center"
          />
        </picture>
      </div>
      <div className="relative order-1 mx-auto flex w-full max-w-page flex-col items-start gap-3 px-3 py-3 sm:px-8 sm:py-8 md:order-none lg:mx-0 lg:w-3/5">
        <h1 className="font-heading text-display lg:w-5/6">
          {t.heroTitle.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p className="font-body text-lead lg:w-3/5">{t.heroText}</p>
        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink href={path(lang, "#apps")} size="lg">
            <span className="max-lg:hidden">{t.exploreApps}</span>
            <span className="lg:hidden">{t.exploreAppsShort}</span>
          </ButtonLink>
          <ButtonLink href={path(lang, "#about")} variant="secondary" size="lg">
            {t.about}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
