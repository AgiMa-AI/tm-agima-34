
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart4, Clock, Cpu, LineChart, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIPerformance = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">性能评估</h1>
            <Button variant="outline" asChild>
              <Link to="/ai-performance/contact">
                预约评估服务
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground">
            全面客观的AI模型与服务评估体系，帮助您选择最适合的AI解决方案
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-fit">
            <TabsTrigger value="overview">服务概览</TabsTrigger>
            <TabsTrigger value="benchmarks">基准测试</TabsTrigger>
            <TabsTrigger value="methodology">评估方法</TabsTrigger>
            <TabsTrigger value="reports">评估报告</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BarChart4 className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>性能基准测试</CardTitle>
                    <CardDescription>客观量化的性能对比</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    通过标准化测试集和任务，对不同AI模型和服务进行客观量化的性能评估，提供可靠的性能对比数据。
                  </p>
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-performance/benchmarks">
                      了解更多
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <LineChart className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>成本效益分析</CardTitle>
                    <CardDescription>投资回报评估</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    结合性能数据与成本因素，为您提供全面的成本效益分析，帮助您在预算范围内选择最具价值的AI解决方案。
                  </p>
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-performance/cost-analysis">
                      了解更多
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>安全与合规评估</CardTitle>
                    <CardDescription>全面的安全检测</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    对AI系统的安全性、隐私保护、合规性等方面进行全面评估，识别潜在风险并提供改进建议。
                  </p>
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-performance/security">
                      了解更多
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>长期稳定性测试</CardTitle>
                    <CardDescription>持续可靠性验证</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    通过长期运行测试，评估AI系统在持续负载下的稳定性、一致性和可靠性，确保生产环境中的稳定表现。
                  </p>
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link to="/ai-performance/stability">
                      了解更多
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 bg-muted/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold">开始您的AI性能评估</h3>
                  <p className="text-muted-foreground mt-1">
                    我们的专业团队将为您提供定制化的评估服务，帮助您做出明智的技术决策。
                  </p>
                </div>
                <Button size="lg" className="shrink-0" asChild>
                  <Link to="/ai-performance/contact">预约评估服务</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="benchmarks">
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">AI性能基准测试</h2>
              <p className="text-muted-foreground mt-2 mb-6">
                我们采用业界标准的基准测试方法，为不同类型的AI模型提供客观评估
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>大语言模型基准</CardTitle>
                    <CardDescription>评估语言理解与生成能力</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">测试内容</h4>
                        <p className="text-sm text-muted-foreground">
                          包括自然语言理解、知识问答、代码生成、推理能力、创意写作等多维度评估。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">评估指标</h4>
                        <p className="text-sm text-muted-foreground">
                          准确率、流畅度、相关性、创新性、资源消耗等多项指标。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>计算机视觉基准</CardTitle>
                    <CardDescription>评估图像处理与识别能力</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">测试内容</h4>
                        <p className="text-sm text-muted-foreground">
                          包括物体检测、图像分割、图像生成、视频处理、场景理解等任务。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">评估指标</h4>
                        <p className="text-sm text-muted-foreground">
                          精确度、召回率、F1得分、推理速度、资源占用等指标。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">最新基准测试结果</h3>
                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="text-center py-10">
                      <Cpu className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h4 className="text-lg font-medium">我们正在准备最新的基准测试报告</h4>
                      <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                        我们的评估团队正在对最新的AI模型进行全面测试，详细报告将于近期发布。
                        您可以提前预约获取报告或定制化评估服务。
                      </p>
                      <Button variant="outline" className="mt-6" asChild>
                        <Link to="/ai-performance/contact">
                          预约获取报告
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="methodology">
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">评估方法论</h2>
                <p className="text-muted-foreground mt-2">
                  我们采用科学严谨的评估方法，确保评估结果的客观性与可比性
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>标准化测试流程</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      制定严格的标准化测试流程，确保不同模型在相同条件下进行评估，
                      保证测试结果的可比性和一致性。
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>多维度指标体系</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      建立涵盖性能、效率、可靠性、安全性等多维度的评估指标体系，
                      全面反映AI系统的各方面能力。
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>真实场景验证</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      除标准基准测试外，还提供真实业务场景下的实践验证，
                      评估AI系统在实际应用中的表现与价值。
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>方法论详解页面即将上线</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    我们正在完善评估方法论的详细介绍页面，敬请期待。如有急需，请直接联系我们的评估专家。
                  </p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link to="/ai-performance/contact">
                      联系评估专家
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reports">
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">评估报告</h2>
                <p className="text-muted-foreground mt-2">
                  我们提供专业详实的评估报告，帮助您了解AI系统的真实表现
                </p>
              </div>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>评估报告示例与模板</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    我们正在整理公开发布的评估报告示例，敬请期待。您可以提前联系我们获取更多信息。
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/ai-performance/contact">
                      获取报告样例
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="mt-10 bg-muted/30 rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">需要定制化评估服务？</h3>
                    <p className="text-muted-foreground mt-1">
                      我们的专业团队可以根据您的具体需求，提供定制化的AI系统评估服务。
                    </p>
                  </div>
                  <Button size="lg" className="shrink-0" asChild>
                    <Link to="/ai-performance/contact">联系我们</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AIPerformance;
