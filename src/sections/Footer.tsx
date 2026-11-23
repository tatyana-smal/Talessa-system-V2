import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";
import { CONTACT_EMAIL, COPYRIGHT_YEAR, DEVELOPER_NAME } from "@/config";

const linkClass =
  "text-ink hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const columns = [
  {
    title: "Сторінки",
    links: [
      { label: "Застосунки", href: "/#apps" },
      { label: "Дизайн", href: "/#design" },
      { label: "Блог", href: "/#blog" },
      { label: "Про мене", href: "/#about" },
    ],
  },
  {
    title: "Застосунки",
    links: [
      { label: "Моя колекція пряжі", href: "/my-yarn" },
      { label: "Підтримка здоров’я", href: "/health" },
      { label: "Мій календар рослин (у розробці)", href: "/#apps" },
    ],
  },
  {
    title: "Допомога",
    links: [
      { label: "Написати нам", href: "/contact" },
      { label: "Підтримка", href: "/support" },
      { label: "Політика конфіденційності", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-surface px-8 py-8 lg:mt-section">
      <div className="mx-auto grid max-w-page gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-3">
          <Link href="/" aria-label="Talessa" className="w-1/2">
            <Image src={logo} alt="Talessa" className="h-auto w-full" />
          </Link>
          <p className="font-body text-body">
            Застосунки, що турбуються про те, що для нас важливе
          </p>
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
              {column.title === "Допомога" && (
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
        © {COPYRIGHT_YEAR} {DEVELOPER_NAME}. Усі права захищено.
      </p>
    </footer>
  );
}
