
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EnterpriseOverview = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">企业专属AI解决方案</h1>
        <p className="text-muted-foreground mt-2">
          为企业打造专属AI模型与应用，提供个性化的智能解决方案
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">为什么选择企业专属AI</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>基于企业专有数据训练，理解企业特定领域知识</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>私有化部署，确保数据安全与隐私保护</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>针对企业特定业务流程优化，提高生产效率</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>可定制化开发，满足企业个性化需求</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>专业团队提供全程技术支持与维护</span>
            </li>
          </ul>
        </div>
        
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>企业AI定制流程</CardTitle>
            <CardDescription>科学高效的AI定制开发流程</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="pl-2">需求分析与评估</li>
              <li className="pl-2">解决方案设计</li>
              <li className="pl-2">数据准备与处理</li>
              <li className="pl-2">模型训练与优化</li>
              <li className="pl-2">系统集成与部署</li>
              <li className="pl-2">测试验证与优化</li>
              <li className="pl-2">上线运营与维护</li>
            </ol>
            <Button variant="default" size="sm" className="mt-4 w-full" asChild>
              <Link to="/ai-customization/contact">
                获取详细方案
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">应用场景</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>智能客服助手</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                基于企业产品知识库与历史服务记录训练的专属客服AI，
                能理解产品专业术语，回答客户咨询，提供精准服务。
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>企业知识管理</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                将企业内部文档、规章制度、经验总结等知识数据化，
                构建企业专属知识图谱，实现智能检索与知识推荐。
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>流程自动化</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                将企业重复性工作流程智能化，通过AI识别与处理文档、
                邮件、报表等，提高工作效率，减少人为错误。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">核心技术优势</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">先进模型架构</h3>
              <p className="text-sm text-muted-foreground">
                采用最新的大规模预训练模型技术，通过迁移学习降低企业定制成本，
                在小样本数据条件下也能实现高性能模型效果。
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">高效数据处理</h3>
              <p className="text-sm text-muted-foreground">
                自研数据清洗与增强技术，能高效处理企业非结构化数据，
                提取有价值信息，构建高质量训练数据集。
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">安全隔离部署</h3>
              <p className="text-sm text-muted-foreground">
                支持多种部署方式，包括私有云、混合云、本地服务器等，
                确保数据不出企业内网，满足安全合规要求。
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">持续优化系统</h3>
              <p className="text-sm text-muted-foreground">
                提供模型监控与性能优化服务，根据实际使用数据持续改进，
                确保AI系统长期保持高性能表现。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-10 bg-muted/30 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">需要企业专属AI解决方案？</h3>
            <p className="text-muted-foreground mt-1">
              我们的技术专家将为您提供一对一定制服务，打造适合您企业的AI解决方案。
            </p>
          </div>
          <Button size="lg" className="shrink-0" asChild>
            <Link to="/ai-customization/contact">获取咨询服务</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseOverview;
