'use client';

import CommonTable from '@/components/common/CommonTable';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { ExternalLink, Plus } from 'lucide-react';
import Link from 'next/link';
import Icon from '@/components/common/Icon';
import DeleteConfirm from '@/components/common/DeleteConfirm';

// Dummy data
const applications = [
  {
    id: '0081651',
    name: 'Andrew Bojangles',
    avatar: '/avatars/avatar1.jpg',
    service: 'Passport',
    serviceType: 'Renew Passport',
    phone: '+79000001001',
    email: 'Lorem@ipsum.com',
    date: '12/05/25',
    status: 'Processing',
  },
  {
    id: '0081651',
    name: 'Andrew Bojangles',
    avatar: '/avatars/avatar2.jpg',
    service: 'Visa',
    serviceType: 'Tourist Visa',
    phone: '+79000001001',
    email: 'Lorem@ipsum.com',
    date: '12/05/25',
    status: 'Enquiry',
  },
  {
    id: '0081651',
    name: 'Andrew Bojangles',
    avatar: '/avatars/avatar3.jpg',
    service: 'Visa',
    serviceType: 'Tourist Visa',
    phone: '+79000001001',
    email: 'Lorem@ipsum.com',
    date: '12/05/25',
    status: 'Completed',
  },
];

// Status color mapping
// const statusColorMap: Record<string, 'default' | 'secondary' | 'success' | 'warning'> = {
//   Processing: 'warning',
//   Enquiry: 'secondary',
//   Completed: 'success',
// };

// Table columns
const columns = [
  {
    header: 'Application ID',
    accessor: 'id',
  },
  {
    header: 'Applicant Name',
    accessor: 'name',
    render: (row: any) => (
      <div className="flex items-center gap-2 font-medium">
        <Avatar>
          <AvatarImage src={row.avatar || 'https://github.com/shadcn.png'} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>{row.name}</span>
      </div>
    ),
  },
  {
    header: 'Service',
    accessor: 'service',
  },
  {
    header: 'Service Type',
    accessor: 'serviceType',
  },
  {
    header: 'Phone',
    accessor: 'phone',
  },
  {
    header: 'Email',
    accessor: 'email',
  },
  {
    header: 'Application Date',
    accessor: 'date',
  },
  {
    header: 'Status',
    accessor: 'status',
    render: (row: any) => <Badge variant={'default'}>{row.status}</Badge>,
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'text-center',
    render: () => (
      <div className="flex items-center justify-center gap-2">
        <Link href={'/admin/applications/' + '1'}>
          <Icon name="edit" />
        </Link>
        <Link href={'/admin/applications/' + '1'}>
          <Icon name="view" />
        </Link>
        <DeleteConfirm>
          <Icon name="delete" />
        </DeleteConfirm>
      </div>
    ),
  },
];

// Component
const ApplicationsPage = () => {
  return (
    <div className="space-y-4">
      {/* Top Bar */}
      <div className="flex items-center justify-end flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Button>
            <ExternalLink />
            Export
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Filter</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-sm">Filter options here</PopoverContent>
          </Popover>

          <Button asChild>
            <Link href="/agent/applications/create">
              <Plus className="mr-2 h-4 w-4" />
              New Walking Application
            </Link>
          </Button>
        </div>
      </div>

      {/* Table */}
      <CommonTable columns={columns} data={applications} />
    </div>
  );
};

export default ApplicationsPage;
