
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield } from 'lucide-react';
import apiService from '@/services/apiService';

interface FAQItem {
  question: string;
  answer: string;
}

interface LeaseHelpConfig {
  title?: string;
  faqs?: FAQItem[];
}

const MobileLeaseHelp = () => {
  const [config, setConfig] = useState<LeaseHelpConfig>({
    title: "常见问题",
    faqs: [
      {
        question: "如何获取SSH密钥?",
        answer: "租赁成功后，系统将自动生成SSH密钥并发送到您的邮箱，通常在10分钟内到达。"
      },
      {
        question: "如何选择合适的配置?",
        answer: "对于大模型训练，建议选择多张GPU；对于推理任务，单GPU通常足够；数据处理任务则可考虑CPU资源。"
      }
    ]
  });
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHelpConfig = async () => {
      setIsLoading(true);
      try {
        const helpConfig = await apiService.custom<LeaseHelpConfig>('/api/config/lease-help');
        setConfig(prev => ({ ...prev, ...helpConfig }));
      } catch (error) {
        console.error('Error fetching lease help configuration:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHelpConfig();
  }, []);

  if (isLoading) {
    return (
      <Card className="border-0 shadow-md rounded-xl overflow-hidden mt-6">
        <CardContent className="p-6">
          <div className="flex justify-center items-center h-20">
            <span className="text-muted-foreground">加载常见问题...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-md rounded-xl overflow-hidden mt-6">
      <CardHeader className="bg-background pb-3">
        <CardTitle className="flex items-center text-lg">
          <Shield className="h-5 w-5 mr-2 text-primary" />
          {config.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        {config.faqs?.map((faq, index) => (
          <React.Fragment key={index}>
            <div className="space-y-2">
              <h3 className="font-medium text-sm">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
            {index < (config.faqs?.length || 0) - 1 && <Separator />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default MobileLeaseHelp;
