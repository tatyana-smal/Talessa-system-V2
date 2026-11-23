import { getImageProps } from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import heroDesktop from "@/assets/img/hero-full.webp";
import heroTablet from "@/assets/img/hero-full-tablet.webp";
import heroMobile from "@/assets/img/hero-full-mobile.webp";

export function Hero() {
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
          Застосунки,
          <br />
          що турбуються про те, що для нас важливе
        </h1>
        <p className="font-body text-lead lg:w-3/5">
          Люблю перетворювати ідеї на щось корисне і цікаве: створюю власні застосунки,
          проєктую інтерфейси та ділюся тим, чим живу, що мене захоплює і надихає
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink href="/#apps" size="lg">
            Переглянути застосунки
          </ButtonLink>
          <ButtonLink href="/#about" variant="secondary" size="lg">
            Про мене
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
