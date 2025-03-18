
import apiService from './apiService';

// Types for form configuration
export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormConfig {
  industries: FormFieldOption[];
  serviceTypes: FormFieldOption[];
  budgetRanges: FormFieldOption[];
}

// Default configuration (as fallback)
const defaultConfig: FormConfig = {
  industries: [
    { value: "finance", label: "金融" },
    { value: "healthcare", label: "医疗" },
    { value: "manufacturing", label: "制造业" },
    { value: "retail", label: "零售" },
    { value: "education", label: "教育" },
    { value: "it", label: "IT/互联网" },
    { value: "government", label: "政府/公共事业" },
    { value: "other", label: "其他" },
  ],
  serviceTypes: [
    { value: "enterprise", label: "企业专属AI" },
    { value: "industry", label: "行业专用AGI" },
    { value: "premium", label: "高端定制服务" },
    { value: "api", label: "API与集成服务" },
    { value: "consultation", label: "仅需咨询" },
  ],
  budgetRanges: [
    { value: "under100k", label: "10万以下" },
    { value: "100k-500k", label: "10-50万" },
    { value: "500k-1m", label: "50-100万" },
    { value: "above1m", label: "100万以上" },
    { value: "unknown", label: "待定" },
  ],
};

// Service to get form configuration
export const formConfigService = {
  getContactFormConfig: async (): Promise<FormConfig> => {
    try {
      // Try to fetch configuration from backend
      const config = await apiService.custom<FormConfig>('/api/config/contact-form');
      return config;
    } catch (error) {
      console.log('Failed to fetch form configuration, using default', error);
      // Return default configuration if API call fails
      return defaultConfig;
    }
  }
};

export default formConfigService;
