
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Info, Server, Clock, AlertCircle, Lock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { leaseAGIModel } from '@/services/agiModelService';

const ComputePowerLeasing = () => {
  const [leasingOption, setLeasingOption] = useState<string>("yearly");
  const [hardwareType, setHardwareType] = useState<string>("gpu");
  const [hardwareCount, setHardwareCount] = useState<string>("4");
  const { toast } = useToast();
  
  const handleLeaseStart = async () => {
    try {
      const response = await leaseAGIModel(`${hardwareType}-${hardwareCount}`, leasingOption === 'yearly' ? 365 : 180);
      
      if (response.success) {
        toast({
          title: "出租请求已提交",
          description: `您的${hardwareType.toUpperCase()}算力资源将开始出租。租赁编号: ${response.leaseId}`,
          variant: "default",
        });
      } else {
        toast({
          title: "出租请求失败",
          description: "提交您的出租请求时出现问题，请稍后重试。",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "出租请求失败",
        description: "提交您的出租请求时出现问题，请稍后重试。",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Card className="border-0 shadow-md rounded-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardTitle className="flex items-center text-xl">
          <Server className="h-5 w-5 mr-2 text-primary" />
          算力出租选项
        </CardTitle>
        <CardDescription>
          选择您想要出租的算力资源和方式
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/50 rounded-lg p-4 mb-4">
          <div className="flex">
            <Lock className="h-5 w-5 text-amber-600 dark:text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">服务稳定性保障</p>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                为确保租用您算力的客户获得稳定、不间断的服务，我们要求所有算力提供者至少承诺一年的出租期或提供六个月的押金作为保障。这能防止客户的服务被无故中断，增强平台可靠性和声誉。
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Label className="text-base font-medium">出租方式</Label>
              <div className="flex items-center text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1 rounded text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>最低出租要求</span>
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-muted/30">
              <RadioGroup 
                value={leasingOption} 
                onValueChange={setLeasingOption}
                className="space-y-3"
              >
                <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="yearly" id="yearly" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="yearly" className="font-medium text-base">一年期出租</Label>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1 text-primary/70" />
                      <p>最少出租期限：12个月</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      将您的算力资源出租一年，为客户提供稳定的服务保障，同时获得最高收益回报。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="deposit" id="deposit" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="deposit" className="font-medium text-base">六个月押金出租</Label>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1 text-primary/70" />
                      <p>需支付六个月押金</p>
                    </div>
                    <div className="flex items-center gap-1 mb-1">
                      <p className="text-sm text-muted-foreground">
                        提供六个月押金作为服务稳定性保障，确保租用客户的服务不会被突然中断。押金可全额退还。
                      </p>
                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hardware-type">硬件类型</Label>
              <Select value={hardwareType} onValueChange={setHardwareType}>
                <SelectTrigger id="hardware-type" className="w-full">
                  <SelectValue placeholder="选择硬件类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpu">GPU (图形处理器)</SelectItem>
                  <SelectItem value="cpu">CPU (中央处理器)</SelectItem>
                  <SelectItem value="mixed">混合资源</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hardware-count">数量</Label>
              <Select value={hardwareCount} onValueChange={setHardwareCount}>
                <SelectTrigger id="hardware-count" className="w-full">
                  <SelectValue placeholder="选择数量" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 {hardwareType.toUpperCase()}</SelectItem>
                  <SelectItem value="2">2 {hardwareType.toUpperCase()}</SelectItem>
                  <SelectItem value="4">4 {hardwareType.toUpperCase()}</SelectItem>
                  <SelectItem value="8">8 {hardwareType.toUpperCase()}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/50">
          <div className="flex">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                我们的双向保障承诺
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                {leasingOption === 'yearly' ? (
                  "选择一年期出租，确保租用您算力的客户获得稳定持续的服务。同时，您将获得稳定的收益回报，我们承诺最低95%的使用率。如不满意，可在前3个月内申请终止出租并退还剩余租金。"
                ) : (
                  "选择押金方式出租，您的押金将作为服务稳定性保证，确保客户服务不会被无故中断。押金将在出租结束后的7个工作日内全额退还至您的账户。"
                )}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30">
          <div>
            <p className="font-medium">预估月收益</p>
            <p className="text-2xl font-bold text-green-700 dark:text-green-400">
              {hardwareType === 'gpu' ? '¥' + (parseInt(hardwareCount) * 2800).toLocaleString() : '¥' + (parseInt(hardwareCount) * 800).toLocaleString()}
            </p>
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleLeaseStart}>
            开始出租
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComputePowerLeasing;
