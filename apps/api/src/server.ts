import cors from '@fastify/cors';
import Fastify from 'fastify';
import { keepServerAlive } from './cron-job';
import { env } from './env';
import { marcus } from './openai';
import { sendEmail } from './resend';

interface MarcusRequestBody {
  message: string;
  threadId?: string;
}

interface ContactRequestBody {
  name: string;
  sender: string;
  emailSubject: string;
  content: string;
}

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;
const fastify = Fastify({
  logger: {
    level: 'info',
  },
});

fastify.register(cors, {
  origin: env.CORS_URL,
  strictPreflight: false,
});

fastify.get('/', async (request, reply) => reply.send({
  message: 'Hello from the API!',
  env: {
    PORT,
    NODE_ENV: process.env.NODE_ENV,
    hasOpenAI: !!env.OPENAI_API_MARCUS_KEY,
    hasResend: !!env.RESEND_API_KEY,
  },
}));

fastify.post('/marcus', async (request, reply) => {
  const body = request.body as MarcusRequestBody;
  const response = await marcus(body.message, body.threadId);

  return reply.send(response);
});

fastify.post('/contact', async (request, reply) => {
  const body = request.body as ContactRequestBody;
  const response = await sendEmail(
    body.name,
    body.sender,
    body.emailSubject,
    body.content,
  );

  return reply.send(response);
});

fastify.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error('Error starting server:', err);
    process.exit(1);
  }

  fastify.log.info(`🚀 HTTP server running on port ${PORT}!`);

  try {
    keepServerAlive();
    fastify.log.info('Keep alive job started');
  } catch (error) {
    fastify.log.error('Error starting keep alive job:', error);
  }
});
