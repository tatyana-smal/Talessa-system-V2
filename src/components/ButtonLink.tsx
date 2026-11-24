"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonClasses } from "./Button";
import type { ButtonSize, ButtonVariant } from "./Button";
import { ButtonContent } from "./ButtonContent";

export interface ButtonLinkProps extends ComponentProps<typeof Link> {
  /** `primary`, `secondary`, `arrow` (96×48) або `arrowMobile` (80×24): як у `Button`. */
  variant?: ButtonVariant;
  /** `md` — звичайна; `lg` — велика. Для стрілок не діє. */
  size?: ButtonSize;
  /** Недоступне посилання (`aria-disabled`): лишається у фокусі, перехід не відбувається. */
  disabled?: boolean;
  /** Стан «у процесі»: спінер, `aria-busy`, перехід не відбувається. */
  loading?: boolean;
}

/**
 * Посилання у вигляді кнопки: веде на іншу сторінку чи розділ. Вигляд і стани такі самі, як у `Button`.
 */
export function ButtonLink({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      aria-disabled={disabled || undefined}
      aria-busy={loading || undefined}
      onClick={(event) => {
        if (disabled || loading) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
      className={`${buttonClasses(variant, size)} ${className}`.trim()}
      {...props}
    >
      <ButtonContent variant={variant} loading={loading}>
        {children}
      </ButtonContent>
    </Link>
  );
}
