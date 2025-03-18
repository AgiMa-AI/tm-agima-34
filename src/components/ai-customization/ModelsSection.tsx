
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Zap, Network, GitMerge } from 'lucide-react';

const ModelsSection = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">专业定制模型服务</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>基础模型微调</CardTitle>
              <CardDescription>根据特定场景定制的模型</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              在预训练大模型基础上，针对特定业务场景进行定向微调，提升特定领域应用效果。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-primary/10">数据标注</Badge>
              <Badge variant="outline" className="bg-primary/10">参数调优</Badge>
              <Badge variant="outline" className="bg-primary/10">评估反馈</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Zap className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>行业专用模型</CardTitle>
              <CardDescription>垂直行业专用AI模型</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              针对医疗、金融、法律等特定行业，提供专业知识图谱和合规性保障的垂直领域模型。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-primary/10">领域知识</Badge>
              <Badge variant="outline" className="bg-primary/10">合规安全</Badge>
              <Badge variant="outline" className="bg-primary/10">专业术语</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Network className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>多模态定制</CardTitle>
              <CardDescription>文本、图像、语音多模态能力</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              集成文本、图像、语音识别等多种能力的复合型AI模型，实现跨模态交互与理解。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-primary/10">视觉识别</Badge>
              <Badge variant="outline" className="bg-primary/10">语音处理</Badge>
              <Badge variant="outline" className="bg-primary/10">跨模态融合</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <GitMerge className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>私有化部署</CardTitle>
              <CardDescription>本地部署的定制模型服务</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              为企业提供可在内网环境完全私有化部署的定制AI模型，保障数据安全与隐私。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-primary/10">私有云</Badge>
              <Badge variant="outline" className="bg-primary/10">数据隔离</Badge>
              <Badge variant="outline" className="bg-primary/10">安全审计</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModelsSection;
