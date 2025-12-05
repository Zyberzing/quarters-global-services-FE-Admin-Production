import React from 'react';
import Application from './Application';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { getApplications } from '@/services/applicatonService';
import { ApplicationSource } from '@/lib/types';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; applicationSources?: ApplicationSource }>;
}) => {
  const page = (await searchParams).page || '1';
  const applicationSources = (await searchParams).applicationSources || 'AdminPortal';

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.applications });
  if (!access) {
    return redirect('/admin/home');
  }

  const applications = await getApplications({
    page: page,
    applicationSources,
    isSubmittedFromApplication: '1',
  });

  return (
    <Application applicationsData={applications} selectedApplicationSources={applicationSources} />
  );
};

export default page;
