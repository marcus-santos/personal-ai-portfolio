import { Resend } from 'resend';
import 'dotenv/config';
import { env } from './env';

const resend = new Resend(
  env.RESEND_API_KEY,
);

export async function sendEmail(
  name: string,
  sender: string,
  emailSubject: string,
  content: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'marcuscruzsantos27@gmail.com',
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
