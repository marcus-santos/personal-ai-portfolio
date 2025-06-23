import { Resend } from 'resend';
import 'dotenv/config';
import { env } from './env';

const resend = new Resend(
  env.RESEND_API_KEY,
);

const email = env.RESEND_EMAIL;

export async function sendEmail(
  name: string,
  sender: string,
  emailSubject: string,
  content: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: email,
      subject: emailSubject,
      replyTo: sender,
      text: content,
    });

    if (error) {
      return { error: error.message };
    }

    return { message: 'Email sent successfully' };
  } catch (error) {
    return {
      error: 'Failed to send email',
    };
  }
}
