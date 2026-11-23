import { Footer } from "./Footer";
import { Header } from "./Header";
import { Rich } from "@/components/Rich";
import { LEGAL_UPDATED } from "@/config";
import type { LegalDoc } from "@/i18n/legalStrings";
import type { Lang } from "@/i18n/config";

/** Спільна розкладка сторінок «Політика конфіденційності» й «Підтримка» (старий проєкт). */
export function LegalPage({
  lang,
  doc,
  toc = false,
}: {
  lang: Lang;
  doc: LegalDoc;
  toc?: boolean;
}) {
  return (
    <div className="legal">
      <Header lang={lang} />
      <main className="legal__main">
        <h1>{doc.title}</h1>
        <p className="legal__updated">
          {doc.updatedLabel}: {LEGAL_UPDATED[lang]}
        </p>
        <p className="legal__intro">
          <Rich text={doc.intro} lang={lang} />
        </p>

        {toc && doc.tocLabel && (
          <nav className="legal__toc" aria-label={doc.tocLabel}>
            <h2>{doc.tocLabel}</h2>
            <ol>
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {doc.sections.map((section) => (
          <section key={section.id} id={section.id} className="legal__section">
            <h2>{section.title}</h2>
            {section.blocks.map((block, i) =>
              "p" in block ? (
                <p key={i}>
                  <Rich text={block.p} lang={lang} />
                </p>
              ) : (
                <ul key={i}>
                  {block.ul.map((item) => (
                    <li key={item}>
                      <Rich text={item} lang={lang} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
