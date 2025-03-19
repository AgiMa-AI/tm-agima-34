
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { BotMessageSquare, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

const ChatBubble = ({ message, isUser, timestamp }: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        'flex w-full gap-3 p-4',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 bg-primary/10 text-primary">
          <BotMessageSquare className="h-4 w-4" />
        </Avatar>
      )}
      
      <div
        className={cn(
          'rounded-lg p-3 max-w-[80%]',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary'
        )}
      >
        <p className="text-sm whitespace-pre-wrap break-words">{message}</p>
        {timestamp && (
          <div className={cn(
            'text-[10px] mt-1 opacity-70',
            isUser ? 'text-right text-primary-foreground' : 'text-left'
          )}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
          <User className="h-4 w-4" />
        </Avatar>
      )}
    </div>
  );
};

export default ChatBubble;
