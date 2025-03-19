
import React from 'react';
import { 
  Home, Server, CreditCard, Clock, Settings, Database, 
  Smartphone, BarChart, Bot, Cpu, Globe, Users,
  LineChart, PieChart, Share2, Wifi, Zap, Network,
  BrainCircuit, Layers, Code, BarChart4, Target
} from 'lucide-react';

// Define sections of navigation
export const overviewItems = [
  { 
    href: "/", 
    icon: <Home className="h-4 w-4" />,
    title: "控制面板"
  },
  { 
    href: "/instances", 
    icon: <Server className="h-4 w-4" />,
    title: "主机实例"
  },
  { 
    href: "/agi-models", 
    icon: <Bot className="h-4 w-4" />,
    title: "AGI 模型"
  },
  { 
    href: "/charts", 
    icon: <BarChart className="h-4 w-4" />,
    title: "市场数据"
  }
];

export const computingItems = [
  { 
    href: "/agi-hosting", 
    icon: <Cpu className="h-4 w-4" />,
    title: "算力出租"
  },
  { 
    href: "/agi-leasing", 
    icon: <LineChart className="h-4 w-4" />,
    title: "按天租赁"
  },
  { 
    href: "/service-distribution", 
    icon: <Network className="h-4 w-4" />,
    title: "服务分布"
  },
  { 
    href: "/mobile-computing", 
    icon: <Smartphone className="h-4 w-4" />,
    title: "移动算力"
  },
  { 
    href: "/earnings", 
    icon: <PieChart className="h-4 w-4" />,
    title: "收益明细"
  }
];

// AI service items
export const aiServiceItems = [
  { 
    href: "/ai-customization", 
    icon: <BrainCircuit className="h-4 w-4" />,
    title: "专属AI定制"
  },
  { 
    href: "/ai-commercial", 
    icon: <Layers className="h-4 w-4" />,
    title: "商业AGI服务"
  },
  { 
    href: "/ai-solutions", 
    icon: <Code className="h-4 w-4" />,
    title: "行业解决方案"
  },
  { 
    href: "/ai-performance", 
    icon: <BarChart4 className="h-4 w-4" />,
    title: "性能评估"
  },
  { 
    href: "/ai-consulting", 
    icon: <Target className="h-4 w-4" />,
    title: "咨询顾问"
  }
];

export const userCenterItems = [
  { 
    href: "/users", 
    icon: <Users className="h-4 w-4" />,
    title: "用户管理"
  },
  { 
    href: "/tasks", 
    icon: <Clock className="h-4 w-4" />,
    title: "任务调度"
  },
  { 
    href: "/invitation", 
    icon: <Share2 className="h-4 w-4" />,
    title: "邀请管理"
  },
  { 
    href: "/storage", 
    icon: <Database className="h-4 w-4" />,
    title: "存储管理"
  },
  { 
    href: "/mobile-app", 
    icon: <Zap className="h-4 w-4" />,
    title: "移动应用"
  },
  { 
    href: "/settings", 
    icon: <Settings className="h-4 w-4" />,
    title: "账户设置"
  }
];
