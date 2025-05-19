import OpenAI from 'openai';
import 'dotenv/config';
import { env } from './env';

const openaiLukas = new OpenAI({
  apiKey: env.OPENAI_API_LUKAS_KEY,
});

export async function lukas(question: string, threadId?: string) {
  let thread;

  if (!threadId) {
    thread = await openaiLukas.beta.threads.create({
      messages: [
        {
          role: 'assistant',
          content: env.OPEN_API_LUKAS_ASSISTANT_CONTEXT,
        },
      ],
    });
  }

  await openaiLukas.beta.threads.messages.create(
    threadId! || thread.id,
    {
      role: 'user',
      content: question,
    },
  );

  const run = await openaiLukas.beta.threads.runs.createAndPoll(
    threadId! || thread.id,
    {
      assistant_id: env.OPEN_API_LUKAS_ASSISTANT_ID,
    },
  );

  if (run.status === 'completed') {
    const messages = await openaiLukas.beta.threads.messages.list(run.thread_id);
    const assistantMessage = messages.data.find((msg) => msg.role === 'assistant');

    if (assistantMessage) {
      const contentBlock = assistantMessage.content[0];
      if ('text' in contentBlock) {
        const textContent = contentBlock.text.value;
        return {
          role: 'assistant',
          response: textContent,
          threadId: threadId ?? thread.id,
        };
      }
    }
    return { error: 'No assistant response found' };
  }
  return { error: `Run status: ${run.status}` };
}

const openaiMarcus = new OpenAI({
  apiKey: env.OPENAI_API_MARCUS_KEY,
});

export async function marcus(question: string, threadId?: string) {
  let thread;

  if (!threadId) {
    thread = await openaiMarcus.beta.threads.create({
      messages: [
        {
          role: 'assistant',
          content: env.OPEN_API_MARCUS_ASSISTANT_CONTEXT,
        },
      ],
    });
  }

  await openaiMarcus.beta.threads.messages.create(
    threadId! || thread.id,
    {
      role: 'user',
      content: question,
    },
  );

  const run = await openaiMarcus.beta.threads.runs.createAndPoll(
    threadId! || thread.id,
    {
      assistant_id: env.OPEN_API_MARCUS_ASSISTANT_ID,
    },
  );

  if (run.status === 'completed') {
    const messages = await openaiMarcus.beta.threads.messages.list(run.thread_id);
    const assistantMessage = messages.data.find((msg) => msg.role === 'assistant');

    if (assistantMessage) {
      const contentBlock = assistantMessage.content[0];
      if ('text' in contentBlock) {
        const textContent = contentBlock.text.value;
        return {
          role: 'assistant',
          response: textContent,
          threadId: threadId ?? thread.id,
        };
      }
    }
    return { error: 'No assistant response found' };
  }
  return { error: `Run status: ${run.status}` };
}
