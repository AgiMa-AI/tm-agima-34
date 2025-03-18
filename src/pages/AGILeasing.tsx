
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Server, Bot } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import PaymentDialog from '@/components/leasing/PaymentDialog';
import ComputeResourceSection from '@/components/leasing/ComputeResourceSection';
import AGIModelSection from '@/components/leasing/AGIModelSection';
import MobileLeaseHelp from '@/components/leasing/MobileLeaseHelp';

const AGILeasing = () => {
  const [activeTab, setActiveTab] = useState<string>('resources');
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedResourceType, setSelectedResourceType] = useState<string>('gpu');
  const [selectedGpuCount, setSelectedGpuCount] = useState<string>('1');
  const [selectedCpuCount, setSelectedCpuCount] = useState<string>('32');
  const [leaseDays, setLeaseDays] = useState<string>('1');
  
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
              <ComputeResourceSection onLease={handleLease} />
            </TabsContent>
            
            <TabsContent value="agi">
              <AGIModelSection />
            </TabsContent>
          </Tabs>
        </div>

        {isMobile && <MobileLeaseHelp />}

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
