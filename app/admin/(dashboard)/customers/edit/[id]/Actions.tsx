import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import React from 'react';

const Actions = () => {
  return (
    <div className="flex items-center gap-2">
      <Button>
        <Edit /> Edit
      </Button>
    </div>
  );
};

export default Actions;
