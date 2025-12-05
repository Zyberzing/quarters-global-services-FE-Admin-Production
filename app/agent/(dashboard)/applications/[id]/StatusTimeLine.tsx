import Timeline, { TimelineStep } from '@/components/ui/timeline';
import { Clock } from 'lucide-react';
import React from 'react';

const StatusTimeLine = () => {
  const visaTimelineSteps: TimelineStep[] = [
    {
      id: 'submitted',
      title: 'Submitted',
      status: 'completed',
      icon: <Clock />,
    },
    {
      id: 'inReview',
      title: 'In Review',
      status: 'completed',
      icon: <Clock />,
    },
    {
      id: 'approved',
      title: 'Approved',
      status: 'pending',
      icon: <Clock />,
    },
    {
      id: 'dispatched',
      title: 'Dispatched',
      status: 'pending',
      icon: <Clock />,
    },
    {
      id: 'delivered',
      title: 'Delivered',
      status: 'pending',
      icon: <Clock />,
    },
  ];
  return <Timeline steps={visaTimelineSteps} />;
};

export default StatusTimeLine;
