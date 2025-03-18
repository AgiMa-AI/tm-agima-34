
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

const SolutionsContact = () => {
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
          
          <h1 className="text-3xl font-bold tracking-tight">行业解决方案咨询</h1>
          <p className="text-muted-foreground mt-2">获取针对您所在行业的专业AI解决方案</p>
        </div>
        
        <div className="my-8">
          <ContactForm 
            title="行业解决方案咨询" 
            description="请填写以下信息，我们的行业专家将针对您的需求提供定制化方案"
            serviceOptions={[
              { value: "finance", label: "金融行业解决方案" },
              { value: "medical", label: "医疗行业解决方案" },
              { value: "manufacturing", label: "制造业解决方案" },
              { value: "retail", label: "零售行业解决方案" },
              { value: "other", label: "其他行业" }
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsContact;
