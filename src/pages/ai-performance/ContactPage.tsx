
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import ContactForm from '@/components/ui/ContactForm';

const PerformanceContact = () => {
  return (
    <SecondaryPageLayout
      title="预约评估服务"
      description="获取专业的AI系统性能评估服务"
      backLink="/ai-performance"
      backLabel="返回性能评估"
      className="my-8"
    >
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
    </SecondaryPageLayout>
  );
};

export default PerformanceContact;
