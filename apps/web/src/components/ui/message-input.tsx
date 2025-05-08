import React, { useState, useRef, useEffect } from 'react';
import { SendIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function MessageInput({
  onSendMessage,
  placeholder = 'Type a message...',
  className,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, 200);
    textarea.style.height = `${newHeight}px`;
  }, [message]);

  const handleSendMessage = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');

      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className={cn(
        'flex items-end w-full gap-2 rounded border p-3',
        disabled && 'opacity-60',
        className,
      )}
    >
      <Textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'flex-1 resize-none max-h-[200px] min-h-[40px] p-2',
          'bg-transparent border-0 focus-visible:ring-0',
          'placeholder:text-muted-foreground',
        )}
        rows={1}
      />
      <Button
        type="button"
        size="icon"
        onClick={handleSendMessage}
        disabled={!message.trim() || disabled}
        className={cn(
          'h-9 w-9 rounded-full',
          'bg-primary text-primary-foreground',
          'hover:scale-105 active:scale-95 cursor-pointer',
          !message.trim() && 'opacity-50',
        )}
        aria-label="Send message"
      >
        <SendIcon className="h-4 w-4 cursor-pointer" />
      </Button>
    </div>
  );
}
