
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-6">
        <div className="mb-8">
          <div className="h-24 w-24 bg-primary/10 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center tiffany-shadow mx-auto">
            <span className="text-primary text-4xl font-bold">404</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 brand-text-gradient">页面未找到</h1>
        <p className="text-lg text-muted-foreground mb-6">
          抱歉，您尝试访问的页面不存在或已被移除。
        </p>
        
        <Link 
          to="/" 
          className="inline-block px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
