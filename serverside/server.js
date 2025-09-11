// serverside/server.js
import express from "express";
import cors from "cors";
import "@dotenvx/dotenvx/config";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sesClient = new SESClient({
  region: "ap-south-1", // your SES region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY, // fixed typo
  },
});

// ⚡ Contact form route
app.post("/", async (req, res) => {
  console.log("Contact API hit, body:", req.body); // debug log

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const params = {
    Source: "supportinfo@souvikofficial.live", // must be verified in SES
    Destination: {
      ToAddresses: [process.env.RECEIVER_EMAIL],
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
    return res
      .status(200)
      .json({ status: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("SES error:", err);
    return res.status(500).json({ error: err.message });
  }
});

export default app;
