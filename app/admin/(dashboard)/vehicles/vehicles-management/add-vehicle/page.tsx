import VehicleAddForm from '@/components/forms/vehicleAddForm/VehicleAddForm';
import React from 'react';

const page = () => {
  return (
    <div>
      <p className="py-4 text-lg font-semibold">Add New Vehicle</p>
      <VehicleAddForm />
    </div>
  );
};

export default page;
