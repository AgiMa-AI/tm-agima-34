
import { fetchAGIModelPerformance } from './chartDataService';
import { AICustomService, CommercialAGIService } from '@/types/agi';

/**
 * Fetches AGI model performance metrics
 * @returns Promise with performance data
 */
export const getAGIModelPerformance = async () => {
  try {
    const data = await fetchAGIModelPerformance();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Error fetching AGI model performance:', error);
    return {
      success: false,
      error: 'Failed to fetch AGI model performance data',
    };
  }
};

/**
 * Leases an AGI model
 * Uses mock data as this is a frontend-only implementation
 * @param modelId The ID of the model to lease
 * @param duration The lease duration in days
 * @returns Promise with lease status
 */
export const leaseAGIModel = async (modelId: string, duration: number) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    success: true,
    leaseId: `lease-${Math.random().toString(36).substring(2, 10)}`,
    message: '模型租赁请求已成功提交',
  };
};

/**
 * Requests a custom AI service
 * @param serviceType Type of custom service requested
 * @param requirements Customer requirements
 * @param contactInfo Customer contact information
 * @returns Promise with request status
 */
export const requestCustomAIService = async (
  serviceType: string,
  requirements: string,
  contactInfo: { name: string; email: string; company: string }
) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    requestId: `req-${Math.random().toString(36).substring(2, 10)}`,
    message: '您的定制服务请求已成功提交，我们的顾问将在24小时内与您联系',
  };
};

/**
 * Gets available commercial AGI services
 * @returns Promise with commercial services data
 */
export const getCommercialAGIServices = async (): Promise<{ success: boolean; data?: CommercialAGIService[]; error?: string }> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock data for commercial services
  const mockServices: CommercialAGIService[] = [
    {
      id: 'com-agi-1',
      name: '企业智能助手',
      description: '为企业提供全方位的智能助手服务，包括知识管理、流程自动化和决策支持',
      industryFocus: ['通用', '金融', '服务业'],
      serviceComponents: ['知识库集成', '工作流自动化', '智能分析'],
      useCases: ['客户服务自动化', '内部知识管理', '数据分析与决策支持'],
      features: ['多渠道集成', '定制化知识库', '业务流程自动化', '数据分析与可视化'],
      integrationType: 'api',
      pricingTiers: [
        {
          name: '基础版',
          price: 5000,
          billingCycle: 'monthly',
          features: ['基本API访问', '5个自定义工作流', '标准支持'],
        },
        {
          name: '企业版',
          price: 15000,
          billingCycle: 'monthly',
          features: ['无限API访问', '无限自定义工作流', '优先支持', '专属顾问'],
        }
      ],
      supportOptions: [
        {
          level: '标准支持',
          description: '工作日9:00-18:00技术支持',
          responseTime: '24小时内',
          channels: ['邮件', '在线工单'],
        },
        {
          level: '高级支持',
          description: '24/7全天候技术支持',
          responseTime: '4小时内',
          channels: ['邮件', '电话', '在线工单', '专属客户经理'],
          price: 5000,
        }
      ]
    },
    {
      id: 'com-agi-2',
      name: '行业知识专家',
      description: '针对特定行业的专业知识AGI服务，提供深度行业洞察和专业咨询',
      industryFocus: ['金融', '医疗', '法律', '教育'],
      serviceComponents: ['行业知识库', '合规审查', '专业咨询'],
      useCases: ['合规检查', '专业知识查询', '风险评估', '教育培训'],
      features: ['行业专用词汇库', '法规更新', '专家级回答', '持续学习能力'],
      integrationType: 'sdk',
      pricingTiers: [
        {
          name: '行业标准版',
          price: 8000,
          billingCycle: 'monthly',
          features: ['单一行业访问', '基础合规检查', '标准支持'],
        },
        {
          name: '多行业专业版',
          price: 20000,
          billingCycle: 'monthly',
          features: ['多行业访问', '高级合规检查', '优先支持', '定制化解决方案'],
        }
      ],
      supportOptions: [
        {
          level: '标准支持',
          description: '工作日技术支持',
          responseTime: '24小时内',
          channels: ['邮件', '在线工单'],
        },
        {
          level: '专家支持',
          description: '包含行业专家咨询',
          responseTime: '8小时内',
          channels: ['邮件', '电话', '视频会议', '专家咨询'],
          price: 8000,
        }
      ]
    }
  ];
  
  return {
    success: true,
    data: mockServices,
  };
};

/**
 * Gets available custom AI services
 * @returns Promise with custom services data
 */
export const getCustomAIServices = async (): Promise<{ success: boolean; data?: AICustomService[]; error?: string }> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock data for custom services
  const mockServices: AICustomService[] = [
    {
      id: 'custom-1',
      name: '模型微调服务',
      description: '基于现有大模型进行定制化微调，适应特定领域或任务',
      serviceType: 'model-customization',
      industries: ['通用', '金融', '医疗', '教育'],
      features: ['数据准备与清洗', '模型微调与优化', '性能评估', '部署支持'],
      deliverables: ['定制化模型', '性能报告', '部署文档', '使用指南'],
      timeline: '3-6周',
      pricingModel: 'fixed',
    },
    {
      id: 'custom-2',
      name: '全栈AI解决方案',
      description: '从需求分析到设计、开发、部署的全流程AI解决方案',
      serviceType: 'solution-development',
      industries: ['金融', '零售', '制造', '医疗'],
      features: ['需求分析', '解决方案设计', '模型开发', '系统集成', '部署与维护'],
      deliverables: ['完整AI系统', '技术文档', '用户手册', '维护计划'],
      timeline: '2-6个月',
      pricingModel: 'hybrid',
      contactPerson: '张经理',
    },
    {
      id: 'custom-3',
      name: 'API集成服务',
      description: '将AI能力通过API集成到现有系统中的专业服务',
      serviceType: 'api-integration',
      features: ['API设计', '集成开发', '性能优化', '安全加固', '监控系统'],
      deliverables: ['API文档', '集成代码', '测试报告', '监控面板'],
      timeline: '4-8周',
      pricingModel: 'fixed',
    }
  ];
  
  return {
    success: true,
    data: mockServices,
  };
};
