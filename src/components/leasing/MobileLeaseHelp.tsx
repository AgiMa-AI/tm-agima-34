
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield } from 'lucide-react';

const MobileLeaseHelp = () => {
  return (
    <Card className="border-0 shadow-md rounded-xl overflow-hidden mt-6">
      <CardHeader className="bg-background pb-3">
        <CardTitle className="flex items-center text-lg">
          <Shield className="h-5 w-5 mr-2 text-primary" />
          常见问题
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-sm">如何获取SSH密钥?</h3>
          <p className="text-sm text-muted-foreground">租赁成功后，系统将自动生成SSH密钥并发送到您的邮箱，通常在10分钟内到达。</p>
        </div>
        <Separator />
        <div className="space-y-2">
          <h3 className="font-medium text-sm">如何选择合适的配置?</h3>
          <p className="text-sm text-muted-foreground">对于大模型训练，建议选择多张GPU；对于推理任务，单GPU通常足够；数据处理任务则可考虑CPU资源。</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileLeaseHelp;
