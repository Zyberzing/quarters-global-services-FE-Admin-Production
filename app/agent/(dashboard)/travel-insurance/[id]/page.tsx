import React from 'react';
import Actions from './Actions';
import TravelInsuranceForm from '@/components/forms/agentPanelForms/travelInsuranceForm/TravelInsuranceFrom';

const page = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 justify-between">
        <p className="text-base font-semibold">Courier ID: TID1243521 </p>
        <Actions />
      </div>
      <TravelInsuranceForm isView={true} />
    </div>
  );
};

export default page;
