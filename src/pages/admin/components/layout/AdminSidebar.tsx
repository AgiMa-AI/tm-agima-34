
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Users, 
  Settings, 
  Server, 
  Database, 
  Shield, 
  Globe 
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const navigationItems = [
    {
      name: '仪表盘',
      href: '/admin/dashboard',
      icon: BarChart3
    },
    {
      name: '用户管理',
      href: '/admin/users',
      icon: Users
    },
    {
      name: '实例管理',
      href: '/admin/instances',
      icon: Server
    },
    {
      name: 'API配置',
      href: '/admin/api-config',
      icon: Globe
    },
    {
      name: '系统设置',
      href: '/admin/settings',
      icon: Settings
    }
  ];

  return (
    <aside className="w-64 border-r bg-background p-4 hidden md:block">
      <div className="mb-6">
        <Link to="/admin" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">管理控制台</span>
        </Link>
      </div>
      
      <nav className="space-y-1">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
