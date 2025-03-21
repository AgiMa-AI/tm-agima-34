
import React from 'react';
import { useMobile } from '@/hooks/use-mobile';
import { Skeleton } from '@/components/ui/skeleton';

const InstancesSkeletonLoader = () => {
  const { isMobile } = useMobile();
  const skeletonCount = isMobile ? 4 : 8;
  
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {Array(skeletonCount).fill(0).map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] sm:h-[250px] w-full rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default InstancesSkeletonLoader;
