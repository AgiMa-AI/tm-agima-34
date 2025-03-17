
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Home, Server, CreditCard, Clock, Settings, Database, 
  Smartphone, BarChart, Bot, Cpu, Globe, Users,
  LineChart, PieChart, Share2, Wifi, Zap, Network
} from 'lucide-react';

import NavSection from './NavSection';
import SidebarFooter from './SidebarFooter';

interface SidebarProps {
  collapsed?: boolean;
  className?: string;
}

const Sidebar = ({ collapsed, className }: SidebarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Define sections of navigation
  const overviewItems = [
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

  const computingItems = [
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

  const userCenterItems = [
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

  const adminItems = [
    { 
      href: "/admin/users", 
      icon: <Users className="h-4 w-4" />,
      title: "用户管理",
      isActive: isActive('/admin/users')
    },
    { 
      href: "/admin/tasks", 
      icon: <Clock className="h-4 w-4" />,
      title: "任务调度",
      isActive: isActive('/admin/tasks')
    }
  ];

  return (
    <aside className={cn(
      'border-r bg-background transition-all duration-300 ease-in-out',
      collapsed ? 'w-[70px]' : 'w-[240px]',
      'lg:block',
      className
    )}>
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            {!collapsed && <span className="text-xl">算力云平台</span>}
            {collapsed && <Server className="h-6 w-6" />}
          </Link>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="grid gap-2 px-2">
            <NavSection 
              title="数据概览" 
              items={overviewItems} 
              collapsed={collapsed} 
            />
            
            <NavSection 
              title="算力业务" 
              items={computingItems} 
              collapsed={collapsed} 
              className="pt-4"
            />
            
            {!collapsed && <Separator className="my-4" />}
            
            <NavSection 
              title="用户中心" 
              items={userCenterItems} 
              collapsed={collapsed} 
              className="pt-2"
            />
            
            {!collapsed && <Separator className="my-4" />}
            
            <NavSection 
              title="后台管理" 
              items={adminItems} 
              collapsed={collapsed} 
              className="pt-2"
            />
          </nav>
        </ScrollArea>
        <SidebarFooter collapsed={collapsed} />
      </div>
    </aside>
  );
};

export default Sidebar;
