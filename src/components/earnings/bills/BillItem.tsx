
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

interface BillItemProps {
  period: string;
}

const BillItem = ({ period }: BillItemProps) => {
  return (
    <Button 
      variant="outline" 
      className="w-full justify-between text-xs sm:text-sm h-9 sm:h-10 card-interactive"
    >
      <div className="flex items-center">
        <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 text-primary" />
        <span>{period}账单</span>
      </div>
      <Download className="h-3 w-3 sm:h-4 sm:w-4" />
    </Button>
  );
};

export default BillItem;
