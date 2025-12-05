import RoleForm from '@/components/forms/roleForm/RoleForm';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.roles });
  if (!access) {
    return redirect('/?access=false');
  }
  return (
    <div>
      <p className="py-4 text-lg font-semibold">Add New Role</p>
      <RoleForm />
    </div>
  );
};

export default page;
