import { z } from 'zod';
import { requiredFileSchema, serviceTypes } from '../common';

// =======================================================
// INDIA TOURIST VISA
// =======================================================

export const visaIndiaTouristSchema = z.object({
  serviceType: z.literal(serviceTypes['tourist-visa']),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  recentPassportPhoto: requiredFileSchema,
  travelItinerary: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
  hotelBookingInvitationLetter: requiredFileSchema,

  // ✅ Excel
  returnFlightTicket: requiredFileSchema.optional(),
});

// =======================================================
// INDIA BUSINESS VISA
// =======================================================

export const visaIndiaBusinessSchema = z.object({
  serviceType: z.literal(serviceTypes['business-visa']),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  invitationLetterFromIndianCompany: requiredFileSchema,
  incorporationCertificateOfIndianCompany: requiredFileSchema,
  proofOfFunds: requiredFileSchema,

  // ✅ Excel
  businessCoverLetter: requiredFileSchema.optional(),
});

// =======================================================
// INDIA STUDENT VISA
// =======================================================

export const visaIndiaStudentSchema = z.object({
  serviceType: z.literal(serviceTypes['student-visa']),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  admissionLetterFromIndianInstitution: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
  academicCertificates: requiredFileSchema,

  // ✅ Excel
  bonafideCertificate: requiredFileSchema.optional(),
});

// =======================================================
// INDIA MEDICAL VISA
// =======================================================

export const visaIndiaMedicalSchema = z.object({
  serviceType: z.literal(serviceTypes['medical-visa']),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  medicalTreatmentLetterFromIndianHospital: requiredFileSchema,
  proofOfFunds: requiredFileSchema,
  medicalReports: requiredFileSchema,

  // ✅ Excel
  attendantDetailsLetter: requiredFileSchema.optional(),
});

// =======================================================
// INDIA CONFERENCE VISA
// =======================================================

export const visaIndiaConferenceSchema = z.object({
  serviceType: z.literal(serviceTypes['conference-visa']),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  invitationLetterToConference: requiredFileSchema,

  governmentClearance: requiredFileSchema.optional(),

  // ✅ Excel
  conferenceRegistrationProof: requiredFileSchema.optional(),
});

// =======================================================
// INDIA EMPLOYMENT VISA
// =======================================================

export const visaIndiaEmploymentSchema = z.object({
  serviceType: z.literal(serviceTypes['employment-visa']),

  validPassport: requiredFileSchema,
  visaApplicationForm: requiredFileSchema,
  passportPhotos: requiredFileSchema,
  appointmentLetter: requiredFileSchema,
  companyRegistrationProof: requiredFileSchema,
  proofOfFunds: requiredFileSchema,

  // ✅ Excel
  employmentContract: requiredFileSchema.optional(),
});
export const indiaVisaSchemas = [
  visaIndiaTouristSchema,
  visaIndiaBusinessSchema,
  visaIndiaStudentSchema,
  visaIndiaMedicalSchema,
  visaIndiaConferenceSchema,
  visaIndiaEmploymentSchema,
] as const;
