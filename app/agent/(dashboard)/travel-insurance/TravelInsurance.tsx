'use client';

import CommonTable from '@/components/common/CommonTable';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

// Dummy data
const data = [
  {
    appNumber: 'AID213181',
    service: 'Travel Insurance',
    serviceType: '-',
    date: '12/05/25',
    status: 'In Process',
  },
  {
    appNumber: 'AID213181',
    service: 'Travel Insurance',
    serviceType: '-',
    date: '12/05/25',
    status: 'Completed',
  },
];

// Table columns
const columns = [
  {
    header: 'Application Number',
    accessor: 'appNumber',
  },
  {
    header: 'Services',
    accessor: 'service',
  },
  {
    header: 'Service Type',
    accessor: 'serviceType',
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
        <Button size="icon" variant="outline" asChild>
          <Link href="/agent/travel-insurance/create">
            <Pencil className="h-4 w-4" />
          </Link>
        </Button>
        <Button size="icon" asChild>
          <Link href="/agent/travel-insurance/create">
            <Eye className="h-4 w-4" />
          </Link>
        </Button>
        <DeleteConfirm>
          <Button size="icon" variant="destructive">
            <Trash className="h-4 w-4" />
          </Button>
        </DeleteConfirm>
      </div>
    ),
  },
];

const TravelInsurance = () => {
  return (
    <div className="space-y-2">
      {/* Courier Table */}
      <CommonTable columns={columns} data={data} />
    </div>
  );
};

export default TravelInsurance;
