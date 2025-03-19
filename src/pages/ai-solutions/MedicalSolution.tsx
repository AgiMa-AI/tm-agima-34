
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const MedicalSolution = () => {
  return (
    <SecondaryPageLayout
      title="医疗健康解决方案"
      description="智能医疗助手与健康管理系统"
      backLink="/ai-solutions"
      backLabel="返回行业解决方案"
    >
      <UnderConstruction 
        contactLink="/ai-solutions/contact"
        contactLabel="获取解决方案咨询"
        message="详细医疗解决方案页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default MedicalSolution;
