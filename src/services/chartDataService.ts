
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

/**
 * Fetches AGI model performance data
 * Uses mock data as all backend logic has been removed
 */
export const fetchAGIModelPerformance = async () => {
  console.log('Using mock AGI performance data (no backend calls)');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  return {
    trainingSpeed: [85, 92, 78, 95, 86, 90, 88],
    inferenceLatency: [25, 18, 30, 15, 22, 20, 24],
    modelAccuracy: [0.92, 0.95, 0.89, 0.97, 0.93, 0.94, 0.91],
    costEfficiency: [75, 82, 70, 88, 76, 80, 77]
  };
};
