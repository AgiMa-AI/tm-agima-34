
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const PerformanceSecurity = () => {
  return (
    <SecondaryPageLayout
      title="安全与合规评估"
      description="全面的AI系统安全性与合规性评估"
      backLink="/ai-performance"
      backLabel="返回性能评估"
    >
      <UnderConstruction 
        contactLink="/ai-performance/contact"
        contactLabel="预约安全评估"
        message="安全评估方法与标准页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default PerformanceSecurity;
