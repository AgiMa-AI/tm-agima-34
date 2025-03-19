
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const ConsultingStrategy = () => {
  return (
    <SecondaryPageLayout
      title="AI战略咨询"
      description="制定企业AI发展战略与路线图"
      backLink="/ai-consulting"
      backLabel="返回AI咨询顾问"
    >
      <UnderConstruction 
        contactLink="/ai-consulting/contact"
        contactLabel="预约战略咨询"
        message="详细战略咨询服务内容页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default ConsultingStrategy;
