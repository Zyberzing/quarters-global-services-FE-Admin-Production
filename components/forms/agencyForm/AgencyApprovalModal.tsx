'use client';

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Edit, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { updateApprovalStatusAgency } from '@/services/agencyService';
import handleAsync from '@/lib/handleAsync';

interface Props {
  agencyId: string;
  status: string;
  approvalNotes: string;

  onStatusChange?: (status: boolean) => void; // callback to parent to refresh list
}

const AgencyApprovalModal = ({ agencyId, status, approvalNotes, onStatusChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = handleAsync(async () => {
    if (isApproved === null) {
      toast.error('Please select approve or reject before submitting.');
      return;
    }

    setIsSubmitting(true);

    await updateApprovalStatusAgency(agencyId, isApproved, notes);

    toast.success(`Agency has been ${isApproved ? 'approved' : 'rejected'} successfully`);
    setIsSubmitting(false);
    onStatusChange?.(isApproved);
    setOpen(false);
  });

  useEffect(() => {
    if (status === 'APPROVED') {
      setIsApproved(true);
    }
    if (status === 'REJECTED') {
      setIsApproved(false);
    }
    if (approvalNotes) {
      setNotes(approvalNotes);
    }
  }, [status, approvalNotes]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Manage Registration Status
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Approve / Reject Agency</DialogTitle>
          <DialogDescription>
            Review and update the agency’s approval status. You can also add remarks for tracking.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Status Selection */}
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant={isApproved === true ? 'default' : 'outline'}
              onClick={() => setIsApproved(true)}
              className="flex items-center gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              Approve
            </Button>
            <Button
              type="button"
              variant={isApproved === false ? 'destructive' : 'outline'}
              onClick={() => setIsApproved(false)}
              className="flex items-center gap-2"
            >
              <XCircle className="h-4 w-4" />
              Reject
            </Button>
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm font-medium mb-1 block">Approval Notes (optional)</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add approval or rejection notes..."
              className="resize-none h-24"
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Updating...' : 'Submit'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AgencyApprovalModal;
