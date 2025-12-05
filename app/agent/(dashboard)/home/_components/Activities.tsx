import DeleteConfirm from '@/components/common/DeleteConfirm';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EllipsisVertical, Eye, MoveUpRight, Pencil, Trash } from 'lucide-react';

const activities = [
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
  {
    applicant_name: 'Andrew Bojangles',
    document: 'Power of Attorney - USA',
    status: 'Waiting',
  },
];

const Activities = () => {
  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold">Recent Activities</p>
      <div className="max-h-96 overflow-auto relative">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant Name</TableHead>
              <TableHead>Document</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((e, index) => (
              <TableRow key={e.applicant_name + index + 'activity'}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-base font-medium">{e.applicant_name}</p>
                    <MoveUpRight className="size-4" />
                  </div>
                </TableCell>
                <TableCell>{e.document}</TableCell>
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
                </TableCell>{' '}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Activities;
