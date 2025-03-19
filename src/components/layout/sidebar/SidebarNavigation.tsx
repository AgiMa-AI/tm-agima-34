
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import NavSection from '@/components/layout/NavSection';
import { 
  overviewItems, 
  computingItems, 
  aiServiceItems, 
  userCenterItems 
} from './SidebarNavItems';

interface SidebarNavigationProps {
  collapsed?: boolean;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ collapsed }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Apply isActive to each item
  const processNavItems = (items: any[]) => {
    return items.map(item => ({
      ...item,
      isActive: isActive(item.href)
    }));
  };

  return (
    <nav className="grid gap-2 px-2">
      <NavSection 
        title="数据概览" 
        items={processNavItems(overviewItems)} 
        collapsed={collapsed} 
      />
      
      <NavSection 
        title="算力业务" 
        items={processNavItems(computingItems)} 
        collapsed={collapsed} 
        className="pt-4"
      />
      
      <NavSection 
        title="专业AI服务" 
        items={processNavItems(aiServiceItems)} 
        collapsed={collapsed} 
        className="pt-4"
      />
      
      {!collapsed && <Separator className="my-4" />}
      
      <NavSection 
        title="用户中心" 
        items={processNavItems(userCenterItems)} 
        collapsed={collapsed} 
        className="pt-2"
      />
    </nav>
  );
};

export default SidebarNavigation;
