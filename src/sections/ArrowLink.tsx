import { ButtonLink } from "@/components/ButtonLink";

/**
 * Кругла кнопка зі стрілкою: перехід до розділу. Підпис для екранних читачів — `label`.
 * На мобільній (до 768 px) за макетом лишається лише стрілка без темної заливки.
 */
export function ArrowLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <ButtonLink
      href={href}
      aria-label={label}
      className={`px-8 max-md:border-transparent max-md:bg-transparent max-md:px-0 max-md:text-ink max-md:shadow-none max-md:hover:bg-transparent ${className}`.trim()}
    >
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
