
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, ArrowUpRight, SendHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AccountBalanceProps {
  currentBalance: number;
}

const AccountBalance = ({ currentBalance }: AccountBalanceProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">账户余额</CardTitle>
        <CardDescription>可用于新租用</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline">
          <p className="text-3xl font-bold text-primary">¥{currentBalance.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground ml-2">CNY</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button className="flex-1 transition-all duration-300 hover:shadow-md">
            <PlusCircle className="h-4 w-4 mr-2" />
            充值
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 transition-all duration-300 hover:shadow-md hover:bg-primary/10"
            onClick={() => navigate('/transfer')}
          >
            <SendHorizontal className="h-4 w-4 mr-2" />
            转账
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountBalance;
