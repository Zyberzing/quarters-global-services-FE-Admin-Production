import { redirect } from 'next/navigation';

const page = () => {
  return redirect('/admin/vehicles/vehicles-bookings');
};

export default page;
