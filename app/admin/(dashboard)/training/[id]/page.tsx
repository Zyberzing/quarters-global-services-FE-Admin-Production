import React from 'react';
import { redirect } from 'next/navigation';
import hasAccess from '@/hooks/useAccessControl/hasAccess';
import { PERMISSIONS_LIST_ENUM } from '@/hooks/useAccessControl/permissions';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getTrainingById } from '@/services/trainigsService';
import TrainingForm from '@/components/forms/trainingForm/TrainingForm';

const EditTrainingPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const access = await hasAccess({ permission: PERMISSIONS_LIST_ENUM.tickets });
  if (!access) {
    return redirect('/admin/home');
  }

  // Fetch ticket data and dropdown data in parallel
  const trainingData = await getTrainingById(id);

  if (!trainingData) {
    return redirect('/admin/training');
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 ">
          <Link href="/admin/training">
            <ChevronLeft className="h-6 w-6 text-black" />
          </Link>
          <h1 className="text-2xl font-semibold">View Training</h1>
        </div>
      </div>
      <TrainingForm defaultData={trainingData} isView={true} />
    </div>
  );
};

export default EditTrainingPage;
