'use client';
import React, { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CourierDocumentDeliveryForm from './subForms/CourierDocumentDeliveryForm';
import VehicleBookingForm from './subForms/VehicleBookingForm';
import FlightCharterServicesForm from './subForms/FlightCharterServicesForm';
import ConcertWeddingPrivateTourForm from './subForms/ConcertWeddingPrivateTourForm';
import TravelInsuranceForm from './subForms/TravelInsuranceForm';
import ConsultancyServiceForm from './subForms/ConsultancyServiceForm';
import { Label } from '@/components/ui/label';

const serviceTypes = [
  'Courier & Document Delivery',
  'Vehicle Booking',
  'Flight Charter Services',
  'Concert, Wedding, Private Tour, Corporate Ground Transport',
  'Travel Insurance',
  'Consultancy Service',
] as const;

const AgencyServiceForm = ({ isView }: { isView?: boolean }) => {
  console.log(isView, 'isView');
  const [serviceType, setServiceType] = useState<string>('');

  return (
    <div className="p-4 border rounded-lg grid gap-4">
      <Label htmlFor="serviceType">Service Type</Label>
      <Select onValueChange={setServiceType} defaultValue={serviceType}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select service type" />
        </SelectTrigger>
        <SelectContent>
          {serviceTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {serviceType === 'Courier & Document Delivery' && <CourierDocumentDeliveryForm />}
      {serviceType === 'Vehicle Booking' && <VehicleBookingForm />}
      {serviceType === 'Flight Charter Services' && <FlightCharterServicesForm />}
      {serviceType === 'Concert, Wedding, Private Tour, Corporate Ground Transport' && (
        <ConcertWeddingPrivateTourForm />
      )}
      {serviceType === 'Travel Insurance' && <TravelInsuranceForm />}
      {serviceType === 'Consultancy Service' && <ConsultancyServiceForm />}
    </div>
  );
};

export default AgencyServiceForm;
