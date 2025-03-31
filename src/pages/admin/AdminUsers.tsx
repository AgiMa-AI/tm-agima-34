
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Search, UserPlus, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const AdminUsers = () => {
  // Mock user data
  const mockUsers = [
    { id: 1, name: '张三', email: 'zhang@example.com', role: '管理员', status: '活跃' },
    { id: 2, name: '李四', email: 'li@example.com', role: '用户', status: '活跃' },
    { id: 3, name: '王五', email: 'wang@example.com', role: '用户', status: '未激活' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-4 sm:p-6 text-white shadow-md">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center">
            <Users className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            用户管理
          </h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-indigo-100">
            管理所有用户账户、权限和计算资源分配
          </p>
        </div>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>用户列表</CardTitle>
              <CardDescription>
                平台上的所有注册用户
              </CardDescription>
            </div>
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              添加用户
            </Button>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="搜索用户..."
                  className="pl-8 w-full"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium text-muted-foreground py-3">用户ID</th>
                    <th className="text-left font-medium text-muted-foreground py-3">姓名</th>
                    <th className="text-left font-medium text-muted-foreground py-3 hidden sm:table-cell">邮箱</th>
                    <th className="text-left font-medium text-muted-foreground py-3">角色</th>
                    <th className="text-left font-medium text-muted-foreground py-3">状态</th>
                    <th className="text-right font-medium text-muted-foreground py-3">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-muted/50">
                      <td className="py-3">#{user.id}</td>
                      <td className="py-3">{user.name}</td>
                      <td className="py-3 hidden sm:table-cell">{user.email}</td>
                      <td className="py-3">
                        <span className={`py-1 px-2 text-xs rounded-full ${
                          user.role === '管理员' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`py-1 px-2 text-xs rounded-full ${
                          user.status === '活跃' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <Button variant="ghost" size="sm">编辑</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
              <div>显示 1-{mockUsers.length} 共 {mockUsers.length} 条记录</div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled>上一页</Button>
                <Button variant="outline" size="sm" disabled>下一页</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminUsers;
