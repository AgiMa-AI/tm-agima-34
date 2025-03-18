
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const IndustryAI = () => {
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
          
          <h1 className="text-3xl font-bold tracking-tight">行业专用AGI</h1>
          <p className="text-muted-foreground mt-2">面向特定行业的AGI解决方案</p>
        </div>
        
        <Tabs defaultValue="finance" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="finance">金融行业</TabsTrigger>
            <TabsTrigger value="healthcare">医疗健康</TabsTrigger>
            <TabsTrigger value="manufacturing">制造业</TabsTrigger>
            <TabsTrigger value="retail">零售行业</TabsTrigger>
          </TabsList>
          
          <TabsContent value="finance">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>金融行业AGI解决方案</CardTitle>
                <CardDescription>为金融机构提供高度安全和合规的AI能力</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  我们的金融行业AGI解决方案专为银行、保险公司和投资机构设计，提供风险评估、欺诈检测和客户服务自动化等智能功能。所有模型满足金融行业严格的合规和安全标准。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-primary/10">风险评估</Badge>
                  <Badge variant="outline" className="bg-primary/10">欺诈检测</Badge>
                  <Badge variant="outline" className="bg-primary/10">客户服务</Badge>
                  <Badge variant="outline" className="bg-primary/10">合规监管</Badge>
                </div>
                <Button variant="outline" className="mt-2" asChild>
                  <Link to="/ai-customization/contact">申请定制方案</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="healthcare">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>医疗健康AGI解决方案</CardTitle>
                <CardDescription>助力医疗机构提升诊断和患者护理水平</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  我们的医疗健康AGI解决方案专为医院、诊所和研究机构设计，提供医学影像分析、患者数据解读和临床决策支持等功能。所有模型经过医学专家训练和验证，符合医疗数据隐私保护要求。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-primary/10">医学影像</Badge>
                  <Badge variant="outline" className="bg-primary/10">临床决策</Badge>
                  <Badge variant="outline" className="bg-primary/10">健康管理</Badge>
                  <Badge variant="outline" className="bg-primary/10">医疗研究</Badge>
                </div>
                <Button variant="outline" className="mt-2" asChild>
                  <Link to="/ai-customization/contact">申请定制方案</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="manufacturing">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>制造业AGI解决方案</CardTitle>
                <CardDescription>优化生产流程和质量控制的智能系统</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  我们的制造业AGI解决方案专为工厂和生产企业设计，提供预测性维护、质量控制自动化和供应链优化等功能。这些解决方案可与现有的工业系统无缝集成，提高生产效率和产品质量。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-primary/10">预测维护</Badge>
                  <Badge variant="outline" className="bg-primary/10">质量控制</Badge>
                  <Badge variant="outline" className="bg-primary/10">供应链优化</Badge>
                  <Badge variant="outline" className="bg-primary/10">工业自动化</Badge>
                </div>
                <Button variant="outline" className="mt-2" asChild>
                  <Link to="/ai-customization/contact">申请定制方案</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="retail">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>零售行业AGI解决方案</CardTitle>
                <CardDescription>提升客户体验和销售效率的智能零售系统</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  我们的零售行业AGI解决方案专为商场、电商和连锁店设计，提供个性化推荐、库存管理和客户行为分析等功能。这些解决方案帮助零售商更好地了解客户需求，优化库存和促销策略。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-primary/10">个性化推荐</Badge>
                  <Badge variant="outline" className="bg-primary/10">库存管理</Badge>
                  <Badge variant="outline" className="bg-primary/10">客户分析</Badge>
                  <Badge variant="outline" className="bg-primary/10">价格优化</Badge>
                </div>
                <Button variant="outline" className="mt-2" asChild>
                  <Link to="/ai-customization/contact">申请定制方案</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">为什么选择我们的行业AGI</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">行业专家参与</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  我们的AGI模型由行业专家和AI工程师共同开发，确保解决方案符合行业需求和标准。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">专业知识库</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  基于大量行业专业文献和数据训练，具备深入的行业知识和专业术语理解能力。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">持续更新</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  我们定期更新模型，确保系统能够适应不断变化的行业环境和最新的技术发展。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button size="lg" asChild>
            <Link to="/ai-customization/contact">
              联系我们获取定制方案
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default IndustryAI;
