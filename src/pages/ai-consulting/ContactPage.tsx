
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import ContactForm from '@/components/ui/ContactForm';

const ConsultingContact = () => {
  return (
    <SecondaryPageLayout
      title="预约咨询服务"
      description="获取专业的AI咨询顾问服务"
      backLink="/ai-consulting"
      backLabel="返回AI咨询顾问"
      className="my-8"
    >
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
    </SecondaryPageLayout>
  );
};

export default ConsultingContact;
