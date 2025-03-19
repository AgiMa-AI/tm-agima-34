
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const PerformanceBenchmarks = () => {
  return (
    <SecondaryPageLayout
      title="AI性能基准测试"
      description="量化的AI模型性能评估指标"
      backLink="/ai-performance"
      backLabel="返回性能评估"
    >
      <UnderConstruction 
        contactLink="/ai-performance/contact"
        contactLabel="预约评估服务"
        message="详细基准测试方法与结果页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default PerformanceBenchmarks;
