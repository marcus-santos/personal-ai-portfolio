'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2 mt-20 mb-10 text-lg text-center font-semibold"
      >
        <motion.h1 variants={item}>{t('title')}</motion.h1>
        <motion.p variants={item}>{t('subtitle')}</motion.p>
        <motion.p variants={item}>{t('suggestionText')}</motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="flex flex-col sm:flex-row mb-10 sm:mb-0 items-center gap-4 justify-around w-full"
      >
        {suggestedPrompts.map((prompt, idx) => (
          <Button
            key={idx}
            onClick={() => onPromptClick(prompt)}
            className="w-full max-w-[210px] sm:max-w-[25%] p-5 h-fit break-words whitespace-pre-wrap bg-white/5 text-sm cursor-pointer"
          >
            <p>{prompt}</p>
          </Button>
        ))}
      </motion.div>
    </div>
  );
}

export default ChatSuggestedPrompts;
