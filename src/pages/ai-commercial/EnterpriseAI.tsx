
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CommercialEnterpriseAI = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/ai-commercial">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回商业AGI服务
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight">企业AGI部署</h1>
          <p className="text-muted-foreground mt-2">私有化部署与定制服务</p>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">页面建设中</h2>
          <p className="text-muted-foreground mb-6">
            该页面正在建设中，我们将尽快上线完整内容。
          </p>
          <Button asChild>
            <Link to="/ai-commercial/contact">
              获取服务咨询
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CommercialEnterpriseAI;
