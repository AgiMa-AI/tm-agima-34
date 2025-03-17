
import { mockHostMapData, generateMockStatsData, mockGpuData } from '@/data/mockChartData';

/**
 * Fetches all chart data
 * Uses mock data only as all backend logic has been removed
 */
export const fetchAllChartData = async () => {
  console.log('Using mock data only (no backend calls)');
  
  // Simulate network delay for better UX
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    hostMapData: mockHostMapData,
    statsData: generateMockStatsData(),
    gpuData: mockGpuData
  };
};
