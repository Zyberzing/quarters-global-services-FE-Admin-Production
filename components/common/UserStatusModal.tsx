'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

export type UserStatus = null | 'PENDING' | 'APPROVED' | 'REJECTED' | 'NOT_ASSIGNED';

interface UserStatusModalProps {
  status: UserStatus;
}

export default function UserStatusModal({ status }: UserStatusModalProps) {
  const [open, setOpen] = useState(false);

  const getStatusDetails = () => {
    switch (status) {
      case 'APPROVED':
        return {
          title: "You're All Set!",
          desc: 'Your account has been approved. You can now access all features.',
          color: 'bg-green-100 text-green-700 border-green-300',
          icon: <CheckCircle2 className="w-10 h-10 text-green-600" />,
          action: <Button onClick={() => setOpen(false)}>Continue</Button>,
        };
      case 'PENDING':
        return {
          title: 'Awaiting Admin Approval ⏳',
          desc: 'Your application has been submitted successfully and is currently under review by the admin. You’ll be notified once it’s approved or rejected.',
          color: 'bg-yellow-100 text-yellow-700 border-yellow-300',
          icon: <Clock className="w-10 h-10 text-yellow-600" />,
          action: (
            <Button variant="outline" disabled className="cursor-not-allowed opacity-70">
              Waiting for Approval
            </Button>
          ),
        };
      case 'REJECTED':
        return {
          title: 'Account Rejected',
          desc: 'Your application was not approved. Please contact the admin for more information.',
          color: 'bg-red-100 text-red-700 border-red-300',
          icon: <AlertCircle className="w-10 h-10 text-red-600" />,
          action: (
            <div className="grid grid-cols-2 gap-2">
              <Link href="/agent/onboard" className="block w-full">
                <Button variant="outline" className="w-full">
                  Onboarding
                </Button>
              </Link>
              <Link href="/" className="block w-full">
                <Button variant="outline" className="w-full">
                  Contact Admin
                </Button>
              </Link>
            </div>
          ),
        };
      default:
        return {
          title: 'No Agency Assigned',
          desc: 'You are not assigned to any agency. Please complete your onboarding or contact admin.',
          color: 'bg-blue-100 text-blue-700 border-blue-300',
          icon: <AlertCircle className="w-10 h-10 text-blue-600" />,
          action: (
            <div className="grid grid-cols-2 gap-2">
              <Link href="/agent/onboard" className="block w-full">
                <Button variant="outline" className="w-full">
                  Onboarding
                </Button>
              </Link>
              <Link href="/" className="block w-full">
                <Button variant="outline" className="w-full">
                  Contact Admin
                </Button>
              </Link>
            </div>
          ),
        };
    }
  };

  const details = getStatusDetails();
  useEffect(() => {
    if (status) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [status]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm rounded-2xl">
        <DialogHeader className="text-center space-y-2 sm:text-center">
          <div className="flex justify-center">{details.icon}</div>
          <DialogTitle className="text-lg font-semibold">{details.title}</DialogTitle>
          <DialogDescription className="text-gray-600">{details.desc}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-center mt-6">{details.action}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
