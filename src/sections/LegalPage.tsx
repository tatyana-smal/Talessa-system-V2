import { Footer } from "./Footer";
import { Header } from "./Header";
import { Rich } from "@/components/Rich";
import { LEGAL_UPDATED } from "@/config";
import type { LegalDoc } from "@/i18n/legalStrings";
import type { Lang } from "@/i18n/config";

/** Спільна розкладка сторінок «Політика конфіденційності» й «Підтримка». */
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
    <>
      <Header lang={lang} />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-4 pt-8 sm:px-6">
        <h1 className="font-heading text-display">{doc.title}</h1>
        <p className="mt-2 font-body text-caption text-ink-muted">
          {doc.updatedLabel}: {LEGAL_UPDATED[lang]}
        </p>
        <p className="mt-6 font-body text-body">
          <Rich text={doc.intro} lang={lang} />
        </p>

        {toc && doc.tocLabel && (
          <nav
            aria-label={doc.tocLabel}
            className="mt-8 rounded-card bg-surface px-8 py-6"
          >
            <h2 className="mb-2 font-heading text-title">{doc.tocLabel}</h2>
            <ol className="flex list-decimal flex-col gap-2 pl-6 font-body text-body">
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-ink underline underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {doc.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-8 scroll-mt-6">
            <h2 className="mb-3 font-heading text-heading">{section.title}</h2>
            <div className="flex flex-col gap-3 font-body text-body">
              {section.blocks.map((block, i) =>
                "p" in block ? (
                  <p key={i}>
                    <Rich text={block.p} lang={lang} />
                  </p>
                ) : (
                  <ul key={i} className="flex list-disc flex-col gap-2 pl-6">
                    {block.ul.map((item) => (
                      <li key={item}>
                        <Rich text={item} lang={lang} />
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </main>
      <Footer lang={lang} />
    </>
  );
}
