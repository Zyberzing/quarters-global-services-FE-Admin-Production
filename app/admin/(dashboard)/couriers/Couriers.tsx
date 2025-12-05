'use client';

import CommonTable from '@/components/common/CommonTable';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import Icon from '@/components/common/Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ExternalLink, MoveUpRight, Plus } from 'lucide-react';
import Link from 'next/link';

// Columns
const columns = [
  {
    header: 'Track ID',
    accessor: 'trackId',
  },
  {
    header: 'Name',
    accessor: 'name',
    render: (row: any) => (
      <div className="flex items-center justify-center gap-2 font-medium">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <p>{row.name}</p>
        <MoveUpRight className="size-4" />
      </div>
    ),
  },
  {
    header: 'Phone number',
    accessor: 'phone',
  },
  {
    header: 'Email',
    accessor: 'email',
  },
  {
    header: 'Status',
    accessor: 'status',
    render: (row: any) => <Badge variant={'waiting'}>{row.status}</Badge>,
  },
  {
    header: 'Courier Partner',
    accessor: 'courierPartner',
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'text-center',
    render: () => (
      <div className="flex items-center justify-center gap-2">
        <Link href={'/admin/couriers/' + '1'}>
          <Icon name="edit" />
        </Link>
        <Link href={'/admin/couriers/' + '1'}>
          <Icon name="view" />
        </Link>
        <DeleteConfirm>
          <Icon name="delete" />
        </DeleteConfirm>
      </div>
    ),
  },
];

// Dummy Data
const couriers = [
  {
    trackId: 'TID2435231',
    name: 'Carlos Bridge',
    phone: '+7900000101',
    email: 'Lorem@ipsum.com',
    courierPartner: 'FedEx',
    status: 'Dispatched',
  },
  {
    trackId: 'TID2435232',
    name: 'Andrew Bojangles',
    phone: '+7900000101',
    email: 'Lorem@ipsum.com',
    courierPartner: 'DHL',
    status: 'Pending',
  },
  {
    trackId: 'TID2435233',
    name: 'Andrew Bojangles',
    phone: '+7900000101',
    email: 'Lorem@ipsum.com',
    courierPartner: 'UPS',
    status: 'Cancelled',
  },
  {
    trackId: '758145891',
    name: 'Andrew Bojangles',
    phone: '+7900000101',
    email: 'Lorem@ipsum.com',
    courierPartner: 'DHL',
    status: 'Delivered',
  },
];

const Couriers = () => {
  return (
    <div className="space-y-2">
      {/* Top Tabs & Buttons */}
      <div className="flex items-center justify-between">
        {/* Tabs */}
        <Tabs defaultValue="online">
          <TabsList className="bg-primary-300 text-primary-100 p-0">
            <TabsTrigger
              value="online"
              className="data-[state=active]:bg-primary-100 data-[state=active]:text-white cursor-pointer"
            >
              Online
            </TabsTrigger>
            <TabsTrigger
              value="walkin"
              className="data-[state=active]:bg-primary-100 data-[state=active]:text-white cursor-pointer"
            >
              Walk-in
            </TabsTrigger>
            <TabsTrigger
              value="agency"
              className="data-[state=active]:bg-primary-100 data-[state=active]:text-white cursor-pointer"
            >
              Agency
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Button>
            <ExternalLink />
            Export
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button variant="outline">Filter</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-fit" align="end">
              <div className="flex items-center gap-2">Filter Options...</div>
            </PopoverContent>
          </Popover>

          <Button asChild>
            <Link href="/admin/couriers/create">
              <Plus className="mr-1" />
              <span>Create Courier</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Courier Table */}
      <CommonTable columns={columns} data={couriers} />
    </div>
  );
};

export default Couriers;
