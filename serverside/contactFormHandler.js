import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
const ses = new SESv2Client({ region: "ap-south-1" });
export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { name, email, subject, message } = body;
    const params = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Text: {
            Data: "You have a new Message",
            Name: name,
            Subject: subject,
            Charset: "UTF-8",
            Email: email,
            Message: message,
          },
        },
        Subject: { Data: `Contact Form: ${subject}` },
      },
      Source: "marvel.sm.24@gmail.com",
      ReplyToAddresses: [email],
    };
    const command = new SendEmailCommand(params);
    await ses.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
