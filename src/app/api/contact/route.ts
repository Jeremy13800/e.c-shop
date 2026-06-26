import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Les Secrets d'Elloriane <contact@elloriane.com>",
      to: "contact@elloriane.com",
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `[Contact] Message de ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #FAF7F2;">
          <div style="text-align: center; margin-bottom: 32px;">
            <p style="font-size: 48px; margin: 0; color: #C9A96E; letter-spacing: 0.2em;">E</p>
            <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #7A7A7A; margin-top: 4px;">Les Secrets d'Elloriane</p>
          </div>
          <div style="border-top: 1px solid rgba(201,169,110,0.3); border-bottom: 1px solid rgba(201,169,110,0.3); padding: 24px 0; margin-bottom: 24px;">
            <p style="font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A96E; margin: 0 0 16px;">Nouveau message</p>
            <p style="font-size: 14px; color: #2A2A2A; margin: 0 0 8px;"><strong>De :</strong> ${name} (${email})</p>
            ${subject ? `<p style="font-size: 14px; color: #2A2A2A; margin: 0 0 8px;"><strong>Sujet :</strong> ${subject}</p>` : ""}
          </div>
          <div style="font-size: 14px; color: #7A7A7A; line-height: 1.8; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
  }
}
