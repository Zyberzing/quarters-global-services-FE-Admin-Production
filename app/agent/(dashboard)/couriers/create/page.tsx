import CourierForm from '@/components/forms/agentPanelForms/courierForm/CourierForm';
import React from 'react';

const page = () => {
  return (
    <div>
      <p className="py-4 text-base font-semibold">Add Courier Details</p>
      <CourierForm />
    </div>
  );
};

export default page;
