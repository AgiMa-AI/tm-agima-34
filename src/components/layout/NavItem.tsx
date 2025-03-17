
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  isActive?: boolean;
}

const NavItem = ({ icon, title, href, isActive }: NavItemProps) => {
  return (
    <Link to={href}>
      <Button
        variant={isActive ? 'secondary' : 'ghost'}
        size="sm"
        className={cn(
          'w-full justify-start gap-2 mb-1',
          isActive ? 'bg-secondary font-medium' : 'font-normal'
        )}
      >
        {icon}
        <span>{title}</span>
      </Button>
    </Link>
  );
};

export default NavItem;
