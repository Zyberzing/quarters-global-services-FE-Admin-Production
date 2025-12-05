import React from 'react';
import AddDriverForm from '@/components/forms/addDriverForm/AddDriverForm';
import { getDriverById } from '@/services/vehicleservice';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { UserTypeENUM } from '@/lib/types';

const EditDriverPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.vehicles });
  if (!access) {
    return redirect('/?access=false');
  }

  const driverData = await getDriverById(id);

  if (!driverData) {
    return redirect('/agent/vehicles/driver-management');
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 ">
          <Link href="/agent/vehicles/driver-management">
            <ChevronLeft className="h-6 w-6 text-black" />
          </Link>
          <h1 className="text-2xl font-semibold">Edit Driver</h1>
        </div>
        <div className="bg-[#96C6FF] text-black font-semibold rounded-sm text-md p-3 mt-2 ">
          <p>Driver ID: #{driverData._id.slice(-8)}</p>
        </div>
      </div>
      <AddDriverForm driverData={driverData} isEdit={true} role={UserTypeENUM.AGENT} />
    </div>
  );
};

export default EditDriverPage;
