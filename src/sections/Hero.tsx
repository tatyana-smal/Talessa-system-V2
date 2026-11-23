import { Fragment } from "react";
import { getImageProps } from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import heroDesktop from "@/assets/img/hero-full.webp";
import heroTablet from "@/assets/img/hero-full-tablet.webp";
import heroMobile from "@/assets/img/hero-full-mobile.webp";
import { home } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

/** Hero зі старого проєкту: одна картина на розмір екрана, текст поверх, розміри в cqw. */
export function Hero({ lang }: { lang: Lang }) {
  const t = home[lang];
  const common = { alt: "", sizes: "100vw" };
  const desktop = getImageProps({ ...common, src: heroDesktop }).props.srcSet;
  const tablet = getImageProps({ ...common, src: heroTablet }).props.srcSet;
  const { srcSet: mobile, ...img } = getImageProps({
    ...common,
    src: heroMobile,
    priority: true,
  }).props;

  return (
    <section className="hero" id="top">
      <picture>
        <source media="(max-width: 600px)" srcSet={mobile} />
        <source media="(max-width: 1100px)" srcSet={tablet} />
        <img {...img} srcSet={desktop} alt="" className="hero__full" />
      </picture>
      <div className="hero__content">
        <h1>
          {t.heroTitle.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p>{t.heroText}</p>
        <div className="hero__actions">
          <ButtonLink href={path(lang, "#apps")} size="lg" className="btn">
            <span className="only-desktop">{t.exploreApps}</span>
            <span className="only-compact">{t.exploreAppsShort}</span>
          </ButtonLink>
          <ButtonLink
            href={path(lang, "#about")}
            variant="secondary"
            size="lg"
            className="btn btn--outline"
          >
            {t.about}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
