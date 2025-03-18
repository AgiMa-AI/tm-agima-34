
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ConsultingImplementation = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/ai-consulting">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回AI咨询顾问
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight">项目实施咨询</h1>
          <p className="text-muted-foreground mt-2">AI项目落地与管理咨询服务</p>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">页面建设中</h2>
          <p className="text-muted-foreground mb-6">
            详细项目实施咨询服务内容页面正在建设中，敬请期待。
          </p>
          <Button asChild>
            <Link to="/ai-consulting/contact">
              预约实施咨询
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ConsultingImplementation;
