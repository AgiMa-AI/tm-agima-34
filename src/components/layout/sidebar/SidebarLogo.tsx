
import React from 'react';
import { Link } from 'react-router-dom';
import { Server } from 'lucide-react';

interface SidebarLogoProps {
  collapsed?: boolean;
}

const SidebarLogo = ({ collapsed }: SidebarLogoProps) => {
  return (
    <div className="flex h-14 items-center border-b px-4">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        {!collapsed && <span className="text-xl">算力云平台</span>}
        {collapsed && <Server className="h-6 w-6" />}
      </Link>
    </div>
  );
};

export default SidebarLogo;
