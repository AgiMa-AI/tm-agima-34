
import React from 'react';
import { Zap, GitFork, Shield } from 'lucide-react';

const ServiceAdvantages = () => {
  return (
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
  );
};

export default ServiceAdvantages;
