
import { useState, useEffect } from 'react';
import { GPUInstance } from '../data/instances';
import { toast } from '@/components/ui/use-toast';

export interface RentalInfo {
  instanceId: string;
  startTime: Date;
  endTime?: Date;
  totalCost: number;
  status: 'active' | 'completed' | 'cancelled';
}

export const useInstanceRentals = () => {
  const [rentedInstances, setRentedInstances] = useState<RentalInfo[]>([]);
  
  // Load from localStorage on init
  useEffect(() => {
    const loadedRentals = localStorage.getItem('rentedInstances');
    if (loadedRentals) {
      try {
        const parsedRentals = JSON.parse(loadedRentals);
        // Convert string dates back to Date objects
        const rentalsWithDates = parsedRentals.map((rental: any) => ({
          ...rental,
          startTime: new Date(rental.startTime),
          endTime: rental.endTime ? new Date(rental.endTime) : undefined
        }));
        setRentedInstances(rentalsWithDates);
      } catch (e) {
        console.error('Failed to parse rentals:', e);
      }
    }
  }, []);
  
  // Rent an instance
  const rentInstance = (instance: GPUInstance, hours: number = 1) => {
    if (instance.availability !== 'available') {
      toast({
        variant: "destructive",
        title: "租用失败",
        description: "该实例当前不可用"
      });
      return false;
    }
    
    const startTime = new Date();
    const totalCost = instance.price * hours;
    
    const rentalInfo: RentalInfo = {
      instanceId: instance.id,
      startTime,
      totalCost,
      status: 'active'
    };
    
    setRentedInstances(prev => {
      const updated = [...prev, rentalInfo];
      localStorage.setItem('rentedInstances', JSON.stringify(updated));
      return updated;
    });
    
    toast({
      title: "租用成功",
      description: `您已成功租用 ${instance.name}，费用 ¥${totalCost.toFixed(2)}`
    });
    
    return true;
  };
  
  // Get active rentals
  const getActiveRentals = () => {
    return rentedInstances.filter(rental => rental.status === 'active');
  };
  
  // Get rental history
  const getRentalHistory = () => {
    return rentedInstances.filter(rental => rental.status !== 'active');
  };
  
  // End a rental
  const endRental = (instanceId: string) => {
    setRentedInstances(prev => {
      const updated = prev.map(rental => 
        rental.instanceId === instanceId && rental.status === 'active' 
          ? {
              ...rental,
              endTime: new Date(),
              status: 'completed' as const
            }
          : rental
      );
      
      localStorage.setItem('rentedInstances', JSON.stringify(updated));
      return updated;
    });
    
    toast({
      title: "租用已结束",
      description: "实例已成功归还"
    });
  };

  return {
    rentedInstances,
    rentInstance,
    getActiveRentals,
    getRentalHistory,
    endRental
  };
};
