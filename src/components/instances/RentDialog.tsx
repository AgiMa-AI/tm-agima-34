
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMobile } from '@/hooks/use-mobile';
import { GPUInstance } from '@/data/instances';

interface RentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedInstance: GPUInstance | null;
  rentalPeriod: number;
  setRentalPeriod: (period: number) => void;
  onConfirm: () => void;
}

const RentDialog = ({ 
  open, 
  onOpenChange, 
  selectedInstance, 
  rentalPeriod, 
  setRentalPeriod, 
  onConfirm 
}: RentDialogProps) => {
  const { isMobile } = useMobile();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={isMobile ? "sm:max-w-[95%] p-4 rounded-xl" : ""}>
        <DialogHeader>
          <DialogTitle>租用 {selectedInstance?.name}</DialogTitle>
          <DialogDescription>
            配置您的租用时长
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="rental-period">租用时长（天）</Label>
            <Input
              id="rental-period"
              type="number"
              min="1"
              value={rentalPeriod}
              onChange={(e) => setRentalPeriod(parseInt(e.target.value))}
              className="touch-feedback"
            />
          </div>
          
          <div className="pt-2">
            <p className="text-sm font-medium">费用摘要</p>
            <div className="flex justify-between mt-2">
              <span className="text-muted-foreground">
                {rentalPeriod} {rentalPeriod === 1 ? '天' : '天'} @ ¥{selectedInstance?.dailyPrice || (selectedInstance?.price * 24).toFixed(2)}/天
              </span>
              <span className="font-medium">
                ¥{selectedInstance ? ((selectedInstance.dailyPrice || selectedInstance.price * 24) * rentalPeriod).toFixed(2) : '0.00'}
              </span>
            </div>
          </div>
        </div>
        
        <DialogFooter className={isMobile ? "flex-col space-y-2" : ""}>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto touch-feedback"
          >
            取消
          </Button>
          <Button 
            onClick={onConfirm}
            className="w-full sm:w-auto touch-feedback"
          >
            确认租用
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RentDialog;
