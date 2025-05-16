import Fastify from 'fastify';
import cors from '@fastify/cors';
import { env } from './env';
import { lukas, marcus } from './openai';

const fastify = Fastify();

fastify.register(cors, {
  origin: env.CORS_URL,
  strictPreflight: false,
});

fastify.post('/lukas', async (request, reply) => {
  const response = await lukas(request.body.message, request.body.threadId);

  return reply.send(response);
});

fastify.post('/marcus', async (request, reply) => {
  const response = await marcus(request.body.message, request.body.threadId);

  return reply.send(response);
});

fastify.listen({ port: env.PORT, host: '0.0.0.0' }, (err) => {
  console.log('🚀 HTTP server running!');

  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
