
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PerformanceSecurity = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/ai-performance">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回性能评估
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight">安全与合规评估</h1>
          <p className="text-muted-foreground mt-2">全面的AI系统安全性与合规性评估</p>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">页面建设中</h2>
          <p className="text-muted-foreground mb-6">
            安全评估方法与标准页面正在建设中，敬请期待。
          </p>
          <Button asChild>
            <Link to="/ai-performance/contact">
              预约安全评估
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PerformanceSecurity;
