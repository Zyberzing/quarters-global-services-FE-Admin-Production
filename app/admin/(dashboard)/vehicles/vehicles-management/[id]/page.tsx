import React from 'react';
import VehicleAddForm from '@/components/forms/vehicleAddForm/VehicleAddForm';
import { getVehicleById } from '@/services/vehicleservice';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const ViewVehiclePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.vehicles });
  if (!access) {
    return redirect('/?access=false');
  }

  const vehicleData = await getVehicleById(id);

  if (!vehicleData) {
    return redirect('/admin/vehicles/vehicles-management');
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 ">
          <Link href="/admin/vehicles/vehicles-management">
            <ChevronLeft className="h-6 w-6 text-black" />
          </Link>
          <h1 className="text-2xl font-semibold">View Vehicle</h1>
        </div>
        <p className="text-gray-600">Vehicle ID: #{vehicleData._id.slice(-8)}</p>
      </div>
      <VehicleAddForm vehicleData={vehicleData} isView={true} />
    </div>
  );
};

export default ViewVehiclePage;
