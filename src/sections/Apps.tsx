import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowLink } from "./ArrowLink";
import appYarn from "@/assets/img/app-yarn.png";
import appHealth from "@/assets/img/app-health.png";
import appPlants from "@/assets/img/app-plants.png";
import cardPhones from "@/assets/img/card-phones.png";
import cardDevices from "@/assets/img/card-devices.png";
import badge from "@/assets/img/badge.png";

interface App {
  title: string;
  href: string;
  image: StaticImageData;
  art?: StaticImageData;
  artClass?: string;
  imageClass?: string;
}

const apps: App[] = [
  {
    title: "Моя колекція пряжі",
    href: "/my-yarn",
    image: appYarn,
    art: cardPhones,
    artClass: "w-1/3",
  },
  {
    title: "Підтримка здоров’я батьків немовляти",
    href: "/health",
    image: appHealth,
    art: cardDevices,
    artClass: "w-1/2",
    imageClass: "object-bottom",
  },
  { title: "Мій календар рослин", href: "/#apps", image: appPlants },
];

export function Apps() {
  return (
    <section
      id="apps"
      aria-labelledby="apps-title"
      className="mx-auto mt-8 grid max-w-page gap-x-3 gap-y-8 px-8 sm:grid-cols-2 lg:mt-section lg:grid-cols-4"
    >
      <div className="flex aspect-cover flex-col justify-between rounded-card bg-surface p-6">
        <h2 id="apps-title" className="font-heading text-heading">
          Мої застосунки
        </h2>
        <ArrowLink href="/#apps" label="Мої застосунки" />
      </div>
      {apps.map((app) => (
        <a
          key={app.title}
          href={app.href}
          className="relative block aspect-cover border border-ink-muted hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={app.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover ${app.imageClass ?? ""}`}
            />
            <div className="absolute inset-0 bg-canvas/70" />
          </div>
          <h3 className="relative p-4 font-heading text-heading">{app.title}</h3>
          {app.art && (
            <Image
              src={app.art}
              alt=""
              className={`absolute bottom-2 right-2 h-auto ${app.artClass ?? ""}`}
            />
          )}
          <Image
            src={badge}
            alt="У розробці"
            className="absolute -top-8 right-0 h-auto w-1/2"
          />
        </a>
      ))}
    </section>
  );
}
