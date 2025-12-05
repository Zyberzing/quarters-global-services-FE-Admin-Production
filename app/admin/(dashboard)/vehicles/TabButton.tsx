'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabButton = () => {
  const pathname = usePathname();
  return (
    <div className="bg-secondary text-primary rounded-lg">
      <Link href="/admin/vehicles/vehicles-bookings">
        <Button variant={pathname === '/admin/vehicles/vehicles-bookings' ? 'default' : 'link'}>
          Vehicle Bookings List
        </Button>
      </Link>
      <Link href="/admin/vehicles/vehicles-management">
        <Button variant={pathname === '/admin/vehicles/vehicles-management' ? 'default' : 'link'}>
          Vehicle Management
        </Button>
      </Link>
      <Link href="/admin/vehicles/driver-management">
        <Button variant={pathname === '/admin/vehicles/driver-management' ? 'default' : 'link'}>
          Driver Management
        </Button>
      </Link>
    </div>
  );
};

export default TabButton;
