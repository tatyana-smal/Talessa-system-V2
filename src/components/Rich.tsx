import { Fragment } from "react";
import Link from "next/link";
import type { Lang } from "@/i18n/config";

// Малий помічник для текстів: **жирний**, [текст](адреса) стає посиланням, перенос рядка стає <br>.
// Адреси, що починаються з «/», отримують префікс мови.
const linkClass =
  "text-ink underline underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const TOKEN =/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function renderLine(line: string, lang: Lang) {
  return line.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <b key={i}>{part.slice(2, -2)}</b>;
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, url] = link;
      return url.startsWith("/") ? (
        <Link key={i} href={`/${lang}${url}`} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={i} href={url} className={linkClass}>
          {label}
        </a>
      );
    }
    return part;
  });
}

export function Rich({ text, lang }: { text: string; lang: Lang }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {renderLine(line, lang)}
        </Fragment>
      ))}
    </>
  );
}
