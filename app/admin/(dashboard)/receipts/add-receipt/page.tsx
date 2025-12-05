import ReceiptForm from '@/components/forms/receiptForm/ReceiptForm';
import React from 'react';

const page = () => {
  return (
    <div>
      <p className="py-4 text-lg font-semibold">Add Receipts</p>
      <ReceiptForm />
    </div>
  );
};

export default page;
