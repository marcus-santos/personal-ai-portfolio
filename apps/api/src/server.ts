/* eslint-disable */
import cors from '@fastify/cors';
import Fastify from 'fastify';

// Debug: Verificar variáveis de ambiente
console.log('=== DEBUG RENDER ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('OPENAI_API_MARCUS_KEY exists:', !!process.env.OPENAI_API_MARCUS_KEY);
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('===================');

// Importar env com try/catch
let env;
try {
  env = require('./env').env;
  console.log('✅ ENV loaded successfully');
} catch (error) {
  console.error('❌ Error loading env:', error);
  // Usar fallbacks
  env = {
    PORT: Number(process.env.PORT) || 3333,
    CORS_URL: process.env.CORS_URL || '*',
    OPENAI_API_MARCUS_KEY: process.env.OPENAI_API_MARCUS_KEY || '',
    OPEN_API_MARCUS_ASSISTANT_ID: process.env.OPEN_API_MARCUS_ASSISTANT_ID || '',
    OPEN_API_MARCUS_ASSISTANT_CONTEXT: process.env.OPEN_API_MARCUS_ASSISTANT_CONTEXT || '',
    RESEND_API_KEY: process.env.RESEND_API_KEY || '',
    RESEND_EMAIL: process.env.RESEND_EMAIL || '',
  };
}

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
    PORT: env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    hasOpenAI: !!env.OPENAI_API_MARCUS_KEY,
    hasResend: !!env.RESEND_API_KEY,
  },
}));

fastify.get('/health', async (request, reply) => reply.send({ 
  status: 'ok', 
  timestamp: new Date().toISOString() 
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

// Comentado temporariamente para debug
// fastify.post('/marcus', async (request, reply) => {
//   const body = request.body as MarcusRequestBody;
//   const response = await marcus(body.message, body.threadId);
//   return reply.send(response);
// });

// fastify.post('/contact', async (request, reply) => {
//   const body = request.body as ContactRequestBody;
//   const response = await sendEmail(
//     body.name,
//     body.sender,
//     body.emailSubject,
//     body.content,
//   );
//   return reply.send(response);
// });

fastify.listen({ port: env.PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error('Error starting server:', err);
    process.exit(1);
  }

  fastify.log.info(`🚀 HTTP server running on port ${env.PORT}!`);
  console.log(`🚀 Server started successfully on port ${env.PORT}`);
});
