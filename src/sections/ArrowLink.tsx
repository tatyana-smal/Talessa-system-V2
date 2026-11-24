import { ButtonLink } from "@/components/ButtonLink";

/**
 * Кругла кнопка зі стрілкою: перехід до розділу. Підпис для екранних читачів — `label`.
 * За макетом (UI Kit) стрілки дві: темна 96×48 на десктопі й планшеті та світла пігулка 80×24
 * на мобільній (до 768 px). Показується одна з них, стани в обох з Figma.
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
    <>
      <ButtonLink
        href={href}
        variant="arrow"
        aria-label={label}
        className={`max-md:hidden ${className}`.trim()}
      />
      <ButtonLink
        href={href}
        variant="arrowMobile"
        aria-label={label}
        className={`md:hidden ${className}`.trim()}
      />
    </>
  );
}
