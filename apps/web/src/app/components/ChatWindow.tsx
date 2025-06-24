'use client';

import { useEffect, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { MessageInput } from './message-input';
import { useStoreMarcusChat, useStoreLukasChat } from '@/hooks/use-store-chat';
import { Message } from '../types/chat-store';
import ChatSuggestedPrompts from './ChatSuggestedPrompts';
import { usePathname } from 'next/navigation';

interface ChatWindowProps {
  api: string;
}

export function ChatWindow({ api }: ChatWindowProps) {
  const pathName = usePathname();
  const useStoreChat = pathName.includes('marcus')
    ? useStoreMarcusChat
    : useStoreLukasChat;
  const messages = useStoreChat((state) => state.messages);
  const addMessage = useStoreChat((state) => state.addMessage);
  const setThreadId = useStoreChat((state) => state.setThreadId);
  const threadId = useStoreChat((state) => state.threadId);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = {
      id: String(Date.now()),
      role: 'user',
      content: message,
    };
    addMessage(userMessage);
    setIsLoading(true);

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          threadId,
        }),
      });

      const data = await response.json();

      const userMessage: Message = {
        id: String(Date.now() + 1),
        role: data.role,
        content: data.response,
      };
      addMessage(userMessage);
      const userThreadId = data.threadId;
      setThreadId(userThreadId);
    } catch (err) {
      const userMessage: Message = {
        id: String(Date.now() + 2),
        role: 'assistant',
        content: 'Erro ao buscar resposta.',
      };
      addMessage(userMessage);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-full flex flex-col">
      <div className="px-4 space-y-4" style={{ paddingBottom: '110px' }}>
        {messages.length === 0 && (
          <ChatSuggestedPrompts onPromptClick={handleSendMessage} />
        )}{' '}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {isLoading && <ChatMessage loading={true} role={'assistant'} />}
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center z-10">
        <div className="w-screen bg-[#121214] flex justify-center">
          <div className="w-full max-w-3xl flex border-t p-4 justify-items-center">
            <div className="w-full max-w-2xl mx-auto">
              <MessageInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
