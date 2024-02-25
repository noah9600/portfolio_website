"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; 

export const sendEmail = async (formData) => {
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!email || !subject || !message) {
    return {
      error: "Missing email, subject, or message"
    };
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: fromEmail,
      subject: subject,
      reply_to: email,
      text: message
    });

    console.log("Email sent successfully:", data);
    return {
      success: true,
      message: "Email sent successfully"
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: "Error sending email"
    };
  }
};
