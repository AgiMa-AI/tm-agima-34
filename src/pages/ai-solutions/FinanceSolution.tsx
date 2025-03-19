
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const FinanceSolution = () => {
  return (
    <SecondaryPageLayout
      title="金融科技解决方案"
      description="智能金融服务与风控解决方案"
      backLink="/ai-solutions"
      backLabel="返回行业解决方案"
    >
      <UnderConstruction 
        contactLink="/ai-solutions/contact"
        contactLabel="获取解决方案咨询"
        message="详细金融解决方案页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default FinanceSolution;
