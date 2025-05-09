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
    <div className="mt-auto w-full">
      <div className="relative flex w-full">
        <div className="relative flex w-full items-center space-x-2">
          <div className="relative flex-1">
            <Textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disabled}
              aria-label="Write your message"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
              className={cn(
                'z-10 flex-1 resize-none max-h-[200px] min-h-[60px] p-3 pr-14',
                'focus-visible:ring-0',
                'placeholder:text-white/60',
                'border',
              )}
              rows={1}
            />
          </div>
        </div>

        <div className="absolute right-3 top-3 z-20 flex gap-2">
          <Button
            type="button"
            size="icon"
            onClick={handleSendMessage}
            disabled={!message.trim() || disabled}
            aria-label="Send message"
            className={cn(
              'rounded-md bg-white text-[#1e1e1e]',
              'hover:bg-white/90 transition-opacity',
              'disabled:pointer-events-none disabled:opacity-50',
              'flex items-center justify-center',
            )}
          >
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
