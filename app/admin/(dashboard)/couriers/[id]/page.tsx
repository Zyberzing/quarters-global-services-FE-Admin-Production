import CourierForm from '@/components/forms/courierForm/CourierForm';
import React from 'react';
import Actions from './Actions';

const page = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 justify-between">
        <p className="text-base font-semibold">Courier ID: TID1243521 </p>
        <Actions />
      </div>
      <CourierForm isView={true} />
    </div>
  );
};

export default page;
