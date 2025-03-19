
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const ConsultingImplementation = () => {
  return (
    <SecondaryPageLayout
      title="项目实施咨询"
      description="AI项目落地与管理咨询服务"
      backLink="/ai-consulting"
      backLabel="返回AI咨询顾问"
    >
      <UnderConstruction 
        contactLink="/ai-consulting/contact"
        contactLabel="预约实施咨询"
        message="详细项目实施咨询服务内容页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default ConsultingImplementation;
