import { cn } from '@/lib/utils';
import TypingIndicator from './TypingIndicator';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content?: string;
  id?: string;
  className?: string;
  loading?: boolean;
}

export function ChatMessage({
  role,
  content,
  id,
  className,
  loading,
}: ChatMessageProps) {
  const isUser = role === 'user';

  if (loading) {
    return (
      <div className="flex justify-start items-center bg-[#121214] text-muted-foreground rounded-lg px-4 py-2 text-black w-fit h-8">
        <TypingIndicator />
      </div>
    );
  }

  return (
    <div
      id={id}
      className={cn(
        'flex w-full',
        isUser ? 'justify-end' : 'justify-start',
        className,
      )}
    >
      <div
        className={cn(
          'max-w-[80%] rounded-lg px-4 py-2 text-sm',
          'break-words whitespace-pre-wrap',
          isUser
            ? 'bg-white/5 text-primary-foreground'
            : 'bg-[#121214] text-muted-foreground',
        )}
      >
        {content}
      </div>
    </div>
  );
}
