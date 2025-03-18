import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { Server, Clock, CreditCard, Calendar, Cpu, LineChart, Shield, Key, HardDrive, Bot, Zap, Filter, X, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import LeaseOptions from '@/components/leasing/LeaseOptions';
import TaskManagement from '@/components/leasing/TaskManagement';
import CostEstimate from '@/components/leasing/CostEstimate';
import LeaseGuarantee from '@/components/leasing/LeaseGuarantee';
import PaymentDialog from '@/components/leasing/PaymentDialog';
import ResourceConfiguration from '@/components/leasing/ResourceConfiguration';
import { useAGIModels } from '@/hooks/useAGIModels';
import AGIModelCard from '@/components/agi/AGIModelCard';

const AGILeasing = () => {
  const [activeTab, setActiveTab] = useState<string>('resources');
  const [selectedResourceType, setSelectedResourceType] = useState<string>('gpu');
  const [selectedPlan, setSelectedPlan] = useState<string>('daily');
  const [selectedGpuCount, setSelectedGpuCount] = useState<string>('1');
  const [selectedCpuCount, setSelectedCpuCount] = useState<string>('32');
  const [selectedTask, setSelectedTask] = useState<string>('training');
  const [leaseDays, setLeaseDays] = useState<string>('1');
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const { 
    models,
    loading: modelsLoading,
    updateFilters,
    resetFilters,
    filterOptions
  } = useAGIModels();
  
  const [selectedModelFilters, setSelectedModelFilters] = useState<{
    type: string[];
    creator: string[];
  }>({
    type: [],
    creator: []
  });
  
  const handleLease = () => {
    setIsPaymentDialogOpen(true);
  };

  const handlePayment = () => {
    setIsPaymentDialogOpen(false);
    toast({
      title: "租赁申请已提交",
      description: "我们将很快联系您提供SSH密钥和使用指南"
    });
  };
  
  const calculateGpuCost = () => {
    const baseDailyPrice = 980;
    const days = parseInt(leaseDays) || 1;
    const gpuCount = parseInt(selectedGpuCount) || 1;
    
    let discount = 1.0;
    if (days >= 7) {
      discount = 0.85;
    } else if (days >= 3) {
      discount = 0.95;
    }
    
    return (baseDailyPrice * days * gpuCount * discount).toFixed(0);
  };

  const calculateCpuCost = () => {
    const baseDailyPrice = 120;
    const days = parseInt(leaseDays) || 1;
    const cpuCount = parseInt(selectedCpuCount) || 32;
    const cpuMultiplier = cpuCount / 32; // Base is 32 cores
    
    let discount = 1.0;
    if (days >= 7) {
      discount = 0.85;
    } else if (days >= 3) {
      discount = 0.95;
    }
    
    return (baseDailyPrice * days * cpuMultiplier * discount).toFixed(0);
  };

  const calculateCost = () => {
    return selectedResourceType === 'gpu' ? calculateGpuCost() : calculateCpuCost();
  };
  
  const handleModelSearch = () => {
    if (searchQuery.trim()) {
      updateFilters({ search: [searchQuery.trim()] });
    } else {
      updateFilters({ search: undefined });
    }
  };
  
  const handleModelFilterChange = (filterType: string, value: string) => {
    const currentValues = [...(selectedModelFilters[filterType as keyof typeof selectedModelFilters] || [])];
    
    if (currentValues.includes(value)) {
      const newValues = currentValues.filter(v => v !== value);
      setSelectedModelFilters(prev => ({
        ...prev,
        [filterType]: newValues
      }));
      updateFilters({ [filterType]: newValues.length > 0 ? newValues : undefined });
    } else {
      const newValues = [...currentValues, value];
      setSelectedModelFilters(prev => ({
        ...prev,
        [filterType]: newValues
      }));
      updateFilters({ [filterType]: newValues });
    }
  };
  
  const handleResetModelFilters = () => {
    setSelectedModelFilters({
      type: [],
      creator: []
    });
    resetFilters();
    setSearchQuery('');
  };
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div className="bg-gradient-to-r from-primary/80 to-primary rounded-xl shadow-md p-6 text-white">
          <h1 className="text-2xl font-medium mb-2">算力资源租赁</h1>
          <p className="text-white/90 text-sm">
            为您的AI项目租赁高性能GPU、CPU计算资源或AGI智能模型
          </p>
        </div>

        <div className="bg-background rounded-xl shadow-sm p-4 overflow-hidden">
          <Tabs 
            defaultValue="resources" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-4"
          >
            <TabsList className={`grid w-full grid-cols-2 mb-6 rounded-full bg-muted/50 p-1 ${isMobile ? 'text-sm' : ''}`}>
              <TabsTrigger value="resources" className="flex items-center gap-2 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Server className="h-4 w-4" /> 计算资源租赁
              </TabsTrigger>
              <TabsTrigger value="agi" className="flex items-center gap-2 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Bot className="h-4 w-4" /> AGI模型租赁
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="resources">
              <Tabs 
                defaultValue="gpu" 
                value={selectedResourceType}
                onValueChange={setSelectedResourceType}
                className="mb-4"
              >
                <TabsList className={`grid w-full grid-cols-2 mb-6 rounded-full bg-muted/50 p-1 ${isMobile ? 'text-sm' : ''}`}>
                  <TabsTrigger value="gpu" className="flex items-center gap-2 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <HardDrive className="h-4 w-4" /> GPU 租赁 
                  </TabsTrigger>
                  <TabsTrigger value="cpu" className="flex items-center gap-2 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <Cpu className="h-4 w-4" /> CPU 租赁 
                  </TabsTrigger>
                </TabsList>
              
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 lg:grid-cols-3 gap-6'}`}>
                  <div className={`${isMobile ? '' : 'lg:col-span-2'} space-y-4`}>
                    <Card className="border-0 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="bg-background pb-3">
                        <CardTitle className="flex items-center text-lg">
                          <LineChart className="h-5 w-5 mr-2 text-primary" />
                          租赁选项
                        </CardTitle>
                        <CardDescription>
                          根据您的需求选择合适的租赁方案
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-4">
                        <Tabs defaultValue="daily" onValueChange={setSelectedPlan} className="w-full">
                          <TabsList className={`grid grid-cols-3 mb-6 ${isMobile ? 'text-xs' : ''} rounded-full bg-muted/50 p-1`}>
                            <TabsTrigger value="daily" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">按天租赁</TabsTrigger>
                            <TabsTrigger value="weekly" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">按周租赁</TabsTrigger>
                            <TabsTrigger value="task" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">按任务租赁</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="daily">
                            <LeaseOptions 
                              resourceType={selectedResourceType}
                              gpuCount={selectedGpuCount}
                              setGpuCount={setSelectedGpuCount}
                              cpuCount={selectedCpuCount}
                              setCpuCount={setSelectedCpuCount}
                              leaseDays={leaseDays}
                              setLeaseDays={setLeaseDays}
                              taskType={selectedTask}
                              setTaskType={setSelectedTask}
                            />
                          </TabsContent>
                          
                          <TabsContent value="weekly">
                            <LeaseOptions 
                              resourceType={selectedResourceType}
                              gpuCount={selectedGpuCount}
                              setGpuCount={setSelectedGpuCount}
                              cpuCount={selectedCpuCount}
                              setCpuCount={setSelectedCpuCount}
                              leaseDays={leaseDays}
                              setLeaseDays={setLeaseDays}
                              taskType={selectedTask}
                              setTaskType={setSelectedTask}
                            />
                          </TabsContent>
                          
                          <TabsContent value="task">
                            <div className="grid gap-6">
                              <div className="grid gap-4">
                                <div>
                                  <label className="text-sm font-medium mb-1.5 block">任务类型</label>
                                  <Tabs defaultValue="finetuning">
                                    <TabsList className="w-full">
                                      <TabsTrigger value="finetuning">大模型微调</TabsTrigger>
                                      <TabsTrigger value="training">从头训练</TabsTrigger>
                                      <TabsTrigger value="rendering">3D渲染</TabsTrigger>
                                    </TabsList>
                                  </Tabs>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                    
                    <div className={`${isMobile ? 'mt-4' : ''}`}>
                      <TaskManagement />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <CostEstimate 
                      resourceType={selectedResourceType}
                      resourceCount={selectedResourceType === 'gpu' ? selectedGpuCount : selectedCpuCount}
                      leaseDays={leaseDays}
                      totalCost={calculateCost()}
                      onLease={handleLease}
                    />
                    
                    <LeaseGuarantee />
                  </div>
                </div>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="agi">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Input 
                        placeholder="搜索AGI模型..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10"
                        onKeyDown={(e) => e.key === 'Enter' && handleModelSearch()}
                      />
                      <Search className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={isFilterOpen ? "bg-primary/10" : ""}
                      >
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button onClick={handleModelSearch}>搜索</Button>
                    </div>
                  </div>
                  
                  {isFilterOpen && (
                    <div className="mt-4 border-t pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">筛选选项</h3>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={handleResetModelFilters}
                          className="h-8 text-xs"
                        >
                          <X className="h-3 w-3 mr-1" />
                          重置
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm mb-2 block">模型类型</Label>
                          <div className="flex flex-wrap gap-2">
                            {filterOptions.type.options.map((option) => (
                              <Badge 
                                key={option.value}
                                variant={selectedModelFilters.type.includes(option.value) ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => handleModelFilterChange('type', option.value)}
                              >
                                {option.label}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-sm mb-2 block">开发厂商</Label>
                          <div className="flex flex-wrap gap-2">
                            {filterOptions.creator.options.map((option) => (
                              <Badge 
                                key={option.value}
                                variant={selectedModelFilters.creator.includes(option.value) ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => handleModelFilterChange('creator', option.value)}
                              >
                                {option.label}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {modelsLoading ? (
                    Array(6).fill(0).map((_, index) => (
                      <Card key={index} className="h-[450px] animate-pulse overflow-hidden">
                        <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                        <CardContent className="p-4">
                          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : models.length > 0 ? (
                    models.map((model) => (
                      <AGIModelCard key={model.id} model={model} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <Bot className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                      <h3 className="mt-4 text-lg font-medium">未找到AGI模型</h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                        没有找到符合当前筛选条件的AGI模型。请尝试调整您的筛选条件或搜索关键词。
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={handleResetModelFilters}
                      >
                        重置筛选条件
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {isMobile && (
          <Card className="border-0 shadow-md rounded-xl overflow-hidden mt-6">
            <CardHeader className="bg-background pb-3">
              <CardTitle className="flex items-center text-lg">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                常见问题
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium text-sm">如何获取SSH密钥?</h3>
                <p className="text-sm text-muted-foreground">租赁成功后，系统将自动生成SSH密钥并发送到您的邮箱，通常在10分钟内到达。</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-medium text-sm">如何选择合适的配置?</h3>
                <p className="text-sm text-muted-foreground">对于大模型训练，建议选择多张GPU；对于推理任务，单GPU通常足够；数据处理任务则可考虑CPU资源。</p>
              </div>
            </CardContent>
          </Card>
        )}

        <PaymentDialog 
          open={isPaymentDialogOpen}
          onOpenChange={setIsPaymentDialogOpen}
          onPayment={handlePayment}
          selectedResourceType={selectedResourceType}
          totalCost={calculateCost()}
          resourceCount={selectedResourceType === 'gpu' ? selectedGpuCount : selectedCpuCount}
          leaseDays={leaseDays}
        />
      </div>
    </Layout>
  );
};

export default AGILeasing;
