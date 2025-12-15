import { Resend } from "resend";

const resend = new Resend(process.env.env.VITE_RESEND_KEY);

export default async function handler (req, res){
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { formData, cart, total } = req.body;

  await resend.emails.send({
    from: 'Proyecto <onboarding@resend.dev>',
    to: 'tucorreo@gmail.com',
    subject: 'Nuevo pedido',
    html: `
      <h2>Nuevo pedido</h2>
      <p>Total: $${total}</p>
      <pre>${JSON.stringify(cart, null, 2)}</pre>
    `,
  });

  res.status(200).json({ ok: true });
}