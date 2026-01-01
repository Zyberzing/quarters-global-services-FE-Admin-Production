import { z } from 'zod';
import { requiredFileSchema } from '../common';

// =======================================
// OCI ADULT
// =======================================

export const ociAdultSchema = z.object({
  serviceType: z.literal('oci-adult'),

  ociApplicationForm: requiredFileSchema,
  indianPassportCopy: requiredFileSchema,
  proofOfIndianOrigin: requiredFileSchema,
  addressProof: requiredFileSchema,
  photograph: requiredFileSchema,

  marriageCertificate: requiredFileSchema.optional(),
  naturalizationCertificate: requiredFileSchema.optional(),
  renunciationCertificate: requiredFileSchema.optional(),
});

// =======================================
// OCI MINOR
// =======================================

export const ociMinorSchema = z.object({
  serviceType: z.literal('oci-minor'),

  ociApplicationForm: requiredFileSchema,
  childBirthCertificate: requiredFileSchema,
  parentsPassportCopies: requiredFileSchema,
  addressProof: requiredFileSchema,
  photograph: requiredFileSchema,

  parentsMarriageCertificate: requiredFileSchema.optional(),
});

// =======================================
// OCI SPOUSE (FOREIGN NATIONAL)
// =======================================

export const ociSpouseSchema = z.object({
  serviceType: z.literal('oci-spouse'),

  ociApplicationForm: requiredFileSchema,
  spouseIndianPassportCopy: requiredFileSchema,
  marriageCertificate: requiredFileSchema,
  proofOfIndianOriginOfSpouse: requiredFileSchema,
  addressProof: requiredFileSchema,
  photograph: requiredFileSchema,
});

// =======================================
// OCI IN LIEU OF PIO
// =======================================

export const ociInLieuOfPioSchema = z.object({
  serviceType: z.literal('oci-in-lieu-of-pio'),

  ociApplicationForm: requiredFileSchema,
  pioCardCopy: requiredFileSchema,
  indianPassportCopy: requiredFileSchema,
  addressProof: requiredFileSchema,
  photograph: requiredFileSchema,
});
export const indiaOciSchemas = [
  ociAdultSchema,
  ociMinorSchema,
  ociSpouseSchema,
  ociInLieuOfPioSchema,
] as const;
