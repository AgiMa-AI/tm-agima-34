
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

const ConsultingContact = () => {
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
          
          <h1 className="text-3xl font-bold tracking-tight">预约咨询服务</h1>
          <p className="text-muted-foreground mt-2">获取专业的AI咨询顾问服务</p>
        </div>
        
        <div className="my-8">
          <ContactForm 
            title="AI咨询顾问预约" 
            description="请填写以下信息，我们的AI咨询专家将安排与您的会面"
            submitButtonText="预约咨询"
            serviceOptions={[
              { value: "strategy", label: "AI战略咨询" },
              { value: "implementation", label: "AI实施咨询" },
              { value: "training", label: "AI培训服务" },
              { value: "assessment", label: "AI能力评估" }
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ConsultingContact;
