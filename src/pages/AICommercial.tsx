
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, CircleDollarSign, LineChart, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AICommercial = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">商业AGI服务</h1>
            <Button variant="outline" asChild>
              <Link to="/ai-commercial/contact">
                获取商业咨询
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground">
            面向企业客户的AGI服务，提供从部署到运维的全套解决方案
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-fit">
            <TabsTrigger value="overview">服务概览</TabsTrigger>
            <TabsTrigger value="enterprise">企业方案</TabsTrigger>
            <TabsTrigger value="pricing">定价策略</TabsTrigger>
            <TabsTrigger value="cases">成功案例</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Building2 className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>企业AGI部署</CardTitle>
                    <CardDescription>私有化部署与定制服务</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    为企业提供AGI模型的私有化部署服务，包括模型选型、环境配置、安全加固和性能优化。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">私有部署</Badge>
                    <Badge variant="outline" className="bg-primary/10">定制训练</Badge>
                    <Badge variant="outline" className="bg-primary/10">安全合规</Badge>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" size="sm" className="p-0" asChild>
                      <Link to="/ai-commercial/enterprise">
                        了解更多
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CircleDollarSign className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>商用授权与许可</CardTitle>
                    <CardDescription>灵活的商业授权方案</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    提供多种灵活的商业授权选项，满足不同规模企业的需求，包括API调用、模型许可和定制开发。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">API服务</Badge>
                    <Badge variant="outline" className="bg-primary/10">商业许可</Badge>
                    <Badge variant="outline" className="bg-primary/10">专属服务</Badge>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" size="sm" className="p-0" asChild>
                      <Link to="/ai-commercial/licensing">
                        了解更多
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <LineChart className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>商业智能分析</CardTitle>
                    <CardDescription>数据驱动的决策支持</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    结合AGI技术与商业数据分析，为企业提供智能化的决策支持系统，挖掘数据价值。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">数据分析</Badge>
                    <Badge variant="outline" className="bg-primary/10">预测模型</Badge>
                    <Badge variant="outline" className="bg-primary/10">决策支持</Badge>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" size="sm" className="p-0" asChild>
                      <Link to="/ai-commercial/analytics">
                        了解更多
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>合规与安全保障</CardTitle>
                    <CardDescription>守护数据与模型安全</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    提供AGI应用的合规评估与安全保障服务，确保企业AI应用符合监管要求，保护数据安全。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10">合规评估</Badge>
                    <Badge variant="outline" className="bg-primary/10">安全审计</Badge>
                    <Badge variant="outline" className="bg-primary/10">风险管控</Badge>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" size="sm" className="p-0" asChild>
                      <Link to="/ai-commercial/compliance">
                        了解更多
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="enterprise">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mt-4">企业AGI解决方案</h2>
              <p className="text-muted-foreground">我们为企业提供全面的AGI部署和应用服务，赋能企业数字化转型。</p>
              
              <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>私有化部署</CardTitle>
                    <CardDescription>在企业内部安全部署AGI系统</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>本地化模型部署与调优</li>
                      <li>安全隔离的计算环境</li>
                      <li>企业专属知识库接入</li>
                      <li>灵活的硬件资源配置</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>企业定制训练</CardTitle>
                    <CardDescription>基于企业数据的模型优化</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>行业专属数据集训练</li>
                      <li>企业术语与流程适配</li>
                      <li>领域知识强化</li>
                      <li>持续学习与优化</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>集成与对接</CardTitle>
                    <CardDescription>与现有企业系统无缝集成</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>ERP/CRM系统对接</li>
                      <li>内部知识管理系统集成</li>
                      <li>工作流自动化</li>
                      <li>API与接口定制开发</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mt-4">定价策略</h2>
              <p className="text-muted-foreground">我们提供灵活的定价模式，满足不同规模企业的需求。</p>
              
              <div className="grid gap-8 mt-8 md:grid-cols-3">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>基础版</CardTitle>
                    <CardDescription>适合中小企业的入门选择</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-4">¥49,800<span className="text-sm font-normal text-muted-foreground">/年</span></p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        标准API接口调用
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        每月100,000次请求
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        基础技术支持
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        公共云环境部署
                      </li>
                    </ul>
                    <Button className="w-full">联系销售</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/50 shadow-md relative">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                    推荐
                  </div>
                  <CardHeader>
                    <CardTitle>企业版</CardTitle>
                    <CardDescription>适合中大型企业的标准选择</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-4">¥199,800<span className="text-sm font-normal text-muted-foreground">/年</span></p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        私有化部署
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        无限次请求
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        专属技术支持
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        企业系统集成
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        基础模型定制
                      </li>
                    </ul>
                    <Button className="w-full">联系销售</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>定制版</CardTitle>
                    <CardDescription>适合大型企业的高级定制方案</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-4">定制报价</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        全面定制化开发
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        专属模型训练与调优
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        专家团队支持
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        企业级SLA保障
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        完整知识产权转让
                      </li>
                    </ul>
                    <Button className="w-full">获取定制方案</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cases">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mt-4">成功案例</h2>
              <p className="text-muted-foreground">我们已帮助众多企业成功实施AGI应用，提升业务效率。</p>
              
              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>金融风控智能化</CardTitle>
                    <CardDescription>某大型银行</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      为某大型银行部署私有化AGI系统，结合历史交易数据进行模型训练，实现智能风控与异常交易识别，将风险识别准确率提升30%，反应时间缩短80%。
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <Link to="/ai-commercial/cases/finance">
                        查看详情
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>制造业质检自动化</CardTitle>
                    <CardDescription>某汽车零部件制造商</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      为汽车零部件制造商开发基于AGI的视觉质检系统，集成工厂现有生产线，实现24小时自动化质检，缺陷识别率达99.7%，生产效率提升25%。
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <Link to="/ai-commercial/cases/manufacturing">
                        查看详情
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AICommercial;
