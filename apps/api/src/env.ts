import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(Number(process.env.PORT) || 3333),
  CORS_URL: z.string().optional().default('*'),
  OPENAI_API_MARCUS_KEY: z.string(),
  OPEN_API_MARCUS_ASSISTANT_ID: z.string(),
  OPEN_API_MARCUS_ASSISTANT_CONTEXT: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_EMAIL: z.string().email(),
});

const envParsed = envSchema.safeParse(process.env);

if (envParsed.success === false) {
  throw new Error('Invalid environment variables.');
}

export const env = envParsed.data;
