import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowLink } from "./ArrowLink";
import designImg from "@/assets/img/design.png";
import blogImg from "@/assets/img/blog.png";
import { home } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

interface Feature {
  id: "design" | "blog";
  image: StaticImageData;
  tint?: boolean;
}

const features: Feature[] = [
  { id: "design", image: designImg },
  { id: "blog", image: blogImg, tint: true },
];

export function Features({ lang }: { lang: Lang }) {
  const t = home[lang];
  const text = {
    design: { title: t.designTitle, text: t.designText },
    blog: { title: t.blogTitle, text: t.blogText },
  };

  return (
    <section className="mx-auto mt-8 grid max-w-page gap-2 px-2 md:grid-cols-2 lg:mt-section lg:px-0">
      {features.map((feature) => (
        <article
          key={feature.id}
          id={feature.id}
          className="flex items-center gap-2 border border-ink-muted p-2 md:min-h-84"
        >
          <div className="relative aspect-picture-tall w-3/7 shrink-0 overflow-hidden rounded-card lg:aspect-picture lg:w-1/2">
            <Image
              src={feature.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 20vw"
              className="object-cover"
            />
            {feature.tint && <div className="absolute inset-0 bg-canvas/30" />}
          </div>
          <div className="flex flex-1 flex-col items-center gap-3 lg:gap-4">
            <h2 className="font-heading text-heading">{text[feature.id].title}</h2>
            <p className="self-stretch px-2 font-body text-body lg:text-lead">
              {text[feature.id].text}
            </p>
            <ArrowLink
              href={path(lang, `#${feature.id}`)}
              label={text[feature.id].title}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
