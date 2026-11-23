import Image, { getImageProps } from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import { ArrowLink } from "./ArrowLink";
import appYarn from "@/assets/img/app-yarn.png";
import appHealth from "@/assets/img/app-health.png";
import appPlants from "@/assets/img/app-plants.png";
import cardPhones from "@/assets/img/card-phones.png";
import cardDevices from "@/assets/img/card-devices.png";
import badgeUk from "@/assets/img/badge.png";
import badgeEn from "@/assets/img/badge-en.webp";
import { home } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

interface App {
  key: "yarn" | "health" | "plants";
  image: StaticImageData;
  art: StaticImageData | null;
  href: string;
}

const apps: App[] = [
  { key: "yarn", image: appYarn, art: cardPhones, href: "/my-yarn" },
  { key: "health", image: appHealth, art: cardDevices, href: "/health" },
  { key: "plants", image: appPlants, art: null, href: "#apps" },
];

/** Блок «Мої застосунки» зі старого проєкту: картка-заголовок і три картки застосунків. */
export function Apps({ lang }: { lang: Lang }) {
  const t = home[lang];
  const badge = lang === "uk" ? badgeUk : badgeEn;

  return (
    <div className="apps-block">
      <h2 className="apps__heading">{t.myApps}</h2>
      <section className="apps" id="apps">
        <div className="card card--title">
          <h2>{t.myApps}</h2>
          <ArrowLink href={path(lang, "#apps")} label={t.myApps} />
        </div>
        {apps.map((app) => {
          // Фон картки: оптимізована картинка (оригінали важать по 2 МБ)
          const bg = getImageProps({ alt: "", src: app.image, width: 900 }).props.src;
          return (
            <Link
              key={app.key}
              href={path(lang, app.href)}
              className={`card card--app card--${app.key}`}
              style={{ "--img": `url(${bg})` } as CSSProperties}
            >
              <Image
                src={badge}
                alt={t.inDevelopment}
                className={`card__badge card__badge--${lang}`}
              />
              <h2>{t.apps[app.key]}</h2>
              {app.art && <Image src={app.art} alt="" className="card__art" />}
            </Link>
          );
        })}
      </section>
    </div>
  );
}
