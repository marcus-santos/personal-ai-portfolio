'use client';

import { useEffect, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { MessageInput } from './message-input';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  api: string;
}

export function ChatWindow({ api }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async (message: string) => {
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), role: 'user', content: message },
    ]);

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          // threadId: '',
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          role: data.role,
          content: data.response,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 2),
          role: 'assistant',
          content: 'Erro ao buscar resposta.',
        },
      ]);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-full flex flex-col">
      <div className="px-4 space-y-4" style={{ paddingBottom: '110px' }}>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center z-10">
        <div className="w-screen bg-[#1e1e1e] flex justify-center">
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
