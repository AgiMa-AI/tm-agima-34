
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

interface ContactFormProps {
  title?: string;
  description?: string;
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
  serviceOptions?: Array<{ value: string, label: string }>;
}

const ContactForm = ({ 
  title = "联系我们", 
  description = "请填写以下表单，我们会尽快与您联系", 
  submitButtonText = "提交",
  onSubmit,
  serviceOptions = [
    { value: "consultation", label: "咨询服务" },
    { value: "implementation", label: "实施服务" },
    { value: "training", label: "培训服务" },
    { value: "other", label: "其他" }
  ]
}: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default submission behavior
      toast({
        title: "表单已提交",
        description: "我们将尽快与您联系",
      });
      
      // Reset form
      e.currentTarget.reset();
    }
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="individual">个人</TabsTrigger>
              <TabsTrigger value="enterprise">企业</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名</Label>
                    <Input id="name" name="name" placeholder="您的姓名" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">电话</Label>
                    <Input id="phone" name="phone" placeholder="联系电话" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" name="email" type="email" placeholder="您的邮箱地址" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">需要的服务</Label>
                  <Select name="service">
                    <SelectTrigger>
                      <SelectValue placeholder="选择服务类型" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">留言</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="请详细描述您的需求"
                    rows={4}
                    required
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="enterprise" className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">公司名称</Label>
                    <Input id="companyName" name="companyName" placeholder="公司全称" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">所属行业</Label>
                    <Input id="industry" name="industry" placeholder="所属行业" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">联系人</Label>
                    <Input id="contactPerson" name="contactPerson" placeholder="联系人姓名" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">职位</Label>
                    <Input id="position" name="position" placeholder="联系人职位" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessEmail">企业邮箱</Label>
                    <Input id="businessEmail" name="businessEmail" type="email" placeholder="企业邮箱" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessPhone">联系电话</Label>
                    <Input id="businessPhone" name="businessPhone" placeholder="联系电话" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="enterpriseService">需要的服务</Label>
                  <Select name="enterpriseService">
                    <SelectTrigger>
                      <SelectValue placeholder="选择服务类型" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessMessage">项目需求</Label>
                  <Textarea 
                    id="businessMessage" 
                    name="businessMessage" 
                    placeholder="请详细描述贵公司的项目需求"
                    rows={4}
                    required
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <CardFooter className="px-0 pb-0 pt-4">
            <Button type="submit" className="w-full">{submitButtonText}</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
