
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BarChart, Database, Lightbulb, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseAI = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/ai-customization">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回定制服务
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight">企业专属AI定制</h1>
          <p className="text-muted-foreground mt-2">
            为企业量身定制专属人工智能解决方案，提升业务效率与竞争力
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">专属定制优势</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">企业数据价值挖掘</h3>
                  <p className="text-muted-foreground">利用企业独有数据训练的AI模型，能够深度挖掘专属数据价值，提供更精准的分析结果</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">业务流程智能优化</h3>
                  <p className="text-muted-foreground">针对企业特定业务流程设计的AI系统，能够自动化重复工作，优化决策过程，提升整体效率</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">创新能力增强</h3>
                  <p className="text-muted-foreground">专属AI能够辅助企业发现新机遇，加速产品创新，开拓业务新方向</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">市场竞争力提升</h3>
                  <p className="text-muted-foreground">专属AI技术能够帮助企业建立独特技术壁垒，打造差异化优势，提升市场竞争力</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">典型应用场景</h2>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">智能销售预测与库存管理</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  结合企业历史销售数据、市场趋势和外部因素，构建精准的销售预测模型，优化库存管理，降低成本
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>需求预测</Badge>
                  <Badge>库存优化</Badge>
                  <Badge>供应链管理</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">智能客户服务系统</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  基于企业产品知识库和客户互动历史，打造智能客服系统，提供7*24小时专业服务，提升客户满意度
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>对话式AI</Badge>
                  <Badge>知识图谱</Badge>
                  <Badge>情感分析</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">智能文档处理与知识管理</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  自动处理企业内部文档，提取关键信息，构建知识库，支持智能搜索和知识发现，提升信息共享效率
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>文档分析</Badge>
                  <Badge>智能检索</Badge>
                  <Badge>知识发现</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">开始您的专属AI之旅</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            我们的AI专家团队已准备好为您的企业提供专业咨询，规划专属AI解决方案
          </p>
          <Button size="lg">预约咨询</Button>
        </div>
      </div>
    </Layout>
  );
};

export default EnterpriseAI;
