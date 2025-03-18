
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Database, Flask, Server, CheckCircle } from 'lucide-react';

const ServiceProcessSection = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">定制服务流程</h2>
      
      <div className="relative">
        {/* Process timeline */}
        <div className="absolute left-8 lg:left-1/2 top-10 bottom-10 w-0.5 bg-border" />
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:text-right lg:pr-8">
              <div className="flex lg:flex-row-reverse items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border shadow">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-4 border -mt-2 lg:mr-4 lg:-mt-0 ml-4 lg:ml-0 flex-1">
                  <h3 className="text-lg font-medium">需求分析</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    深入了解客户业务场景和挑战，确定AI应用的关键目标和期望效果
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline">业务评估</Badge>
                    <Badge variant="outline">目标定义</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:text-right lg:pr-8"></div>
            <div className="lg:pl-8">
              <div className="flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border shadow">
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-4 border -mt-2 ml-4 flex-1">
                  <h3 className="text-lg font-medium">数据准备</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    收集、清洗和标注与业务相关的专业数据，建立高质量的训练数据集
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline">数据收集</Badge>
                    <Badge variant="outline">数据处理</Badge>
                    <Badge variant="outline">标注体系</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:text-right lg:pr-8">
              <div className="flex lg:flex-row-reverse items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border shadow">
                  <Flask className="h-7 w-7 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-4 border -mt-2 lg:mr-4 lg:-mt-0 ml-4 lg:ml-0 flex-1">
                  <h3 className="text-lg font-medium">模型开发</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    基于客户需求和数据特性，选择合适的基础模型，进行定制开发
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline">模型选型</Badge>
                    <Badge variant="outline">特征工程</Badge>
                    <Badge variant="outline">模型训练</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:text-right lg:pr-8"></div>
            <div className="lg:pl-8">
              <div className="flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border shadow">
                  <Server className="h-7 w-7 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-4 border -mt-2 ml-4 flex-1">
                  <h3 className="text-lg font-medium">部署与集成</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    将定制AI模型部署到生产环境，与现有业务系统集成，提供API接口
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline">环境配置</Badge>
                    <Badge variant="outline">API开发</Badge>
                    <Badge variant="outline">系统集成</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:text-right lg:pr-8">
              <div className="flex lg:flex-row-reverse items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border shadow">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-4 border -mt-2 lg:mr-4 lg:-mt-0 ml-4 lg:ml-0 flex-1">
                  <h3 className="text-lg font-medium">运维与优化</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    提供持续的技术支持和模型优化服务，确保AI系统稳定运行并持续提升效果
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline">性能监控</Badge>
                    <Badge variant="outline">迭代优化</Badge>
                    <Badge variant="outline">技术支持</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcessSection;
