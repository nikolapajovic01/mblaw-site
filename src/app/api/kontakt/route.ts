import { Resend } from "resend";
import { FIRM } from "@/lib/seo";
import {
  contactEmailHtml,
  contactEmailText,
  contactFieldError,
  parseContactPayload,
} from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const payload = parseContactPayload(raw);

  if (payload.website) {
    return Response.json({ ok: true });
  }

  const field = contactFieldError(payload);
  if (field) {
    return Response.json({ error: field }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "send" }, { status: 500 });
  }

  const from = process.env.CONTACT_FROM ?? `MB Law <${FIRM.email}>`;
  const to = process.env.CONTACT_TO ?? FIRM.email;

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `Upit sa sajta: ${payload.name}`,
    text: contactEmailText(payload),
    html: contactEmailHtml(payload),
    tags: [{ name: "source", value: "website" }],
  });

  if (error) {
    console.error("Resend contact send failed", error.name);
    return Response.json({ error: "send" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
