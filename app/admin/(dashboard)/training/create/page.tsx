import TrainingForm from '@/components/forms/trainingForm/TrainingForm';
import React from 'react';

const page = () => {
  return (
    <div>
      <p className="py-4 text-base font-semibold">New Training</p>
      <TrainingForm />
    </div>
  );
};

export default page;
