
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

interface SidebarFooterProps {
  collapsed?: boolean;
}

const SidebarFooter = ({ collapsed }: SidebarFooterProps) => {
  return (
    <div className="mt-auto p-4 border-t">
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full justify-center bg-primary/5 hover:bg-primary/10 text-primary" 
        asChild
      >
        <Link to="/settings">
          <Settings className="h-4 w-4 mr-2" />
          {!collapsed ? "账户设置" : null}
        </Link>
      </Button>
    </div>
  );
};

export default SidebarFooter;
