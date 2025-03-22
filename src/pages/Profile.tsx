
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">个人资料</h1>
          <p className="text-muted-foreground">
            查看和管理您的账户信息
          </p>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">基本信息</TabsTrigger>
            <TabsTrigger value="security">安全设置</TabsTrigger>
            <TabsTrigger value="preferences">偏好设置</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>用户信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">用户名</h3>
                    <p>{user?.username || '未设置'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">邮箱</h3>
                    <p>{user?.email || '未设置'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">账户类型</h3>
                    <p>{user?.role === 'provider' ? '算力提供者' : '算力租用者'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">注册日期</h3>
                    <p>{user?.joinDate || '-'}</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline">编辑个人信息</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>安全设置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">修改密码和安全设置，确保您的账户安全。</p>
                <div className="pt-4">
                  <Button variant="outline">修改密码</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>偏好设置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">自定义您的应用体验和通知选项。</p>
                <div className="pt-4">
                  <Button variant="outline">更新偏好设置</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
