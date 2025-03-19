
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import NavSection from './NavSection';
import SidebarContainer from './sidebar/SidebarContainer';
import {
  getOverviewItems,
  getComputingItems,
  getAIServiceItems,
  getUserCenterItems
} from './sidebar/NavSections';

interface SidebarProps {
  collapsed?: boolean;
  className?: string;
}

const Sidebar = ({ collapsed, className }: SidebarProps) => {
  const location = useLocation();
  
  // Get navigation items
  const overviewItems = getOverviewItems(location);
  const computingItems = getComputingItems(location);
  const aiServiceItems = getAIServiceItems(location);
  const userCenterItems = getUserCenterItems(location);

  return (
    <SidebarContainer collapsed={collapsed} className={className}>
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
      
      <NavSection 
        title="专业AI服务" 
        items={aiServiceItems} 
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
    </SidebarContainer>
  );
};

export default Sidebar;
