import ApostilleForm from '@/components/forms/apostilleForm/ApostilleForm';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { ApostilleApplicationDataType } from '@/lib/types';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    application?: string;
    init: string;
  }>;
}) => {
  // ApostilleApplicationDataType
  // const application = (await searchParams).application || '';
  const initData = (await searchParams).init || '';
  const initDataParse = JSON.parse(initData) as ApostilleApplicationDataType;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.apostille });
  if (!access) {
    return redirect('/admin/home');
  }

  return <ApostilleForm defaultValues={initDataParse} isView />;
};

export default page;
