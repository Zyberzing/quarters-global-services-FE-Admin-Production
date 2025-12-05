'use client';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import Icon from '@/components/common/Icon';
import handleAsync from '@/lib/handleAsync';
import { deleteAgency } from '@/services/agencyService';
import React, { useState } from 'react';

const DeleteAgency = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = handleAsync(async () => {
    try {
      setIsLoading(true);
      await deleteAgency(id);
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

export default DeleteAgency;
