
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

const PerformanceContact = () => {
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
          
          <h1 className="text-3xl font-bold tracking-tight">预约评估服务</h1>
          <p className="text-muted-foreground mt-2">获取专业的AI系统性能评估服务</p>
        </div>
        
        <div className="my-8">
          <ContactForm 
            title="AI性能评估服务预约" 
            description="请填写以下信息，我们的性能评估专家将与您联系"
            submitButtonText="预约评估"
            serviceOptions={[
              { value: "benchmark", label: "性能基准测试" },
              { value: "security", label: "安全性评估" },
              { value: "optimization", label: "系统优化" },
              { value: "comprehensive", label: "综合评估" }
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PerformanceContact;
