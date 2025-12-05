import React from 'react';
import Support from './Support';
import { getSupports } from '@/services/supportsService';
import { hasSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';

const page = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const page = (await searchParams).page || '1';

  const session = await hasSession();
  if (!session?.id) {
    return redirect('/');
  }

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.support });
  if (!access) {
    return redirect('/admin/home');
  }

  const supports = await getSupports({
    page,
  });

  return <Support supportsData={supports} />;
};

export default page;
