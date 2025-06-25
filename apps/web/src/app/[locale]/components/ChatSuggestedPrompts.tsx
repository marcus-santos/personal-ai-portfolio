'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

function ChatSuggestedPrompts({
  onPromptClick,
}: {
  onPromptClick: (prompt: string) => void;
}) {
  const t = useTranslations('Chat');
  const [suggestedPrompts, setSuggestedPrompts] = useState<string[]>([]);

  useEffect(() => {
    setSuggestedPrompts([
      t('suggestedQuestions.first'),
      t('suggestedQuestions.second'),
      t('suggestedQuestions.third'),
    ]);
  }, [t]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="my-10 text-2xl font-semibold">{t('title')}</h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-around w-full">
        {suggestedPrompts.map((prompt, idx) => (
          <Button
            key={idx}
            onClick={() => onPromptClick(prompt)}
            className="w-full sm:max-w-[25%] p-5 h-fit break-words whitespace-pre-wrap text-sm cursor-pointer"
          >
            <p>{prompt}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ChatSuggestedPrompts;
