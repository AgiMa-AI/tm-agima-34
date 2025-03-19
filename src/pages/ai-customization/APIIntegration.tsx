import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Code, GitBranch, Laptop, Cloud, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import UnderConstruction from '@/components/ui/UnderConstruction';

const APIIntegration = () => {
  return (
    <SecondaryPageLayout
      title="API与集成服务"
      description="无缝集成到现有系统中的AI能力"
      backLink="/ai-customization"
      backLabel="返回AI定制服务"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">服务概览</TabsTrigger>
          <TabsTrigger value="apis">API文档</TabsTrigger>
          <TabsTrigger value="cases">集成案例</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">API与集成服务</h3>
                    <p className="text-muted-foreground">
                      我们提供易于集成的API接口和全面的系统集成服务，让AI能力无缝嵌入您现有的业务系统和工作流程中。
                      通过标准化接口和定制化集成方案，帮助您快速实现业务智能化升级。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GitBranch className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">标准API接口</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  提供标准化的REST API和WebSocket接口，支持多种编程语言和框架接入
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Laptop className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">定制化集成</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  根据您的系统架构和业务需求，提供定制化集成方案和开发服务
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">安全保障</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  全面的API安全保障措施，包括加密传输、身份验证和访问控制
                </p>
              </Card>
            </div>
            
            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start md:items-center gap-4 flex-col md:flex-row md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Cloud className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">开始使用API服务</h3>
                      <p className="text-sm text-muted-foreground">浏览我们的API文档或联系我们获取定制集成方案</p>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                    <Button variant="outline" asChild className="flex-1 md:flex-none">
                      <Link to="#apis">
                        查看API文档
                      </Link>
                    </Button>
                    <Button asChild className="flex-1 md:flex-none">
                      <Link to="/ai-customization/contact">
                        获取集成咨询
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="apis">
          <UnderConstruction 
            contactLink="/ai-customization/contact"
            contactLabel="联系获取API文档"
            message="API文档正在整理中，请通过咨询联系我们获取最新的API接口文档和集成指南。" 
          />
        </TabsContent>
        
        <TabsContent value="cases">
          <UnderConstruction 
            contactLink="/ai-customization/contact"
            contactLabel="了解集成案例"
            message="系统集成案例正在整理中，请通过咨询联系我们了解更多关于API集成的成功案例。" 
          />
        </TabsContent>
      </Tabs>
    </SecondaryPageLayout>
  );
};

export default APIIntegration;
