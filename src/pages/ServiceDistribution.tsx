import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Globe, Cpu, Wifi, Server, Building, ChevronRight, Network, 
  Smartphone, Factory, ShoppingBag, BrainCircuit, Activity, FileSearch, 
  Microscope, LandPlot, HeartPulse, GraduationCap, BarChart, 
  Shield, Truck, Zap, Radio, DollarSign, Leaf, Hotel, Plane,
  Wrench, Music, CloudRain, Atom, Clipboard, LogIn, Headphones, 
  Lightbulb, Tv, Utensils, BookOpen, Map, Warehouse, Users, Baby,
  Camera, Car, Satellite, Flask, MousePointer, Sun
} from 'lucide-react';

interface EnterpriseClient {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  country: string;
  usageType: string[];
  deploymentType: 'cloud' | 'hybrid' | 'on-premise' | 'edge';
  modelCount: number;
  firstDeployed: string;
}

const mockEnterpriseClients: EnterpriseClient[] = [
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
    industry: '物流运��',
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

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  subIndustries?: string[];
}

const industryCategories: Industry[] = [
  {
    id: 'all',
    name: '全部',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    id: 'finance',
    name: '金融',
    icon: <BarChart className="h-4 w-4" />,
    subIndustries: ['金融科技', '银行', '保险', '投资', '证券']
  },
  {
    id: 'tech',
    name: '科技',
    icon: <Cpu className="h-4 w-4" />,
    subIndustries: ['电信', '软件开发', '硬件制造', '云计算', 'IT服务']
  },
  {
    id: 'healthcare',
    name: '医疗',
    icon: <HeartPulse className="h-4 w-4" />,
    subIndustries: ['医疗健康', '生物技术', '医药研发', '医疗器械', '健康管理']
  },
  {
    id: 'education',
    name: '教育',
    icon: <GraduationCap className="h-4 w-4" />,
    subIndustries: ['教育科技', '高等教育', '职业培训', '在线教育', 'K12教育']
  },
  {
    id: 'retail',
    name: '零售',
    icon: <ShoppingBag className="h-4 w-4" />,
    subIndustries: ['零售', '电子商务', '超市', '奢侈品', '消费品']
  },
  {
    id: 'manufacturing',
    name: '制造',
    icon: <Factory className="h-4 w-4" />,
    subIndustries: ['制造业', '汽车制造', '电子制造', '重工业', '轻工业']
  },
  {
    id: 'agriculture',
    name: '农业',
    icon: <LandPlot className="h-4 w-4" />,
    subIndustries: ['农业', '智慧农业', '食品加工', '农产品', '养殖业']
  },
  {
    id: 'energy',
    name: '能源',
    icon: <Zap className="h-4 w-4" />,
    subIndustries: ['能源', '新能源', '石油天然气', '电力', '矿业']
  },
  {
    id: 'transportation',
    name: '交通',
    icon: <Truck className="h-4 w-4" />,
    subIndustries: ['物流运输', '航空', '铁路', '航运', '城市交通']
  },
  {
    id: 'research',
    name: '科研',
    icon: <Microscope className="h-4 w-4" />,
    subIndustries: ['科研', '物理研究', '化学研究', '材料科学', '环境科学']
  },
  {
    id: 'government',
    name: '政府',
    icon: <Building className="h-4 w-4" />,
    subIndustries: ['政府', '公共服务', '城市管理', '国防', '司法']
  },
  {
    id: 'media',
    name: '媒体',
    icon: <Tv className="h-4 w-4" />,
    subIndustries: ['媒体娱乐', '广播电视', '数字媒体', '出版', '游戏']
  },
  {
    id: 'telecom',
    name: '通信',
    icon: <Radio className="h-4 w-4" />,
    subIndustries: ['通信', '移动通信', '网络服务', '互联网', '5G技术']
  },
  {
    id: 'environment',
    name: '环保',
    icon: <Leaf className="h-4 w-4" />,
    subIndustries: ['环保', '可持续发展', '清洁能源', '废物处理', '环境监测']
  },
  {
    id: 'hospitality',
    name: '酒店',
    icon: <Hotel className="h-4 w-4" />,
    subIndustries: ['酒店餐饮', '旅游度假', '餐饮服务', '休闲娱乐', '会展']
  },
  {
    id: 'construction',
    name: '建筑',
    icon: <Wrench className="h-4 w-4" />,
    subIndustries: ['建筑', '房地产', '基础设施', '建材', '工程服务']
  },
  {
    id: 'security',
    name: '安全',
    icon: <Shield className="h-4 w-4" />,
    subIndustries: ['网络安全', '物理安全', '安防设备', '信息安全', '身份认证']
  },
  {
    id: 'logistics',
    name: '物流',
    icon: <Warehouse className="h-4 w-4" />,
    subIndustries: ['仓储物流', '供应链', '快递服务', '冷链物流', '跨境物流']
  },
  {
    id: 'ai',
    name: '人工智能',
    icon: <BrainCircuit className="h-4 w-4" />,
    subIndustries: ['AI服务', '机器学习', '自然语言处理', '计算机视觉', '智能机器人']
  }
];

