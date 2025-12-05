import React from 'react';
import Agencies from './Agencies';
import { getAgencies } from '@/services/agencyService';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    status?: string;
    q?: string;
    from?: string;
    to?: string;
  }>;
}) => {
  const { page = '1', status = '', q = '', to = '', from = '' } = await searchParams;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.agencies });
  if (!access) {
    return redirect('/admin/home');
  }

  const agencyData = await getAgencies({
    page,
    status,
    search: q,
    from,
    to,
  });

  return <Agencies agencyData={agencyData.data} totalPages={agencyData.totalPages} />;
};

export default page;
