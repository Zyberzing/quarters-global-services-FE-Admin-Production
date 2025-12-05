import { redirect } from 'next/navigation';

const page = () => {
  return redirect('/agent/vehicles/vehicles-bookings');
};

export default page;
