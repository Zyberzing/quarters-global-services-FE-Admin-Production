'use client';

import CommonTable from '@/components/common/CommonTable';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import Icon from '@/components/common/Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/formatCurrency';

import { Plus } from 'lucide-react';
import Link from 'next/link';

// Dummy Data
const receipts = [
  {
    name: 'Andrew Bojangles',
    receiptNo: '25235',
    totalAmount: '23523',
    paymentMethod: 'Cash',
    serviceCategory: 'RC',
    avatar: '/avatars/avatar1.jpg',
  },
  {
    name: 'Sarah Connor',
    receiptNo: '26262',
    totalAmount: '45200',
    paymentMethod: 'Card',
    serviceCategory: 'Visa',
    avatar: '/avatars/avatar2.jpg',
  },
  {
    name: 'John Doe',
    receiptNo: '27272',
    totalAmount: '13850',
    paymentMethod: 'Online',
    serviceCategory: 'Passport',
    avatar: '/avatars/avatar3.jpg',
  },
];

// Columns
const columns = [
  {
    header: 'Name',
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
    header: 'Receipt No.',
    accessor: 'receiptNo',
  },
  {
    header: 'Total Amount',
    accessor: 'totalAmount',
    render: (row: any) => formatCurrency({ amount: row.totalAmount }),
  },
  {
    header: 'Payment Method',
    accessor: 'paymentMethod',
  },
  {
    header: 'Service Category',
    accessor: 'serviceCategory',
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'text-center',
    render: () => (
      <div className="flex items-center justify-center gap-2">
        <Link href={'/admin/receipts/add-receipt/' + ''}>
          <Icon name="edit" />
        </Link>
        <Link href={'/admin/receipts/add-receipt/' + ''}>
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
const Receipts = () => {
  return (
    <div className="space-y-2">
      {/* Header actions */}
      <div className="flex items-center justify-end gap-2">
        <Link href="/admin/receipts/add-receipt">
          <Button>
            <Plus className="mr-1" />
            <span>Add Receipt</span>
          </Button>
        </Link>
      </div>

      {/* Table */}
      <CommonTable columns={columns} data={receipts} />
    </div>
  );
};

export default Receipts;
