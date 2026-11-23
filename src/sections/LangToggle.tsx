"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANG_COOKIE, hasLocale } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

/** Невелика кнопка в підвалі: показує поточну мову, натискання перемикає на іншу. */
export function LangToggle({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname() ?? "/";
  const other: Lang = lang === "uk" ? "en" : "uk";
  const segments = pathname.split("/");
  if (hasLocale(segments[1] ?? "")) segments[1] = other;
  else segments.splice(1, 0, other);

  return (
    <Link
      href={segments.join("/") || `/${other}`}
      lang={other}
      aria-label={label}
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${other}; path=/; max-age=31536000; samesite=lax`;
      }}
      className="footer__lang"
    >
      {lang === "uk" ? "UA" : "EN"}
    </Link>
  );
}
