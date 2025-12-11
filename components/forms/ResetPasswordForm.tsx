'use client';
import React, { useState } from 'react';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import FormWrapper from '../common/FormWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import handleAsync from '@/lib/handleAsync';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import UserStatusModal, { UserStatus } from '../common/UserStatusModal';
import Link from 'next/link';
import { Loader } from 'lucide-react';

// ---------------- Schema ----------------
const formSchema = z.object({
  newPassword: z.string(),
  code: z.string(),
});

// ---------------- Component ----------------
const ResetPasswordForm = () => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId') || '';
  const [userStatusModalOpen, setUserStatusModalOpen] = useState<UserStatus>(null);
  const [resendLoading, setResendLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: '',
      code: '',
    },
  });

  const onSubmit = handleAsync(async (values: z.infer<typeof formSchema>) => {
    try {
      setUserStatusModalOpen(null);
      const preparedValues = { ...values, userId };

      const res = await fetch(process.env.NEXT_PUBLIC_QUARTUS_API_URL + '/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preparedValues),
      });

      if (!res.ok) {
        const response = await res.json();
        throw new Error(response.message || 'Invalid credentials');
      }
      await res.json();
      toast.success('Password has been reset successfully');
      route.push('/login');
    } finally {
      console.log('done');
    }
  });

  const handleResendOtp = handleAsync(async () => {
    try {
      setResendLoading(true);
      setUserStatusModalOpen(null);

      const res = await fetch(process.env.NEXT_PUBLIC_QUARTUS_API_URL + '/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });

      if (!res.ok) {
        const response = await res.json();
        throw new Error(response.message || 'Invalid data');
      }
      await res.json();
      toast.success('Password reset code resent successfully');
    } finally {
      setResendLoading(false);
    }
  });

  return (
    <>
      {userStatusModalOpen && <UserStatusModal status={userStatusModalOpen} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col py-6 gap-4 mt-3">
          <FormWrapper
            control={form.control}
            name="code"
            type="text"
            placeholder="Code"
            require={true}
            cssStyles="mb-4"
          />
          <FormWrapper
            control={form.control}
            name="newPassword"
            type="text"
            placeholder="New Password"
            require={true}
            cssStyles="mb-4"
          />

          {/* Resend */}
          <button
            type="button"
            className="w-fit flex items-center gap-2 text-sm text-primary font-medium"
            disabled={resendLoading || form.formState.isSubmitting}
            onClick={handleResendOtp}
          >
            Resend code
            {resendLoading && <Loader className="animate-spin size-4" />}
          </button>

          {/* Submit Button */}
          <div className="grid grid-cols-2 items-center gap-4">
            <Button type="button" variant="outline" disabled={form.formState.isSubmitting}>
              <Link href="/forget-password">Back</Link>
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ResetPasswordForm;
