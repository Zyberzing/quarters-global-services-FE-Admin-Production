'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { clearSession } from '@/lib/session';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { toast } from 'sonner';

const LogoutConfirm = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn(className)} asChild>
        <span>{children}</span>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription className="break-normal">
            Are you sure you want to log out?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              toast.loading('Logging out...', { id: 'logout-toast' });

              try {
                await clearSession();
                toast.success('Logged out', { id: 'logout-toast' });

                // Clear cookies/session manually if needed
                window.location.href = '/';
              } catch {
                toast.error('Failed to log out', { id: 'logout-toast' });
              }
            }}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutConfirm;
