import UserForm from '@/components/forms/userForm/UserForm';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { getUserById } from '@/services/usersService';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({ searchParams }: { searchParams: Promise<{ id?: string }> }) => {
  const id = (await searchParams)?.id;
  if (!id) {
    return redirect('/');
  }
  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.users });
  if (!access) {
    return redirect('/?access=false');
  }
  const userData = await getUserById(id);

  if (!userData) {
    return redirect('/admin/users-and-roles');
  }
  return (
    <div>
      <p className="py-4 text-lg font-semibold">Edit User</p>
      <UserForm userData={userData} />
    </div>
  );
};

export default page;
