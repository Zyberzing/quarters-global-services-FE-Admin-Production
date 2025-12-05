import AgencyForm from '@/components/forms/agencyForm/AgencyForm';
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { redirect } from 'next/navigation';
import { getAgencyById } from '@/services/agencyService';

const ViewAgencyPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.agencies });
  if (!access) {
    return redirect('/admin/home');
  }

  const agencyData = await getAgencyById(id);

  if (!agencyData) {
    return redirect('/admin/agencies');
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Link href="/admin/agencies">
            <ChevronLeft className="size-4" />
          </Link>
          <p className="text-base font-semibold">Agency Details</p>
        </div>
      </div>
      <AgencyForm isView agencyData={agencyData} />
    </div>
  );
};

export default ViewAgencyPage;
