# Flight Charter API Documentation

This document explains how to use the Flight Charter API in your application.

## Overview

The Flight Charter service uses the same application API (`createApplication`) as other services. The backend accepts any keys, so flight charter data is sent directly without wrapper objects.

## Service Location

```typescript
import { createApplication } from '@/services/applicatonService';
```

## Usage Example

```typescript
const onSubmit = async (values) => {
  const applicationPayload = {
    charterType: values.charterType,
    numberOfPassengers: values.numberOfPassengers,
    date: values.date,
    time: values.time,
    passengerName: values.passengerName,
    email: values.email,
    phone: values.phone,
    countryCode: values.countryCode,
    applicationSource: values.applicationSource,
    totalPassenger: values.totalPassenger,
    specialRequirements: values.specialRequirements,
    travelInsurance: values.travelInsurance,
    returnTrip: values.returnTrip,
  };

  await createApplication(applicationPayload);
};
```

## Data Structure

The flight charter form includes the following fields:

- `charterType`: Type of charter (Private Jet, Helicopter, Commercial Charter)
- `numberOfPassengers`: Number of passengers
- `date`: Charter date
- `time`: Charter time
- `passengerName`: Primary passenger name
- `email`: Email address with validation
- `phone`: Phone number with country code (using PhoneInput2 component)
- `countryCode`: Country code (automatically set by phone input)
- `applicationSource`: Source of the application (AdminPortal, AgentPortal, Website)
- `totalPassenger`: Total number of passengers
- `specialRequirements`: Special requirements (None, Wheelchair Access, Extra Luggage, Special Meals)
- `travelInsurance`: Travel insurance option (Yes/No)
- `returnTrip`: Return trip option (Yes/No)

## Phone Number Implementation

The phone number field uses the same `PhoneInput2` component as used in profile forms:

```typescript
<PhoneInput2
  value={field.value}
  onChange={(val, df) => {
    field.onChange(val ? `+${val}` : '');
    form.setValue('countryCode', `+${df.dialCode || ''}`);
  }}
  disabled={isView}
/>
```

This automatically handles:

- Country code selection
- Phone number formatting
- International phone number validation

### FlightCharterFormType

```typescript
interface FlightCharterFormType {
  charterType: string; // 'Private Jet', 'Helicopter', 'Commercial Charter'
  numberOfPassengers: string; // '1', '2', '3', '4', '5', '6', '7+'
  date: string; // ISO date string
  time: string; // Time string (HH:MM format)
  passengerName: string; // Primary passenger name
  totalPassenger: string; // Total number of passengers
  specialRequirements: string; // 'None', 'Wheelchair Access', 'Extra Luggage', 'Special Meals'
  travelInsurance: string; // 'Yes', 'No'
  returnTrip: string; // 'Yes', 'No'
}
```

### FlightCharterDataType

```typescript
interface FlightCharterDataType {
  _id: string;
  charterType: string;
  numberOfPassengers: string;
  date: string;
  time: string;
  passengerName: string;
  totalPassenger: string;
  specialRequirements: string;
  travelInsurance: string;
  returnTrip: string;
  bookingStatus: string; // 'Confirmed', 'Pending', 'Cancelled'
  paymentStatus: string; // 'Paid', 'Unpaid', 'Pending'
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
```

## API Functions

### 1. Create Flight Charter

```typescript
const createFlightCharter = async (charterData: FlightCharterFormType): Promise<FlightCharterDataType | null>
```

**Example:**

```typescript
const charterData: FlightCharterFormType = {
  charterType: 'Private Jet',
  numberOfPassengers: '4',
  date: '2024-01-15',
  time: '14:30',
  passengerName: 'John Doe',
  totalPassenger: '4',
  specialRequirements: 'None',
  travelInsurance: 'Yes',
  returnTrip: 'No',
};

try {
  const newCharter = await createFlightCharter(charterData);
  console.log('Charter created:', newCharter);
} catch (error) {
  console.error('Error creating charter:', error);
}
```

