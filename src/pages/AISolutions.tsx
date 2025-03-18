
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, FileText, FlaskConical, PieChart, Stethoscope, Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AISolutions = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">行业解决方案</h1>
            <Button variant="outline" asChild>
              <Link to="/ai-solutions/contact">
                获取解决方案
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground">
            针对不同行业特点和需求，我们提供专业化的AI解决方案
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-fit md:grid-cols-5">
            <TabsTrigger value="overview">解决方案</TabsTrigger>
            <TabsTrigger value="finance">金融行业</TabsTrigger>
            <TabsTrigger value="medical">医疗健康</TabsTrigger>
            <TabsTrigger value="manufacturing">制造业</TabsTrigger>
            <TabsTrigger value="retail">零售行业</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>金融科技解决方案</CardTitle>
                    <CardDescription>智能风控与分析</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    为金融机构提供智能风控、投资分析、客户服务等全方位AI解决方案，提升决策效率与安全性。
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/ai-solutions/finance">
                      了解详情
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Stethoscope className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>医疗健康解决方案</CardTitle>
                    <CardDescription>智能诊断与医疗助手</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    结合医学知识与AI技术，提供智能诊断、医学影像分析、健康管理等解决方案，提高医疗质量与效率。
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/ai-solutions/medical">
                      了解详情
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Truck className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>制造业解决方案</CardTitle>
                    <CardDescription>智能制造与预测性维护</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    为制造企业提供智能质检、预测性维护、生产优化等解决方案，提升生产效率与产品质量。
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/ai-solutions/manufacturing">
                      了解详情
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Building className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>零售行业解决方案</CardTitle>
                    <CardDescription>智能供应链与个性化营销</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    为零售企业提供智能供应链管理、个性化推荐、客户行为分析等解决方案，提升经营效率与客户体验。
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/ai-solutions/retail">
                      了解详情
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <FlaskConical className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>科研教育解决方案</CardTitle>
                    <CardDescription>科研助手与教学应用</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    为科研机构和教育单位提供科研辅助、教学应用等解决方案，加速科研进程与提升教学质量。
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/ai-solutions/education">
                      了解详情
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <PieChart className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>能源行业解决方案</CardTitle>
                    <CardDescription>能源优化与智能调度</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    为能源企业提供智能调度、需求预测、设备监控等解决方案，提高能源利用效率与安全性。
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/ai-solutions/energy">
                      了解详情
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="finance">
            <div className="mt-6 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">金融科技解决方案</h2>
                <p className="text-muted-foreground mt-2">
                  我们为金融机构提供全面的AI解决方案，助力数字化转型与智能决策
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-medium mb-4">核心优势</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>基于大规模金融知识的专业模型训练</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>合规与安全第一的设计原则</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>多源异构数据智能处理能力</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>金融级安全架构与部署方案</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">主要应用场景</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-primary/5 border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">智能风控</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        多维度风险评估，异常交易实时识别
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-primary/5 border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">投资分析</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        市场趋势预测，投资组合优化
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-primary/5 border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">智能客服</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        24/7全天候客户服务，精准问题解答
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-primary/5 border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">合规审查</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        自动化合规监控，风险提前预警
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">成功案例</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>某大型银行智能风控系统</CardTitle>
                    <CardDescription>提升风险识别准确率30%，减少90%人工审核</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      为某国有大型银行开发部署智能风控系统，整合交易数据、客户行为与外部风险情报，构建多层次风险识别模型。系统上线后，风险识别准确率提升30%，
                      处理速度提高15倍，减少90%人工审核工作，每年为银行减少风险损失超过2亿元。
                    </p>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <Link to="/ai-solutions/finance/case-bank">
                        查看详情
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center mt-10">
                <Button size="lg" asChild>
                  <Link to="/ai-solutions/contact">获取金融行业解决方案</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="medical">
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">医疗健康解决方案</h2>
                <p className="text-muted-foreground mt-2">
                  我们为医疗机构提供专业的AI辅助诊断与健康管理解决方案
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>医学影像分析</CardTitle>
                    <Badge className="w-fit mb-2">辅助诊断</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      结合深度学习技术与医学专家知识，为CT、MRI、X光等医学影像提供智能辅助诊断，
                      提高诊断准确率与效率，减轻医生工作负担。
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>智能电子病历</CardTitle>
                    <Badge className="w-fit mb-2">效率提升</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      智能语音识别与自然语言处理技术，实现医生语音录入自动转文字，
                      结构化提取关键医疗信息，大幅提升电子病历录入效率。
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center mt-8">
                <Button size="lg" asChild>
                  <Link to="/ai-solutions/medical/details">查看更多医疗解决方案</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="manufacturing">
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">制造业解决方案</h2>
                <p className="text-muted-foreground mt-2">
                  我们为制造企业提供智能制造与数字化转型解决方案
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>视觉质检系统</CardTitle>
                    <Badge className="w-fit mb-2">质量控制</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      基于深度学习的计算机视觉技术，实现产品缺陷自动检测，
                      缺陷识别准确率高达99.7%，大幅提升质检效率与准确性。
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>预测性维护</CardTitle>
                    <Badge className="w-fit mb-2">设备管理</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      结合设备传感器数据与AI分析，预测设备潜在故障，
                      提前安排维护，减少意外停机时间，延长设备使用寿命。
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center mt-8">
                <Button size="lg" asChild>
                  <Link to="/ai-solutions/manufacturing/details">查看更多制造业解决方案</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="retail">
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">零售行业解决方案</h2>
                <p className="text-muted-foreground mt-2">
                  我们为零售企业提供智能营销与供应链优化解决方案
                </p>
              </div>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>更多零售行业方案即将推出</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    我们正在开发更多针对零售行业的专业解决方案，敬请期待...
                  </p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link to="/ai-solutions/contact">
                      提前咨询
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AISolutions;
