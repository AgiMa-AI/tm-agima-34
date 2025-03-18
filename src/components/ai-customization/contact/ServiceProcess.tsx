
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formConfigService, ServiceProcessConfig } from '@/services/formConfigService';

const ServiceProcess = () => {
  const [processConfig, setProcessConfig] = useState<ServiceProcessConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProcessConfig = async () => {
      setIsLoading(true);
      try {
        const config = await formConfigService.getServiceProcessConfig();
        setProcessConfig(config);
      } catch (error) {
        console.error('Error fetching service process configuration:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProcessConfig();
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-center items-center h-20">
            <span className="text-muted-foreground">加载服务流程...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>服务流程</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {processConfig?.steps.map((step, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">{index + 1}</div>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceProcess;
