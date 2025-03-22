
import { useInstanceData, InstanceFilters } from './useInstanceData';
import { useInstanceFavorites } from './useInstanceFavorites';
import { useInstanceRentals } from './useInstanceRentals';
import { GPUInstance } from '../data/instances';

export const useInstances = (initialFilters: InstanceFilters = {}) => {
  // Combine all hooks
  const instanceData = useInstanceData(initialFilters);
  const favorites = useInstanceFavorites();
  const rentals = useInstanceRentals();

  return {
    // Instance data and filtering
    instances: instanceData.instances,
    filters: instanceData.filters,
    updateFilters: instanceData.updateFilters,
    resetFilters: instanceData.resetFilters,
    loading: instanceData.loading,
    getInstance: instanceData.getInstance,
    filterOptions: instanceData.filterOptions,
    totalCount: instanceData.totalCount,
    filteredCount: instanceData.filteredCount,
    
    // Favorites
    toggleFavorite: favorites.toggleFavorite,
    isFavorite: favorites.isFavorite,
    favoriteInstanceIds: favorites.favoriteInstanceIds,
    
    // Rentals
    rentInstance: rentals.rentInstance,
    rentedInstances: rentals.rentedInstances,
    getActiveRentals: rentals.getActiveRentals,
    getRentalHistory: rentals.getRentalHistory,
    endRental: rentals.endRental
  };
};
