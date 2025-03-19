import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { FileType, Briefcase, Building2, Stethoscope, Factory } from 'lucide-react';
import UnderConstruction from '@/components/ui/UnderConstruction';

const IndustryAI = () => {
  return (
    <SecondaryPageLayout
      title="行业专用AGI"
      description="面向特定行业的AGI解决方案"
      backLink="/ai-customization"
      backLabel="返回AI定制服务"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="overview">方案概览</TabsTrigger>
          <TabsTrigger value="finance">金融行业</TabsTrigger>
          <TabsTrigger value="medical">医疗行业</TabsTrigger>
          <TabsTrigger value="manufacturing">制造行业</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileType className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">行业专用AGI解决方案</h3>
                    <p className="text-muted-foreground">
                      我们针对特定行业开发了深度结合行业知识和规范的AGI模型，帮助客户应对行业特有挑战。通过结合行业专业知识库、
                      合规性要求和专业术语理解，打造真正懂行业的AI助手。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">行业知识库</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  集成行业特定的专业知识、法规和最佳实践，确保AI响应符合行业标准
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">合规性保障</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  确保AI模型严格遵循行业监管要求和合规标准，降低合规风险
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Factory className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">流程优化</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  根据行业特定流程和工作方式，定制AI模型以提高效率和决策质量
                </p>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="finance">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">金融行业AGI解决方案</h3>
                    <p className="text-muted-foreground">
                      专为银行、保险、投资等金融机构打造的智能解决方案，帮助提升风险管理、客户服务和合规效率。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <UnderConstruction 
              contactLink="/ai-customization/contact"
              contactLabel="咨询金融行业方案"
              message="金融行业AGI解决方案详细内容正在完善中，请通过咨询联系我们了解更多信息。" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="medical">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">医疗行业AGI解决方案</h3>
                    <p className="text-muted-foreground">
                      面向医院、诊所和医疗设备制造商的AI解决方案，协助医疗记录管理、辅助诊断和患者健康管理。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <UnderConstruction 
              contactLink="/ai-customization/contact"
              contactLabel="咨询医疗行业方案"
              message="医疗行业AGI解决方案详细内容正在完善中，请通过咨询联系我们了解更多信息。" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="manufacturing">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">制造行业AGI解决方案</h3>
                    <p className="text-muted-foreground">
                      为制造企业提供的智能解决方案，帮助优化生产流程、预测性维护和供应链管理。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <UnderConstruction 
              contactLink="/ai-customization/contact"
              contactLabel="咨询制造行业方案"
              message="制造行业AGI解决方案详细内容正在完善中，请通过咨询联系我们了解更多信息。" 
            />
          </div>
        </TabsContent>
      </Tabs>
    </SecondaryPageLayout>
  );
};

export default IndustryAI;
