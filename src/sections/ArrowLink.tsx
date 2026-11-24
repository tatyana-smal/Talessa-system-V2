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
        viewBox="0 0 64 32"
        className="h-8 w-16 max-md:h-6 max-md:w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 16h60" />
        <path d="m44 2 18 14-18 14" />
      </svg>
    </ButtonLink>
  );
}
