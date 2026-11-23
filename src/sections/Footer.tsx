import Image from "next/image";
import Link from "next/link";
import { LangToggle } from "./LangToggle";
import logo from "@/assets/img/logo.png";
import { CONTACT_EMAIL, COPYRIGHT_YEAR, DEVELOPER_NAME } from "@/config";
import { footer, header } from "@/i18n/strings";
import { path } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

/** Підвал зі старого проєкту: показується на кожній сторінці. */
export function Footer({ lang }: { lang: Lang }) {
  const t = footer[lang];
  const h = header[lang];

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Link href={path(lang)} className="footer__logo" aria-label="Talessa">
            <Image src={logo} alt="Talessa" />
          </Link>
          <p>{t.tagline}</p>
          <LangToggle lang={lang} label={h.switchTo} />
        </div>

        <nav className="footer__col" aria-label={t.pages}>
          <h3>{t.pages}</h3>
          <ul>
            <li><Link href={path(lang, "#apps")}>{h.apps}</Link></li>
            <li><Link href={path(lang, "#design")}>{h.design}</Link></li>
            <li><Link href={path(lang, "#blog")}>{h.blog}</Link></li>
            <li><Link href={path(lang, "#about")}>{h.about}</Link></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label={t.apps}>
          <h3>{t.apps}</h3>
          <ul>
            <li><Link href={path(lang, "/my-yarn")}>{t.appsLinks.yarn}</Link></li>
            <li><Link href={path(lang, "/health")}>{t.appsLinks.health}</Link></li>
            <li>
              <Link href={path(lang, "#apps")}>{t.appsLinks.plants}</Link>{" "}
              <span className="footer__soon">({t.inDevelopment})</span>
            </li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label={t.help}>
          <h3>{t.help}</h3>
          <ul>
            <li><Link href={path(lang, "/contact")}>{t.write}</Link></li>
            <li><Link href={path(lang, "/support")}>{t.support}</Link></li>
            <li><Link href={path(lang, "/privacy")}>{t.privacy}</Link></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </nav>
      </div>

      <p className="footer__copy">
        © {COPYRIGHT_YEAR} {DEVELOPER_NAME}. {t.rights}
      </p>
    </footer>
  );
}
