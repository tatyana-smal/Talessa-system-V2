import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` — залита кнопка для головної дії; `secondary` — контурна, для другорядної. */
  variant?: ButtonVariant;
  /** `md` — 16 px (форми, планшет); `lg` — 24 px (hero, меню на десктопі). */
  size?: ButtonSize;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-control border font-body cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "disabled:cursor-not-allowed disabled:border-line disabled:bg-line disabled:text-ink-muted";

const variants: Record<ButtonVariant, string> = {
  primary: "border-ink bg-ink text-canvas hover:border-ink-muted hover:bg-ink-muted",
  secondary:
    "border-ink-muted bg-transparent text-ink hover:bg-surface " +
    "disabled:bg-transparent",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-body",
  lg: "px-4 py-2 text-lead",
};

/**
 * Кнопка. Підпис — це `children`; усі звичайні атрибути `<button>` (`onClick`, `type`, `disabled`) працюють.
 */
export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
      {...props}
    />
  );
}
