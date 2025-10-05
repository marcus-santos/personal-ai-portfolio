import cors from '@fastify/cors';
import Fastify from 'fastify';
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
  if (err) {
    fastify.log.error('Error starting server:', err);
    process.exit(1);
  }

  fastify.log.info(`🚀 HTTP server running on port ${env.PORT}!`);

  // Iniciar cron job após o servidor estar rodando
  // try {
  //   keepServerAlive();
  //   fastify.log.info('Keep alive job started');
  // } catch (error) {
  //   fastify.log.error('Error starting keep alive job:', error);
  // }
});
