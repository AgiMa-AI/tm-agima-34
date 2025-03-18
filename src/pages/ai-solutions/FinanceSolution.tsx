
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const FinanceSolution = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/ai-solutions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回行业解决方案
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight">金融科技解决方案</h1>
          <p className="text-muted-foreground mt-2">智能金融服务与风控解决方案</p>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">页面建设中</h2>
          <p className="text-muted-foreground mb-6">
            详细金融解决方案页面正在建设中，敬请期待。
          </p>
          <Button asChild>
            <Link to="/ai-solutions/contact">
              获取解决方案咨询
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default FinanceSolution;
