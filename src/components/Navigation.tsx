"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Button } from "./Button";

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
}

const linkBase =
  "block rounded-control px-3 py-2 font-body text-body text-ink underline-offset-8 decoration-2 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:text-lead";

/**
 * Меню сайту. На широкому екрані пункти стоять у рядок. На вузькому (до 1024 px) меню згортається
 * в кнопку «Меню»; відкрите меню лежить поверх контенту й закривається клавішею Escape.
 */
export function Navigation({ items, activeHref, label = "Головне меню" }: NavigationProps) {
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
    <nav aria-label={label} className="relative">
      <div className="lg:hidden">
        <Button
          id={toggleId}
          variant="secondary"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Закрити" : "Меню"}
        </Button>
      </div>
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
      </ul>
    </nav>
  );
}
