'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DocumentDataType } from '@/services/documentService';

interface DocumentReminderFormProps {
  document?: DocumentDataType;
}

const DocumentReminderForm = ({ document }: DocumentReminderFormProps) => {
  // Fallback data if no document is provided
  const documentData = document || {
    name: 'Andrew Bojangles',
    email: 'johnjacob@gmail.com',
    phone: '+1 (279)6257112',
    documentType: 'Visa',
    expiryDate: '12th July,2025',
    status: 'Pending',
    createdAt: '2025-05-12',
  };
  console.log(documentData, 'documentData');
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="mt-2 flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
              <AvatarFallback>{documentData.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <span className="text-lg font-medium">{documentData.name}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" className="bg-secondary text-primary">
            Status: {documentData.status}
          </Button>
          <Button variant="outline">Schedule Notification</Button>
        </div>
      </div>

      {/* Form Section */}
      <div className="rounded-lg border p-6 shadow-sm space-y-4">
        {<p className=" font-semibold col-span-2 border-b pb-2">Applicant Details</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Email */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input readOnly value={documentData.email} />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input readOnly value={documentData.phone} />
          </div>

          {/* Applied On */}
          <div className="space-y-2">
            <Label>Applied On</Label>
            <Input readOnly value={new Date(documentData.createdAt).toLocaleDateString()} />
          </div>

          {/* Document Type */}
          <div className="space-y-2">
            <Label>Document Type</Label>
            <Input readOnly value={documentData.documentType} />
          </div>

          {/* Document Expiry Date */}
          <div className="space-y-2">
            <Label>Document Expiry Date</Label>
            <Input readOnly value={documentData.expiryDate} />
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label>Status</Label>
            <Input readOnly value={documentData.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentReminderForm;
