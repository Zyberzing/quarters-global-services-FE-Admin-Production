import React from 'react';
import Tickets from './Tickets';
import { getTickets } from '@/services/ticketsService';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';

const page = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const page = (await searchParams).page || '1';

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.tickets });
  if (!access) {
    return redirect('/admin/home');
  }
  const tickets = await getTickets({
    page,
  });
  return <Tickets ticketsData={tickets} />;
};

export default page;
