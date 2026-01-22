import ApplicationForm from '@/components/forms/applicationForm/ApplicationForm';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.applications });
  if (!access) {
    return redirect('/admin/home');
  }

  return <ApplicationForm applicationSources="AgentPortal" />;
};

export default page;
