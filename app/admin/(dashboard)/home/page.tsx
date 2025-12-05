import React from 'react';
import Home from './Home';
import { getDashboardCounts, getRecentActivities } from '@/services/dashboardService';

const page = async () => {
  // Fetch dashboard data and recent activities in parallel
  const [dashboardData, recentActivities] = await Promise.all([
    getDashboardCounts(),
    getRecentActivities(),
  ]);

  return <Home dashboardData={dashboardData?.data || null} recentActivities={recentActivities} />;
};

export default page;
