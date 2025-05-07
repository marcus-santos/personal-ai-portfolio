import OpenAI from 'openai';
import 'dotenv/config';
import { env } from './env';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function main(question: string) {
  const thread = await openai.beta.threads.create({
    messages: [
      {
        role: 'assistant',
        content: env.OPEN_API_ASSISTANT_CONTEXT,
      },
    ],
  });

  await openai.beta.threads.messages.create(
    thread.id,
    {
      role: 'user',
      content: question,
    },
  );

  const run = await openai.beta.threads.runs.createAndPoll(
    thread.id,
    {
      assistant_id: env.OPEN_API_ASSISTANT_ID,
    },
  );

  if (run.status === 'completed') {
    const messages = await openai.beta.threads.messages.list(run.thread_id);
    const assistantMessage = messages.data.find((msg) => msg.role === 'assistant');

    if (assistantMessage) {
      const contentBlock = assistantMessage.content[0];
      if ('text' in contentBlock) {
        const textContent = contentBlock.text.value;
        return {
          role: 'assistant',
          response: textContent,
        };
      }
    }
    return { error: 'No assistant response found' };
  }
  return { error: `Run status: ${run.status}` };
}
