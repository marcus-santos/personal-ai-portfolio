import { ChatStore } from '@/app/types/chat-store';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStoreMarcusChat = create<ChatStore>()(
  persist(
    (set) => ({
      threadId: null,
      messages: [],
      setThreadId: (id) => set({ threadId: id }),
      addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
      setMessages: (msgs) => set({ messages: msgs }),
      clearChat: () => set({ threadId: null, messages: [] }),
    }),
    {
      name: 'chat-storage',
    },
  ),
);

const useStoreLukasChat = create<ChatStore>()(
  persist(
    (set) => ({
      threadId: null,
      messages: [],
      setThreadId: (id) => set({ threadId: id }),
      addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
      setMessages: (msgs) => set({ messages: msgs }),
      clearChat: () => set({ threadId: null, messages: [] }),
    }),
    {
      name: 'chat-storage',
    },
  ),
);

export { useStoreMarcusChat, useStoreLukasChat };
