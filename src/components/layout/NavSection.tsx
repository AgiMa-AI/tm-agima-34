
import React from 'react';
import { cn } from '@/lib/utils';
import NavItem from './NavItem';

interface NavItemData {
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
}

interface NavSectionProps {
  title: string;
  items: NavItemData[];
  collapsed?: boolean;
  className?: string;
}

const NavSection = ({ title, items, collapsed, className }: NavSectionProps) => {
  return (
    <div className={cn("grid gap-1 px-2", className)}>
      <h3 className={cn(
        "mb-1 text-xs font-medium text-muted-foreground",
        collapsed && "sr-only"
      )}>
        {title}
      </h3>
      {items.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          title={item.title}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default NavSection;
