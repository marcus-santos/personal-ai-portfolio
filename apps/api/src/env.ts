import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3333),
  CORS_URL: z.string().optional().default('http://localhost:3000'),
  OPENAI_API_LUKAS_KEY: z.string(),
  OPEN_API_LUKAS_ASSISTANT_ID: z.string(),
  OPEN_API_LUKAS_ASSISTANT_CONTEXT: z.string(),
  OPENAI_API_MARCUS_KEY: z.string(),
  OPEN_API_MARCUS_ASSISTANT_ID: z.string(),
  OPEN_API_MARCUS_ASSISTANT_CONTEXT: z.string(),
  RESEND_API_KEY: z.string(),
});

const envParsed = envSchema.safeParse(process.env);

if (envParsed.success === false) {
  throw new Error('Invalid environment variables.');
}

export const env = envParsed.data;
