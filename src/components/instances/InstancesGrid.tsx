
import React from 'react';
import { useMobile } from '@/hooks/use-mobile';
import { GPUInstance } from '@/data/instances';
import InstanceCard from '@/components/dashboard/InstanceCard';

interface InstancesGridProps {
  instances: GPUInstance[];
  mobileLayout?: string;
  onRent: (instance: GPUInstance) => void;
}

const InstancesGrid = ({ instances, mobileLayout = 'default', onRent }: InstancesGridProps) => {
  const { isMobile } = useMobile();
  
  const gridClassName = mobileLayout === 'compact' && isMobile
    ? "grid grid-cols-1 gap-3 sm:gap-4"
    : mobileLayout === 'detailed' && isMobile
      ? "grid grid-cols-1 gap-4 sm:gap-5"
      : "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6";
  
  return (
    <div className={gridClassName}>
      {instances.map((instance) => (
        <InstanceCard 
          key={instance.id} 
          instance={instance} 
          onRent={() => onRent(instance)}
        />
      ))}
    </div>
  );
};

export default InstancesGrid;
