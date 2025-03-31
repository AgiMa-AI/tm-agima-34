
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-purple-100/10">
      <div className="text-center p-8 max-w-md">
        <div className="inline-flex mx-auto rounded-full bg-primary/10 p-3 mb-6">
          <Brain className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-5xl font-bold mb-4 ai-text-gradient">404</h1>
        <p className="text-2xl font-medium text-foreground/90 mb-2">页面未找到</p>
        <p className="text-muted-foreground mb-6">
          您访问的路径 <code className="bg-primary/10 px-2 py-1 rounded">{location.pathname}</code> 不存在或暂未开放
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={handleGoBack}
          >
            <ArrowLeft className="h-4 w-4" />
            返回上一页
          </Button>
          <Button 
            variant="default" 
            className="flex items-center gap-2"
            onClick={handleGoHome}
          >
            <Home className="h-4 w-4" />
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
