
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5">
      <div className="text-center p-8 glass rounded-xl tiffany-shadow max-w-md animate-fade-in">
        <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 float-animation">
          <span className="text-4xl font-bold text-primary">404</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 brand-text-gradient">页面未找到</h1>
        <p className="text-lg text-muted-foreground mb-6">
          很抱歉，您访问的页面不存在或已被移除。
        </p>
        
        <Button asChild className="tiffany-button button-animation">
          <a href="/">返回首页</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
