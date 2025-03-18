
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import EnterpriseOverview from './enterprise/EnterpriseOverview';
import ImplementationDetails from './enterprise/ImplementationDetails';
import SuccessCases from './enterprise/SuccessCases';

const EnterpriseAI = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/ai-customization">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回AI定制服务
            </Link>
          </Button>
        </div>
        
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
      </div>
    </Layout>
  );
};

export default EnterpriseAI;
