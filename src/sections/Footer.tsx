import Image from "next/image";
import Link from "next/link";
import { LangToggle } from "./LangToggle";
import logo from "@/assets/img/logo.png";
import { CONTACT_EMAIL, COPYRIGHT_YEAR, DEVELOPER_NAME } from "@/config";
import { footer, header } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

const linkClass =
  "text-ink hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function Footer({ lang }: { lang: Lang }) {
  const t = footer[lang];
  const h = header[lang];

  const columns = [
    {
      title: t.pages,
      links: [
        { label: h.apps, href: path(lang, "#apps") },
        { label: h.design, href: path(lang, "#design") },
        { label: h.blog, href: path(lang, "#blog") },
        { label: h.about, href: path(lang, "#about") },
      ],
    },
    {
      title: t.apps,
      links: [
        { label: t.appsLinks.yarn, href: path(lang, "/my-yarn") },
        { label: t.appsLinks.health, href: path(lang, "/health") },
        {
          label: `${t.appsLinks.plants} (${t.inDevelopment})`,
          href: path(lang, "#apps"),
        },
      ],
    },
    {
      title: t.help,
      links: [
        { label: t.write, href: path(lang, "/contact") },
        { label: t.support, href: path(lang, "/support") },
        { label: t.privacy, href: path(lang, "/privacy") },
      ],
      email: true,
    },
  ];

  return (
    <footer className="mt-8 border-t border-line bg-surface px-8 py-8 lg:mt-section">
      <div className="mx-auto grid max-w-page gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-3">
          <Link href={path(lang)} aria-label="Talessa" className="w-1/2">
            <Image src={logo} alt="Talessa" className="h-auto w-full" />
          </Link>
          <p className="font-body text-body">{t.tagline}</p>
          <LangToggle lang={lang} label={h.switchTo} />
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="mb-4 font-heading text-title">{column.title}</h2>
            <ul className="flex flex-col gap-3 font-body text-body">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {column.email && (
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                    {CONTACT_EMAIL}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-page border-t border-line pt-6 font-body text-caption text-ink-muted">
        © {COPYRIGHT_YEAR} {DEVELOPER_NAME}. {t.rights}
      </p>
    </footer>
  );
}
