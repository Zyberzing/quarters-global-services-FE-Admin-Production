import React from 'react';
import Payments from './Payments';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { redirect } from 'next/navigation';
import { getTransactions } from '@/services/transactionService';

const page = async ({ searchParams }: { searchParams: Promise<{ page?: string; q?: string }> }) => {
  const page = (await searchParams).page || '1';
  const search = (await searchParams).q || '';

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.payments });
  if (!access) {
    return redirect('/admin/home');
  }

  // Fetch customers data
  const data = await getTransactions({ page, search });
  console.log(data, 'data');
  return <Payments transactionsData={data} />;
};

export default page;
