import { useId } from "react";
import type { ButtonHTMLAttributes } from "react";
import { ButtonContent } from "./ButtonContent";

export type ButtonVariant = "primary" | "secondary" | "menu" | "arrow" | "arrowMobile";
export type ButtonSize = "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  /**
   * `primary` — темна залита кнопка для головної дії; `secondary` — контурна, для другорядної;
   * `menu` — пункт меню без заливки (заливка `tint` при наведенні й фокусі), розмір задає контекст;
   * `arrow` — кругла темна кнопка зі стрілкою 96×48 (десктоп, планшет);
   * `arrowMobile` — світла пігулка зі стрілкою 80×24 (мобільна). У стрілок підпис дає `aria-label`.
   */
  variant?: ButtonVariant;
  /** `md` — звичайна (16 px); `lg` — велика (24 px). Для стрілок не діє. */
  size?: ButtonSize;
  /**
   * Вимкнена кнопка. Це `aria-disabled`, а не атрибут `disabled`:
   * кнопка лишається у фокусі, але натискання нічого не робить.
   */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою, чому вона недоступна. Зв'язується з кнопкою через `aria-describedby`. */
  disabledReason?: string;
  /** Стан «у процесі» (Processed у Figma): спінер, `aria-busy`, натискання нічого не робить. */
  loading?: boolean;
}

// Стани з макета Figma («UI Kit»): default, focus (hover виглядає так само), pressed, processed, disabled.
// Градієнти й тіні беруться з токенів у globals.css. Класи складені цілими рядками, щоб Tailwind їх бачив.
const base =
  "inline-flex items-center justify-center gap-2 rounded-control font-body cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink " +
  "aria-disabled:cursor-not-allowed aria-disabled:opacity-50";

/** Пункт меню (Menu у Figma): без заливки й межі; hover і focus — радіальна заливка від `canvas` до `tint`, pressed — витягнута еліпсом і з тінню. */
export const menuLook =
  "bg-transparent text-ink " +
  "not-aria-disabled:not-aria-busy:not-active:hover:bg-fill-menu-focus " +
  "not-aria-disabled:not-aria-busy:not-active:focus-visible:bg-fill-menu-focus " +
  "not-aria-disabled:active:bg-fill-menu-pressed not-aria-disabled:active:shadow-button-pressed " +
  "aria-busy:bg-fill-menu-pressed aria-busy:shadow-button-pressed";

const primaryLook =
  "border border-ink bg-ink bg-fill-primary text-canvas shadow-button-primary " +
  "not-aria-disabled:not-aria-busy:not-active:hover:bg-fill-primary-focus " +
  "not-aria-disabled:not-aria-busy:not-active:focus-visible:bg-fill-primary-focus " +
  "not-aria-disabled:active:bg-fill-primary-pressed not-aria-disabled:active:shadow-button-pressed " +
  "aria-busy:bg-fill-primary-pressed aria-busy:shadow-button-pressed";

const variants: Record<ButtonVariant, string> = {
  primary: `${primaryLook} font-bold`,
  menu: menuLook,
  secondary:
    "border border-ink bg-transparent text-ink shadow-button-secondary " +
    "not-aria-disabled:not-aria-busy:not-active:hover:bg-fill-secondary-active " +
    "not-aria-disabled:not-aria-busy:not-active:focus-visible:bg-fill-secondary-active " +
    "not-aria-disabled:active:bg-fill-secondary-active not-aria-disabled:active:shadow-button-pressed " +
    "aria-busy:bg-fill-secondary-active aria-busy:shadow-button-pressed",
  arrow: `${primaryLook} h-12 w-24 px-0`,
  arrowMobile:
    "h-6 w-20 border border-transparent bg-canvas px-0 text-ink shadow-button-arrow-small " +
    "not-aria-disabled:not-aria-busy:not-active:hover:bg-fill-arrow-small-active " +
    "not-aria-disabled:not-aria-busy:not-active:focus-visible:bg-fill-arrow-small-active " +
    "not-aria-disabled:active:bg-fill-arrow-small-active not-aria-disabled:active:shadow-button-pressed " +
    "aria-busy:bg-fill-arrow-small-active aria-busy:shadow-button-pressed",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-body",
  // Великий: 16 px на планшеті й мобільній, 24 px з 1024 px (як у макетах Figma)
  lg: "px-4 py-2 text-body lg:text-lead",
};

/** Класи кнопки: один вигляд для `Button` і `ButtonLink`. Стрілки мають власний розмір. */
export function buttonClasses(variant: ButtonVariant, size: ButtonSize) {
  const ownSize = variant === "arrow" || variant === "arrowMobile" || variant === "menu";
  return `${base} ${variants[variant]}${ownSize ? "" : ` ${sizes[size]}`}`;
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
  loading = false,
  className = "",
  onClick,
  children,
  ...props
}: ButtonProps) {
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type={type}
        aria-disabled={disabled || undefined}
        aria-busy={loading || undefined}
        aria-describedby={showReason ? reasonId : undefined}
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
      </button>
      {showReason && (
        <p id={reasonId} className="text-caption text-ink-muted">
          {disabledReason}
        </p>
      )}
    </div>
  );
}
