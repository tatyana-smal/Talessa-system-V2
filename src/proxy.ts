import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANG_COOKIE, defaultLang, hasLocale, locales } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

// Мова для відвідувача без префікса в адресі: спершу збережений вибір (cookie),
// потім мова браузера (Accept-Language), інакше українська.
function getLang(request: NextRequest): Lang {
  const saved = request.cookies.get(LANG_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;

  const accepted = request.headers.get("accept-language") ?? "";
  for (const part of accepted.split(",")) {
    const code = part.trim().split(";")[0].toLowerCase().split("-")[0];
    if (hasLocale(code)) return code;
  }
  return defaultLang;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLang = locales.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
  );
  if (hasLang) return;

  request.nextUrl.pathname = `/${getLang(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Усе, крім службових шляхів Next.js і файлів із розширенням (картинки, favicon)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
