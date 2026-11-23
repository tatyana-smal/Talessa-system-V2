"use client";

import { useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  /** Пункти меню в порядку показу. */
  items: NavigationItem[];
  /** `href` активного пункту (сторінка, на якій зараз користувач). Решта пунктів неактивні. */
  activeHref?: string;
  /** Підпис навігації для екранних читачів. */
  label?: string;
  /** Підпис кнопки-бургера, коли меню закрите (за замовчуванням «Меню»). */
  menuLabel?: string;
  /** Підпис кнопки-бургера, коли меню відкрите (за замовчуванням «Закрити»). */
  closeLabel?: string;
  /**
   * Елементи, які видно завжди, також на вузькому екрані поруч із бургером
   * (перемикач мови, перемикач теми).
   */
  bar?: ReactNode;
  /**
   * Головна дія («Написати мені»). На широкому екрані стоїть у рядок після `bar`,
   * на вузькому лежить усередині відкритого меню.
   */
  action?: ReactNode;
}

const linkBase =
  "block rounded-control px-3 py-2 font-body text-body text-ink underline-offset-8 decoration-2 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:text-lead";

/**
 * Меню сайту. На широкому екрані (від 1024 px) пункти стоять у рядок. На вузькому меню згортається
 * в іконку-бургер; відкрите меню лежить поверх контенту й закривається клавішею Escape.
 */
export function Navigation({
  items,
  activeHref,
  label = "Головне меню",
  menuLabel = "Меню",
  closeLabel = "Закрити",
  bar,
  action,
}: NavigationProps) {
  const id = useId();
  const menuId = `${id}-menu`;
  const toggleId = `${id}-toggle`;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById(toggleId)?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, toggleId]);

  return (
    <nav aria-label={label} className="relative flex items-center gap-3 lg:gap-6">
      <ul
        id={menuId}
        className={
          (open ? "flex " : "hidden ") +
          "absolute right-0 top-full z-10 mt-2 w-max min-w-full flex-col gap-2 rounded-control bg-surface p-4 " +
          "lg:static lg:mt-0 lg:flex lg:w-auto lg:min-w-0 lg:flex-row lg:gap-6 lg:bg-transparent lg:p-0"
        }
      >
        {items.map((item) => {
          const active = item.href === activeHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={
                  linkBase +
                  (active
                    ? " underline decoration-accent"
                    : " hover:underline hover:decoration-ink-muted")
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        {action && <li className="lg:hidden">{action}</li>}
      </ul>

      {bar && <div className="flex items-center gap-3">{bar}</div>}
      {action && <div className="max-lg:hidden">{action}</div>}

      <button
        id={toggleId}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? closeLabel : menuLabel}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-control text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:hidden"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M5 5l14 14M19 5L5 19" />
          ) : (
            <path d="M3 7h18M3 12h18M3 17h18" />
          )}
        </svg>
      </button>
    </nav>
  );
}
