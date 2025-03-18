
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImplementationDetails = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">实施细节</h2>
        <p className="text-muted-foreground mt-2">
          我们采用科学的方法论和工程实践，确保企业专属AI项目的成功实施
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>需求分析与评估</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">业务场景与痛点分析</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">AI可行性评估</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">投资回报预估</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">数据资源盘点</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>解决方案设计</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">技术路线选择</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">模型架构设计</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">系统集成方案</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">性能与安全规划</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>数据准备与处理</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">数据收集与标注</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">数据清洗与转换</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">数据增强与平衡</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">特征工程优化</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>模型训练与优化</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">预训练模型选择</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">迁移学习与微调</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">超参数优化</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">模型压缩与加速</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>系统集成与部署</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">API接口开发</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">企业系统集成</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">安全部署方案</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">性能监控系统</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>测试验证与优化</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">功能测试与验证</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">性能与压力测试</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">用户体验优化</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-sm">问题修复与改进</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">项目管理与质量控制</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">敏捷项目管理</h3>
              <p className="text-sm text-muted-foreground">
                采用敏捷开发方法论，将项目分解为多个迭代周期，
                确保每个阶段都有可交付成果，便于及时调整方向。
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">全面质量保障</h3>
              <p className="text-sm text-muted-foreground">
                严格的质量控制流程，包括代码审查、单元测试、
                集成测试和验收测试，确保交付高质量的AI系统。
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">透明沟通机制</h3>
              <p className="text-sm text-muted-foreground">
                定期项目进度汇报与沟通会议，确保客户全程参与，
                项目进展透明可见，及时解决问题。
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">知识转移培训</h3>
              <p className="text-sm text-muted-foreground">
                提供全面的技术文档与使用培训，确保客户团队
                能够理解并掌握AI系统的使用与维护。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">交付物与服务</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">定制AI模型与应用系统</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    根据需求开发的完整AI模型与应用系统，包括源代码、模型文件、部署脚本等。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">技术文档与用户手册</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    包括系统架构文档、API文档、用户使用手册、运维手册等全面技术文档。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">培训与技术支持</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    提供系统使用与维护培训，以及后续技术支持与咨询服务。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">运维与优化方案</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    长期运维计划与系统优化方案，确保AI系统持续发挥价值。
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button size="lg" asChild>
          <Link to="/ai-customization/contact">
            咨询详细实施方案
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ImplementationDetails;