### 2. Get All Flight Charters

```typescript
const getFlightCharters = async ({ page, search }): Promise<ApiPagination & { data: FlightCharterDataType[] }>
```

**Example:**

```typescript
try {
  const response = await getFlightCharters({
    page: '1',
    search: 'John',
  });
  console.log('Charters:', response.data);
  console.log('Total pages:', response.totalPages);
} catch (error) {
  console.error('Error fetching charters:', error);
}
```

### 3. Get Flight Charter by ID

```typescript
const getFlightCharterById = async (id: string): Promise<FlightCharterDataType | null>
```

**Example:**

```typescript
try {
  const charter = await getFlightCharterById('charter_id_here');
  if (charter) {
    console.log('Charter details:', charter);
  } else {
    console.log('Charter not found');
  }
} catch (error) {
  console.error('Error fetching charter:', error);
}
```

### 4. Update Flight Charter

```typescript
const updateFlightCharter = async (id: string, charterData: Partial<FlightCharterFormType>): Promise<FlightCharterDataType | null>
```

**Example:**

```typescript
try {
  const updatedCharter = await updateFlightCharter('charter_id_here', {
    numberOfPassengers: '6',
    specialRequirements: 'Wheelchair Access',
  });
  console.log('Charter updated:', updatedCharter);
} catch (error) {
  console.error('Error updating charter:', error);
}
```

### 5. Update Booking Status

```typescript
const updateFlightCharterStatus = async (id: string, status: string): Promise<FlightCharterDataType | null>
```

**Example:**

```typescript
try {
  await updateFlightCharterStatus('charter_id_here', 'Confirmed');
  console.log('Status updated successfully');
} catch (error) {
  console.error('Error updating status:', error);
}
```

### 6. Update Payment Status

```typescript
const updateFlightCharterPaymentStatus = async (id: string, paymentStatus: string): Promise<FlightCharterDataType | null>
```

**Example:**

```typescript
try {
  await updateFlightCharterPaymentStatus('charter_id_here', 'Paid');
  console.log('Payment status updated successfully');
} catch (error) {
  console.error('Error updating payment status:', error);
}
```

### 7. Delete Flight Charter

```typescript
const deleteFlightCharter = async (id: string): Promise<boolean>
```

**Example:**

```typescript
try {
  const success = await deleteFlightCharter('charter_id_here');
  if (success) {
    console.log('Charter deleted successfully');
  } else {
    console.log('Failed to delete charter');
  }
} catch (error) {
  console.error('Error deleting charter:', error);
}
```

## Form Integration

The FlightCharterServicesForm component has been updated to use these API functions:

```typescript
import FlightCharterServicesForm from '@/components/forms/serviceForm/subForms/FlightCharterServicesForm';

// Usage
<FlightCharterServicesForm
  isView={false}           // Set to true for read-only view
  charterData={existingData}  // Optional: pre-populate form
  isEdit={false}           // Set to true for edit mode
/>
```

## Error Handling

All API functions use the `handleAsync` utility and throw errors that should be caught:

```typescript
import { toast } from 'sonner';

try {
  const result = await createFlightCharter(data);
  toast.success('Charter created successfully!');
} catch (error) {
  toast.error('Failed to create charter. Please try again.');
  console.error('Charter creation error:', error);
}
```

## Example Component

See `components/examples/FlightCharterExample.tsx` for a complete example of how to use all the API functions in a React component.

## API Endpoints

The service assumes the following backend endpoints:

- `POST /flight-charter/create-charter` - Create new charter
- `GET /flight-charter/get-all` - Get all charters with pagination
- `GET /flight-charter/get-charter/:id` - Get charter by ID
- `PUT /flight-charter/update-charter/:id` - Update charter
- `PATCH /flight-charter/update-status/:id` - Update booking status
- `PATCH /flight-charter/update-payment-status/:id` - Update payment status
- `DELETE /flight-charter/delete-charter/:id` - Delete charter

Make sure your backend API implements these endpoints with the expected request/response formats.
