import AddDriverForm from '@/components/forms/addDriverForm/AddDriverForm';
import { UserTypeENUM } from '@/lib/types';
import React from 'react';

const page = () => {
  return (
    <div>
      <p className="py-4 text-lg font-semibold">Add New Driver</p>
      <AddDriverForm role={UserTypeENUM.AGENT} />
    </div>
  );
};

export default page;
