
import React from 'react';

interface SidebarFooterProps {
  collapsed?: boolean;
}

const SidebarFooter = ({ collapsed }: SidebarFooterProps) => {
  return (
    <div className="mt-auto p-4 border-t">
      {/* Footer content can be added here if needed */}
      <div className="text-xs text-muted-foreground text-center">
        {!collapsed ? "算力云平台 © 2023" : null}
      </div>
    </div>
  );
};

export default SidebarFooter;
