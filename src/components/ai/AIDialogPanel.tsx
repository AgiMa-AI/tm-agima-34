
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Send, User, Sparkles, Package, Download, Settings, RefreshCw, Brain, PanelRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const AIDialogPanel = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      content: "您好！我是基于Llama的AI助手，有什么我可以帮您的吗？", 
      isUser: false, 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // 添加用户消息
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    
    // 模拟AI响应延迟
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: getAIResponse(input),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  // 简单的响应生成函数
  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('你好') || input.includes('hi') || input.includes('hello')) {
      return "您好！很高兴为您服务。我是基于Llama的AI助手，有什么我可以帮您的吗？";
    } else if (input.includes('apk') || input.includes('打包')) {
      return "您可以点击底部的'打包APK'按钮，将当前模型打包成Android应用。打包后的APK文件可以在移动设备上运行，无需网络连接。";
    } else if (input.includes('定制') || input.includes('私人')) {
      return "我们提供AI定制服务，可以根据您的业务需求定制专属AI模型。请点击'定制私人AI'按钮了解更多信息。";
    } else if (input.includes('能力') || input.includes('功能')) {
      return "我可以帮助您回答问题、提供信息、协助编写内容，也可以进行简单的对话交流。如果您有特定的任务需求，请告诉我，我会尽力帮助您。";
    } else {
      return "感谢您的提问。作为Llama模型的AI助手，我正在学习中。您可以继续提问，或者尝试'定制私人AI'获得更专业的服务。";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 自动滚动到最新消息
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <Card className="flex flex-col h-[500px] shadow-md border-primary/10">
      <CardHeader className="py-3 px-4 border-b bg-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <CardTitle className="text-base font-medium">Llama AI 助手</CardTitle>
            <Badge variant="outline" className="ml-2 py-0 px-1.5 h-5 text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-1"></div>
              在线
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="刷新对话">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="设置">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`flex gap-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div 
                  className={`flex items-center justify-center h-8 w-8 rounded-full ${
                    message.isUser ? 'bg-primary/10' : 'bg-primary/20'
                  } text-primary shadow-sm flex-shrink-0`}
                >
                  {message.isUser ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                
                <div 
                  className={`p-3 rounded-2xl text-sm ${
                    message.isUser 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted/50 text-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          
          {isProcessing && (
            <div className="flex justify-start">
              <div className="flex gap-2 max-w-[85%]">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary shadow-sm flex-shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="py-3 px-4 rounded-2xl bg-muted/50 text-foreground">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <CardFooter className="p-3 border-t bg-background">
        <div className="flex flex-col w-full space-y-2">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Input
                ref={inputRef}
                placeholder="发送消息..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-10 py-3 h-12"
                disabled={isProcessing}
              />
              <Button 
                size="sm" 
                onClick={handleSend} 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                disabled={!input.trim() || isProcessing}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between w-full">
            <Button variant="outline" size="sm" className="text-xs h-8 flex items-center gap-1">
              <Package className="h-3.5 w-3.5" />
              打包APK
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-8 flex items-center gap-1">
              <Brain className="h-3.5 w-3.5" />
              定制私人AI
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-8 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              高级功能
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AIDialogPanel;
