import ServiceForm from '@/components/forms/serviceForm/ServiceForm';
import React from 'react';

const page = () => {
  return (
    <div>
      <p className="py-4 text-lg font-semibold">Add New Services</p>
      <ServiceForm applicationSource="AgentPortal" />
    </div>
  );
};

export default page;
