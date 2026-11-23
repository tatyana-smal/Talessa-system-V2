import { useId } from "react";
import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  /** `primary` — на кольорі accent, головна дія; `secondary` — без заливки, з межею, другорядна. */
  variant?: ButtonVariant;
  /** `md` — звичайна (16 px); `lg` — велика (24 px). */
  size?: ButtonSize;
  /**
   * Вимкнена кнопка. Це `aria-disabled`, а не атрибут `disabled`:
   * кнопка лишається у фокусі, але натискання нічого не робить.
   */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою, чому вона недоступна. Зв'язується з кнопкою через `aria-describedby`. */
  disabledReason?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-control border font-body cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink " +
  "aria-disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-canvas " +
    "not-aria-disabled:hover:border-ink not-aria-disabled:hover:bg-ink " +
    "aria-disabled:border-line aria-disabled:bg-line aria-disabled:text-ink",
  secondary:
    "border-ink-muted bg-transparent text-ink " +
    "not-aria-disabled:hover:bg-surface " +
    "aria-disabled:border-line aria-disabled:text-ink-muted",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-body",
  lg: "px-6 py-3 text-lead",
};

/** Класи кнопки: один вигляд для `Button` і `ButtonLink`. */
export function buttonClasses(variant: ButtonVariant, size: ButtonSize) {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

/**
 * Кнопка. Підпис — це `children`; звичайні атрибути `<button>` (`onClick`, `type`) працюють.
 */
export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  disabledReason,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type={type}
        aria-disabled={disabled || undefined}
        aria-describedby={showReason ? reasonId : undefined}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
        {...props}
      />
      {showReason && (
        <p id={reasonId} className="text-caption text-ink-muted">
          {disabledReason}
        </p>
      )}
    </div>
  );
}
