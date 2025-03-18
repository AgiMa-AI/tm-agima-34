
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SuccessCases = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">成功案例</h2>
        <p className="text-muted-foreground mt-2">
          我们已帮助众多企业成功实施专属AI解决方案，创造实际业务价值
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>某大型制造企业质检系统</CardTitle>
                <CardDescription>AI视觉质检解决方案</CardDescription>
              </div>
              <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">制造业</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">业务挑战</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  传统人工质检效率低、成本高，且容易出现疲劳导致的漏检。企业需要提高质检效率和准确率，降低人力成本。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">AI解决方案</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  基于企业实际生产线和产品特性，定制开发视觉质检AI系统，利用深度学习模型识别产品缺陷，并与现有MES系统集成。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">实施效果</h3>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>缺陷检出率提升至99.7%，超过人工检测</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>质检效率提升300%，每条生产线减少4名质检人员</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>年均节省成本超过200万元</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/ai-customization/case-studies/manufacturing">
                  查看详细案例
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>某金融机构智能审核系统</CardTitle>
                <CardDescription>AI文档理解与审核方案</CardDescription>
              </div>
              <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">金融业</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">业务挑战</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  大量金融文档需要人工审核，流程冗长，效率低下。客户等待时间长，员工工作量大，容易出错。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">AI解决方案</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  开发专用文档理解AI系统，自动提取关键信息，进行规则核验，实现大部分常规文档的自动审核，仅将异常情况转人工处理。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">实施效果</h3>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>文档处理时间从均值3小时缩短至15分钟</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>80%的常规文档实现全自动处理</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>客户满意度提升35%，员工工作压力大幅降低</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/ai-customization/case-studies/finance">
                  查看详细案例
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>某医疗机构智能诊断助手</CardTitle>
                <CardDescription>医疗AI辅助诊断系统</CardDescription>
              </div>
              <Badge className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20">医疗健康</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">业务挑战</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  医生工作负担重，基层医院专业人才不足，诊断质量参差不齐，需要提高诊断效率和准确性。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">AI解决方案</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  结合医院病例数据和专家知识，开发医疗辅助诊断系统，帮助医生快速分析病情，提供诊断建议和治疗参考。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">实施效果</h3>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>诊断准确率提升25%，特别是对疑难杂症</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>医生诊断效率提高40%，每天可多接诊15-20名患者</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>患者满意度和治疗效果显著提升</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/ai-customization/case-studies/healthcare">
                  查看详细案例
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>某物流企业智能调度系统</CardTitle>
                <CardDescription>AI物流优化解决方案</CardDescription>
              </div>
              <Badge className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20">物流业</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">业务挑战</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  传统人工调度效率低，车辆路线与资源分配不合理，导致高成本和延迟配送，客户满意度下降。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">AI解决方案</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  基于企业实际配送网络和历史数据，开发智能调度系统，实时优化车辆路线和资源分配，提高配送效率。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">实施效果</h3>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>运营成本降低18%，燃油使用减少23%</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>准时配送率提升至98.5%</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <span className="bg-green-500/20 text-green-700 w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">+</span>
                    <span>车辆利用率提高30%，实现更高配送能力</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/ai-customization/case-studies/logistics">
                  查看详细案例
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button size="lg" asChild>
          <Link to="/ai-customization/contact">
            获取更多案例资料
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessCases;
