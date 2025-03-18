
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
  fieldLabels?: {
    name?: string;
    company?: string;
    position?: string;
    email?: string;
    phone?: string;
    industry?: string;
    serviceType?: string;
    budget?: string;
    description?: string;
  };
  requiredFields?: {
    name?: boolean;
    company?: boolean;
    position?: boolean;
    email?: boolean;
    phone?: boolean;
    serviceType?: boolean;
    description?: boolean;
  };
}

// Types for service process steps
export interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceProcessConfig {
  steps: ProcessStep[];
  title?: string;
  description?: string;
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
  gpuPricing?: {
    basePrice: number;
    discounts?: {
      threeDay?: number;
      sevenDay?: number;
    }
  };
  cpuPricing?: {
    basePrice: number;
    discounts?: {
      threeDay?: number;
      sevenDay?: number;
    }
  };
}

// Types for user role/status configurations
export interface RoleConfig {
  [role: string]: {
    label: string;
    variant?: "default" | "destructive" | "outline" | "secondary";
    className?: string;
  }
}

export interface StatusConfig {
  [status: string]: {
    label: string;
    variant?: "default" | "destructive" | "outline" | "secondary";
    className?: string;
  }
}

export interface UserConfig {
  roles: RoleConfig;
  statuses: StatusConfig;
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
  fieldLabels: {
    name: "姓名",
    company: "公司名称",
    position: "职位",
    email: "电子邮箱",
    phone: "联系电话",
    industry: "所属行业",
    serviceType: "需要的服务类型",
    budget: "预算范围",
    description: "需求描述"
  },
  requiredFields: {
    name: true,
    company: true,
    position: false,
    email: true,
    phone: true,
    serviceType: true,
    description: true
  }
};

// Default service process configuration
const defaultServiceProcessConfig: ServiceProcessConfig = {
  title: "服务流程",
  description: "我们的服务流程简单高效",
  steps: [
    { title: "提交咨询申请", description: "填写表单提交您的需求", icon: "FormIcon" },
    { title: "需求沟通", description: "顾问与您深入沟通，了解详细需求", icon: "ChatIcon" },
    { title: "方案定制", description: "团队为您量身定制解决方案", icon: "SettingsIcon" },
    { title: "签约合作", description: "确认方案后签订合作协议", icon: "FileIcon" },
    { title: "服务交付", description: "按计划实施与交付AI解决方案", icon: "CheckIcon" },
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
  ],
  gpuPricing: {
    basePrice: 980,
    discounts: {
      threeDay: 0.95,
      sevenDay: 0.85
    }
  },
  cpuPricing: {
    basePrice: 120,
    discounts: {
      threeDay: 0.95,
      sevenDay: 0.85
    }
  }
};

// Default user role/status configurations
const defaultUserConfig: UserConfig = {
  roles: {
    admin: {
      label: "管理员",
      className: "bg-purple-500"
    },
    provider: {
      label: "提供者",
      className: "bg-blue-500"
    },
    renter: {
      label: "普通用户",
      variant: "outline"
    },
    default: {
      label: "未知",
      variant: "outline"
    }
  },
  statuses: {
    active: {
      label: "活跃",
      className: "bg-green-500"
    },
    suspended: {
      label: "已停用",
      variant: "destructive"
    },
    pending: {
      label: "待验证",
      variant: "outline",
      className: "text-amber-500 border-amber-500"
    },
    default: {
      label: "未知",
      variant: "outline"
    }
  }
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
  },
  
  // User configuration (roles and statuses)
  getUserConfig: async (): Promise<UserConfig> => {
    try {
      // Try to fetch user configurations from backend
      const config = await apiService.custom<UserConfig>('/api/config/users');
      return config;
    } catch (error) {
      console.log('Failed to fetch user configuration, using default', error);
      return defaultUserConfig;
    }
  }
};

export default formConfigService;
