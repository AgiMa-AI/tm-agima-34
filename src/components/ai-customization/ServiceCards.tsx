
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BrainCircuit, FileType, Gem, Code, ArrowRight
} from 'lucide-react';

const ServiceCards = () => {
  return (
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
          <div className="mt-4">
            <Button variant="link" size="sm" className="p-0" asChild>
              <Link to="/ai-customization/enterprise">
                了解更多
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
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
          <div className="mt-4">
            <Button variant="link" size="sm" className="p-0" asChild>
              <Link to="/ai-customization/industry">
                了解更多
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
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
          <div className="mt-4">
            <Button variant="link" size="sm" className="p-0" asChild>
              <Link to="/ai-customization/premium">
                了解更多
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
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
          <div className="mt-4">
            <Button variant="link" size="sm" className="p-0" asChild>
              <Link to="/ai-customization/api">
                了解更多
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCards;
