
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Globe, Cpu, Wifi, Server, Building, Network, 
  Smartphone, Factory, ShoppingBag, BrainCircuit, Activity, FileSearch, 
  Microscope, LandPlot, HeartPulse, GraduationCap, BarChart, 
  Shield, Truck, Zap, Radio, DollarSign, Leaf, Hotel, Plane,
  Wrench, Music, CloudRain, Atom, Clipboard, LogIn, Headphones, 
  Lightbulb, Tv, Utensils, BookOpen, Map, Warehouse, Users, Baby,
  Camera, Car, Satellite, MousePointer, Sun, TestTube
} from 'lucide-react';

export interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  subIndustries?: string[];
}

export const industryCategories: Industry[] = [
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

export const getIndustryIcon = (industry: string) => {
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
    case '化学研究':
      return <TestTube className="h-4 w-4" />;
    default:
      return <BrainCircuit className="h-4 w-4" />;
  }
};

interface IndustryCategoriesProps {
  activeCategory: string | null;
  setActiveCategory: (category: string) => void;
}

const IndustryCategories: React.FC<IndustryCategoriesProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
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
  );
};

export default IndustryCategories;
