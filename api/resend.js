import { Resend } from "resend";

const resend = new Resend(process.env.VITE_RESEND_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { formData = {}, cart = [], total = 0 } = req.body || {};

  try {
    // 📩 Correo para la empresa
    await resend.emails.send({
      from: formData.email,
      to: "borenkpardo@gmail.com",
      subject: "NUEVO PEDIDO",
      html: `
        <h2>Nuevo pedido</h2>
        <p><strong>Cliente:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Total:</strong> $${total}</p>
        <ul>
          ${cart.map(p => `
            <li>${p.name} x${p.quantity} – $${p.price}</li>
          `).join("")}
        </ul>
      `,
    });

    // 📩 Correo para el cliente
    await resend.emails.send({
      from: "borenkpardo@gmail.com",
      to: formData.email,
      subject: "Confirmación de tu pedido",
      html: `
        <h2>Gracias por tu pedido, ${formData.name}</h2>
        <p>Hemos recibido tu solicitud correctamente.</p>
        <p><strong>Total:</strong> $${total}</p>
        <p>Nos pondremos en contacto contigo pronto.</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return res.status(500).json({ ok: false });
  }
}