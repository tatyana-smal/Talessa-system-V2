import { ButtonLink } from "@/components/ButtonLink";

/**
 * Кругла кнопка зі стрілкою (96×48): перехід до розділу. Підпис для екранних читачів — `label`.
 * На мобільній (до 768 px) за макетом це світла пігулка 80×24, як у старому проєкті.
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
      className={`h-12 w-24 px-0 max-md:h-6 max-md:w-20 max-md:border-transparent max-md:bg-canvas max-md:text-ink max-md:shadow-button-secondary max-md:hover:bg-canvas ${className}`.trim()}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 24"
        className="h-6 w-8 max-md:h-4"
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
