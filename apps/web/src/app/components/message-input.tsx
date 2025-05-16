import React, { useState, useRef } from 'react';
import { SendIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAutosizeTextArea } from '@/hooks/use-autosize-textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function MessageInput({
  onSendMessage,
  placeholder = 'Type a message...',
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea({
    ref: textareaRef as React.RefObject<HTMLTextAreaElement>,
    maxHeight: 60,
    dependencies: [message],
  });

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
              maxLength={160}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                wordBreak: 'break-word',
                overflow: 'hidden',
              }}
              className={cn(
                'z-10 w-full resize-none max-h-[250px] min-h-[70px] p-3 pr-14',
                'focus-visible:ring-0',
                'placeholder:text-white/60',
                'border',
              )}
              rows={1}
            />
          </div>
        </div>

        <div className="absolute right-3 top-4 z-20 flex gap-2">
          <Button
            type="button"
            size="icon"
            onClick={handleSendMessage}
            disabled={!message.trim() || disabled}
            aria-label="Send message"
            className={cn(
              'rounded-md bg-white text-[#1e1e1e] cursor-pointer',
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
