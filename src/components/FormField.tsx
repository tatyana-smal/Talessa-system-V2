import { useId } from "react";
import type { InputHTMLAttributes } from "react";

export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Підпис поля. Завжди стоїть над полем. */
  label: string;
  /** Стан помилки: межа й текст помилки стають `danger`, поле позначається `aria-invalid`. */
  error?: boolean;
  /** Текст помилки під полем. Показується разом з іконкою, коли `error` увімкнено. */
  errorText?: string;
}

const control =
  "w-full rounded-control border bg-canvas px-4 py-3 font-body text-body text-ink " +
  "placeholder:text-ink-muted " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink " +
  "disabled:cursor-not-allowed disabled:border-line disabled:text-ink-muted";

function ErrorIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5v4" />
      <path d="M8 11h.01" />
    </svg>
  );
}

/**
 * Текстове поле з підписом над ним. Звичайні атрибути `<input>` (`type`, `name`, `placeholder`,
 * `defaultValue`, `value`, `onChange`, `disabled`) передаються далі.
 */
export function FormField({
  label,
  error = false,
  errorText,
  id,
  className = "",
  type = "text",
  ...props
}: FormFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const showError = error && Boolean(errorText);

  const border = error
    ? "border-danger"
    : "border-ink-muted enabled:hover:border-ink";

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="font-body text-body text-ink">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        aria-invalid={error || undefined}
        aria-describedby={showError ? errorId : undefined}
        className={`${control} ${border} ${className}`.trim()}
        {...props}
      />
      {showError && (
        <p id={errorId} className="flex items-start gap-2 text-caption text-danger">
          <ErrorIcon />
          <span>{errorText}</span>
        </p>
      )}
    </div>
  );
}
