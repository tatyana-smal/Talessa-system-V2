import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonClasses } from "./Button";
import type { ButtonSize, ButtonVariant } from "./Button";

export interface ButtonLinkProps extends ComponentProps<typeof Link> {
  /** `primary` — на кольорі accent; `secondary` — без заливки, з межею. */
  variant?: ButtonVariant;
  /** `md` — звичайна; `lg` — велика. */
  size?: ButtonSize;
}

/**
 * Посилання у вигляді кнопки: веде на іншу сторінку чи розділ. Вигляд і стани такі самі, як у `Button`.
 */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${buttonClasses(variant, size)} ${className}`.trim()}
      {...props}
    />
  );
}
