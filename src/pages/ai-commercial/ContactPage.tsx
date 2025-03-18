
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

const CommercialContact = () => {
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
          
          <h1 className="text-3xl font-bold tracking-tight">商业AGI咨询</h1>
          <p className="text-muted-foreground mt-2">获取专业的商业AGI服务咨询</p>
        </div>
        
        <div className="my-8">
          <ContactForm 
            title="商业AGI服务咨询" 
            description="请填写以下信息，我们的商业AGI专家将尽快与您联系"
            serviceOptions={[
              { value: "agi-deployment", label: "AGI部署服务" },
              { value: "agi-customization", label: "AGI定制开发" },
              { value: "agi-integration", label: "AGI系统集成" },
              { value: "agi-consulting", label: "AGI战略咨询" }
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CommercialContact;
