
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminSettings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-4 sm:p-6 text-white shadow-md">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center">
            <Settings className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            系统设置
          </h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-indigo-100">
            配置平台参数和全局设置
          </p>
        </div>

        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">常规设置</TabsTrigger>
            <TabsTrigger value="security">安全配置</TabsTrigger>
            <TabsTrigger value="billing">计费设置</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>常规设置</CardTitle>
                <CardDescription>
                  基本平台配置
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <p className="text-muted-foreground">常规设置选项将显示在这里</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>安全配置</CardTitle>
                <CardDescription>
                  平台安全设置
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <p className="text-muted-foreground">安全设置选项将显示在这里</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>计费设置</CardTitle>
                <CardDescription>
                  平台计费规则
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <p className="text-muted-foreground">计费设置选项将显示在这里</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminSettings;
