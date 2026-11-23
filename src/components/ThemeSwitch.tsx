"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const KEY = "talessa-theme";
const listeners = new Set<() => void>();

function readTheme(): Theme {
  try {
    return localStorage.getItem(KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function writeTheme(theme: Theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* сховище може бути заблоковане: тоді вибір діє лише до оновлення сторінки */
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export interface ThemeSwitchProps {
  /** Підпис перемикача для екранних читачів («Світла / темна тема»). */
  label: string;
}

/**
 * Перемикач світлої й темної теми. Поки він лише ставить `data-theme="light|dark"` на `<html>` і
 * запам'ятовує вибір; самі темні кольори додамо до токенів, коли буде готовий темний дизайн.
 */
export function ThemeSwitch({ label }: ThemeSwitchProps) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light" as Theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const dark = theme === "dark";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={label}
      title={label}
      onClick={() => writeTheme(dark ? "light" : "dark")}
      className="relative inline-flex h-11 w-17 cursor-pointer items-center rounded-full border border-line bg-canvas p-1 text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <span
        aria-hidden="true"
        className={`flex size-9 items-center justify-center rounded-full bg-ink shadow-button-primary transition-transform duration-300 motion-reduce:transition-none ${
          dark ? "translate-x-6" : ""
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {dark ? (
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          )}
        </svg>
      </span>
    </button>
  );
}
