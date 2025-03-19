
import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import SidebarLogo from './SidebarLogo';
import SidebarFooter from '../SidebarFooter';

interface SidebarContainerProps {
  collapsed?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SidebarContainer = ({ collapsed, className, children }: SidebarContainerProps) => {
  return (
    <aside className={cn(
      'border-r bg-background transition-all duration-300 ease-in-out',
      collapsed ? 'w-[70px]' : 'w-[240px]',
      'lg:block',
      className
    )}>
      <div className="flex h-full flex-col">
        <SidebarLogo collapsed={collapsed} />
        <ScrollArea className="flex-1 py-4">
          <nav className="grid gap-2 px-2">
            {children}
          </nav>
        </ScrollArea>
        <SidebarFooter collapsed={collapsed} />
      </div>
    </aside>
  );
};

export default SidebarContainer;
