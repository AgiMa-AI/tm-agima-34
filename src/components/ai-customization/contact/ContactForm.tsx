
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import PersonalInfoFields from './form-fields/PersonalInfoFields';
import ProjectInfoFields from './form-fields/ProjectInfoFields';

const formSchema = z.object({
  name: z.string().min(2, {
    message: '姓名不能少于2个字符',
  }),
  company: z.string().min(2, {
    message: '公司名称不能少于2个字符',
  }),
  email: z.string().email({
    message: '请输入有效的电子邮箱',
  }),
  phone: z.string().min(11, {
    message: '请输入有效的电话号码',
  }),
  projectType: z.enum(['enterprise', 'industry', 'premium', 'api', 'other'], {
    required_error: '请选择项目类型',
  }),
  industry: z.string().optional(),
  budget: z.enum(['50k_below', '50k_200k', '200k_500k', '500k_above'], {
    required_error: '请选择预算范围',
  }),
  timeline: z.enum(['1_month', '1_3_months', '3_6_months', '6_months_above'], {
    required_error: '请选择预期时间',
  }),
  requirements: z.string().min(10, {
    message: '需求描述不能少于10个字符',
  }).max(500, {
    message: '需求描述不能超过500个字符',
  }),
  privacyAgreed: z.boolean().refine(value => value === true, {
    message: '请阅读并同意隐私政策',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: undefined,
      industry: '',
      budget: undefined,
      timeline: undefined,
      requirements: '',
      privacyAgreed: false,
    },
  });

  function onSubmit(data: FormValues) {
    // In a real application, you would send this data to your backend
    console.log(data);
    
    // Show success notification
    toast({
      title: '咨询请求已提交',
      description: '我们的顾问将在1-2个工作日内与您联系',
    });
    
    // Reset form
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>填写咨询表单</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <PersonalInfoFields 
              formData={{
                name: form.watch('name'),
                company: form.watch('company'),
                email: form.watch('email'),
                phone: form.watch('phone'),
                position: '',
              }}
              handleChange={(e) => {
                form.setValue(e.target.name as any, e.target.value);
              }}
            />
            <ProjectInfoFields 
              formData={{
                industry: form.watch('industry'),
                serviceType: form.watch('projectType'),
                budget: form.watch('budget'),
                description: form.watch('requirements'),
              }}
              formConfig={{
                industries: [
                  { value: 'finance', label: '金融' },
                  { value: 'healthcare', label: '医疗健康' },
                  { value: 'manufacturing', label: '制造业' },
                  { value: 'retail', label: '零售' },
                  { value: 'education', label: '教育' },
                  { value: 'other', label: '其他' },
                ],
                serviceTypes: [
                  { value: 'enterprise', label: '企业定制AGI' },
                  { value: 'industry', label: '行业专用AGI' },
                  { value: 'premium', label: '高级咨询服务' },
                  { value: 'api', label: 'API与集成服务' },
                  { value: 'other', label: '其他服务' },
                ],
                budgetRanges: [
                  { value: '50k_below', label: '5万元以下' },
                  { value: '50k_200k', label: '5-20万元' },
                  { value: '200k_500k', label: '20-50万元' },
                  { value: '500k_above', label: '50万元以上' },
                ],
              }}
              handleChange={(e) => {
                form.setValue('requirements', e.target.value);
              }}
              handleSelectChange={(name, value) => {
                if (name === 'serviceType') {
                  form.setValue('projectType', value as any);
                } else if (name === 'industry') {
                  form.setValue('industry', value);
                } else if (name === 'budget') {
                  form.setValue('budget', value as any);
                }
              }}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button 
              type="submit" 
              size="lg"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? '提交中...' : '提交咨询请求'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
