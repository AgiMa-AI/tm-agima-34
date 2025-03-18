
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
  fieldLabels?: {
    name?: string;
    company?: string;
    position?: string;
    email?: string;
    phone?: string;
  };
  requiredFields?: {
    name?: boolean;
    company?: boolean;
    position?: boolean;
    email?: boolean;
    phone?: boolean;
  };
}

const PersonalInfoFields = ({ 
  formData, 
  handleChange,
  fieldLabels = {},
  requiredFields = {
    name: true,
    company: true,
    position: false,
    email: true,
    phone: true
  }
}: PersonalInfoFieldsProps) => {
  // 默认标签
  const defaultLabels = {
    name: "姓名",
    company: "公司名称",
    position: "职位",
    email: "电子邮箱",
    phone: "联系电话"
  };
  
  // 合并默认标签与传入的自定义标签
  const labels = { ...defaultLabels, ...fieldLabels };
  
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {labels.name} {requiredFields.name && <span className="text-red-500">*</span>}
          </label>
          <Input 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={`请输入${labels.name}`}
            required={requiredFields.name}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            {labels.company} {requiredFields.company && <span className="text-red-500">*</span>}
          </label>
          <Input 
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={`请输入${labels.company}`}
            required={requiredFields.company}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="position" className="text-sm font-medium">
            {labels.position} {requiredFields.position && <span className="text-red-500">*</span>}
          </label>
          <Input 
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder={`请输入${labels.position}`}
            required={requiredFields.position}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {labels.email} {requiredFields.email && <span className="text-red-500">*</span>}
          </label>
          <Input 
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={`请输入${labels.email}`}
            required={requiredFields.email}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          {labels.phone} {requiredFields.phone && <span className="text-red-500">*</span>}
        </label>
        <Input 
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={`请输入${labels.phone}`}
          required={requiredFields.phone}
        />
      </div>
    </>
  );
};

export default PersonalInfoFields;
