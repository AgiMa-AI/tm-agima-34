
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const ManufacturingSolution = () => {
  return (
    <SecondaryPageLayout
      title="制造业解决方案"
      description="智能制造与质量控制系统"
      backLink="/ai-solutions"
      backLabel="返回行业解决方案"
    >
      <UnderConstruction 
        contactLink="/ai-solutions/contact"
        contactLabel="获取解决方案咨询"
        message="详细制造业解决方案页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default ManufacturingSolution;
