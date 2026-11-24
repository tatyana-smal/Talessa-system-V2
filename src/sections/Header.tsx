"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import logo from "@/assets/img/logo.png";
import burger from "@/assets/img/burger.svg";
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

/** Шапка зі старого проєкту: логотип, меню, перемикачі мови й теми, кнопка «Написати мені», бургер. */
export function Header({ lang }: { lang: Lang }) {
  const t = header[lang];
  const links = [
    { href: path(lang, "#apps"), label: t.apps },
    { href: path(lang, "#design"), label: t.design },
    { href: path(lang, "#blog"), label: t.blog },
    { href: path(lang, "#about"), label: t.about },
  ];
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Меню на телефоні закривається натисканням поза ним і клавішею Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (navRef.current?.contains(target) || burgerRef.current?.contains(target)) return;
      setOpen(false);
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
    <header className="header">
      <Link href={path(lang)} className="logo">
        <Image src={logo} alt="Talessa" priority />
      </Link>
      <nav ref={navRef} className={`nav ${open ? "nav--open" : ""}`}>
        {links.map((link) => (
          <ButtonLink key={link.href} href={link.href} variant="menu" onClick={() => setOpen(false)}>
            {link.label}
          </ButtonLink>
        ))}
        <div className="nav__tools">
          <LanguageSwitcher lang={lang} label={t.language} />
          <ThemeSwitch label={t.theme} />
        </div>
        <ButtonLink href={path(lang, "/contact")} size="lg" className="btn btn--pill nav__cta">
          {t.contact}
          <SendIcon />
        </ButtonLink>
      </nav>
      {/* на телефоні перемикачі стоять у шапці поруч із бургером, а не в меню */}
      <div className="header__tools">
        <LanguageSwitcher lang={lang} label={t.language} />
        <ThemeSwitch label={t.theme} />
      </div>
      <button
        ref={burgerRef}
        type="button"
        className="burger"
        aria-label={t.menu}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Image src={burger} alt="" width={24} height={24} />
      </button>
    </header>
  );
}
