
import React from 'react';
import { 
  Home, Server, CreditCard, Clock, Settings, Database, 
  Smartphone, BarChart, Bot, Cpu, Globe, Users,
  LineChart, PieChart, Share2, Wifi, Zap, Network,
  BrainCircuit, Layers, Code, BarChart4, Target
} from 'lucide-react';

// Overview section items
export const getOverviewItems = (location: { pathname: string }) => {
  const isActive = (path: string) => location.pathname === path;
  
  return [
    { 
      href: "/", 
      icon: <Home className="h-4 w-4" />,
      title: "控制面板",
      isActive: isActive('/')
    },
    { 
      href: "/instances", 
      icon: <Server className="h-4 w-4" />,
      title: "主机实例",
      isActive: isActive('/instances')
    },
    { 
      href: "/agi-models", 
      icon: <Bot className="h-4 w-4" />,
      title: "AGI 模型",
      isActive: isActive('/agi-models') || location.pathname.startsWith('/agi/')
    },
    { 
      href: "/charts", 
      icon: <BarChart className="h-4 w-4" />,
      title: "市场数据",
      isActive: isActive('/charts')
    }
  ];
};

// Computing section items
export const getComputingItems = (location: { pathname: string }) => {
  const isActive = (path: string) => location.pathname === path;
  
  return [
    { 
      href: "/agi-hosting", 
      icon: <Cpu className="h-4 w-4" />,
      title: "算力出租",
      isActive: isActive('/agi-hosting')
    },
    { 
      href: "/agi-leasing", 
      icon: <LineChart className="h-4 w-4" />,
      title: "按天租赁",
      isActive: isActive('/agi-leasing')
    },
    { 
      href: "/service-distribution", 
      icon: <Network className="h-4 w-4" />,
      title: "服务分布",
      isActive: isActive('/service-distribution')
    },
    { 
      href: "/mobile-computing", 
      icon: <Smartphone className="h-4 w-4" />,
      title: "移动算力",
      isActive: isActive('/mobile-computing')
    },
    { 
      href: "/earnings", 
      icon: <PieChart className="h-4 w-4" />,
      title: "收益明细",
      isActive: isActive('/earnings')
    }
  ];
};

// AI service items
export const getAIServiceItems = (location: { pathname: string }) => {
  const isActive = (path: string) => location.pathname === path;
  
  return [
    { 
      href: "/ai-customization", 
      icon: <BrainCircuit className="h-4 w-4" />,
      title: "专属AI定制",
      isActive: isActive('/ai-customization')
    },
    { 
      href: "/ai-commercial", 
      icon: <Layers className="h-4 w-4" />,
      title: "商业AGI服务",
      isActive: isActive('/ai-commercial')
    },
    { 
      href: "/ai-solutions", 
      icon: <Code className="h-4 w-4" />,
      title: "行业解决方案",
      isActive: isActive('/ai-solutions')
    },
    { 
      href: "/ai-performance", 
      icon: <BarChart4 className="h-4 w-4" />,
      title: "性能评估",
      isActive: isActive('/ai-performance')
    },
    { 
      href: "/ai-consulting", 
      icon: <Target className="h-4 w-4" />,
      title: "咨询顾问",
      isActive: isActive('/ai-consulting')
    }
  ];
};

// User center items
export const getUserCenterItems = (location: { pathname: string }) => {
  const isActive = (path: string) => location.pathname === path;
  
  return [
    { 
      href: "/users", 
      icon: <Users className="h-4 w-4" />,
      title: "用户管理",
      isActive: isActive('/users')
    },
    { 
      href: "/tasks", 
      icon: <Clock className="h-4 w-4" />,
      title: "任务调度",
      isActive: isActive('/tasks')
    },
    { 
      href: "/invitation", 
      icon: <Share2 className="h-4 w-4" />,
      title: "邀请管理",
      isActive: isActive('/invitation')
    },
    { 
      href: "/storage", 
      icon: <Database className="h-4 w-4" />,
      title: "存储管理",
      isActive: isActive('/storage')
    },
    { 
      href: "/mobile-app", 
      icon: <Zap className="h-4 w-4" />,
      title: "移动应用",
      isActive: isActive('/mobile-app')
    },
    { 
      href: "/settings", 
      icon: <Settings className="h-4 w-4" />,
      title: "账户设置",
      isActive: isActive('/settings')
    }
  ];
};
