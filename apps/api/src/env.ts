import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3333),
  OPENAI_API_KEY: z.string(),
  OPEN_API_ASSISTANT_ID: z.string(),
  OPEN_API_ASSISTANT_CONTEXT: z.string(),
});

const envParsed = envSchema.safeParse(process.env);

if (envParsed.success === false) {
  throw new Error('Invalid environment variables.');
}

export const env = envParsed.data;
