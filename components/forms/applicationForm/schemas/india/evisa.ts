import { z } from 'zod';
import { requiredFileSchema } from '../common';

// =======================================
// INDIA E-TOURIST VISA
// =======================================

export const indiaETouristVisaSchema = z.object({
  serviceType: z.literal('india-e-tourist-visa'),

  passportCopy: requiredFileSchema,
  photograph: requiredFileSchema,
});

// =======================================
// INDIA E-BUSINESS VISA
// =======================================

export const indiaEBusinessVisaSchema = z.object({
  serviceType: z.literal('india-e-business-visa'),

  passportCopy: requiredFileSchema,
  businessCardOrInvitation: requiredFileSchema,
  photograph: requiredFileSchema,
});

// =======================================
// INDIA E-MEDICAL VISA
// =======================================

export const indiaEMedicalVisaSchema = z.object({
  serviceType: z.literal('india-e-medical-visa'),

  passportCopy: requiredFileSchema,
  hospitalLetter: requiredFileSchema,
  photograph: requiredFileSchema,
});
export const indiaEVisaSchemas = [
  indiaETouristVisaSchema,
  indiaEBusinessVisaSchema,
  indiaEMedicalVisaSchema,
] as const;
