import { z } from 'zod';
import { requiredFileSchema } from '../common';

// =======================================================
// CANADA VISITOR VISA
// =======================================================

export const visaCanadaVisitorSchema = z.object({
  serviceType: z.literal('canada-visitor-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
  travelItinerary: requiredFileSchema,
});

// =======================================================
// CANADA STUDENT VISA
// =======================================================

export const visaCanadaStudentSchema = z.object({
  serviceType: z.literal('canada-student-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  admissionLetter: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
});

// =======================================================
// CANADA WORK PERMIT
// =======================================================

export const visaCanadaWorkPermitSchema = z.object({
  serviceType: z.literal('canada-work-permit'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  jobOfferLetter: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

// =======================================================
// CANADA PERMANENT RESIDENCY (PR)
// =======================================================

export const visaCanadaPRSchema = z.object({
  serviceType: z.literal('canada-permanent-residency'),

  validPassport: requiredFileSchema,
  applicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
});

// =======================================================
// UK TOURIST VISA
// =======================================================

export const visaUKTouristSchema = z.object({
  serviceType: z.literal('uk-tourist-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  travelItinerary: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
});

// =======================================================
// UK STUDENT VISA
// =======================================================

export const visaUKStudentSchema = z.object({
  serviceType: z.literal('uk-student-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  casLetter: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
});

// =======================================================
// UK WORK VISA
// =======================================================

export const visaUKWorkSchema = z.object({
  serviceType: z.literal('uk-work-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  jobOfferLetter: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

// =======================================================
// UK DEPENDENT VISA
// =======================================================

export const visaUKDependentSchema = z.object({
  serviceType: z.literal('uk-dependent-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  relationshipProof: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

// =======================================================
// SCHENGEN TOURIST VISA
// =======================================================

export const visaSchengenTouristSchema = z.object({
  serviceType: z.literal('schengen-tourist-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  travelItinerary: requiredFileSchema,
  travelInsurance: requiredFileSchema,
});

// =======================================================
// SCHENGEN BUSINESS VISA
// =======================================================

export const visaSchengenBusinessSchema = z.object({
  serviceType: z.literal('schengen-business-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  invitationLetter: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  travelInsurance: requiredFileSchema,
});

// =======================================================
// SCHENGEN STUDENT VISA
// =======================================================

export const visaSchengenStudentSchema = z.object({
  serviceType: z.literal('schengen-student-visa'),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  admissionLetter: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  travelInsurance: requiredFileSchema,
});

export const otherVisaSchemas = [
  visaCanadaVisitorSchema,
  visaCanadaStudentSchema,
  visaCanadaWorkPermitSchema,
  visaCanadaPRSchema,
  visaUKTouristSchema,
  visaUKStudentSchema,
  visaUKWorkSchema,
  visaUKDependentSchema,
  visaSchengenTouristSchema,
  visaSchengenBusinessSchema,
  visaSchengenStudentSchema,
] as const;