const allIndustries = ['全部'].concat(
  industryCategories.flatMap(category => 
    category.subIndustries ? category.subIndustries : [category.name]
  ).filter((value, index, self) => self.indexOf(value) === index)
);

const getIndustryIcon = (industry: string) => {
  switch (industry) {
    case '金融科技':
      return <BarChart className="h-4 w-4" />;
    case '电信':
      return <Wifi className="h-4 w-4" />;
    case '医疗健康':
      return <HeartPulse className="h-4 w-4" />;
    case '教育科技':
      return <GraduationCap className="h-4 w-4" />;
    case '零售':
      return <ShoppingBag className="h-4 w-4" />;
    case '制造业':
      return <Factory className="h-4 w-4" />;
    case '农业':
      return <LandPlot className="h-4 w-4" />;
    case '网络安全':
      return <Shield className="h-4 w-4" />;
    case '政府':
      return <Building className="h-4 w-4" />;
    case '物流运输':
      return <Truck className="h-4 w-4" />;
    case '科研':
      return <Microscope className="h-4 w-4" />;
    case '能源':
      return <Zap className="h-4 w-4" />;
    case '旅游':
      return <Plane className="h-4 w-4" />;
    case '媒体娱乐':
      return <Music className="h-4 w-4" />;
    case '环保':
      return <Leaf className="h-4 w-4" />;
    case '酒店餐饮':
      return <Hotel className="h-4 w-4" />;
    case '建筑':
      return <Wrench className="h-4 w-4" />;
    case '气象':
      return <CloudRain className="h-4 w-4" />;
    case '通信':
      return <Radio className="h-4 w-4" />;
    case '金融服务':
      return <DollarSign className="h-4 w-4" />;
    case '物理研究':
      return <Atom className="h-4 w-4" />;
    default:
      return <BrainCircuit className="h-4 w-4" />;
  }
};

const getDeploymentBadge = (type: string) => {
  switch (type) {
    case 'cloud':
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">云端部署</Badge>;
    case 'hybrid':
      return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">混合部署</Badge>;
    case 'on-premise':
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">本地部署</Badge>;
    case 'edge':
      return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">边缘部署</Badge>;
    default:
      return <Badge variant="outline">未知</Badge>;
  }
};

