import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Navigation } from "@/components/Navigation";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import logo from "@/assets/img/logo.png";
import { header } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

export function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M21 3 3 10l7 3 3 7 8-17Z" />
      <path d="m10 13 11-10" />
    </svg>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const t = header[lang];
  const items = [
    { label: t.apps, href: path(lang, "#apps") },
    { label: t.design, href: path(lang, "#design") },
    { label: t.blog, href: path(lang, "#blog") },
    { label: t.about, href: path(lang, "#about") },
  ];

  return (
    // Шапка 67 px, як у Figma; логотип більший за неї й виступає на hero
    <header className="relative z-20 mx-auto flex w-full max-w-page items-center justify-end px-4 py-2 md:px-8">
      <Link
        href={path(lang)}
        aria-label="Talessa"
        className="absolute left-2 top-2 w-36 md:left-0 md:-top-2 md:w-45 lg:left-8 lg:top-0 lg:w-58"
      >
        <Image src={logo} alt="Talessa" priority className="h-auto w-full" />
      </Link>
      <Navigation
        items={items}
        label={t.menu}
        menuLabel={t.menu}
        closeLabel={t.close}
        bar={
          <>
            <LanguageSwitcher lang={lang} label={t.language} />
            <ThemeSwitch label={t.theme} />
          </>
        }
        action={
          <ButtonLink href={path(lang, "/contact")} size="lg" className="font-normal">
            {t.contact}
            <SendIcon />
          </ButtonLink>
        }
      />
    </header>
  );
}
