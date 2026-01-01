import { z } from 'zod';
import { requiredFileSchema, serviceTypes } from '../common';

// =======================================================
// INDIA NEW PASSPORT – ADULT
// =======================================================

export const passportIndiaNewAdultSchema = z.object({
  serviceType: z.literal(serviceTypes['india-passport-new-adult']),

  proofOfAddress: requiredFileSchema,
  birthCertificate: requiredFileSchema,
  aadhaarCard: requiredFileSchema,
  identityProof: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  applicationForm: requiredFileSchema,

  // ✅ missing in schema but present in Excel
  policeVerificationDocument: requiredFileSchema.optional(),
});

// =======================================================
// INDIA NEW PASSPORT – MINOR
// =======================================================

export const passportIndiaNewMinorSchema = z.object({
  serviceType: z.literal(serviceTypes['india-passport-new-minor']),

  parentsPassportCopies: requiredFileSchema,
  birthCertificate: requiredFileSchema,
  proofOfAddress: requiredFileSchema,
  photos: requiredFileSchema,
  applicationForm: requiredFileSchema,

  // ✅ Excel
  parentsConsentForm: requiredFileSchema.optional(),
});

// =======================================================
// INDIA PASSPORT RENEWAL – ADULT
// =======================================================

export const passportIndiaRenewalAdultSchema = z.object({
  serviceType: z.literal(serviceTypes['adult-renewal']),

  oldPassport: requiredFileSchema,
  proofOfAddress: requiredFileSchema,
  applicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,

  // ✅ Excel
  policeVerificationDocument: requiredFileSchema.optional(),
});

// =======================================================
// INDIA PASSPORT RENEWAL – MINOR
// =======================================================

export const passportIndiaRenewalMinorSchema = z.object({
  serviceType: z.literal(serviceTypes['minor-renewal']),

  oldPassportMinor: requiredFileSchema,
  parentsIds: requiredFileSchema,
  proofOfAddress: requiredFileSchema,
  photos: requiredFileSchema,
  applicationForm: requiredFileSchema,

  // ✅ Excel
  parentsConsentForm: requiredFileSchema.optional(),
});

// =======================================================
// INDIA LOST / DAMAGED PASSPORT
// =======================================================

export const passportIndiaLostDamagedSchema = z.object({
  serviceType: z.literal(serviceTypes['lost-passport-1']),

  policeReport: requiredFileSchema,
  oldPassportCopy: requiredFileSchema.optional(),
  proofOfAddress: requiredFileSchema,
  photos: requiredFileSchema,
  applicationForm: requiredFileSchema,

  // ✅ Excel
  newspaperAdvertisement: requiredFileSchema.optional(),
});

// =======================================================
// INDIA TATKAL PASSPORT
// =======================================================

export const passportIndiaTatkalSchema = z.object({
  serviceType: z.literal(serviceTypes['tatkal-passport']),

  proofOfUrgency: requiredFileSchema,
  aadhaarIdProof: requiredFileSchema,
  policeVerificationDocument: requiredFileSchema,
  applicationForm: requiredFileSchema,
  photos: requiredFileSchema,

  // ✅ Excel
  appointmentConfirmationSlip: requiredFileSchema.optional(),
});

// =======================================================
// INDIA NAME CHANGE IN PASSPORT
// =======================================================

export const passportIndiaNameChangeSchema = z.object({
  serviceType: z.literal(serviceTypes['india-passport-name-change']),

  currentPassport: requiredFileSchema,
  gazetteLegalNameChangeCertificate: requiredFileSchema,
  marriageDivorceCertificate: requiredFileSchema.optional(),
  photos: requiredFileSchema,

  // ✅ Excel
  affidavitForNameChange: requiredFileSchema.optional(),
});
export const indiaPassportSchemas = [
  passportIndiaNewAdultSchema,
  passportIndiaNewMinorSchema,
  passportIndiaRenewalAdultSchema,
  passportIndiaRenewalMinorSchema,
  passportIndiaLostDamagedSchema,
  passportIndiaTatkalSchema,
  passportIndiaNameChangeSchema,
] as const;
