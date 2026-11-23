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

  // Одна картина на розмір екрана (фон + фото + плавний перехід під текст), текст лежить поверх неї.
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
      className="relative mt-2 aspect-hero-mobile md:aspect-hero-tablet lg:aspect-hero-desktop"
    >
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <img
          {...img}
          srcSet={mobile}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
      </picture>
      {/* Відступи тексту за макетами Figma: мобільна 16, планшет 32, десктоп 109 і 204 px */}
      <div className="relative flex flex-col items-start pb-2 pl-4 pr-8 pt-3 md:pl-8 md:pt-8 lg:pl-0 lg:pr-0 lg:pt-16">
        <h1 className="font-heading text-display md:w-1/2 lg:ml-hero-title lg:w-1/2">
          {t.heroTitle.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p className="mt-2 font-body text-lead md:w-1/2 lg:ml-hero-text lg:mt-8 lg:w-5/14">
          {t.heroText}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3 lg:ml-hero-text lg:mt-4 lg:gap-8">
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
