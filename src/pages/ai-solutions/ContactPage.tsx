
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import ContactForm from '@/components/ui/ContactForm';

const SolutionsContact = () => {
  return (
    <SecondaryPageLayout
      title="行业解决方案咨询"
      description="获取针对您所在行业的专业AI解决方案"
      backLink="/ai-solutions"
      backLabel="返回行业解决方案"
      className="my-8"
    >
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
    </SecondaryPageLayout>
  );
};

export default SolutionsContact;
