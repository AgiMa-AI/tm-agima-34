
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Download, PlusCircle } from 'lucide-react';
import WithdrawalList from './WithdrawalList';

const withdrawalData = [
  { 
    id: 'WD-5678', 
    time: '2023-05-05 14:30', 
    amount: 500, 
    status: 'completed', 
    method: '支付宝' 
  },
  { 
    id: 'WD-5679', 
    time: '2023-05-01 08:15', 
    amount: 1000, 
    status: 'completed', 
    method: '银行卡' 
  },
  { 
    id: 'WD-5680', 
    time: '2023-04-25 22:45', 
    amount: 300, 
    status: 'completed', 
    method: '微信' 
  },
];

const WithdrawalRecords = () => {
  return (
    <Card className="shadow-sm hover:shadow transition-shadow duration-200">
      <CardHeader className="p-3 sm:p-4 pb-0">
        <CardTitle className="flex items-center text-base sm:text-lg text-primary">
          <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
          提现记录
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-4 pt-2">
        <div className="space-y-3 sm:space-y-4">
          <WithdrawalList withdrawals={withdrawalData} />
          
          <div className="flex gap-2">
            <Button className="flex-1 button-animation" size="sm">
              <PlusCircle className="h-4 w-4 mr-1.5" />
              申请提现
            </Button>
            <Button variant="outline" size="sm" className="button-animation">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WithdrawalRecords;
