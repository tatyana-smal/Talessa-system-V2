import { useId } from "react";
import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldAttributes = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  SelectHTMLAttributes<HTMLSelectElement>;

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormFieldProps
  extends Omit<FieldAttributes, "size" | "children" | "ref"> {
  /** Підпис поля. Завжди стоїть над полем. */
  label: string;
  /** Стан помилки: межа й текст помилки стають `danger`, поле позначається `aria-invalid`. */
  error?: boolean;
  /** Текст помилки під полем. Показується разом з іконкою, коли `error` увімкнено. */
  errorText?: string;
  /** Багаторядкове поле (для довгого тексту, наприклад повідомлення). */
  multiline?: boolean;
  /** Кількість видимих рядків багаторядкового поля. */
  rows?: number;
  /** Список варіантів: тоді поле стає випадним списком. */
  options?: FormFieldOption[];
}

// Стан default узято зі старого проєкту (поле контактної форми).
// Стани hover і focus тимчасові, їх доведе макет Figma.
const control =
  "w-full rounded-control border bg-canvas p-4 font-body text-body text-ink " +
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
 * Поле з підписом над ним: однорядкове, багаторядкове (`multiline`) або випадний список (`options`).
 * Звичайні атрибути `<input>` (`type`, `name`, `placeholder`, `defaultValue`, `value`, `onChange`,
 * `disabled`) передаються далі.
 */
export function FormField({
  label,
  error = false,
  errorText,
  multiline = false,
  options,
  id,
  className = "",
  type = "text",
  rows = 7,
  ...props
}: FormFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const showError = error && Boolean(errorText);

  const border = error ? "border-danger" : "border-ink-muted enabled:hover:border-ink";
  const common = {
    id: inputId,
    "aria-invalid": error || undefined,
    "aria-describedby": showError ? errorId : undefined,
    className: `${control} ${border} ${className}`.trim(),
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="font-body text-body text-ink">
        {label}
      </label>
      {options ? (
        <select {...common} {...(props as SelectHTMLAttributes<HTMLSelectElement>)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : multiline ? (
        <textarea
          {...common}
          rows={rows}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          {...common}
          type={type}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {showError && (
        <p id={errorId} className="flex items-start gap-2 text-caption text-danger">
          <ErrorIcon />
          <span>{errorText}</span>
        </p>
      )}
    </div>
  );
}
