import Image from "next/image";
import Link from "next/link";
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
  href: string;
  image: StaticImageData;
  art?: StaticImageData;
  artClass?: string;
  imageClass?: string;
}

const apps: App[] = [
  {
    key: "yarn",
    href: "/my-yarn",
    image: appYarn,
    art: cardPhones,
    artClass: "bottom-1/5 right-4 w-1/3",
  },
  {
    key: "health",
    href: "/health",
    image: appHealth,
    art: cardDevices,
    artClass: "bottom-2 right-2 w-1/2",
    imageClass: "object-bottom",
  },
  { key: "plants", href: "#apps", image: appPlants },
];

export function Apps({ lang }: { lang: Lang }) {
  const t = home[lang];
  const badge = lang === "uk" ? badgeUk : badgeEn;

  return (
    <section
      id="apps"
      aria-label={t.myApps}
      className="mx-auto mt-8 grid max-w-page grid-cols-1 gap-x-3 gap-y-3 px-2 md:grid-cols-3 md:gap-y-8 lg:mt-section lg:grid-cols-4 lg:pr-0"
    >
      {/* Мобільна й планшет: заголовок над картками. Десктоп: картка-плашка зі стрілкою. */}
      <h2 className="col-span-full font-heading text-heading lg:hidden">{t.myApps}</h2>
      <div className="flex aspect-cover flex-col justify-between rounded-card bg-surface p-6 max-lg:hidden">
        <h2 className="font-heading text-heading">{t.myApps}</h2>
        <ArrowLink href={path(lang, "#apps")} label={t.myApps} className="self-center" />
      </div>
      {apps.map((app) => (
        <Link
          key={app.key}
          href={path(lang, app.href)}
          className="relative block aspect-cover-mobile border border-ink-muted hover:border-ink hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:aspect-cover-tablet lg:aspect-cover"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={app.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
              className={`object-cover ${app.imageClass ?? ""}`}
            />
            <div className="absolute inset-0 bg-canvas/70" />
          </div>
          <h3 className="relative p-4 font-heading text-heading">{t.apps[app.key]}</h3>
          {app.art && (
            <Image
              src={app.art}
              alt=""
              className={`absolute h-auto ${app.artClass ?? ""}`}
            />
          )}
          {/* Бейдж: на мобільній усередині картки, від 768 px над карткою кінчиком до неї */}
          <Image
            src={badge}
            alt={t.inDevelopment}
            className="absolute h-auto w-1/2 max-md:left-1/4 max-md:top-8 md:bottom-full md:right-4 md:w-2/3 md:translate-y-1/3 lg:right-8 lg:w-1/2"
          />
        </Link>
      ))}
    </section>
  );
}
