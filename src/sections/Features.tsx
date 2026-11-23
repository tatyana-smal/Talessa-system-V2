import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import designImg from "@/assets/img/design.png";
import blogImg from "@/assets/img/blog.png";
import { home } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

/** Блоки «Дизайн» і «Блог» зі старого проєкту. */
export function Features({ lang }: { lang: Lang }) {
  const t = home[lang];

  return (
    <section className="features">
      <article className="feature" id="design">
        <Image src={designImg} alt="" className="feature__img" sizes="(min-width: 1100px) 336px, 50vw" />
        <div className="feature__text">
          <h2>{t.designTitle}</h2>
          <p>{t.designText}</p>
          <div className="feature__arrow">
            <ArrowLink href={path(lang, "#design")} label={t.designTitle} />
          </div>
        </div>
      </article>
      <article className="feature feature--blog" id="blog">
        <div className="feature__media feature__media--tint">
          <Image src={blogImg} alt="" className="feature__img" sizes="(min-width: 1100px) 336px, 50vw" />
        </div>
        <div className="feature__text">
          <h2>{t.blogTitle}</h2>
          <p>{t.blogText}</p>
          <div className="feature__arrow">
            <ArrowLink href={path(lang, "#blog")} label={t.blogTitle} />
          </div>
        </div>
      </article>
    </section>
  );
}
