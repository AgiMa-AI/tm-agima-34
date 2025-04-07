
import { EnterpriseClient } from './EnterpriseClientCard';
import { industryCategories } from './IndustryCategories';

export const mockEnterpriseClients: EnterpriseClient[] = [
  {
    id: 'aitech-01',
    name: '智联科技',
    logo: '/logos/aitech.svg',
    industry: '金融科技',
    location: '上海',
    country: '中国',
    usageType: ['NLP', '风险分析', '客户服务'],
    deploymentType: 'hybrid',
    modelCount: 8,
    firstDeployed: '2024-09'
  },
  {
    id: 'quantum-02',
    name: '量子网络',
    logo: '/logos/quantum.svg',
    industry: '电信',
    location: '北京',
    country: '中国',
    usageType: ['网络优化', '预测维护'],
    deploymentType: 'cloud',
    modelCount: 5,
    firstDeployed: '2024-10'
  },
  {
    id: 'medai-03',
    name: '医智云',
    logo: '/logos/medai.svg',
    industry: '医疗健康',
    location: '广州',
    country: '中国',
    usageType: ['医学影像分析', '健康预测'],
    deploymentType: 'on-premise',
    modelCount: 3,
    firstDeployed: '2024-11'
  },
  {
    id: 'edutech-04',
    name: '教育智能',
    logo: '/logos/edutech.svg',
    industry: '教育科技',
    location: '深圳',
    country: '中国',
    usageType: ['个性化学习', '评估系统'],
    deploymentType: 'cloud',
    modelCount: 4,
    firstDeployed: '2024-08'
  },
  {
    id: 'retailai-05',
    name: '零售智能',
    logo: '/logos/retailai.svg',
    industry: '零售',
    location: '杭州',
    country: '中国',
    usageType: ['需求预测', '库存优化', '个性化推荐'],
    deploymentType: 'hybrid',
    modelCount: 7,
    firstDeployed: '2024-07'
  },
  {
    id: 'indai-06',
    name: '工业智脑',
    logo: '/logos/indai.svg',
    industry: '制造业',
    location: '苏州',
    country: '中国',
    usageType: ['预测性维护', '质量控制', '供应链优化'],
    deploymentType: 'edge',
    modelCount: 12,
    firstDeployed: '2024-06'
  },
  {
    id: 'agroai-07',
    name: '农智科技',
    logo: '/logos/agroai.svg',
    industry: '农业',
    location: '成都',
    country: '中国',
    usageType: ['作物监测', '收成预测'],
    deploymentType: 'hybrid',
    modelCount: 3,
    firstDeployed: '2024-10'
  },
  {
    id: 'secureai-08',
    name: '安全卫士',
    logo: '/logos/secureai.svg',
    industry: '网络安全',
    location: '武汉',
    country: '中国',
    usageType: ['威胁检测', '异常识别'],
    deploymentType: 'on-premise',
    modelCount: 6,
    firstDeployed: '2024-09'
  },
  {
    id: 'smartcity-09',
    name: '智慧城市',
    logo: '/logos/smartcity.svg',
    industry: '政府',
    location: '南京',
    country: '中国',
    usageType: ['交通管理', '能源优化', '安全监控'],
    deploymentType: 'hybrid',
    modelCount: 9,
    firstDeployed: '2024-05'
  },
  {
    id: 'transportai-10',
    name: '运智科技',
    logo: '/logos/transportai.svg',
    industry: '物流运输',
    location: '重庆',
    country: '中国',
    usageType: ['路线优化', '车队管理'],
    deploymentType: 'cloud',
    modelCount: 5,
    firstDeployed: '2024-08'
  },
  {
    id: 'researchai-11',
    name: '研智实验室',
    logo: '/logos/researchai.svg',
    industry: '科研',
    location: '西安',
    country: '中国',
    usageType: ['数据分析', '模型训练'],
    deploymentType: 'on-premise',
    modelCount: 14,
    firstDeployed: '2024-04'
  },
  {
    id: 'energyai-12',
    name: '能智科技',
    logo: '/logos/energyai.svg',
    industry: '能源',
    location: '天津',
    country: '中国',
    usageType: ['能源分配', '负载预测'],
    deploymentType: 'hybrid',
    modelCount: 6,
    firstDeployed: '2024-07'
  }
];

export const allIndustries = ['全部'].concat(
  industryCategories.flatMap(category => 
    category.subIndustries ? category.subIndustries : [category.name]
  ).filter((value, index, self) => self.indexOf(value) === index)
);

export default mockEnterpriseClients;
