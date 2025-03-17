
import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import TaskRecordsTable from './TaskRecordsTable';
import UserTransferForm from '@/components/transfer/UserTransferForm';
import EarningsTabs from './tabs/EarningsTabs';

const EarningsTabContent = () => {
  const [activeTab, setActiveTab] = useState('tasks');
  
  return (
    <Tabs defaultValue="tasks" value={activeTab}>
      <EarningsTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <TabsContent value="tasks" className="pt-3 sm:pt-4">
        <TaskRecordsTable />
      </TabsContent>
      
      <TabsContent value="transfer" className="pt-3 sm:pt-4">
        <UserTransferForm />
      </TabsContent>
    </Tabs>
  );
};

export default EarningsTabContent;
