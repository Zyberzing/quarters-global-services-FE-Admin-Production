import CustomerForm from '@/components/forms/customerForm/CustomerForm';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { UserTypeENUM } from '@/lib/types';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.users });
  if (!access) {
    return redirect('/agent/home');
  }

  return (
    <div>
      <p className="py-4 text-lg font-semibold">Add New User</p>
      <CustomerForm role={UserTypeENUM.AGENT} />
    </div>
  );
};

export default page;
