import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 465,
    secure: true,
    auth: {
      user: "your@email.com",
      pass: "your-email-password"
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "your@email.com",
      subject: "Website Contact Form",
      text: message,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
}