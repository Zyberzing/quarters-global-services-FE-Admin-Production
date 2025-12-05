import React from 'react';
import LoginPage from './LoginPage';
import { hasSession } from '@/lib/session';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await hasSession();
  if (session?.id) {
    return redirect('/');
  }

  return <LoginPage />;
};

export default page;
