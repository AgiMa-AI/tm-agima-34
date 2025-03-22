
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Users, Server, CreditCard } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold flex items-center">
            <Activity className="mr-2 h-6 w-6" />
            管理员控制台
          </h1>
          <p className="mt-2 text-indigo-100">
            监控和管理系统数据、用户、任务和API密钥
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center text-indigo-600">
                <Users className="mr-2 h-4 w-4" />
                活跃用户
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,284</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center text-violet-600">
                <Server className="mr-2 h-4 w-4" />
                活跃计算节点
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,845</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center text-emerald-600">
                <CreditCard className="mr-2 h-4 w-4" />
                本月收入
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥284,391</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">系统概览</TabsTrigger>
            <TabsTrigger value="tasks">任务流量</TabsTrigger>
            <TabsTrigger value="distribution">计算分布</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>系统活动趋势</CardTitle>
                <CardDescription>
                  过去6个月任务状态概览
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">系统活动图表将显示在这里</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tasks" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>任务流量分析</CardTitle>
                <CardDescription>
                  各月份任务执行数据
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">任务流量图表将显示在这里</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="distribution" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>计算资源分布</CardTitle>
                <CardDescription>
                  当前平台计算资源类型分布
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">资源分布图表将显示在这里</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
