
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
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
import { CheckCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactConsultation = () => {
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
      toast({
        title: "咨询请求已提交",
        description: "我们的专业顾问将在1个工作日内与您联系",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      });
      navigate('/ai-customization');
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">获取AI定制方案咨询</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            填写以下信息，我们的AI解决方案专家将为您提供专业咨询和定制方案
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
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
          </div>
          
          <div>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactConsultation;
