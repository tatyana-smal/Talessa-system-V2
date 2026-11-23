import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Navigation } from "@/components/Navigation";
import logo from "@/assets/img/logo.png";

const items = [
  { label: "Застосунки", href: "/#apps" },
  { label: "Дизайн", href: "/#design" },
  { label: "Блог", href: "/#blog" },
  { label: "Про мене", href: "/#about" },
];

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

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-page items-center justify-between gap-4 px-8 py-2">
      <Link href="/" aria-label="Talessa" className="w-1/3 lg:w-1/6">
        <Image src={logo} alt="Talessa" priority className="h-auto w-full" />
      </Link>
      <div className="flex items-center gap-6">
        <Navigation items={items} />
        <ButtonLink href="/contact" className="max-lg:hidden">
          Написати мені
          <SendIcon />
        </ButtonLink>
      </div>
    </header>
  );
}
