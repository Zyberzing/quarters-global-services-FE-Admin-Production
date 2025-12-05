'use client';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import Icon from '@/components/common/Icon';
import handleAsync from '@/lib/handleAsync';
import { deleteTraining } from '@/services/trainigsService';
import React, { useState } from 'react';

const DeleteTraining = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = handleAsync(async () => {
    try {
      setIsLoading(true);
      await deleteTraining(id);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <DeleteConfirm onConfirm={handleDelete}>
      <Icon name={isLoading ? 'loading' : 'delete'} />
    </DeleteConfirm>
  );
};

export default DeleteTraining;
