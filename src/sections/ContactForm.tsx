"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/Button";
import { CheckboxField } from "@/components/CheckboxField";
import { FormField } from "@/components/FormField";
import { Rich } from "@/components/Rich";
import { CONTACT_EMAIL } from "@/config";
import { contact } from "@/i18n/contactStrings";
import type { Lang } from "@/i18n/config";

/*
 * Форма зворотного зв'язку.
 * - Зі змінною NEXT_PUBLIC_WEB3FORMS_KEY (Vercel → Settings → Environment Variables) лист іде на пошту
 *   власника ключа через сервіс Web3Forms.
 * - Без ключа форма все одно працює: відкриває поштовий застосунок відвідувача з готовим листом.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "sentMailto" | "error";

export function ContactForm({ lang }: { lang: Lang }) {
  const t = contact[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const topic = String(form.get("topic") ?? t.topics[0].value);
    const message = String(form.get("message") ?? "").trim();
    const consent = form.get("consent") === "on";
    const trap = String(form.get("botcheck") ?? "");

    if (trap) return; // бот заповнив приховане поле: мовчки ігноруємо
    if (!/^\S+@\S+\.\S+$/.test(email)) return setProblem(t.invalidEmail);
    if (message.length < 10) return setProblem(t.tooShort);
    if (!consent) return setProblem(t.needConsent);
    setProblem("");

    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n— ${name || email}\n${email}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[Talessa] ${topic}`)}&body=${encodeURIComponent(body)}`;
      setStatus("sentMailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Talessa] ${topic}`,
          from_name: name || "Talessa website",
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "sentMailto") {
    return (
      <p
        role="status"
        className="mt-8 rounded-card bg-surface px-8 py-6 font-body text-body"
      >
        {status === "sent" ? t.success : t.successMailto}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-6">
      <FormField label={t.name} name="name" autoComplete="name" maxLength={100} />
      <FormField
        label={`${t.email} *`}
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={200}
      />
      <FormField label={t.topic} name="topic" options={t.topics} defaultValue={t.topics[0].value} />
      <FormField
        label={`${t.message} *`}
        name="message"
        multiline
        rows={7}
        required
        maxLength={4000}
        placeholder={t.messagePlaceholder}
      />

      {/* пастка для ботів: людям прихована, боти зазвичай її заповнюють */}
      <input
        name="botcheck"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-full size-px opacity-0"
      />

      <CheckboxField name="consent">
        <Rich text={t.consent} lang={lang} />
      </CheckboxField>

      {problem && (
        <p role="alert" className="font-body text-body text-danger">
          {problem}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="font-body text-body text-danger">
          {t.error}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        </p>
      )}

      <div>
        <Button type="submit" size="md" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.submit}
        </Button>
      </div>
    </form>
  );
}
