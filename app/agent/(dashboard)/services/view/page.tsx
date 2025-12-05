import ServiceForm from '@/components/forms/serviceForm/ServiceForm';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { ApplicationSource } from '@/lib/types';
import { getApplicationById } from '@/services/applicatonService';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    application?: string;
    search?: string;
    applicationSources?: ApplicationSource;
  }>;
}) => {
  const application = (await searchParams).application || '';

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.applications });
  if (!access) {
    return redirect('/agent/home');
  }

  const applicationData = await getApplicationById(application);

  if (!applicationData) {
    return redirect('/agent/services');
  }
  return (
    <div>
      <p className="py-4 text-lg font-semibold">View Services</p>
      <ServiceForm isView={true} defaultData={applicationData} applicationSource="AgentPortal" />
    </div>
  );
};

export default page;
