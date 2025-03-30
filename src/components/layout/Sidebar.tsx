
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Brain } from 'lucide-react';
import SidebarNavigation from './sidebar/SidebarNavigation';
import SidebarFooter from './SidebarFooter';

interface SidebarProps {
  collapsed?: boolean;
  className?: string;
}

const Sidebar = ({ collapsed, className }: SidebarProps) => {
  return (
    <aside className={cn(
      'border-r bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out',
      collapsed ? 'w-[70px]' : 'w-[240px]',
      'lg:block',
      className
    )}>
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            {!collapsed && (
              <span className="text-xl ai-text-gradient">AGI云平台</span>
            )}
            {collapsed && <Brain className="h-6 w-6 text-primary" />}
          </Link>
        </div>
        <ScrollArea className="flex-1 py-4 neural-pattern">
          <SidebarNavigation collapsed={collapsed} />
        </ScrollArea>
        <SidebarFooter collapsed={collapsed} />
      </div>
    </aside>
  );
};

export default Sidebar;
