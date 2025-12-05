'use client';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import Icon from '@/components/common/Icon';
import { Button } from '@/components/ui/button';
import handleAsync from '@/lib/handleAsync';
import { deleteRole } from '@/services/rolesService';
import { useState } from 'react';
import { toast } from 'sonner';

export function RoleDeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = handleAsync(async () => {
    try {
      setLoading(true);
      await deleteRole(id);
      toast.success(`Role deleted successfully`);
    } finally {
      setLoading(false);
    }
  });

  return (
    <DeleteConfirm onConfirm={handleDelete}>
      <Button variant="outline" disabled={loading}>
        <Icon name={loading ? 'loading' : 'delete'} />
      </Button>
    </DeleteConfirm>
  );
}

export default RoleDeleteButton;
