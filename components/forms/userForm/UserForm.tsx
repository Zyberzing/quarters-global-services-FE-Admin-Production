'use client';
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getRoles } from '@/services/rolesService';
import { RoleDataType, UserDataType } from '@/lib/types';
import handleAsync from '@/lib/handleAsync';
import { createUser, editUser, resendOtpToUser, verifyUser } from '@/services/usersService';
import { commonFieldSchema, emailSchema, passwordSchema } from '@/lib/formSchemaFunctions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { OtpVerificationDialog } from '@/components/shared/OtpVerificationDialog';
import { PhoneInput2 } from '@/components/ui/PhoneInput2';

const formSchema = z.object({
  firstName: commonFieldSchema(),
  lastName: commonFieldSchema(),
  email: emailSchema(),
  countryCode: commonFieldSchema(),
  phone: commonFieldSchema(),
  subAdminRoleId: commonFieldSchema(),
  password: passwordSchema().optional().or(z.literal('')),
  status: commonFieldSchema().optional(),
});

export type UserFormSchemaType = z.infer<typeof formSchema>;

const UserForm = ({ isView = false, userData }: { isView?: boolean; userData?: UserDataType }) => {
  const router = useRouter();
  // --
  const [roles, setRoles] = useState<RoleDataType[]>([]);
  const [otpUserId, setOtpUserId] = useState<string | null>(null);
  const [otpLoading, setOtpLoading] = useState(false);

  // --
  const form = useForm<UserFormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: userData?.firstName || '',
      lastName: userData?.lastName || '',
      email: userData?.email || '',
      phone: userData?.phone || '',
      countryCode: userData?.countryCode || '',
      subAdminRoleId: userData?.subAdminRoleId?._id || '',
      password: '',
      status: userData?.status || undefined,
    },
  });
  console.log(form.formState.errors, ':Form Errors');

  const onSubmit = handleAsync(async (values: UserFormSchemaType) => {
    if (isView) return;
    const prePareData = {
      ...values,
      role: 'sub-admin',
    };
    if (userData) {
      await editUser(userData._id, prePareData);
      toast.success('User updated successfully');
      router.push('/admin/users-and-roles?activeTab=users');
    } else {
      const createdUser = await createUser(prePareData);
      const userId = createdUser?.data?._id;
      if (!userId) {
        toast.error('Error while creation agency manager');
        return;
      } else {
        toast.success('Agency details saved successfully!');
        await resendOtpToUser({ userId: userId });
        setOtpUserId(userId);
      }
    }
  });

  // -- verify user --
  const handleVerifyUser = async () => {
    if (userData) {
      await resendOtpToUser({ userId: userData._id });
      setOtpUserId(userData._id);
    }
  };
  // ✅ OTP verification callback
  const handleOtpVerify = async (userId: string, otp: string) => {
    setOtpLoading(true);
    try {
      await verifyUser({ userId, code: otp });
      toast.success('OTP verified successfully!');
      setOtpUserId(null);
      form.reset({});
      router.push('/admin/users-and-roles?activeTab=users');
    } catch (err: any) {
      toast.error(err.message || 'OTP verification failed');
    } finally {
      setOtpLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const roles = await getRoles();
      setRoles(roles.data);
    })();
  }, []);

  return (
    <>
      {/* OTP Dialog */}
      {otpUserId && (
        <OtpVerificationDialog
          userId={otpUserId}
          open={!!otpUserId}
          setOpen={() => setOtpUserId(null)}
          onVerify={handleOtpVerify}
          loading={otpLoading}
          email={form.getValues('email')}
        />
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="p-4 border rounded-lg grid sm:grid-cols-2 gap-4">
            {userData?.isVerified === false && (
              <p className="col-span-2">
                <span>User Not Verified</span>{' '}
                <span className="underline text-primary font-semibold" onClick={handleVerifyUser}>
                  {' '}
                  Verify{' '}
                </span>
              </p>
            )}
            {isView && <div className=" font-semibold col-span-2 border-b pb-2">User Details</div>}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input readOnly={isView} placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input readOnly={isView} placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      readOnly={isView || !!userData?._id}
                      disabled={!!userData?._id}
                      type="email"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <PhoneInput2
                      disabled={isView}
                      value={field.value}
                      onChange={(val, df) => {
                        if (!val) {
                          form.setValue('countryCode', '');
                          field.onChange('');
                          return;
                        }
                        field.onChange(val ? `+${val}` : '');
                        form.setValue('countryCode', `+${df.dialCode || ''}`);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subAdminRoleId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {roles.map((e) => (
                        <SelectItem key={e._id + '-role'} value={e._id}>
                          {e.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!!userData?._id && (
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={'ACTIVE'}>Active</SelectItem>
                        <SelectItem value={'INACTIVE'}>Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
            {!isView && !userData?._id && (
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        readOnly={isView}
                        disabled={!!userData?._id}
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="flex items-center gap-2 justify-end">
            <Link href="/admin/users-and-roles">
              <Button type="button" variant="outline" disabled={form.formState.isSubmitting}>
                {isView ? 'Back' : 'Cancel'}
              </Button>
            </Link>
            {!isView && (
              <Button type="submit" disabled={form.formState.isSubmitting}>
                Submit
              </Button>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default UserForm;
