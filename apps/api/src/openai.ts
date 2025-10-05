import 'dotenv/config';
import OpenAI from 'openai';
import { env } from './env';

const openaiMarcus = new OpenAI({
  apiKey: env.OPENAI_API_MARCUS_KEY,
});

export async function marcus(question: string, threadId?: string) {
  let thread;
  let currentThreadId: string;

  if (!threadId) {
    thread = await openaiMarcus.beta.threads.create({
      messages: [
        {
          role: 'assistant',
          content: env.OPEN_API_MARCUS_ASSISTANT_CONTEXT,
        },
      ],
    });
    currentThreadId = thread.id;
  } else {
    currentThreadId = threadId;
  }

  await openaiMarcus.beta.threads.messages.create(
    currentThreadId,
    {
      role: 'user',
      content: question,
    },
  );

  const run = await openaiMarcus.beta.threads.runs.createAndPoll(
    currentThreadId,
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
          threadId: currentThreadId,
        };
      }
    }
    return { error: 'No assistant response found' };
  }
  return { error: `Run status: ${run.status}` };
}
