export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  website: string;
};

export type ContactFieldError = "name" | "email" | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export function parseContactPayload(input: unknown): ContactPayload {
  const body = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  return {
    name: asString(body.name, 120),
    email: asString(body.email, 254),
    phone: asString(body.phone, 40),
    area: asString(body.area, 120),
    message: asString(body.message, 4000),
    website: asString(body.website, 120),
  };
}

export function contactFieldError(payload: ContactPayload): ContactFieldError | null {
  if (payload.name.length < 2) return "name";
  if (!EMAIL_RE.test(payload.email)) return "email";
  if (payload.message.length < 20) return "message";
  return null;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function contactEmailText(payload: ContactPayload) {
  return [
    `Ime: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Telefon: ${payload.phone}` : "",
    payload.area ? `Oblast: ${payload.area}` : "",
    "",
    payload.message,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

export function contactEmailHtml(payload: ContactPayload) {
  const row = (label: string, value: string) =>
    `<p style="margin:0 0 10px;font-size:15px;line-height:1.5;color:#2A2723"><strong>${label}:</strong> ${escapeHtml(value)}</p>`;

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#EDE9E1;font-family:Georgia,serif;color:#171512">
    <div style="max-width:560px;margin:0 auto;padding:28px;background:#F6F2EA">
      <p style="margin:0 0 18px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#C78B3E">Upit sa sajta</p>
      ${row("Ime", payload.name)}
      ${row("Email", payload.email)}
      ${payload.phone ? row("Telefon", payload.phone) : ""}
      ${payload.area ? row("Oblast", payload.area) : ""}
      <p style="margin:18px 0 0;font-size:15px;line-height:1.7;color:#2A2723;white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    </div>
  </body>
</html>`;
}
