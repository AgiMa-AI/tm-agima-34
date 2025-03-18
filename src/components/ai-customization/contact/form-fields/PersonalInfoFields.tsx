
import React from 'react';
import { Input } from '@/components/ui/input';

interface PersonalInfoFieldsProps {
  formData: {
    name: string;
    company: string;
    position: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfoFields = ({ formData, handleChange }: PersonalInfoFieldsProps) => {
  return (
    <>
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
    </>
  );
};

export default PersonalInfoFields;
