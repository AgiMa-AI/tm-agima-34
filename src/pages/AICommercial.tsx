
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Cpu, BarChart3, Users, Code, Search, FileText, MessageSquare, BrainCircuit } from 'lucide-react';

const AICommercial = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold tracking-tight">商业AGI服务</h1>
          <p className="text-muted-foreground">企业级AGI解决方案，助力商业智能化升级</p>
        </div>

        <Tabs defaultValue="solutions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-fit md:grid-cols-4">
            <TabsTrigger value="solutions">解决方案</TabsTrigger>
            <TabsTrigger value="pricing">价格套餐</TabsTrigger>
            <TabsTrigger value="api">API服务</TabsTrigger>
            <TabsTrigger value="support">支持服务</TabsTrigger>
          </TabsList>
          
          <TabsContent value="solutions">
            <div className="grid gap-6 mt-6 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    智能搜索与检索
                  </CardTitle>
                  <CardDescription>
                    企业知识库与文档的智能检索系统
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>企业内部文档智能检索</li>
                    <li>多源数据整合与语义搜索</li>
                    <li>精准答案提取与知识推荐</li>
                    <li>文档内容自动摘要与总结</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">了解详情</Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    客户服务机器人
                  </CardTitle>
                  <CardDescription>
                    全渠道智能客服系统与对话机器人
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>多语言、多渠道客户服务</li>
                    <li>人工智能情感分析</li>
                    <li>自动工单分类与处理</li>
                    <li>与CRM系统无缝集成</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">了解详情</Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    内容生成与管理
                  </CardTitle>
                  <CardDescription>
                    多媒体内容自动生成与管理系统
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>市场营销内容自动生成</li>
                    <li>多语言本地化与翻译</li>
                    <li>内容一致性与品牌声调管理</li>
                    <li>多渠道内容发布与管理</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">了解详情</Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    数据分析与洞察
                  </CardTitle>
                  <CardDescription>
                    商业数据的AI驱动分析与洞察
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>自动化数据分析与报告生成</li>
                    <li>趋势预测与异常检测</li>
                    <li>自然语言查询商业数据</li>
                    <li>可视化洞察与决策支持</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">了解详情</Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    流程自动化
                  </CardTitle>
                  <CardDescription>
                    智能工作流与业务流程自动化
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>文档处理与信息提取</li>
                    <li>多系统工作流整合</li>
                    <li>规则引擎与智能决策</li>
                    <li>复杂流程的自动化处理</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">了解详情</Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    开发者工具与加速
                  </CardTitle>
                  <CardDescription>
                    AI驱动的软件开发加速工具
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>代码生成与重构辅助</li>
                    <li>智能调试与错误检测</li>
                    <li>API设计与文档自动化</li>
                    <li>测试用例生成与优化</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">了解详情</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">行业解决方案</h2>
              <div className="grid gap-4 md:grid-cols-4">
                <Card className="p-4 flex flex-col items-center text-center">
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">金融服务</h3>
                  <p className="text-sm text-muted-foreground mt-1">风险分析、合规审查、智能投顾</p>
                </Card>
                
                <Card className="p-4 flex flex-col items-center text-center">
                  <BrainCircuit className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">医疗健康</h3>
                  <p className="text-sm text-muted-foreground mt-1">患者数据分析、诊断辅助、医学研究</p>
                </Card>
                
                <Card className="p-4 flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">零售与电商</h3>
                  <p className="text-sm text-muted-foreground mt-1">个性化推荐、需求预测、供应链优化</p>
                </Card>
                
                <Card className="p-4 flex flex-col items-center text-center">
                  <Cpu className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">制造业</h3>
                  <p className="text-sm text-muted-foreground mt-1">预测性维护、质量控制、供应链优化</p>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing">
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-6">商业服务价格套餐</h2>
              <p className="text-muted-foreground mb-8">内容正在建设中，敬请期待...</p>
            </div>
          </TabsContent>
          
          <TabsContent value="api">
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-6">API开发与集成服务</h2>
              <p className="text-muted-foreground mb-8">内容正在建设中，敬请期待...</p>
            </div>
          </TabsContent>
          
          <TabsContent value="support">
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-6">技术支持与咨询服务</h2>
              <p className="text-muted-foreground mb-8">内容正在建设中，敬请期待...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AICommercial;
