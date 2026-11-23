export const locales = ["uk", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "uk";

export const hasLocale = (value: string): value is Lang =>
  (locales as readonly string[]).includes(value);

/** Назва cookie, у якій proxy.ts і перемикач мови запам'ятовують вибір. */
export const LANG_COOKIE = "NEXT_LOCALE";

/** Адреса з префіксом мови: `path("uk", "/privacy")` → `/uk/privacy`. */
export function path(lang: Lang, to = "") {
  return `/${lang}${to}`;
}
