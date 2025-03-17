
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Server, Globe, RefreshCw, CheckCircle2 } from 'lucide-react';

const ApiConfig = () => {
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [endpoints, setEndpoints] = useState<{[key: string]: string}>({
    users: '/api/users',
    tasks: '/api/tasks',
    models: '/api/models',
  });

  const saveConfig = () => {
    // 保存API配置到localStorage
    localStorage.setItem('api_config', JSON.stringify({
      baseUrl,
      apiKey,
      endpoints
    }));
    
    toast({
      title: "配置已保存",
      description: "API配置已成功保存",
    });
  };

  const updateEndpoint = (key: string, value: string) => {
    setEndpoints(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const testConnection = async () => {
    setIsTesting(true);
    setTestStatus('idle');
    
    try {
      // 模拟API测试请求
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 这里应该是真实的API测试逻辑
      if (baseUrl) {
        setTestStatus('success');
        toast({
          title: "连接成功",
          description: "成功连接到API服务器",
        });
      } else {
        throw new Error("API基础URL不能为空");
      }
    } catch (error) {
      console.error("API测试失败:", error);
      setTestStatus('error');
      toast({
        variant: "destructive",
        title: "连接失败",
        description: error instanceof Error ? error.message : "无法连接到API服务器",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-4 sm:p-6 text-white shadow-md transition-all hover:shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center">
            <Settings className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            API配置管理
          </h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-blue-100">
            配置您的后端API连接参数和端点
          </p>
        </div>

        <Tabs defaultValue="general" className="animate-scale-in">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1">
            <TabsTrigger value="general" className="py-2 touch-target text-sm">
              <Server className="h-4 w-4 mr-2" />
              基本配置
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="py-2 touch-target text-sm">
              <Globe className="h-4 w-4 mr-2" />
              API端点
            </TabsTrigger>
            <TabsTrigger value="test" className="py-2 touch-target text-sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              连接测试
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="pt-4">
            <Card className="shadow-sm hover:shadow transition-all">
              <CardHeader>
                <CardTitle>基本API配置</CardTitle>
                <CardDescription>
                  设置您的API基础URL和认证信息
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="base-url">API基础URL</Label>
                  <Input 
                    id="base-url" 
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}
                    placeholder="https://your-api-server.com" 
                  />
                  <p className="text-sm text-muted-foreground">
                    所有API端点将基于此URL构建
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="api-key">API密钥</Label>
                  <Input 
                    id="api-key" 
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="您的API密钥" 
                  />
                  <p className="text-sm text-muted-foreground">
                    用于API认证的密钥
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={saveConfig}>保存配置</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="endpoints" className="pt-4">
            <Card className="shadow-sm hover:shadow transition-all">
              <CardHeader>
                <CardTitle>API端点配置</CardTitle>
                <CardDescription>
                  配置各功能模块的API端点路径
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(endpoints).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={`endpoint-${key}`}>{key.charAt(0).toUpperCase() + key.slice(1)}端点</Label>
                    <Input 
                      id={`endpoint-${key}`}
                      value={value}
                      onChange={(e) => updateEndpoint(key, e.target.value)}
                      placeholder={`/${key}`}
                    />
                  </div>
                ))}
                
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    端点将被附加到基础URL后，例如: {baseUrl}{endpoints.users}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={saveConfig}>保存端点配置</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="test" className="pt-4">
            <Card className="shadow-sm hover:shadow transition-all">
              <CardHeader>
                <CardTitle>API连接测试</CardTitle>
                <CardDescription>
                  测试您的API配置是否正确
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-6 flex flex-col items-center justify-center border rounded-lg">
                    <div className="text-center mb-4">
                      {testStatus === 'idle' ? (
                        <Server className="h-10 w-10 mx-auto text-muted-foreground" />
                      ) : testStatus === 'success' ? (
                        <CheckCircle2 className="h-10 w-10 mx-auto text-green-500" />
                      ) : (
                        <div className="h-10 w-10 mx-auto text-red-500">❌</div>
                      )}
                      
                      <h3 className="mt-2 font-medium">
                        {testStatus === 'idle' 
                          ? "准备测试API连接" 
                          : testStatus === 'success'
                            ? "连接成功"
                            : "连接失败"}
                      </h3>
                      
                      <p className="mt-1 text-sm text-muted-foreground">
                        {testStatus === 'idle' 
                          ? "点击下方按钮测试API连接" 
                          : testStatus === 'success'
                            ? "成功连接到API服务器"
                            : "无法连接到API服务器，请检查配置"}
                      </p>
                    </div>
                    
                    <Button 
                      onClick={testConnection} 
                      disabled={isTesting}
                      className="w-full sm:w-auto"
                    >
                      {isTesting ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          测试中...
                        </>
                      ) : (
                        "测试API连接"
                      )}
                    </Button>
                  </div>
                  
                  <div className="text-sm">
                    <h4 className="font-medium mb-2">当前配置</h4>
                    <div className="bg-muted p-3 rounded-md overflow-auto">
                      <pre className="text-xs">
                        {JSON.stringify({
                          baseUrl,
                          apiKey: apiKey ? '****' : '',
                          endpoints
                        }, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ApiConfig;
