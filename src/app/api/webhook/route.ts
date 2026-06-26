import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-04-10" });
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("[webhook] signature invalide", err);
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name ?? "Cliente";
    const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "—";
    const orderId = session.id.slice(-8).toUpperCase();

    if (customerEmail) {
      await resend.emails.send({
        from: "Les Secrets d'Elloriane <contact@elloriane.com>",
        to: customerEmail,
        subject: `Votre commande est confirmée — Les Secrets d'Elloriane`,
        html: orderConfirmationEmail({ customerName, amount, orderId }),
      });
    }
  }

  return NextResponse.json({ received: true });
}

function orderConfirmationEmail({
  customerName,
  amount,
  orderId,
}: {
  customerName: string;
  amount: string;
  orderId: string;
}) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFDF9;border:1px solid rgba(201,169,110,0.25);">

        <!-- Header doré -->
        <tr><td style="background:linear-gradient(135deg,#9A7A45,#C9A96E);height:3px;"></td></tr>

        <!-- Logo -->
        <tr><td align="center" style="padding:40px 40px 24px;">
          <p style="font-size:56px;margin:0;line-height:1;background:linear-gradient(135deg,#9A7A45,#C9A96E,#E8D5A3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;color:#C9A96E;">E</p>
          <p style="font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:#7A7A7A;margin:8px 0 0;font-family:Arial,sans-serif;">Les Secrets d'Elloriane</p>
          <div style="width:60px;height:1px;background:linear-gradient(90deg,transparent,#C9A96E,transparent);margin:20px auto 0;"></div>
        </td></tr>

        <!-- Titre -->
        <tr><td align="center" style="padding:0 40px 32px;">
          <p style="font-size:11px;letter-spacing:0.35em;text-transform:uppercase;color:#C9A96E;margin:0 0 12px;font-family:Arial,sans-serif;">Commande confirmée</p>
          <h1 style="font-size:36px;font-weight:300;color:#2A2A2A;margin:0;line-height:1.2;">Merci, ${customerName}</h1>
          <p style="font-size:14px;color:#7A7A7A;font-weight:300;margin:16px 0 0;line-height:1.8;font-family:Arial,sans-serif;">
            Votre commande a bien été reçue et est en cours de préparation.<br>
            Vous recevrez un email de suivi dès l'expédition.
          </p>
        </td></tr>

        <!-- Détails commande -->
        <tr><td style="padding:0 40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(201,169,110,0.2);background:#FAF7F2;">
            <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(201,169,110,0.15);">
              <p style="font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#C9A96E;margin:0 0 12px;font-family:Arial,sans-serif;">Récapitulatif</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Arial,sans-serif;font-size:13px;color:#7A7A7A;padding:4px 0;">N° de commande</td>
                  <td align="right" style="font-family:Arial,sans-serif;font-size:13px;color:#2A2A2A;">#${orderId}</td>
                </tr>
                <tr>
                  <td style="font-family:Arial,sans-serif;font-size:13px;color:#7A7A7A;padding:4px 0;">Livraison estimée</td>
                  <td align="right" style="font-family:Arial,sans-serif;font-size:13px;color:#2A2A2A;">3 à 5 jours ouvrés</td>
                </tr>
                <tr>
                  <td style="font-family:Arial,sans-serif;font-size:13px;color:#7A7A7A;padding:4px 0;">Packaging</td>
                  <td align="right" style="font-family:Arial,sans-serif;font-size:13px;color:#2A2A2A;">Cadeau inclus ✦</td>
                </tr>
              </table>
            </td></tr>
            <tr><td style="padding:16px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Georgia,serif;font-size:16px;color:#2A2A2A;">Total</td>
                  <td align="right" style="font-family:Georgia,serif;font-size:24px;color:#C9A96E;">${amount} €</td>
                </tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td align="center" style="padding:0 40px 40px;">
          <p style="font-size:13px;color:#7A7A7A;font-family:Arial,sans-serif;margin:0 0 20px;line-height:1.8;">
            Une question ? Nous sommes là pour vous.
          </p>
          <a href="mailto:contact@elloriane.com"
             style="display:inline-block;background:#111111;color:#E8D5A3;border:1px solid #C9A96E;padding:14px 32px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;">
            Nous contacter
          </a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:linear-gradient(135deg,#9A7A45,#C9A96E);height:3px;"></td></tr>
        <tr><td align="center" style="padding:20px 40px;">
          <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#9A9A9A;margin:0;">
            © 2026 Les Secrets d'Elloriane — Marseille, France
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
