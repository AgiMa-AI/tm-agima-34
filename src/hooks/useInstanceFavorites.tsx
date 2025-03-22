
import { useState, useEffect } from 'react';
import { GPUInstance } from '../data/instances';

export const useInstanceFavorites = () => {
  const [favoriteInstanceIds, setFavoriteInstanceIds] = useState<string[]>([]);
  
  // Load from localStorage on init
  useEffect(() => {
    const loadedFavorites = localStorage.getItem('favoriteInstances');
    if (loadedFavorites) {
      try {
        setFavoriteInstanceIds(JSON.parse(loadedFavorites));
      } catch (e) {
        console.error('Failed to parse favorites:', e);
      }
    }
  }, []);
  
  // Toggle favorite status for an instance
  const toggleFavorite = (instanceId: string) => {
    setFavoriteInstanceIds(prev => {
      const newFavorites = prev.includes(instanceId)
        ? prev.filter(id => id !== instanceId)
        : [...prev, instanceId];
      
      localStorage.setItem('favoriteInstances', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  
  // Check if an instance is favorited
  const isFavorite = (instanceId: string) => {
    return favoriteInstanceIds.includes(instanceId);
  };

  // Get all favorite instances from a list of instances
  const getFavoriteInstances = (instances: GPUInstance[]) => {
    return instances.filter(instance => favoriteInstanceIds.includes(instance.id));
  };

  return {
    favoriteInstanceIds,
    toggleFavorite,
    isFavorite,
    getFavoriteInstances
  };
};
