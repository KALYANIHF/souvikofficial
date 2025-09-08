import nodemailer from "nodemailer";
export async function sendMail({ name, email, subject, message }) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.AWS_SES_SMTP_USERNAME,
      pass: process.env.AWS_SES_SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    from: email,
    to: "marvel.sm.24@gmail.com",
    subject: subject,
    text: `
    Name: ${name},
    Email: ${email},
    Subject: ${subject},
    Message: ${message}
    `,
    replyTo: email,
  };
  await transporter.sendMail(mailOptions);
}
