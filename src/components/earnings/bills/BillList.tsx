
import React from 'react';
import BillItem from './BillItem';
import { ScrollArea } from '@/components/ui/scroll-area';

interface BillListProps {
  periods: string[];
}

const BillList = ({ periods }: BillListProps) => {
  return (
    <ScrollArea className="h-[180px]">
      <div className="space-y-2 sm:space-y-3 pr-3">
        {periods.map((period, index) => (
          <BillItem key={index} period={period} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default BillList;
