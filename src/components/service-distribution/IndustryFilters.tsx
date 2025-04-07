
import React from 'react';
import { Button } from '@/components/ui/button';

interface IndustryFiltersProps {
  displayedIndustries: string[];
  industryFilter: string | null;
  setIndustryFilter: (industry: string) => void;
}

const IndustryFilters: React.FC<IndustryFiltersProps> = ({
  displayedIndustries,
  industryFilter,
  setIndustryFilter
}) => {
  return (
    <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-4 mb-4 border-b">
      {displayedIndustries.map((industry) => (
        <Button 
          key={industry}
          variant={industryFilter === industry ? "secondary" : "outline"} 
          size="sm"
          onClick={() => setIndustryFilter(industry)}
        >
          {industry}
        </Button>
      ))}
    </div>
  );
};

export default IndustryFilters;
