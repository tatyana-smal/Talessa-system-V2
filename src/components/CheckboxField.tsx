import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  /** Текст поруч із прапорцем. Може містити посилання, наприклад на політику конфіденційності. */
  children: ReactNode;
}

/**
 * Прапорець із текстом: згода на обробку даних, підписка. Натискання на текст теж перемикає прапорець.
 */
export function CheckboxField({ children, className = "", ...props }: CheckboxFieldProps) {
  return (
    <label className="flex items-start gap-3 font-body text-caption text-ink">
      <input
        type="checkbox"
        className={`size-5 shrink-0 cursor-pointer accent-accent disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${className}`.trim()}
        {...props}
      />
      <span>{children}</span>
    </label>
  );
}
