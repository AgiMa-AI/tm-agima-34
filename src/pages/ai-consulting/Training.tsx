
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const ConsultingTraining = () => {
  return (
    <SecondaryPageLayout
      title="团队能力建设"
      description="AI人才培养与组织优化服务"
      backLink="/ai-consulting"
      backLabel="返回AI咨询顾问"
    >
      <UnderConstruction 
        contactLink="/ai-consulting/contact"
        contactLabel="预约培训咨询"
        message="详细团队能力建设服务内容页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default ConsultingTraining;
