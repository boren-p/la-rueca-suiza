import { Resend } from "resend";

const resend = new Resend(process.env.VITE_RESEND_KEY);

export default async function handler(req, res) {
  // 🔑 HEADERS CORS (OBLIGATORIOS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ⬅️ PREFLIGHT
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { formData, cart, total } = req.body;

  try {
    await resend.emails.send({
      from: "Proyecto <onboarding@resend.dev>",
      to: "tucorreo@gmail.com",
      subject: "Nuevo pedido",
      html: `
        <h2>Nuevo pedido</h2>
        <p><strong>Cliente:</strong> ${formData.name}</p>
        <p><strong>Total:</strong> $${total}</p>
        <pre>${JSON.stringify(cart, null, 2)}</pre>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false });
  }
}