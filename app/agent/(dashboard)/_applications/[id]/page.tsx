import ApplicationForm from '@/components/forms/applicationForm/ApplicationForm';
import React from 'react';
import Actions from './Actions';
import StatusTimeLine from './StatusTimeLine';

const page = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 justify-between">
        <p className="text-base font-semibold">Courier ID: TID1243521 </p>
        <Actions />
      </div>
      <StatusTimeLine />
      <ApplicationForm isView />
    </div>
  );
};

export default page;