const ServiceDistribution = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);
  const [displayedIndustries, setDisplayedIndustries] = useState<string[]>(allIndustries);
  
  useEffect(() => {
    if (!activeCategory || activeCategory === 'all') {
      setDisplayedIndustries(allIndustries);
    } else {
      const category = industryCategories.find(cat => cat.id === activeCategory);
      if (category && category.subIndustries) {
        setDisplayedIndustries(['全部', ...category.subIndustries]);
      } else {
        setDisplayedIndustries(allIndustries);
      }
    }
    
    setIndustryFilter('全部');
  }, [activeCategory]);
  
  const filteredClients = mockEnterpriseClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          client.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesIndustry = true;
    
    if (industryFilter && industryFilter !== '全部') {
      matchesIndustry = client.industry === industryFilter;
    } else if (activeCategory && activeCategory !== 'all') {
      const category = industryCategories.find(cat => cat.id === activeCategory);
      if (category && category.subIndustries) {
        matchesIndustry = category.subIndustries.includes(client.industry);
      }
    }
    
    return matchesSearch && matchesIndustry;
  });

  return (
    <Layout>
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-6">服务分布</h1>
        
        <div className="grid grid-cols-1 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>AGI模型服务企业分布</CardTitle>
              <CardDescription>
                查看我们的AGI模型在各行业下游企业的部署与应用情况
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <Building className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-lg">企业伙伴</h3>
                  <p className="text-sm text-center text-muted-foreground">支持各行业的数智化转型</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <BrainCircuit className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-lg">模型定制</h3>
                  <p className="text-sm text-center text-muted-foreground">根据行业需求定制专属模型</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <Network className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-lg">全面覆盖</h3>
                  <p className="text-sm text-center text-muted-foreground">遍布全国的服务网络</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <Activity className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-lg">实时监控</h3>
                  <p className="text-sm text-center text-muted-foreground">对模型部署与运行进行实时监控</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative w-full sm:w-72">
            <FileSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索企业或行业..."
              className="pl-9 pr-4 py-2 w-full border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2 w-full">
            {industryCategories.map((category) => (
              <Button 
                key={category.id}
                variant={activeCategory === category.id ? "secondary" : "outline"} 
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-1"
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-4 mb-4 border-b">
          {displayedIndustries.map((industry) => (
            <Button 
              key={industry}
              variant={industryFilter === industry ? "secondary" : "outline"} 
              size="sm"
              onClick={() => setIndustryFilter(industry)}
            >
              {industry}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredClients.map((client) => (
            <Card key={client.id} className="overflow-hidden hover:border-primary/50 transition-colors">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3 rounded-md">
                      <AvatarImage src={client.logo} alt={client.name} />
                      <AvatarFallback className="bg-primary/10 text-primary rounded-md">
                        {client.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{client.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {getIndustryIcon(client.industry)}
                        <span className="ml-1">{client.industry}</span>
                      </div>
                    </div>
                  </div>
                  {getDeploymentBadge(client.deploymentType)}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">地区</span>
                    <span>{client.location}，{client.country}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">部署模型</span>
                    <span>{client.modelCount}个</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">首次部署</span>
                    <span>{client.firstDeployed}</span>
                  </div>
                  <div className="pt-2">
                    <div className="text-sm text-muted-foreground mb-2">应用场景</div>
                    <div className="flex flex-wrap gap-2">
                      {client.usageType.map((usage, idx) => (
                        <Badge key={idx} variant="outline" className="bg-muted/50">
                          {usage}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                  <Link to={`/case-studies/${client.id}`}>
                    查看详情
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">寻找行业解决方案？</h3>
              <p className="text-muted-foreground mb-4">
                我们的AI赋能服务已覆盖多个行业，为企业提供定制化的智能解决方案。了解我们如何为您的行业带来创新与效率。
              </p>
              <Button>
                联系解决方案专家
              </Button>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <BrainCircuit className="h-32 w-32 text-indigo-500 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Factory className="h-12 w-12 text-indigo-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>成为我们的合作伙伴</CardTitle>
            <CardDescription>
              加入我们的企业合作网络，共同探索AI赋能的无限可能
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">模型定制</h3>
                <p className="text-sm text-muted-foreground">
                  根据您的业务需求，提供专属定制的AGI模型，满足特定场景的应用需求。
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">专属部署</h3>
                <p className="text-sm text-muted-foreground">
                  灵活的部署选项，包括云端、混合、本地和边缘部署，满足不同安全与性能需求。
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">持续优化</h3>
                <p className="text-sm text-muted-foreground">
                  基于业务反馈持续优化模型性能，定期更新迭代，确保模型始终保持高效能。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ServiceDistribution;
