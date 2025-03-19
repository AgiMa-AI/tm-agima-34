
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import ContactForm from '@/components/ui/ContactForm';

const CommercialContact = () => {
  return (
    <SecondaryPageLayout
      title="商业AGI咨询"
      description="获取专业的商业AGI服务咨询"
      backLink="/ai-commercial"
      backLabel="返回商业AGI服务"
      className="my-8"
    >
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
    </SecondaryPageLayout>
  );
};

export default CommercialContact;
