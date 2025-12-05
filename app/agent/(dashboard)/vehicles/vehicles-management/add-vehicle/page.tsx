import VehicleAddForm from '@/components/forms/vehicleAddForm/VehicleAddForm';
import { UserTypeENUM } from '@/lib/types';
import React from 'react';

const page = () => {
  return (
    <div>
      <p className="py-4 text-lg font-semibold">Add New Vehicle</p>
      <VehicleAddForm role={UserTypeENUM.AGENT} />
    </div>
  );
};

export default page;
