
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import apiService from '@/services/apiService';

interface GuaranteeItem {
  text: string;
}

interface GuaranteeConfig {
  title?: string;
  items?: GuaranteeItem[];
}

const LeaseGuarantee = () => {
  const [config, setConfig] = useState<GuaranteeConfig>({
    title: "租赁保障",
    items: [
      { text: "实时监控，确保算力稳定可靠" },
      { text: "任务异常自动恢复，无需人工干预" },
      { text: "算力未正常提供时自动延长等效时间" },
      { text: "24/7 专业技术支持" }
    ]
  });
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGuaranteeConfig = async () => {
      setIsLoading(true);
      try {
        const guaranteeConfig = await apiService.custom<GuaranteeConfig>('/api/config/lease-guarantee');
        setConfig(prev => ({ ...prev, ...guaranteeConfig }));
      } catch (error) {
        console.error('Error fetching lease guarantee configuration:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGuaranteeConfig();
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-center items-center h-20">
            <span className="text-muted-foreground">加载租赁保障...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Shield className="h-5 w-5 mr-2 text-primary" />
          {config.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {config.items?.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-0.5 mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-medium text-primary">{index + 1}</span>
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaseGuarantee;
