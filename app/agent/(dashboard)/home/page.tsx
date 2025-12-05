import React from 'react';
import Home from './Home';
// import { hasSession } from '@/lib/session';
// import { redirect } from 'next/navigation';
// import hasAccess from '@/hooks/useAccessControl/hasAccess';
// import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { getDashboardCounts } from '@/services/dashboardService';

const page = async () => {
  // const session = await hasSession();
  // if (!session?.id) {
  //   return redirect('/');
  // }

  // const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.dashboard });
  // if (!access) {
  //   return redirect('/?access=false');
  // }

  // Fetch dashboard counts
  const dashboardData = await getDashboardCounts();

  return <Home dashboardData={dashboardData?.data || null} />;
};

export default page;
