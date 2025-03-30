
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';
import MobileLayoutReset from './MobileLayoutReset';

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideSidebar?: boolean;
  searchHandler?: (query: string) => void;
}

const Layout = ({ 
  children, 
  hideHeader = false, 
  hideSidebar = false,
  searchHandler
}: LayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const { isMobile, resetLayout, deviceType } = useMobile();
  const location = useLocation();

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  }, [location.pathname, isMobile]);

  useEffect(() => {
    if (!isMobile && window.innerWidth >= 1024) {
      setSidebarCollapsed(false);
    } else {
      setSidebarCollapsed(true);
    }
  }, [isMobile, deviceType]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-full flex-col bg-background neural-pattern">
      {!hideHeader && <Header onSearch={searchHandler} />}
      <div className="flex flex-1 overflow-hidden">
        {!hideSidebar && (
          <>
            {/* Mobile sidebar overlay */}
            <div 
              className={cn(
                "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden",
                sidebarCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
              onClick={() => setSidebarCollapsed(true)}
            />
            {/* Sidebar */}
            <Sidebar collapsed={sidebarCollapsed} className={cn(
              "absolute z-50 h-full lg:relative transition-all duration-300 ease-in-out",
              sidebarCollapsed && isMobile ? "-translate-x-full" : "translate-x-0",
              "shadow-lg lg:shadow-none"
            )} />
            {/* Mobile toggle buttons */}
            <Button 
              variant="ai" 
              size="icon" 
              className={cn(
                "fixed bottom-4 left-4 z-50 rounded-full shadow-md lg:hidden transition-opacity duration-300 h-14 w-14 ai-shadow",
                !sidebarCollapsed && "opacity-0 pointer-events-none"
              )}
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
            {/* Close button - visible when sidebar is open on mobile */}
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "fixed top-4 left-[260px] z-50 rounded-full shadow-md lg:hidden transition-opacity duration-300",
                sidebarCollapsed && "opacity-0 pointer-events-none"
              )}
              onClick={() => setSidebarCollapsed(true)}
            >
              <X className="h-5 w-5" />
            </Button>
          </>
        )}
        <main className={cn(
          "flex-1 overflow-y-auto transition-all duration-300 ease-in-out",
          !hideSidebar && !sidebarCollapsed && !isMobile ? 'lg:ml-[240px]' : 'ml-0',
          "bg-gradient-to-br from-background to-secondary/20"
        )}>
          <div className={cn(
            "container mx-auto py-4 sm:py-6 px-3 sm:px-4 md:px-6 animate-fade-in",
            isMobile ? "adaptive-container" : ""
          )}>
            {children}
          </div>
        </main>
      </div>
      
      {/* Mobile layout reset component */}
      <MobileLayoutReset />
    </div>
  );
};

export default Layout;
