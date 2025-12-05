import React from 'react';
import VehicleBookingForm from '@/components/forms/vehicleBookingForm/VehicleBookingForm';
import { getBookingById, getVehicleList, getDriverList } from '@/services/vehicleservice';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import console from 'console';
import { UserTypeENUM } from '@/lib/types';

const ViewBookingPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.vehicles });
  if (!access) {
    return redirect('/?access=false');
  }

  // Fetch booking data and vehicles/drivers data in parallel
  const [bookingData, vehiclesResponse, driversResponse] = await Promise.all([
    getBookingById(id),
    getVehicleList({ page: '1' }),
    getDriverList({ page: '1' }),
  ]);

  console.log(bookingData, 'bookingData');
  if (!bookingData) {
    return redirect('/agent/vehicles/vehicles-bookings');
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 ">
          <Link href="/agent/vehicles/vehicles-bookings">
            <ChevronLeft className="h-6 w-6 text-black" />
          </Link>
          <h1 className="text-2xl font-semibold">View Booking</h1>
        </div>
        <p className="text-gray-600">Booking ID: #{bookingData._id.slice(-8)}</p>
      </div>
      <VehicleBookingForm
        bookingData={bookingData}
        isView={true}
        vehicles={vehiclesResponse.data || []}
        drivers={driversResponse.data || []}
        role={UserTypeENUM.AGENT}
      />
    </div>
  );
};

export default ViewBookingPage;
