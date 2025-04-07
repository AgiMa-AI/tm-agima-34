
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit, Server, Activity } from 'lucide-react';

const PartnershipCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>成为我们的合作伙伴</CardTitle>
        <CardDescription>
          加入我们的企业合作网络，共同探索AI赋能的无限可能
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">模型定制</h3>
            <p className="text-sm text-muted-foreground">
              根据您的业务需求，提供专属定制的AGI模型，满足特定场景的应用需求。
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">专属部署</h3>
            <p className="text-sm text-muted-foreground">
              灵活的部署选项，包括云端、混合、本地和边缘部署，满足不同安全与性能需求。
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">持续优化</h3>
            <p className="text-sm text-muted-foreground">
              基于业务反馈持续优化模型性能，定期更新迭代，确保模型始终保持高效能。
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnershipCard;
