
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, BrainCircuit, Network, Activity } from 'lucide-react';

const ServiceDistributionHeader = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>AGI模型服务企业分布</CardTitle>
          <CardDescription>
            查看我们的AGI模型在各行业下游企业的部署与应用情况
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
              <Building className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-lg">企业伙伴</h3>
              <p className="text-sm text-center text-muted-foreground">支持各行业的数智化转型</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
              <BrainCircuit className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-lg">模型定制</h3>
              <p className="text-sm text-center text-muted-foreground">根据行业需求定制专属模型</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
              <Network className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-lg">全面覆盖</h3>
              <p className="text-sm text-center text-muted-foreground">遍布全国的服务网络</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
              <Activity className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-lg">实时监控</h3>
              <p className="text-sm text-center text-muted-foreground">对模型部署与运行进行实时监控</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDistributionHeader;
