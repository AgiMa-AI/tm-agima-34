
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

const RetailSolution = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold flex items-center">
            <ShoppingBag className="mr-2 h-6 w-6" />
            零售业AI解决方案
          </h1>
          <p className="mt-2 text-blue-100">
            为零售业务提供智能化的数据分析、客户洞察和库存管理
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>智能零售解决方案</CardTitle>
            <CardDescription>
              提升客户体验和运营效率的AI技术
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>零售解决方案页面内容将在此处展示</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RetailSolution;
