import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { EllipsisVertical, Eye, MoveUpRight, Pencil, Trash } from 'lucide-react';
import DeleteConfirm from '@/components/common/DeleteConfirm';

const alerts = [
  {
    name: 'Andrew Bojangles',
    document_type: 'Visa',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Passport',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Other',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Other',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Other',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Other',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Other',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Other',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
  {
    name: 'Andrew Bojangles',
    document_type: 'Other',
    expiry_date: '12th Jun, 2025',
    status: 'Not Notified',
  },
];
const Alerts = () => {
  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold">Alerts</p>
      <div className="max-h-96 overflow-auto relative">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Document Type</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((e, index) => (
              <TableRow key={e.name + index + 'alert'}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-base font-medium">{e.name}</p>

                    <MoveUpRight className="size-4" />
                  </div>
                </TableCell>
                <TableCell>{e.document_type}</TableCell>
                <TableCell>{e.expiry_date}</TableCell>
                <TableCell>
                  <Badge variant="waiting">{e.status}</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Popover>
                    <PopoverTrigger>
                      <Button size="icon" variant="ghost">
                        <EllipsisVertical />
                        <span className="sr-only">action</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-fit" align="end">
                      <div className="flex items-center gap-2">
                        <Button size="icon">
                          <Eye />
                          <span className="sr-only">view</span>
                        </Button>
                        <Button size="icon" variant="outline">
                          <Pencil />
                          <span className="sr-only">edit</span>
                        </Button>
                        <DeleteConfirm>
                          <Button size="icon" variant="destructive">
                            <Trash />
                            <span className="sr-only">delete</span>
                          </Button>
                        </DeleteConfirm>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Alerts;
