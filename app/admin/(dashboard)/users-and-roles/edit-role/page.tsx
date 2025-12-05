import RoleForm from '@/components/forms/roleForm/RoleForm';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { getRole } from '@/services/rolesService';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({ searchParams }: { searchParams: Promise<{ id?: string }> }) => {
  const id = (await searchParams)?.id;
  if (!id) {
    return redirect('/');
  }
  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.roles });
  if (!access) {
    return redirect('/?access=false');
  }
  const data = await getRole(id);
  if (!data) {
    return redirect('/admin/users-and-roles');
  }

  return (
    <div>
      <p className="py-4 text-lg font-semibold">Edit Role</p>
      <RoleForm defaultValues={data} />
    </div>
  );
};

export default page;
