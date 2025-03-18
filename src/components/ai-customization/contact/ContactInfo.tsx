
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>联系方式</CardTitle>
        <CardDescription>您可以通过以下方式直接联系我们</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span>400-888-8888</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>ai-custom@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span>在线客服 (9:00-18:00)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
