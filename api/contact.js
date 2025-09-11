// api/contact.js
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import "@dotenvx/dotenvx/config";

const sesClient = new SESClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY, // make sure spelling is correct
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const params = {
    Source: "supportinfo@souvikofficial.live",
    Destination: { ToAddresses: [process.env.RECEIVER_EMAIL] },
    ReplyToAddresses: [email],
    Message: {
      Subject: { Data: subject },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        },
      },
    },
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
    return res
      .status(200)
      .json({ status: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("SES error:", err);
    return res.status(500).json({ error: err.message });
  }
}
