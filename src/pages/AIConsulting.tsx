
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, BrainCircuit, ClipboardList, Target, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AIConsulting = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">AI咨询顾问</h1>
            <Button variant="outline" asChild>
              <Link to="/ai-consulting/contact">
                预约咨询服务
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground">
            专业的AI战略规划与实施顾问服务，助力企业智能化转型
          </p>
        </div>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-fit md:grid-cols-4">
            <TabsTrigger value="services">咨询服务</TabsTrigger>
            <TabsTrigger value="team">顾问团队</TabsTrigger>
            <TabsTrigger value="process">服务流程</TabsTrigger>
            <TabsTrigger value="cases">成功案例</TabsTrigger>
          </TabsList>
          
          <TabsContent value="services" className="space-y-6">
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>AI战略咨询</CardTitle>
                    <CardDescription>制定企业AI发展战略</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    帮助企业制定全面的AI战略规划，包括技术路线图、资源配置、业务目标对齐等，确保AI投资的最大回报。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">需求分析</Badge>
                    <Badge variant="outline" className="bg-primary/10">战略规划</Badge>
                    <Badge variant="outline" className="bg-primary/10">路线制定</Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-consulting/strategy">
                      了解详情
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>技术选型咨询</CardTitle>
                    <CardDescription>AI技术与方案评估</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    评估分析各类AI技术与解决方案，结合企业实际需求，推荐最适合的技术路线、模型选择和部署方案。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">技术评估</Badge>
                    <Badge variant="outline" className="bg-primary/10">方案比较</Badge>
                    <Badge variant="outline" className="bg-primary/10">最佳实践</Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-consulting/technology">
                      了解详情
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <ClipboardList className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>项目实施咨询</CardTitle>
                    <CardDescription>AI项目落地与管理</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    提供AI项目全生命周期的专业指导，包括需求定义、团队组建、敏捷实施、风险管控、效果评估等关键环节。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">实施规划</Badge>
                    <Badge variant="outline" className="bg-primary/10">项目管理</Badge>
                    <Badge variant="outline" className="bg-primary/10">质量控制</Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-consulting/implementation">
                      了解详情
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>团队能力建设</CardTitle>
                    <CardDescription>AI人才培养与组织优化</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    帮助企业建立AI人才梯队与组织架构，提供专业培训课程与实践指导，打造企业自主AI创新能力。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">团队构建</Badge>
                    <Badge variant="outline" className="bg-primary/10">能力培训</Badge>
                    <Badge variant="outline" className="bg-primary/10">组织优化</Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-consulting/training">
                      了解详情
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>AI知识与培训</CardTitle>
                    <CardDescription>专业AI知识分享</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    提供AI前沿技术培训与知识分享，包括定制化企业内训、研讨会、案例分析等，提升团队AI素养与认知。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">企业内训</Badge>
                    <Badge variant="outline" className="bg-primary/10">专题研讨</Badge>
                    <Badge variant="outline" className="bg-primary/10">案例分析</Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-consulting/knowledge">
                      了解详情
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-10 bg-muted/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold">需要专属咨询服务？</h3>
                  <p className="text-muted-foreground mt-1">
                    我们的专业顾问团队将为您提供一对一定制化咨询服务，助力企业AI转型与创新。
                  </p>
                </div>
                <Button size="lg" className="shrink-0" asChild>
                  <Link to="/ai-consulting/contact">预约咨询顾问</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="team">
            <div className="mt-6 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">顾问团队</h2>
                <p className="text-muted-foreground mt-2">
                  我们的顾问团队由AI领域资深专家与行业实践者组成，拥有丰富的实战经验
                </p>
              </div>
              
              <Card className="bg-muted/30 border-dashed">
                <CardHeader>
                  <CardTitle>顾问团队页面建设中</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    我们正在完善顾问团队成员介绍，包括各位专家的专业背景、研究方向与项目经验。敬请期待！
                  </p>
                  <Button variant="outline" className="mt-6" asChild>
                    <Link to="/ai-consulting/contact">
                      提前接洽顾问团队
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="process">
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">咨询服务流程</h2>
                <p className="text-muted-foreground mt-2">
                  我们采用科学高效的咨询服务流程，确保为客户提供专业价值
                </p>
              </div>
              
              <div className="relative border-l border-primary/20 ml-4 mt-8 space-y-10 pl-6 py-4">
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary">
                    1
                  </div>
                  <h3 className="text-xl font-medium">初步沟通与需求分析</h3>
                  <p className="text-muted-foreground mt-2">
                    了解企业现状、业务目标和面临的挑战，明确咨询需求和期望目标。
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary">
                    2
                  </div>
                  <h3 className="text-xl font-medium">咨询方案制定</h3>
                  <p className="text-muted-foreground mt-2">
                    基于需求分析，制定详细的咨询方案，包括工作内容、时间安排、交付物等。
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary">
                    3
                  </div>
                  <h3 className="text-xl font-medium">深入调研与分析</h3>
                  <p className="text-muted-foreground mt-2">
                    顾问团队进行深入调研，收集相关数据和资料，进行系统性分析。
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary">
                    4
                  </div>
                  <h3 className="text-xl font-medium">方案设计与建议</h3>
                  <p className="text-muted-foreground mt-2">
                    基于分析结果，提出具体解决方案和实施建议，并进行讨论优化。
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary">
                    5
                  </div>
                  <h3 className="text-xl font-medium">实施指导与跟进</h3>
                  <p className="text-muted-foreground mt-2">
                    提供方案实施指导，并进行定期跟进，确保顺利落地。
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary">
                    6
                  </div>
                  <h3 className="text-xl font-medium">效果评估与优化</h3>
                  <p className="text-muted-foreground mt-2">
                    对实施效果进行评估，提出持续优化建议，确保长期价值。
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cases">
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">成功案例</h2>
                <p className="text-muted-foreground mt-2">
                  我们已为众多企业提供了专业的AI咨询服务，助力其数字化转型
                </p>
              </div>
              
              <Card className="bg-muted/30 border-dashed">
                <CardHeader>
                  <CardTitle>案例展示页面建设中</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    我们正在整理典型咨询案例，包括背景介绍、挑战分析、解决方案和实施效果等详细内容。敬请期待！
                  </p>
                  <Button variant="outline" className="mt-6" asChild>
                    <Link to="/ai-consulting/contact">
                      申请获取案例资料
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AIConsulting;
