
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import FilterBar from '@/components/dashboard/FilterBar';
import { useInstances } from '@/hooks/useInstances';
import { useMobile } from '@/hooks/use-mobile';
import { useToast } from '@/components/ui/use-toast';
import { GPUInstance } from '@/data/instances';

// Import refactored components
import InstancesHeader from '@/components/instances/InstancesHeader';
import InstancesGrid from '@/components/instances/InstancesGrid';
import InstancesSkeletonLoader from '@/components/instances/InstancesSkeletonLoader';
import EmptyStateDisplay from '@/components/instances/EmptyStateDisplay';
import RentDialog from '@/components/instances/RentDialog';
import PaymentDialog from '@/components/instances/PaymentDialog';

const Instances = () => {
  const { 
    instances, 
    filters, 
    updateFilters, 
    resetFilters, 
    loading, 
    filterOptions,
    totalCount,
    filteredCount
  } = useInstances();
  
  const { toast } = useToast();
  const { isMobile, resetLayout } = useMobile();
  
  const [isRentDialogOpen, setIsRentDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedInstance, setSelectedInstance] = useState<GPUInstance | null>(null);
  const [rentalPeriod, setRentalPeriod] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('wechat');
  const [mobileLayout, setMobileLayout] = useState('default');
  
  // Effect to listen for layout changes
  useEffect(() => {
    const savedLayout = localStorage.getItem('preferred-mobile-layout');
    if (savedLayout) {
      setMobileLayout(savedLayout);
    }
  }, [resetLayout]);
  
  const handleSearch = (query: string) => {
    updateFilters({ search: query || undefined });
  };
  
  const handleFilterChange = (newFilters: any) => {
    updateFilters(newFilters);
  };
  
  const handleRentInstance = (instance: GPUInstance) => {
    setSelectedInstance(instance);
    setIsRentDialogOpen(true);
  };
  
  const handleRentNow = () => {
    setIsRentDialogOpen(false);
    setIsPaymentDialogOpen(true);
  };
  
  const handleGoBackToRent = () => {
    setIsPaymentDialogOpen(false);
    setIsRentDialogOpen(true);
  };
  
  const handlePayment = () => {
    setIsPaymentDialogOpen(false);
    toast({
      title: "付款成功",
      description: `您已成功租用 ${selectedInstance?.name}，时长 ${rentalPeriod} ${rentalPeriod === 1 ? '天' : '天'}`,
    });
  };
  
  return (
    <Layout searchHandler={handleSearch}>
      <InstancesHeader totalCount={totalCount} filteredCount={filteredCount} />
      
      <FilterBar
        availableFilters={filterOptions}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
        onFilterReset={resetFilters}
      />
      
      {loading ? (
        <InstancesSkeletonLoader />
      ) : instances.length > 0 ? (
        <InstancesGrid 
          instances={instances} 
          mobileLayout={mobileLayout} 
          onRent={handleRentInstance} 
        />
      ) : (
        <EmptyStateDisplay />
      )}

      {/* Dialogs */}
      <RentDialog 
        open={isRentDialogOpen}
        onOpenChange={setIsRentDialogOpen}
        selectedInstance={selectedInstance}
        rentalPeriod={rentalPeriod}
        setRentalPeriod={setRentalPeriod}
        onConfirm={handleRentNow}
      />
      
      <PaymentDialog 
        open={isPaymentDialogOpen}
        onOpenChange={setIsPaymentDialogOpen}
        selectedInstance={selectedInstance}
        rentalPeriod={rentalPeriod}
        paymentMethod={selectedPaymentMethod}
        setPaymentMethod={setSelectedPaymentMethod}
        onConfirm={handlePayment}
        onBack={handleGoBackToRent}
      />
    </Layout>
  );
};

export default Instances;
