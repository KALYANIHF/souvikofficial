import express from "express";
import cors from "cors";
import "@dotenvx/dotenvx/config";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// SES client
const sesClient = new SESClient({
  region: "ap-south-1", // change to your SES region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRECT_KEY,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All Fields are required" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  const params = {
    Source: "supportinfo@souvikofficial.live", // verified sender
    Destination: {
      ToAddresses: [process.env.RECEIVER_EMAIL], // your inbox
    },
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
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    res.status(200).json({ status: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: err.message + "Failed to send email" });
  }
});
app.get("/api/info", (req, res) => {
  res.json({
    message: "Hello from server.js",
  });
});
export default app;
