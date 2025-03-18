
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, FileType, Gem, Code, Zap, GitFork, Shield } from 'lucide-react';

const AICustomization = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full">
            <div className="flex flex-col gap-2 mb-6">
              <h1 className="text-3xl font-bold tracking-tight">专属AI定制服务</h1>
              <p className="text-muted-foreground">根据您的业务需求，定制专属的人工智能解决方案</p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-fit md:grid-cols-4">
                <TabsTrigger value="overview">方案概览</TabsTrigger>
                <TabsTrigger value="models">定制模型</TabsTrigger>
                <TabsTrigger value="process">服务流程</TabsTrigger>
                <TabsTrigger value="cases">成功案例</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <BrainCircuit className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>企业专属AI</CardTitle>
                        <CardDescription>为企业量身定制的AI解决方案</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        我们为企业提供定制化的AI解决方案，根据企业特定数据和业务流程构建专属模型，实现业务自动化、智能化决策和效率提升。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-primary/10">数据分析</Badge>
                        <Badge variant="outline" className="bg-primary/10">流程优化</Badge>
                        <Badge variant="outline" className="bg-primary/10">自然语言处理</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <FileType className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>行业专用AGI</CardTitle>
                        <CardDescription>面向特定行业的AGI解决方案</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        针对金融、医疗、制造等特定行业，我们开发了深度结合行业知识和规范的AGI模型，帮助行业客户应对特有挑战。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-primary/10">行业知识库</Badge>
                        <Badge variant="outline" className="bg-primary/10">合规性</Badge>
                        <Badge variant="outline" className="bg-primary/10">专业术语理解</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Gem className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>高端定制服务</CardTitle>
                        <CardDescription>顶级AI团队提供的尖端定制服务</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        由顶尖AI专家组成的团队提供高端定制服务，包括预训练模型微调、多模态系统开发、专用大模型构建等先进AI技术实现。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-primary/10">专家团队</Badge>
                        <Badge variant="outline" className="bg-primary/10">前沿技术</Badge>
                        <Badge variant="outline" className="bg-primary/10">一对一服务</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Code className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>API与集成服务</CardTitle>
                        <CardDescription>无缝集成到现有系统中的AI能力</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        提供易于集成的API接口和全面的系统集成服务，让AI能力无缝嵌入您现有的业务系统和工作流程中。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-primary/10">API开发</Badge>
                        <Badge variant="outline" className="bg-primary/10">系统集成</Badge>
                        <Badge variant="outline" className="bg-primary/10">流程自动化</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-col gap-4 mt-8">
                  <h2 className="text-2xl font-bold">我们的优势</h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">高性能算力保障</h3>
                        <p className="text-sm text-muted-foreground">强大的算力资源确保模型训练和推理的高效执行</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GitFork className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">灵活定制化程度</h3>
                        <p className="text-sm text-muted-foreground">从微调到完全定制开发，满足不同层次的需求</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">数据安全与隐私</h3>
                        <p className="text-sm text-muted-foreground">严格的数据保护措施和合规性保障</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="models">
                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-6">专业定制模型服务</h2>
                  <p className="text-muted-foreground mb-8">内容正在建设中，敬请期待...</p>
                </div>
              </TabsContent>
              
              <TabsContent value="process">
                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-6">定制服务流程</h2>
                  <p className="text-muted-foreground mb-8">内容正在建设中，敬请期待...</p>
                </div>
              </TabsContent>
              
              <TabsContent value="cases">
                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-6">成功案例展示</h2>
                  <p className="text-muted-foreground mb-8">内容正在建设中，敬请期待...</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AICustomization;
