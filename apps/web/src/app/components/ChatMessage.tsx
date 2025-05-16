import { cn } from '@/lib/utils';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  id?: string;
  className?: string;
}

export function ChatMessage({
  role,
  content,
  id,
  className,
}: ChatMessageProps) {
  const isUser = role === 'user';

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
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground',
        )}
      >
        {content}
      </div>
    </div>
  );
}
