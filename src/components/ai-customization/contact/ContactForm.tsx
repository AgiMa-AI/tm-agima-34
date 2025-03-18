
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { toast as sonnerToast } from 'sonner';

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>咨询申请表</CardTitle>
        <CardDescription>请填写您的基本信息和需求描述</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                姓名 <span className="text-red-500">*</span>
              </label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="请输入您的姓名"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                公司名称 <span className="text-red-500">*</span>
              </label>
              <Input 
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="请输入公司名称"
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="position" className="text-sm font-medium">
                职位
              </label>
              <Input 
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="请输入您的职位"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                电子邮箱 <span className="text-red-500">*</span>
              </label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="请输入您的电子邮箱"
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                联系电话 <span className="text-red-500">*</span>
              </label>
              <Input 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="请输入您的联系电话"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="industry" className="text-sm font-medium">
                所属行业
              </label>
              <Select 
                onValueChange={(value) => handleSelectChange('industry', value)}
                value={formData.industry}
              >
                <SelectTrigger>
                  <SelectValue placeholder="请选择行业" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="finance">金融</SelectItem>
                  <SelectItem value="healthcare">医疗</SelectItem>
                  <SelectItem value="manufacturing">制造业</SelectItem>
                  <SelectItem value="retail">零售</SelectItem>
                  <SelectItem value="education">教育</SelectItem>
                  <SelectItem value="it">IT/互联网</SelectItem>
                  <SelectItem value="government">政府/公共事业</SelectItem>
                  <SelectItem value="other">其他</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="serviceType" className="text-sm font-medium">
                需要的服务类型 <span className="text-red-500">*</span>
              </label>
              <Select
                onValueChange={(value) => handleSelectChange('serviceType', value)}
                value={formData.serviceType}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="请选择服务类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enterprise">企业专属AI</SelectItem>
                  <SelectItem value="industry">行业专用AGI</SelectItem>
                  <SelectItem value="premium">高端定制服务</SelectItem>
                  <SelectItem value="api">API与集成服务</SelectItem>
                  <SelectItem value="consultation">仅需咨询</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium">
                预算范围
              </label>
              <Select
                onValueChange={(value) => handleSelectChange('budget', value)}
                value={formData.budget}
              >
                <SelectTrigger>
                  <SelectValue placeholder="请选择预算范围" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under100k">10万以下</SelectItem>
                  <SelectItem value="100k-500k">10-50万</SelectItem>
                  <SelectItem value="500k-1m">50-100万</SelectItem>
                  <SelectItem value="above1m">100万以上</SelectItem>
                  <SelectItem value="unknown">待定</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              需求描述 <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="请详细描述您的AI解决方案需求、目标和期望..."
              rows={5}
              required
            />
          </div>
          
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
