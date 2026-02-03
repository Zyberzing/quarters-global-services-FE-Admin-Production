import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import LoginForm from '@/components/forms/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen  flex ">
      <div className="xl:w-[45%] w-full px-8 flex flex-col">
        <Link href="/">
          <Image width={250} height={80} src="/logo-text.png" alt="logo" className="py-8" />
        </Link>
        <div className="flex flex-col justify-between h-full py-8">
          <div className="xl:max-w-[456px] w-[94%]  mx-auto grow">
            <h1 className="md:text-2xl mb-6 text-xl font-semibold text-text-secondary-200">
              Login
            </h1>
            {/* <h2 className="md:text-5xl text-3xl font-normal text-text-secondary-200">Login</h2> */}

            <LoginForm />
            <div className="text-center space-y-3 mb-2 text-sm">
              Agency registration?.{' '}
              <Link href="/agent/register" className="text-base font-medium text-primary">
                Register
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center text-text-secondary-200 font-normal text-xs">
            <p>Copyright © 2026 Quartus All rights reserved.</p>
            <Link href="https://www.quartusglobalservice.com/terms-and-condition" target="_blank">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-[url(/auth.png)] xl:block xl:flex-1 bg-cover bg-center">
        {/* Optional overlay content here */}
      </div>
    </div>
  );
};

export default LoginPage;
