import cors from '@fastify/cors';
import console from 'console';
import Fastify from 'fastify';
import { keepServerAlive } from './cron-job';
import { env } from './env';
import { marcus } from './openai';
import { sendEmail } from './resend';

const fastify = Fastify();

fastify.register(cors, {
  origin: env.CORS_URL,
  strictPreflight: false,
});

fastify.get('/', async (request, reply) => reply.send({
  message: 'Hello from the API!',
}));

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

fastify.listen({ port: env.PORT, host: '0.0.0.0' }, (err) => {
  console.log('🚀 HTTP server running!');

  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  keepServerAlive();
});
