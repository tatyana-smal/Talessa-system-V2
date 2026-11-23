import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowLink } from "./ArrowLink";
import designImg from "@/assets/img/design.png";
import blogImg from "@/assets/img/blog.png";

interface Feature {
  id: string;
  title: string;
  text: string;
  image: StaticImageData;
  tint?: boolean;
}

const features: Feature[] = [
  {
    id: "design",
    title: "Дизайн",
    text: "Розробка, дизайн, програмування цифрових продуктів та підтримка їх на різних етапах",
    image: designImg,
  },
  {
    id: "blog",
    title: "Блог",
    text: "Про творчість, в’язання, навчання, дизайн, рослини і життя у балансі (наскільки це можливо)))",
    image: blogImg,
    tint: true,
  },
];

export function Features() {
  return (
    <section className="mx-auto mt-8 grid max-w-page gap-8 px-8 lg:mt-section lg:grid-cols-2">
      {features.map((feature) => (
        <article
          key={feature.id}
          id={feature.id}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <div className="relative aspect-picture w-full shrink-0 overflow-hidden rounded-card sm:w-2/5">
            <Image
              src={feature.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
            {feature.tint && <div className="absolute inset-0 bg-canvas/30" />}
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-heading text-heading">{feature.title}</h2>
            <p className="font-body text-lead">{feature.text}</p>
            <ArrowLink href={`/#${feature.id}`} label={feature.title} />
          </div>
        </article>
      ))}
    </section>
  );
}
