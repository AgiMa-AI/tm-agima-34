
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, FilterIcon } from 'lucide-react';

interface TaskSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const TaskSearch: React.FC<TaskSearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="搜索任务..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex gap-2 w-full sm:w-auto">
        <Button variant="outline" className="gap-1">
          <FilterIcon className="h-4 w-4" />
          筛选
        </Button>
      </div>
    </div>
  );
};

export default TaskSearch;
