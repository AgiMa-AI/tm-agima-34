
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Search, Filter, X } from 'lucide-react';
import { useAGIModels } from '@/hooks/useAGIModels';
import AGIModelCard from '@/components/agi/AGIModelCard';
import { Bot } from 'lucide-react';

const AGIModelSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const { 
    models,
    loading: modelsLoading,
    updateFilters,
    resetFilters,
    filterOptions
  } = useAGIModels();
  
  const [selectedModelFilters, setSelectedModelFilters] = useState<{
    type: string[];
    creator: string[];
  }>({
    type: [],
    creator: []
  });
  
  const handleModelSearch = () => {
    if (searchQuery.trim()) {
      updateFilters({ search: [searchQuery.trim()] });
    } else {
      updateFilters({ search: undefined });
    }
  };
  
  const handleModelFilterChange = (filterType: string, value: string) => {
    const currentValues = [...(selectedModelFilters[filterType as keyof typeof selectedModelFilters] || [])];
    
    if (currentValues.includes(value)) {
      const newValues = currentValues.filter(v => v !== value);
      setSelectedModelFilters(prev => ({
        ...prev,
        [filterType]: newValues
      }));
      updateFilters({ [filterType]: newValues.length > 0 ? newValues : undefined });
    } else {
      const newValues = [...currentValues, value];
      setSelectedModelFilters(prev => ({
        ...prev,
        [filterType]: newValues
      }));
      updateFilters({ [filterType]: newValues });
    }
  };
  
  const handleResetModelFilters = () => {
    setSelectedModelFilters({
      type: [],
      creator: []
    });
    resetFilters();
    setSearchQuery('');
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Input 
              placeholder="搜索AGI模型..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
              onKeyDown={(e) => e.key === 'Enter' && handleModelSearch()}
            />
            <Search className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={isFilterOpen ? "bg-primary/10" : ""}
            >
              <Filter className="h-4 w-4" />
            </Button>
            <Button onClick={handleModelSearch}>搜索</Button>
          </div>
        </div>
        
        {isFilterOpen && (
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">筛选选项</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleResetModelFilters}
                className="h-8 text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                重置
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm mb-2 block">模型类型</Label>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.type.options.map((option) => (
                    <Badge 
                      key={option.value}
                      variant={selectedModelFilters.type.includes(option.value) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleModelFilterChange('type', option.value)}
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-sm mb-2 block">开发厂商</Label>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.creator.options.map((option) => (
                    <Badge 
                      key={option.value}
                      variant={selectedModelFilters.creator.includes(option.value) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleModelFilterChange('creator', option.value)}
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modelsLoading ? (
          Array(6).fill(0).map((_, index) => (
            <Card key={index} className="h-[450px] animate-pulse overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </Card>
          ))
        ) : models.length > 0 ? (
          models.map((model) => (
            <AGIModelCard key={model.id} model={model} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <Bot className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
            <h3 className="mt-4 text-lg font-medium">未找到AGI模型</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              没有找到符合当前筛选条件的AGI模型。请尝试调整您的筛选条件或搜索关键词。
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={handleResetModelFilters}
            >
              重置筛选条件
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AGIModelSection;
