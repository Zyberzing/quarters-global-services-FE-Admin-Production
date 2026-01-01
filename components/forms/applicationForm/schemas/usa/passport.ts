import { z } from 'zod';
import { requiredFileSchema, serviceTypes } from '../common';

// =======================================================
// USA NEW PASSPORT (DS-11)
// =======================================================

export const passportUSANewDS11Schema = z.object({
  serviceType: z.literal(serviceTypes['new-passport']),

  proofOfCitizenship: requiredFileSchema,
  proofOfIdentity: requiredFileSchema,
  passportPhoto2x2: requiredFileSchema,
  socialSecurityNumber: z.string().min(1, 'Social Security Number is required'),
  ds11Form: requiredFileSchema,

  // ✅ Excel
  appointmentConfirmation: requiredFileSchema.optional(),
});

// =======================================================
// USA PASSPORT RENEWAL (DS-82)
// =======================================================

export const passportUSARenewalDS82Schema = z.object({
  serviceType: z.literal(serviceTypes['usa-passport-renewal']),

  mostRecentPassport: requiredFileSchema,
  passportPhoto2x2: requiredFileSchema,
  ds82Form: requiredFileSchema,
  paymentReceipt: requiredFileSchema,

  nameChangeDocument: requiredFileSchema.optional(),

  // ✅ Excel
  oldPassportSubmission: requiredFileSchema.optional(),
});

// =======================================================
// USA CHILD PASSPORT (UNDER 16)
// =======================================================

export const passportUSAChildUnder16Schema = z.object({
  serviceType: z.literal(serviceTypes['child-passport']),

  proofOfCitizenship: requiredFileSchema,
  parentsIdCopies: requiredFileSchema,
  parentalConsent: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  ds11Form: requiredFileSchema,

  // ✅ Excel
  parentsMarriageCertificate: requiredFileSchema.optional(),
});

// =======================================================
// USA LOST PASSPORT
// =======================================================

export const passportUSALostSchema = z.object({
  serviceType: z.literal(serviceTypes['lost-passport']),

  ds64StatementOfLoss: requiredFileSchema,
  ds11Form: requiredFileSchema,
  proofOfCitizenship: requiredFileSchema,
  proofOfIdentity: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  policeReport: requiredFileSchema.optional(),
});

// =======================================================
// USA STOLEN PASSPORT
// =======================================================

export const passportUSAStolenSchema = z.object({
  serviceType: z.literal(serviceTypes['stolen-passport']),

  ds64StatementOfLoss: requiredFileSchema,
  ds11Form: requiredFileSchema,
  proofOfCitizenship: requiredFileSchema,
  proofOfIdentity: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  policeReport: requiredFileSchema.optional(),
});

// =======================================================
// USA DAMAGED PASSPORT
// =======================================================

export const passportUSADamagedSchema = z.object({
  serviceType: z.literal(serviceTypes['damaged-passport']),

  ds64StatementOfLoss: requiredFileSchema,
  ds11Form: requiredFileSchema,
  proofOfCitizenship: requiredFileSchema,
  proofOfIdentity: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  damagedPassportSubmission: requiredFileSchema.optional(),
});

// =======================================================
// USA PASSPORT CARD
// =======================================================

export const passportUSACardSchema = z.object({
  serviceType: z.literal(serviceTypes['usa-passport-card']),

  ds11OrDs82Form: requiredFileSchema,
  passportPhoto: requiredFileSchema,
  proofOfCitizenship: requiredFileSchema,
  proofOfIdentity: requiredFileSchema,

  // ✅ Excel
  previousPassportCopy: requiredFileSchema.optional(),
});

// =======================================================
// USA NAME CHANGE / CORRECTION
// =======================================================

export const passportUSANameChangeCorrectionSchema = z.object({
  serviceType: z.literal(serviceTypes['name-change']),

  ds5504Form: requiredFileSchema,
  currentPassport: requiredFileSchema,
  legalNameChangeDocument: requiredFileSchema,

  // ✅ Excel
  affidavitForNameChange: requiredFileSchema.optional(),
});

// =======================================================
// USA SECOND VALID PASSPORT
// =======================================================

export const passportUSASecondValidSchema = z.object({
  serviceType: z.literal(serviceTypes['second-valid-passport']),

  ds82OrDs11Form: requiredFileSchema,
  currentValidPassport: requiredFileSchema,
  letterOfJustification: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  employerTravelLetter: requiredFileSchema.optional(),
});

// =======================================================
// USA EXPEDITED PASSPORT
// =======================================================

export const passportUSAExpeditedServiceSchema = z.object({
  serviceType: z.literal(serviceTypes['expedited-passport-service']),

  proofOfUrgentTravel: requiredFileSchema,
  expeditedFeePayment: requiredFileSchema,
  standardRequiredDocs: requiredFileSchema,

  // ✅ Excel
  appointmentConfirmation: requiredFileSchema.optional(),
});

// =======================================================
// USA EMERGENCY / SAME DAY PASSPORT
// =======================================================

export const passportUSAEmergencySameDaySchema = z.object({
  serviceType: z.literal(serviceTypes['emergency-or-same-day-passport']),

  proofOfEmergency: requiredFileSchema,
  proofOfTravel: requiredFileSchema,
  requiredStandardDocs: requiredFileSchema,

  // ✅ Excel
  appointmentConfirmation: requiredFileSchema.optional(),
});
export const usaPassportSchemas = [
  passportUSANewDS11Schema,
  passportUSARenewalDS82Schema,
  passportUSAChildUnder16Schema,
  passportUSALostSchema,
  passportUSAStolenSchema,
  passportUSADamagedSchema,
  passportUSACardSchema,
  passportUSANameChangeCorrectionSchema,
  passportUSASecondValidSchema,
  passportUSAExpeditedServiceSchema,
  passportUSAEmergencySameDaySchema,
] as const;
