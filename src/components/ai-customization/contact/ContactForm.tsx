
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { toast as sonnerToast } from 'sonner';
import { formConfigService, FormConfig } from '@/services/formConfigService';
import PersonalInfoFields from './form-fields/PersonalInfoFields';
import ProjectInfoFields from './form-fields/ProjectInfoFields';

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    industry: '',
    serviceType: '',
    budget: '',
    description: ''
  });

  // Fetch form configuration on component mount
  useEffect(() => {
    const fetchFormConfig = async () => {
      setIsLoading(true);
      try {
        const config = await formConfigService.getContactFormConfig();
        setFormConfig(config);
      } catch (error) {
        console.error('Error fetching form configuration:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFormConfig();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Use sonner toast for icon support
      sonnerToast.success("咨询请求已提交", {
        description: "我们的专业顾问将在1个工作日内与您联系",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      });
      
      // Or use shadcn toast without icon
      toast({
        title: "咨询请求已提交",
        description: "我们的专业顾问将在1个工作日内与您联系",
      });
      
      navigate('/ai-customization');
    }, 1500);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-center items-center h-40">
            <span className="text-muted-foreground">加载表单配置中...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>咨询申请表</CardTitle>
        <CardDescription>请填写您的基本信息和需求描述</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <PersonalInfoFields 
            formData={formData} 
            handleChange={handleChange} 
          />
          
          <ProjectInfoFields 
            formData={formData}
            formConfig={formConfig}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
          />
          
          <div className="pt-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? '提交中...' : '提交咨询申请'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
