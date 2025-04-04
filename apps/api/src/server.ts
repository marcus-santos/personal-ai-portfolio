import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.listen({ port: 3333 }, (err) => {
  console.log('🚀 HTTP server running!');

  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
