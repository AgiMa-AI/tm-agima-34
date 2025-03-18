
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

// Types for service process steps
export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceProcessConfig {
  steps: ProcessStep[];
}

// Types for resource configuration
export interface ResourceOption {
  value: string;
  label: string;
}

export interface ResourceConfig {
  gpuOptions: ResourceOption[];
  cpuOptions: ResourceOption[];
  taskTypes: ResourceOption[];
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

// Default service process configuration
const defaultServiceProcessConfig: ServiceProcessConfig = {
  steps: [
    { title: "提交咨询申请", description: "填写表单提交您的需求" },
    { title: "需求沟通", description: "顾问与您深入沟通，了解详细需求" },
    { title: "方案定制", description: "团队为您量身定制解决方案" },
    { title: "签约合作", description: "确认方案后签订合作协议" },
    { title: "服务交付", description: "按计划实施与交付AI解决方案" },
  ]
};

// Default resource configuration
const defaultResourceConfig: ResourceConfig = {
  gpuOptions: [
    { value: "1", label: "1 GPU" },
    { value: "2", label: "2 GPU" },
    { value: "4", label: "4 GPU" },
    { value: "8", label: "8 GPU" },
  ],
  cpuOptions: [
    { value: "16", label: "16 核心" },
    { value: "32", label: "32 核心" },
    { value: "64", label: "64 核心" },
    { value: "128", label: "128 核心" },
  ],
  taskTypes: [
    { value: "training", label: "模型训练" },
    { value: "inference", label: "模型推理" },
    { value: "dataprocessing", label: "数据处理" },
    { value: "custom", label: "自定义任务" },
  ]
};

// Consolidated service for all configurations
export const formConfigService = {
  // Contact form configuration
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
  },
  
  // Service process configuration
  getServiceProcessConfig: async (): Promise<ServiceProcessConfig> => {
    try {
      // Try to fetch service process steps from backend
      const config = await apiService.custom<ServiceProcessConfig>('/api/config/service-process');
      return config;
    } catch (error) {
      console.log('Failed to fetch service process configuration, using default', error);
      return defaultServiceProcessConfig;
    }
  },
  
  // Resource configuration
  getResourceConfig: async (): Promise<ResourceConfig> => {
    try {
      // Try to fetch resource options from backend
      const config = await apiService.custom<ResourceConfig>('/api/config/resources');
      return config;
    } catch (error) {
      console.log('Failed to fetch resource configuration, using default', error);
      return defaultResourceConfig;
    }
  }
};

export default formConfigService;
