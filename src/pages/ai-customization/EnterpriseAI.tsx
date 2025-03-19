
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EnterpriseOverview from './enterprise/EnterpriseOverview';
import ImplementationDetails from './enterprise/ImplementationDetails';
import SuccessCases from './enterprise/SuccessCases';

const EnterpriseAI = () => {
  return (
    <SecondaryPageLayout
      title="企业AI定制"
      description="企业级AI解决方案与私有化部署"
      backLink="/ai-customization"
      backLabel="返回AI定制服务"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">方案概览</TabsTrigger>
          <TabsTrigger value="implementation">实施细节</TabsTrigger>
          <TabsTrigger value="cases">成功案例</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <EnterpriseOverview />
        </TabsContent>
        
        <TabsContent value="implementation">
          <ImplementationDetails />
        </TabsContent>
        
        <TabsContent value="cases">
          <SuccessCases />
        </TabsContent>
      </Tabs>
    </SecondaryPageLayout>
  );
};

export default EnterpriseAI;
