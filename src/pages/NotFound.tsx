
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Home, ArrowLeft, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 错误: 用户尝试访问不存在的路径:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  // 获取相似路由的友好建议
  const getSuggestion = (path: string) => {
    // 去除前导斜杠并获取第一段
    const segment = path.replace(/^\//, '').split('/')[0];
    
    // 常见拼写错误或部分匹配
    const commonRoutes: Record<string, string> = {
      'user': '/users',
      'instance': '/instances',
      'model': '/agi-models',
      'chart': '/charts',
      'earning': '/earnings',
      'bill': '/billing',
      'wallet': '/wallet',
      'setting': '/settings',
      'task': '/tasks',
      'consult': '/ai-consulting',
      'solution': '/ai-solutions',
      'custom': '/ai-customization',
      'perform': '/ai-performance',
      'commercial': '/ai-commercial',
      'mobile': '/mobile-computing',
      'distribution': '/service-distribution',
      'hosting': '/agi-hosting',
      'leasing': '/agi-leasing',
      // 添加新的路由匹配
      'admin': '/users',
      'finance': '/ai-solutions/finance',
      'medical': '/ai-solutions/medical',
      'manufacturing': '/ai-solutions/manufacturing',
      'retail': '/ai-solutions/retail',
      'security': '/ai-performance/security',
      'benchmark': '/ai-performance/benchmarks',
      'strategy': '/ai-consulting/strategy',
      'implementation': '/ai-consulting/implementation',
      'training': '/ai-consulting/training',
      'enterprise': '/ai-customization/enterprise-ai',
      'contact': '/ai-solutions/contact',
    };
    
    // 检查完整路径匹配
    if (path.includes('ai-solutions') && path.includes('retail')) {
      return '/ai-solutions/retail';
    }
    
    // 检查部分匹配
    for (const [key, value] of Object.entries(commonRoutes)) {
      if (segment.includes(key)) {
        return value;
      }
    }
    
    // 检查特定的嵌套路由
    const nestedPaths = path.split('/');
    if (nestedPaths.length > 1) {
      const secondSegment = nestedPaths[1];
      if (secondSegment === 'admin' && nestedPaths[2]) {
        return `/admin/${nestedPaths[2]}`;
      }
      
      // 为ai-solutions等添加特殊处理
      if (secondSegment === 'ai-solutions' && nestedPaths[2]) {
        return `/ai-solutions/${nestedPaths[2]}`;
      }
    }
    
    return null;
  };
  
  const suggestion = getSuggestion(location.pathname);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-purple-100/10">
      <div className="text-center p-8 max-w-md">
        <div className="inline-flex mx-auto rounded-full bg-destructive/10 p-3 mb-6">
          <AlertCircle className="h-10 w-10 text-destructive" />
        </div>
        <h1 className="text-5xl font-bold mb-4 ai-text-gradient">404</h1>
        <p className="text-2xl font-medium text-foreground/90 mb-2">页面未找到</p>
        <p className="text-muted-foreground mb-6">
          您访问的路径 <code className="bg-primary/10 px-2 py-1 rounded">{location.pathname}</code> 不存在或暂未开放
        </p>
        
        {suggestion && (
          <div className="bg-muted/50 p-3 rounded-lg mb-6">
            <p className="text-sm mb-2">您是否想访问：</p>
            <Button 
              variant="link" 
              className="text-primary"
              onClick={() => navigate(suggestion)}
            >
              {suggestion}
            </Button>
          </div>
        )}
        
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
