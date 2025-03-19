
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, X, Minimize, MessageCircle } from 'lucide-react';
import ChatBubble from './ChatBubble';
import chatService, { ChatSession } from '@/services/chatService';
import { useToast } from '@/hooks/use-toast';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatProps {
  initialOpen?: boolean;
}

const Chat = ({ initialOpen = false }: ChatProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // Initialize chat session
  useEffect(() => {
    const initSession = async () => {
      try {
        const session = await chatService.createChatSession();
        setSessionId(session.id);
        
        // Add welcome message
        setMessages([
          {
            content: "您好！我是算力平台助手，可以回答关于我们平台的任何问题。请问有什么可以帮助您的？",
            isUser: false,
            timestamp: new Date()
          }
        ]);
      } catch (error) {
        console.error('Failed to initialize chat session', error);
        toast({
          title: "连接错误",
          description: "无法连接到聊天服务，请稍后再试。",
          variant: "destructive"
        });
      }
    };
    
    if (isOpen && !sessionId) {
      initSession();
    }
  }, [isOpen, sessionId, toast]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  const handleSend = async () => {
    if (!input.trim() || !sessionId) return;
    
    const userMessage = {
      content: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await chatService.sendMessage(sessionId, input);
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Failed to send message', error);
      toast({
        title: "发送失败",
        description: "无法发送消息，请稍后再试。",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };
  
  return (
    <>
      {/* Floating chat button (visible when chat is closed) */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      
      {/* Chat window */}
      <Card
        className={`fixed transition-all duration-300 ease-in-out shadow-lg z-50 ${
          isOpen
            ? 'bottom-4 right-4 w-[350px] h-[500px] opacity-100'
            : 'bottom-0 right-0 w-0 h-0 opacity-0 pointer-events-none'
        }`}
      >
        <CardHeader className="p-3 border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-base font-medium">算力平台助手</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleChat}>
                <Minimize className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 flex-grow h-[calc(100%-115px)]">
          <ScrollArea className="h-full">
            <div className="p-1">
              {messages.map((msg, index) => (
                <ChatBubble
                  key={index}
                  message={msg.content}
                  isUser={msg.isUser}
                  timestamp={msg.timestamp}
                />
              ))}
              <div ref={messagesEndRef} />
              
              {isLoading && (
                <div className="flex justify-start p-4">
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="p-3 border-t">
          <div className="flex w-full gap-2">
            <Input
              ref={inputRef}
              placeholder="输入您的问题..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading || !sessionId}
              className="flex-1"
            />
            <Button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim() || !sessionId} 
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Chat;
