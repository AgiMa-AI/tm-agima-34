
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Send, Bot, BrainCircuit, Settings, Download, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AIAssistantPanel = () => {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    { role: 'assistant', content: '您好！我是您的腾目科技AI助手。请问有什么我可以帮您的？' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = { role: 'user' as const, content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // 模拟AI响应
    setTimeout(() => {
      const responses = [
        "我已经分析了您的数据，根据最新市场趋势，建议您增加GPU实例的租赁价格。",
        "根据您的使用记录，您的实例利用率达到了85%，优于市场平均水平。",
        "我可以帮您优化算力资源分配，提升您的收益约15%。",
        "最近市场对RTX 4090的需求增加了20%，您可以考虑增加相应实例。",
        "您的AI定制服务已经准备好，现在可以开始训练模型了。"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <Card className="h-full flex flex-col bg-gradient-to-br from-primary/5 to-background rounded-xl shadow-md overflow-hidden">
      <CardHeader className="flex-none px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <BrainCircuit className="h-4.5 w-4.5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-md font-medium">腾目 AI 助手</CardTitle>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Badge variant="outline" className="text-xs py-0 h-4 px-1.5 font-normal text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                  Llama 3
                </Badge>
                <Badge variant="outline" className="text-xs py-0 h-4 px-1.5 font-normal text-muted-foreground">个人定制</Badge>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <Tabs defaultValue="chat" className="flex flex-col flex-1 overflow-hidden">
        <div className="px-4 pt-2">
          <TabsList className="bg-muted/30 p-0.5 h-9">
            <TabsTrigger value="chat" className="h-8 text-xs">
              <Bot className="h-3.5 w-3.5 mr-1.5" />对话
            </TabsTrigger>
            <TabsTrigger value="custom" className="h-8 text-xs">
              <BrainCircuit className="h-3.5 w-3.5 mr-1.5" />模型定制
            </TabsTrigger>
            <TabsTrigger value="apk" className="h-8 text-xs">
              <Download className="h-3.5 w-3.5 mr-1.5" />打包APK
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="chat" className="flex-1 flex flex-col overflow-hidden m-0 data-[state=active]:flex-1">
          <CardContent className="p-4 flex-1 overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div 
                  key={i} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted/50'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted/50">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-75"></div>
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <CardFooter className="p-3 border-t">
            <div className="flex items-center w-full gap-2">
              <Input
                placeholder="输入您的问题..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border-muted-foreground/20"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="h-10 w-10 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="custom" className="flex-1 overflow-hidden m-0 data-[state=active]:flex">
          <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BrainCircuit className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">私人AI定制服务</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              定制您专属的AI模型，根据您的业务需求和数据进行训练，提供最适合您的AI解决方案。
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button className="gap-1">
                <BrainCircuit className="h-4 w-4 mr-1" />
                开始定制
              </Button>
              <Button variant="outline">查看模板</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="apk" className="flex-1 overflow-hidden m-0 data-[state=active]:flex">
          <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Download className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">打包APK服务</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              将您的AI模型打包成Android应用程序，随时随地使用您的定制AI服务。
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button className="gap-1">
                <Download className="h-4 w-4 mr-1" />
                打包应用
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-1" />
                分享应用
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AIAssistantPanel;
