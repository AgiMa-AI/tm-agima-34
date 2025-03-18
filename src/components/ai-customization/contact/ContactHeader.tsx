
import React, { useState, useEffect } from 'react';
import apiService from '@/services/apiService';

interface ContactHeaderConfig {
  title?: string;
  description?: string;
}

const ContactHeader = () => {
  const [config, setConfig] = useState<ContactHeaderConfig>({
    title: "获取AI定制方案咨询",
    description: "填写以下信息，我们的AI解决方案专家将为您提供专业咨询和定制方案"
  });
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHeaderConfig = async () => {
      setIsLoading(true);
      try {
        const headerConfig = await apiService.custom<ContactHeaderConfig>('/api/config/contact-header');
        setConfig(prev => ({ ...prev, ...headerConfig }));
      } catch (error) {
        console.error('Error fetching contact header configuration:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeaderConfig();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center mb-10">
        <div className="h-8 animate-pulse bg-muted/30 rounded-md w-1/2 mx-auto mb-2"></div>
        <div className="h-4 animate-pulse bg-muted/30 rounded-md w-3/4 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{config.title}</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {config.description}
      </p>
    </div>
  );
};

export default ContactHeader;
