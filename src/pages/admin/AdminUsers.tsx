
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { UsersIcon } from 'lucide-react';

const AdminUsers = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-4 sm:p-6 text-white shadow-md">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center">
            <UsersIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            用户管理
          </h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-indigo-100">
            管理所有用户账户、权限和计算资源分配
          </p>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>用户列表</CardTitle>
            <CardDescription>
              平台上的所有注册用户
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10">
              <p className="text-muted-foreground">用户列表将显示在这里</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminUsers;
