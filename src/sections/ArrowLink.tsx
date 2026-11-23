import { ButtonLink } from "@/components/ButtonLink";

/** Кругла кнопка зі стрілкою: перехід до розділу. Підпис для екранних читачів — `label`. */
export function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <ButtonLink href={href} aria-label={label} className="self-start px-8">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 24"
        className="h-6 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h28" />
        <path d="m21 3 9 9-9 9" />
      </svg>
    </ButtonLink>
  );
}
