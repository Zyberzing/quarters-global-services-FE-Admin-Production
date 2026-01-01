import { z } from 'zod';
import { requiredFileSchema, serviceTypes } from '../common';

// =======================================================
// USA VISITOR VISA (B1/B2)
// =======================================================

export const visaUSB1B2Schema = z.object({
  serviceType: z.literal(serviceTypes['b1b2-visitor-visa']),

  validPassport: requiredFileSchema.optional(),
  ds160Confirmation: requiredFileSchema.optional(),
  visaFeeReceipt: requiredFileSchema.optional(),
  passportPhoto: requiredFileSchema.optional(),
  travelItinerary: requiredFileSchema.optional(),
  bankStatements: requiredFileSchema.optional(),
  invitationLetter: requiredFileSchema.optional(),

  // ✅ Excel
  employmentProof: requiredFileSchema.optional(),
  propertyOwnershipProof: requiredFileSchema.optional(),
});

// =======================================================
// USA STUDENT VISA (F1)
// =======================================================

export const visaUSStudentSchema = z.object({
  serviceType: z.literal(serviceTypes['f1-student-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  sevisFeeReceipt: requiredFileSchema,
  i20Form: requiredFileSchema,
  visaFeeReceipt: requiredFileSchema,
  passportPhoto: requiredFileSchema,
  academicRecords: requiredFileSchema,
  bankStatementsSponsorLetter: requiredFileSchema,

  // ✅ Excel
  englishProficiencyProof: requiredFileSchema.optional(),
});

// =======================================================
// USA EXCHANGE VISITOR VISA (J1)
// =======================================================

export const visaUSExchangeVisitorSchema = z.object({
  serviceType: z.literal(serviceTypes['j1-exchange-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  sevisFeeReceipt: requiredFileSchema,
  ds2019Form: requiredFileSchema,
  passportPhoto: requiredFileSchema,
  sponsorLetter: requiredFileSchema,
  proofOfFunds: requiredFileSchema,

  // ✅ Excel
  trainingProgramDetails: requiredFileSchema.optional(),
});

// =======================================================
// USA BUSINESS / WORK VISA (H1B)
// =======================================================

export const visaUSBusinessSchema = z.object({
  serviceType: z.literal(serviceTypes['h1b-work-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  i797ApprovalNotice: requiredFileSchema,
  lcaDocument: requiredFileSchema,
  employmentLetter: requiredFileSchema,
  degreesCertificates: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  resumeCV: requiredFileSchema.optional(),
});

// =======================================================
// USA TEMPORARY WORKER VISA (H2A / H2B)
// =======================================================

export const visaUSTemporaryWorkerSchema = z.object({
  serviceType: z.literal(serviceTypes['h2a-h2b-temporary-worker-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  jobOrderOfferLetter: requiredFileSchema,
  passportPhoto: requiredFileSchema,
  previousVisaHistory: requiredFileSchema.optional(),
});

// =======================================================
// USA INTRA-COMPANY TRANSFER VISA (L1)
// =======================================================

export const visaUSIntraCompanyTransferSchema = z.object({
  serviceType: z.literal(serviceTypes['l1-intra-company-transfer']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  i129sI797Approval: requiredFileSchema,
  employmentLetters: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  companyRelationshipProof: requiredFileSchema.optional(),
});

// =======================================================
// USA EXTRAORDINARY ABILITY VISA (O1)
// =======================================================

export const visaUSExtraordinaryAbilitySchema = z.object({
  serviceType: z.literal(serviceTypes['o1-extraordinary-ability']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  i797Approval: requiredFileSchema,
  evidenceOfExtraordinaryAbility: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  expertOpinionLetters: requiredFileSchema.optional(),
});

// =======================================================
// USA ATHLETE / ARTIST VISA (P1 / P3)
// =======================================================

export const visaUSAthleteArtistSchema = z.object({
  serviceType: z.literal(serviceTypes['p1-p3-athlete-artist-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  i797Approval: requiredFileSchema,
  contractsItinerary: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  eventInvitations: requiredFileSchema.optional(),
});

// =======================================================
// USA RELIGIOUS WORKER VISA (R1)
// =======================================================

export const visaUSReligiousWorkerSchema = z.object({
  serviceType: z.literal(serviceTypes['r1-religious-worker-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  i797Approval: requiredFileSchema,
  religiousOrganizationLetter: requiredFileSchema,
  passportPhoto: requiredFileSchema,

  // ✅ Excel
  religiousQualificationProof: requiredFileSchema.optional(),
});

// =======================================================
// USA NAFTA VISA (TN / TD)
// =======================================================

export const visaUSNAFTASchema = z.object({
  serviceType: z.literal(serviceTypes['tntd-nafta-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  offerLetter: requiredFileSchema,
  proofOfCitizenship: requiredFileSchema,
  passportPhoto: requiredFileSchema,
});

// =======================================================
// USA IMMEDIATE RELATIVE VISA (IR)
// =======================================================

export const visaUSImmediateRelativeSchema = z.object({
  serviceType: z.literal(serviceTypes['ir-immediate-relative-visa']),

  validPassport: requiredFileSchema,
  ds260Confirmation: requiredFileSchema,
  civilDocuments: requiredFileSchema,
  policeCertificates: requiredFileSchema,
  medicalExam: requiredFileSchema,
  i864AffidavitOfSupport: requiredFileSchema,
  passportPhotos: requiredFileSchema,

  // ✅ Excel
  birthCertificate: requiredFileSchema.optional(),
});

// =======================================================
// USA FAMILY PREFERENCE VISA (F1–F4)
// =======================================================

export const visaUSFamilyPreferenceSchema = z.object({
  serviceType: z.literal(serviceTypes['f1-f4-family-preference-visa']),

  validPassport: requiredFileSchema,
  ds260Confirmation: requiredFileSchema,
  civilDocuments: requiredFileSchema,
  policeCertificates: requiredFileSchema,
  i864AffidavitOfSupport: requiredFileSchema,
  passportPhotos: requiredFileSchema,

  // ✅ Excel
  birthCertificate: requiredFileSchema.optional(),
});

// =======================================================
// USA EMPLOYMENT-BASED VISA (EB)
// =======================================================

export const visaUSEmploymentBasedSchema = z.object({
  serviceType: z.literal(serviceTypes['eb1-employment-based-visa']),

  validPassport: requiredFileSchema,
  ds260Confirmation: requiredFileSchema,
  i140Approval: requiredFileSchema,
  academicRecords: requiredFileSchema,
  policeCertificates: requiredFileSchema,
  passportPhotos: requiredFileSchema,

  // ✅ Excel
  jobOfferLetter: requiredFileSchema.optional(),
});

// =======================================================
// USA DIVERSITY LOTTERY VISA (DV)
// =======================================================

export const visaUSDiversityLotterySchema = z.object({
  serviceType: z.literal(serviceTypes['dv-lottery-visa']),

  validPassport: requiredFileSchema,
  selectionLetter: requiredFileSchema,
  ds260Confirmation: requiredFileSchema,
  educationWorkProof: requiredFileSchema,
  policeCertificates: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

// =======================================================
// USA FIANCÉ(E) VISA (K1)
// =======================================================

export const visaUSFianceSchema = z.object({
  serviceType: z.literal(serviceTypes['k1-fiancee-visa-1']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  i129fApproval: requiredFileSchema,
  proofOfRelationship: requiredFileSchema,
  intentToMarryLetters: requiredFileSchema,
  policeCertificates: requiredFileSchema,
  passportPhotos: requiredFileSchema,

  // ✅ Excel
  relationshipChatProof: requiredFileSchema.optional(),
});

// =======================================================
// USA SPOUSE VISA (K3)
// =======================================================

export const visaUSSpouseSchema = z.object({
  serviceType: z.literal(serviceTypes['k3-spouse-visa']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  i129fApproval: requiredFileSchema,
  marriageCertificate: requiredFileSchema,
  relationshipEvidence: requiredFileSchema,
  policeCertificates: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

// =======================================================
// USA WITNESS / INFORMANT VISA (S)
// =======================================================

export const visaUSWitnessInformantSchema = z.object({
  serviceType: z.literal(serviceTypes['s-visa-witnessesinformants']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  lawEnforcementCertification: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

// =======================================================
// USA TRAFFICKING VICTIM VISA (T)
// =======================================================

export const visaUSTraffickingVictimsSchema = z.object({
  serviceType: z.literal(serviceTypes['t-visa-trafficking-victims']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  proofOfTrafficking: requiredFileSchema,
  lawEnforcementDocuments: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

// =======================================================
// USA CRIME VICTIM VISA (U)
// =======================================================

export const visaUSCrimeVictimsSchema = z.object({
  serviceType: z.literal(serviceTypes['u-visa-crime-victims']),

  validPassport: requiredFileSchema,
  ds160Confirmation: requiredFileSchema,
  formI918bCertification: requiredFileSchema,
  policeLegalRecords: requiredFileSchema,
  passportPhotos: requiredFileSchema,
});

export const usaVisaSchemas = [
  visaUSB1B2Schema,
  visaUSStudentSchema,
  visaUSExchangeVisitorSchema,
  visaUSBusinessSchema,
  visaUSTemporaryWorkerSchema,
  visaUSIntraCompanyTransferSchema,
  visaUSExtraordinaryAbilitySchema,
  visaUSAthleteArtistSchema,
  visaUSReligiousWorkerSchema,
  visaUSNAFTASchema,
  visaUSImmediateRelativeSchema,
  visaUSFamilyPreferenceSchema,
  visaUSEmploymentBasedSchema,
  visaUSDiversityLotterySchema,
  visaUSFianceSchema,
  visaUSSpouseSchema,
  visaUSWitnessInformantSchema,
  visaUSTraffickingVictimsSchema,
  visaUSCrimeVictimsSchema,
] as const;
