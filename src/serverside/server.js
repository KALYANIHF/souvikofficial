import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const transpoter = nodemailer.createTestAccount({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = params.body;
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };
  try {
    const sendRes = await transporter.sendMail(mailOptions);
    if (sendRes) {
      res.status(200).send("Email sent successfully");
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
