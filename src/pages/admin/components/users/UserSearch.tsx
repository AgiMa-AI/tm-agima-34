
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

interface UserSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const UserSearch = ({
  searchTerm,
  onSearchChange
}: UserSearchProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="搜索用户..." 
          className="pl-9 h-10 w-full touch-target transition-all focus:ring-2 focus:ring-primary/50" 
          value={searchTerm} 
          onChange={e => onSearchChange(e.target.value)} 
        />
      </div>
      <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
        <Button variant="outline" size="sm" className="gap-1">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">筛选</span>
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">高级筛选</span>
        </Button>
      </div>
    </div>
  );
};

export default UserSearch;
