import AppBar from '@/components/shared/AppBar';

import React from 'react';
import AdminSidebar from './AdminSidebar';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex">
      <AdminSidebar />
      <div className="grow h-full flex flex-col bg-white px-4 md:px-8  space-y-4 md:space-y-6 overflow-auto pb-10">
        <AppBar />
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
