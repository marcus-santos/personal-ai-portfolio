type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type ChatStore = {
  threadId: string | null;
  messages: Message[];
  setThreadId: (id: string) => void;
  addMessage: (msg: Message) => void;
  setMessages: (msgs: Message[]) => void;
  clearChat: () => void;
};

export type { Message, ChatStore };
