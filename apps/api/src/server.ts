import Fastify from 'fastify';
import { env } from './env';

const fastify = Fastify();

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.listen({ port: env.PORT }, (err) => {
  console.log('🚀 HTTP server running!');

  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
