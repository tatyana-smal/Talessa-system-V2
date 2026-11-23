"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANG_COOKIE, hasLocale } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

const options: { code: Lang; label: string }[] = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
];

export interface LanguageSwitcherProps {
  /** Поточна мова сторінки. */
  lang: Lang;
  /** Підпис групи для екранних читачів («Мова»). */
  label: string;
}

/** Адреса тієї самої сторінки іншою мовою: `/uk/privacy` → `/en/privacy`. */
function hrefFor(pathname: string, code: Lang) {
  const segments = pathname.split("/");
  if (hasLocale(segments[1] ?? "")) segments[1] = code;
  else segments.splice(1, 0, code);
  return segments.join("/") || `/${code}`;
}

const option =
  "inline-flex h-9 items-center justify-center overflow-hidden rounded-full " +
  "font-body text-body transition-all duration-300 motion-reduce:transition-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * Перемикач мови: пігулка показує поточну мову; натискання розгортає її й показує всі мови,
 * вибір іншої мови відкриває ту саму сторінку цією мовою. Закривається клавішею Escape
 * або натисканням поза пігулкою.
 */
export function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      role="group"
      aria-label={label}
      className="langsw inline-flex items-center gap-0.5 rounded-full border border-line bg-canvas p-1"
    >
      {options.map(({ code, label: text }) => {
        const active = code === lang;
        const hidden = !open && !active;
        // Приховану мову стискаємо до нуля (плавно), щоб у пігулці лишалась тільки активна
        const size = hidden
          ? " pointer-events-none -ml-0.5 max-w-0 min-w-0 px-0 opacity-0"
          : " max-w-16 min-w-11 px-3";

        if (active) {
          return (
            <button
              key={code}
              type="button"
              aria-pressed
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className={`langsw__opt langsw__opt--active ${option}${size} bg-ink text-canvas shadow-button-primary cursor-pointer`}
            >
              {text}
            </button>
          );
        }
        return (
          <Link
            key={code}
            href={hrefFor(pathname, code)}
            lang={code}
            tabIndex={hidden ? -1 : 0}
            aria-hidden={hidden || undefined}
            onClick={() => {
              document.cookie = `${LANG_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
              setOpen(false);
            }}
            className={`btn langsw__opt${hidden ? " langsw__opt--hidden" : ""} ${option}${size} text-ink hover:bg-surface`}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
}
