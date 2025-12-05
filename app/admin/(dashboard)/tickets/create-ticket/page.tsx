import TicketForm from '@/components/forms/ticketForm/TicketForm';
import React from 'react';
import { getAllCustomers } from '@/services/customerService';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { getAgents } from '@/services/agencyService';

const page = async () => {
  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.tickets });
  if (!access) {
    return redirect('/admin/home');
  }

  // Fetch customers and staff data
  const [customersResponse, staffResponse] = await Promise.all([
    getAllCustomers({ page: '1' }),
    getAgents({ page: '1' }),
  ]);

  // Filter customers to only include users with role 'user'
  const customers = customersResponse.data?.data?.filter((user) => user.role === 'user') || [];
  const staff = staffResponse.data || [];

  return (
    <div>
      {/* <p className="py-4 text-lg font-semibold">Add New Services</p> */}
      <TicketForm customers={customers} staff={staff} />
    </div>
  );
};

export default page;
