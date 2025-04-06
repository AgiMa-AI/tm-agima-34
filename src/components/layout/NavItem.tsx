
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  collapsed?: boolean;
}

const NavItem = ({ icon: Icon, label, href, collapsed }: NavItemProps) => {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'w-full justify-start gap-2 mb-1',
        )}
      >
        <Icon className="h-4 w-4" />
        {!collapsed && <span>{label}</span>}
      </Button>
    </Link>
  );
};

export default NavItem;
