
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import UnderConstruction from '@/components/ui/UnderConstruction';

const CommercialEnterpriseAI = () => {
  return (
    <SecondaryPageLayout
      title="企业AGI部署"
      description="私有化部署与定制服务"
      backLink="/ai-commercial"
      backLabel="返回商业AGI服务"
    >
      <UnderConstruction 
        contactLink="/ai-commercial/contact"
        contactLabel="获取服务咨询"
        message="企业级AGI部署解决方案详情页面正在建设中，敬请期待。" 
      />
    </SecondaryPageLayout>
  );
};

export default CommercialEnterpriseAI;
