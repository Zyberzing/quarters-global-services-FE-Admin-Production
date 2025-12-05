'use client';

import CommonTable from '@/components/common/CommonTable';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import Icon from '@/components/common/Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { DocumentDataType } from '@/services/documentService';
import { ApiPagination } from '@/lib/types';
import Paginator from '@/components/shared/paginator';

interface DocumentsProps {
  documentsData: ApiPagination & { data: DocumentDataType[] };
  selectedTab?: string;
}

// Badge variant based on status
// const getBadgeVariant = (status: string): 'default' | 'waiting' | 'success' | 'warning' => {
//   switch (status.toLowerCase()) {
//     case 'notified':
//       return 'warning';
//     case 'received':
//       return 'success';
//     default:
//       return 'waiting';
//   }
// };

// Columns
const columns = [
  {
    header: 'Name',
    accessor: 'name',
    render: (row: any) => (
      <div className="flex items-center gap-2 font-medium">
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
    header: 'Document Type',
    accessor: 'documentType',
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
    header: 'Expiry Date',
    accessor: 'expiryDate',
  },
  {
    header: 'Status',
    accessor: 'status',
    render: (row: any) => <Badge>{row.status}</Badge>,
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'text-center',
    render: (row: any) => (
      <div className="flex items-center justify-center gap-2">
        <Link href={'/admin/documents/' + row._id}>
          <Icon name="edit" />
        </Link>
        <Link href={'/admin/documents/' + row._id}>
          <Icon name="view" />
        </Link>
        <DeleteConfirm>
          <Icon name="delete" />
        </DeleteConfirm>
      </div>
    ),
  },
];

const Documents = ({ documentsData }: DocumentsProps) => {
  const documents = documentsData.data;
  return (
    <div className="space-y-2">
      {/* Document Table */}
      <CommonTable columns={columns} data={documents} />

      {/* Pagination */}
      <Paginator totalItems={documentsData.totalPages} />
    </div>
  );
};

export default Documents;
