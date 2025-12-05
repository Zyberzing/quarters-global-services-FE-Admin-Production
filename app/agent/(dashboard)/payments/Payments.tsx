'use client';

import CommonTable from '@/components/common/CommonTable';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Eye } from 'lucide-react';

// Dummy Data
const payments = [
  {
    paymentId: 'PID24223',
    name: 'Andrew Bojangles',
    mode: 'Cash',
    status: 'Waiting',
    avatar: '/avatars/avatar1.jpg',
  },
  {
    paymentId: 'PID24224',
    name: 'Sarah Connor',
    mode: 'Card',
    status: 'Completed',
    avatar: '/avatars/avatar2.jpg',
  },
  {
    paymentId: 'PID24225',
    name: 'John Doe',
    mode: 'Online',
    status: 'Pending',
    avatar: '/avatars/avatar3.jpg',
  },
  // ... add more if needed
];

// Columns
const columns = [
  {
    header: 'Payment ID',
    accessor: 'paymentId',
  },
  {
    header: 'Name',
    accessor: 'name',
    render: (row: any) => (
      <div className="flex items-center justify-center gap-2 font-medium">
        <Avatar>
          <AvatarImage src={row.avatar || 'https://github.com/shadcn.png'} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>{row.name}</span>
      </div>
    ),
  },
  {
    header: 'Payment Method',
    accessor: 'mode',
  },
  {
    header: 'Payment Status',
    accessor: 'status',
    render: (row: any) => <Badge variant="default">{row.status}</Badge>,
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'text-center',
    render: () => (
      <div className="flex justify-center">
        <Button variant="ghost" size="icon">
          <Eye className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];

// Component
const Payments = () => {
  return (
    <div className="space-y-2">
      {/* Filters */}
      <div className="flex items-center justify-end gap-2">
        <Popover>
          <PopoverTrigger>
            <Button variant="outline">Filter</Button>
          </PopoverTrigger>
          <PopoverContent className="max-w-fit" align="end">
            <div className="flex items-center gap-2">Filters...</div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Table */}
      <CommonTable columns={columns} data={payments} />
    </div>
  );
};

export default Payments;
