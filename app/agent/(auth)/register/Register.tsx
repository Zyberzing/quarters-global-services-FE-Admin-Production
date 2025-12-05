'use client';
import AgencyRegisterForm from '@/components/forms/AgencyRegisterForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex">
      <div className="xl:w-[48%] w-full px-8 flex flex-col">
        <Link href="/login">
          <Image width={250} height={80} src="/logo-text.png" alt="logo" className="py-8" />
        </Link>
        <div className="flex flex-col justify-between h-full py-8">
          <div className="xl:max-w-[600px] w-[98%] mx-auto">
            <h1 className="md:text-2xl mb-6 text-xl font-semibold text-text-secondary-200">
              Welcome to Quartus
            </h1>
            <h2 className="md:text-5xl text-3xl font-normal text-text-secondary-200">Register</h2>

            <AgencyRegisterForm />
          </div>
          <div className="flex flex-wrap justify-between items-center text-text-secondary-200 font-normal text-xs">
            <p>Copyright © 2025 Quartus All rights reserved.</p>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-[url(/register.png)] xl:block xl:flex-1 bg-cover bg-center">
        {/* Optional overlay content here */}
      </div>
    </div>
  );
};

export default Register;
