import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gem, Star, Users, Brain, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnderConstruction from '@/components/ui/UnderConstruction';

const PremiumService = () => {
  return (
    <SecondaryPageLayout
      title="高端定制服务"
      description="由顶尖AI专家提供的尖端定制服务"
      backLink="/ai-customization"
      backLabel="返回AI定制服务"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">服务概览</TabsTrigger>
          <TabsTrigger value="experts">专家团队</TabsTrigger>
          <TabsTrigger value="cases">成功案例</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Gem className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">高端AI定制服务</h3>
                    <p className="text-muted-foreground">
                      由顶尖AI专家组成的团队提供高端定制服务，包括预训练模型微调、多模态系统开发、
                      专用大模型构建等先进AI技术实现。我们为对AI性能、准确性和创新性有极高要求的客户提供一对一服务。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="bg-primary/10 p-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    专属模型预训练
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      基于您的业务领域和数据，打造完全专属的基础模型，确保最佳性能和独特性
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5">高性能</Badge>
                      <Badge variant="outline" className="bg-primary/5">专有技术</Badge>
                      <Badge variant="outline" className="bg-primary/5">定制训练</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="bg-primary/10 p-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    多模态系统开发
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      结合文本、图像、语音等多种数据类型的智能系统开发，打造全方位智能体验
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5">图像识别</Badge>
                      <Badge variant="outline" className="bg-primary/5">语音处理</Badge>
                      <Badge variant="outline" className="bg-primary/5">多模态融合</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="bg-primary/10 p-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    专有算法研发
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      针对特定问题开发专有算法和模型，为您的业务挑战提供独特的AI解决方案
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5">专利技术</Badge>
                      <Badge variant="outline" className="bg-primary/5">算法优化</Badge>
                      <Badge variant="outline" className="bg-primary/5">性能调优</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link to="/ai-customization/contact">
                  获取高端服务咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="experts">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">专家团队</h3>
                    <p className="text-muted-foreground">
                      我们的高端定制服务由行业领先的AI专家团队提供，团队成员来自顶尖大学和科技公司，拥有丰富的研究和实践经验。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <UnderConstruction 
              contactLink="/ai-customization/contact"
              contactLabel="联系专家团队"
              message="专家团队详细介绍正在筹��中，请通过咨询联系我们了解更多关于团队成员的信息。" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="cases">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">成功案例</h3>
                    <p className="text-muted-foreground">
                      查看我们为各行各业客户提供的高端AI定制服务案例，了解我们如何帮助他们解决复杂挑战。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <UnderConstruction 
              contactLink="/ai-customization/contact"
              contactLabel="了解更多案例"
              message="成功案例详细内容正在整理中，请通过咨询联系我们了解更多成功案例和实施效果。" 
            />
          </div>
        </TabsContent>
      </Tabs>
    </SecondaryPageLayout>
  );
};

export default PremiumService;
