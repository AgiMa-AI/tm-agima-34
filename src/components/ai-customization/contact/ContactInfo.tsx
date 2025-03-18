
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import apiService from '@/services/apiService';

interface ContactInfoConfig {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  chat?: string;
  showPhone?: boolean;
  showEmail?: boolean;
  showChat?: boolean;
}

const ContactInfo = () => {
  const [config, setConfig] = useState<ContactInfoConfig>({
    title: "联系方式",
    description: "您可以通过以下方式直接联系我们",
    phone: "400-888-8888",
    email: "ai-custom@example.com",
    chat: "在线客服 (9:00-18:00)",
    showPhone: true,
    showEmail: true,
    showChat: true
  });
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContactConfig = async () => {
      setIsLoading(true);
      try {
        const contactConfig = await apiService.custom<ContactInfoConfig>('/api/config/contact-info');
        setConfig(prev => ({ ...prev, ...contactConfig }));
      } catch (error) {
        console.error('Error fetching contact info configuration:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactConfig();
  }, []);

  if (isLoading) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-center items-center h-20">
            <span className="text-muted-foreground">加载联系方式...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{config.title}</CardTitle>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {config.showPhone && (
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>{config.phone}</span>
            </div>
          )}
          {config.showEmail && (
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>{config.email}</span>
            </div>
          )}
          {config.showChat && (
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>{config.chat}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
