import React from 'react';
import VehicleAddForm from '@/components/forms/vehicleAddForm/VehicleAddForm';
import { getVehicleById } from '@/services/vehicleservice';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { UserTypeENUM } from '@/lib/types';

const EditVehiclePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.vehicles });
  if (!access) {
    return redirect('/?access=false');
  }

  const vehicleData = await getVehicleById(id);

  if (!vehicleData) {
    return redirect('/agent/vehicles/vehicles-management');
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 ">
          <Link href="/agent/vehicles/vehicles-management">
            <ChevronLeft className="h-6 w-6 text-black" />
          </Link>
          <h1 className="text-2xl font-semibold">Edit Vehicle</h1>
        </div>
        <div className="bg-[#96C6FF] text-black font-semibold rounded-sm text-md p-3 mt-2 ">
          <p>Vehicle ID: #{vehicleData._id.slice(-8)}</p>
        </div>
      </div>
      <VehicleAddForm vehicleData={vehicleData} isEdit={true} role={UserTypeENUM.AGENT} />
    </div>
  );
};

export default EditVehiclePage;
