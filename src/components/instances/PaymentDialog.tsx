
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useMobile } from '@/hooks/use-mobile';
import { GPUInstance } from '@/data/instances';
import { MessageSquare, CreditCard } from 'lucide-react';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedInstance: GPUInstance | null;
  rentalPeriod: number;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  onConfirm: () => void;
  onBack: () => void;
}

const PaymentDialog = ({ 
  open, 
  onOpenChange, 
  selectedInstance, 
  rentalPeriod, 
  paymentMethod, 
  setPaymentMethod, 
  onConfirm,
  onBack
}: PaymentDialogProps) => {
  const { isMobile } = useMobile();
  
  const paymentMethods = [
    {
      id: 'wechat',
      name: '微信支付',
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      id: 'alipay',
      name: '支付宝',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 9.5C22 5.36 18.64 2 14.5 2h-5C5.36 2 2 5.36 2 9.5v5c0 4.14 3.36 7.5 7.5 7.5h5c4.14 0 7.5-3.36 7.5-7.5v-5Z"/><path d="M18.5 4.5c-1 0-1.5.5-1.5 1.5v4.53L9.5 9M16.53 12h-4.17c-2.95 4.61-4.87 5.5-4.87 5.5h7.04c4 0 5.47-.54 5.47-2.5 0-1.96-1.97-3-3.47-3Z"/></svg>,
    },
    {
      id: 'bank',
      name: '公户转账',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M6 9h12M6 13h2M6 17h6"/></svg>,
    },
    {
      id: 'unionpay',
      name: '云闪付',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
    },
    {
      id: 'quickpay',
      name: '银联快捷',
      icon: <CreditCard className="h-4 w-4" />,
    },
  ];
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={isMobile ? "sm:max-w-[95%] p-4 rounded-xl" : "sm:max-w-md"}>
        <DialogHeader>
          <DialogTitle>请选择支付方式</DialogTitle>
          <DialogDescription>
            选择您偏好的支付方式完成订单
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="rounded-md border p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">租用订单</p>
                <p className="text-sm text-muted-foreground">{selectedInstance?.name} - {rentalPeriod}天</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">¥{selectedInstance ? ((selectedInstance.dailyPrice || selectedInstance.price * 24) * rentalPeriod).toFixed(2) : '0.00'}</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <RadioGroup 
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-3"
            >
              {paymentMethods.map(method => (
                <div key={method.id} className="flex items-center space-x-2 touch-feedback active:bg-primary/5 p-2 rounded-lg">
                  <RadioGroupItem value={method.id} id={`list-${method.id}`} className="touch-target" />
                  <Label htmlFor={`list-${method.id}`} className="flex items-center cursor-pointer flex-1">
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-muted mr-2">
                      {method.icon}
                    </span>
                    {method.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
        
        <DialogFooter className={isMobile ? "flex-col space-y-2" : "sm:justify-between"}>
          <Button 
            variant="outline" 
            onClick={onBack}
            className="w-full sm:w-auto touch-feedback"
          >
            返回
          </Button>
          <Button 
            onClick={onConfirm}
            className="w-full sm:w-auto touch-feedback"
          >
            确认支付
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
