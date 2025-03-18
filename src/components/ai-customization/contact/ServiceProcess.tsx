
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceProcess = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>服务流程</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</div>
            <div>
              <p className="font-medium">提交咨询申请</p>
              <p className="text-sm text-muted-foreground">填写表单提交您的需求</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</div>
            <div>
              <p className="font-medium">需求沟通</p>
              <p className="text-sm text-muted-foreground">顾问与您深入沟通，了解详细需求</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</div>
            <div>
              <p className="font-medium">方案定制</p>
              <p className="text-sm text-muted-foreground">团队为您量身定制解决方案</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">4</div>
            <div>
              <p className="font-medium">签约合作</p>
              <p className="text-sm text-muted-foreground">确认方案后签订合作协议</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">5</div>
            <div>
              <p className="font-medium">服务交付</p>
              <p className="text-sm text-muted-foreground">按计划实施与交付AI解决方案</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceProcess;
