
export interface AGIModel {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  version: string;
  creator: string;
  type: 'text' | 'vision' | 'multimodal' | 'audio' | 'image';
  parameters: string;
  contextWindow: string;
  costPerToken: number;
  inputCost?: number;
  image?: string;
  featured?: boolean;
  maxInputTokens?: string;
  maxOutputTokens?: string;
  tags?: string[];
  features?: string[];
  useCases?: string[];
  architecture?: string;
  trainingData?: string;
  cutoffDate?: string;
  quantization?: string;
  supportedLanguages?: string[];
  // 添加旧AGI模型类型中的字段
  status?: 'available' | 'beta' | 'deprecated';
  provider?: string;
  capabilities?: string[];
  license?: string;
  cost?: number;
  performance?: {
    speed: string;
    accuracy: string;
  };
  // 商业服务相关字段
  serviceType?: 'standard' | 'custom' | 'enterprise';
  industryFocus?: string[];
  customizationLevel?: 'light' | 'medium' | 'deep' | 'full';
  apiAvailable?: boolean;
  deploymentOptions?: ('cloud' | 'on-premise' | 'hybrid' | 'edge')[];
  supportLevel?: 'basic' | 'premium' | 'enterprise';
  sla?: string;
}

// 新增：AI定制服务类型
export interface AICustomService {
  id: string;
  name: string;
  description: string;
  serviceType: 'model-customization' | 'solution-development' | 'api-integration' | 'consulting';
  industries?: string[];
  features: string[];
  deliverables: string[];
  timeline: string;
  pricingModel: 'fixed' | 'subscription' | 'usage-based' | 'hybrid';
  contactPerson?: string;
}

// 新增：商业AGI服务类型
export interface CommercialAGIService {
  id: string;
  name: string;
  description: string;
  industryFocus: string[];
  serviceComponents: string[];
  useCases: string[];
  features: string[];
  integrationType: 'api' | 'sdk' | 'white-label' | 'managed-service';
  pricingTiers: PricingTier[];
  supportOptions: SupportOption[];
}

interface PricingTier {
  name: string;
  price: number;
  billingCycle: 'monthly' | 'quarterly' | 'annually';
  features: string[];
  limitations?: string[];
}

interface SupportOption {
  level: string;
  description: string;
  responseTime: string;
  channels: string[];
  price?: number;
}
