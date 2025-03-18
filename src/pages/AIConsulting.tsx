
import React from 'react';
import Layout from '@/components/layout/Layout';

const AIConsulting = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold tracking-tight">咨询顾问</h1>
          <p className="text-muted-foreground">专业AI咨询与实施顾问服务</p>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">正在建设中</h2>
          <p className="text-muted-foreground">
            我们正在组建专业的AI咨询团队，敬请期待...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AIConsulting;
