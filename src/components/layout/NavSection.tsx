
import React from 'react';
import { cn } from '@/lib/utils';

interface NavSectionProps {
  label?: string;
  collapsed?: boolean;
  className?: string;
  children: React.ReactNode;
}

const NavSection = ({ label, children, collapsed, className }: NavSectionProps) => {
  return (
    <div className={cn("grid gap-1 px-2", className)}>
      {label && (
        <h3 className={cn(
          "mb-1 text-xs font-medium text-muted-foreground",
          collapsed && "sr-only"
        )}>
          {label}
        </h3>
      )}
      <div className="grid gap-1">
        {children}
      </div>
    </div>
  );
};

export default NavSection;
