
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ModelsSection from '@/components/ai-customization/ModelsSection';
import ServiceProcessSection from '@/components/ai-customization/ServiceProcessSection';
import CaseStudiesSection from '@/components/ai-customization/CaseStudiesSection';
import PageHeader from '@/components/ai-customization/PageHeader';
import ServiceCards from '@/components/ai-customization/ServiceCards';
import ServiceAdvantages from '@/components/ai-customization/ServiceAdvantages';

const AICustomization = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full">
            <PageHeader />

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-fit md:grid-cols-4">
                <TabsTrigger value="overview">方案概览</TabsTrigger>
                <TabsTrigger value="models">定制模型</TabsTrigger>
                <TabsTrigger value="process">服务流程</TabsTrigger>
                <TabsTrigger value="cases">成功案例</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <ServiceCards />
                <ServiceAdvantages />
              </TabsContent>
              
              <TabsContent value="models">
                <ModelsSection />
              </TabsContent>
              
              <TabsContent value="process">
                <ServiceProcessSection />
              </TabsContent>
              
              <TabsContent value="cases">
                <CaseStudiesSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AICustomization;
