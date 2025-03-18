
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { FormConfig, FormFieldOption } from '@/services/formConfigService';

interface ProjectInfoFieldsProps {
  formData: {
    industry: string;
    serviceType: string;
    budget: string;
    description: string;
  };
  formConfig: FormConfig | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const ProjectInfoFields = ({
  formData,
  formConfig,
  handleChange,
  handleSelectChange,
}: ProjectInfoFieldsProps) => {
  
  const renderSelectOptions = (options: FormFieldOption[] | undefined) => {
    if (!options || options.length === 0) return null;
    
    return options.map(option => (
      <SelectItem key={option.value} value={option.value}>
        {option.label}
      </SelectItem>
    ));
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
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
              {formConfig && renderSelectOptions(formConfig.industries)}
            </SelectContent>
          </Select>
        </div>
            
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
              {formConfig && renderSelectOptions(formConfig.serviceTypes)}
            </SelectContent>
          </Select>
        </div>
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
            {formConfig && renderSelectOptions(formConfig.budgetRanges)}
          </SelectContent>
        </Select>
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
    </>
  );
};

export default ProjectInfoFields;
