import { z } from 'zod';

// ---- Common Schemas and Types ----

// File upload schema with size limit
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const requiredFileSchema = z
  .any()
  .refine(
    (file) => {
      console.log(file, 'file');
      if (!file) return false;

      if (file instanceof File && file.size <= MAX_FILE_SIZE) return true;

      return true;
    },
    { message: 'File is required or must be a valid upload (≤ 5MB)' },
  )
  .refine(
    (file) => {
      if (file instanceof File) return file.size <= MAX_FILE_SIZE;
      return true; // Skip if not a File
    },
    { message: 'Uploaded file must be ≤ 5MB' },
  )
  .describe('file');

// ---- Service types ----
export const serviceTypes = {
  empty: 'empty',

  // ================= USA VISA =================
  'b1b2-visitor-visa': 'b1b2-visitor-visa',
  'f1-student-visa': 'f1-student-visa',
  'j1-exchange-visa': 'j1-exchange-visa',
  'h1b-work-visa': 'h1b-work-visa',
  'h2a-h2b-temporary-worker-visa': 'h2a-h2b-temporary-worker-visa',
  'l1-intra-company-transfer': 'l1-intra-company-transfer',
  'o1-extraordinary-ability': 'o1-extraordinary-ability',
  'p1-p3-athlete-artist-visa': 'p1-p3-athlete-artist-visa',
  'r1-religious-worker-visa': 'r1-religious-worker-visa',
  'tntd-nafta-visa': 'tntd-nafta-visa',
  'ir-immediate-relative-visa': 'ir-immediate-relative-visa',
  'f1-f4-family-preference-visa': 'f1-f4-family-preference-visa',
  'eb1-employment-based-visa': 'eb1-employment-based-visa',
  'dv-lottery-visa': 'dv-lottery-visa',
  'k1-fiancee-visa-1': 'k1-fiancee-visa-1',
  'k3-spouse-visa': 'k3-spouse-visa',
  's-visa-witnessesinformants': 's-visa-witnessesinformants',
  't-visa-trafficking-victims': 't-visa-trafficking-victims',
  'u-visa-crime-victims': 'u-visa-crime-victims',

  // ================= INDIA VISA =================
  'tourist-visa': 'tourist-visa',
  'business-visa': 'business-visa',
  'student-visa': 'student-visa',
  'medical-visa': 'medical-visa',
  'conference-visa': 'conference-visa',
  'employment-visa': 'employment-visa',

  // ================= INDIA E-VISA (EXCEL) =================
  'india-e-tourist-visa': 'india-e-tourist-visa',
  'india-e-business-visa': 'india-e-business-visa',
  'india-e-medical-visa': 'india-e-medical-visa',

  // ================= USA PASSPORT =================
  'new-passport': 'new-passport',
  'usa-passport-renewal': 'renewal',
  'child-passport': 'child-passport',
  'damaged-passport': 'damaged-passport',
  'stolen-passport': 'stolen-passport',
  'lost-passport': 'lost-passport',
  'usa-passport-card': 'usa-passport-card',
  'name-change': 'name-change',
  'second-valid-passport': 'second-valid-passport',
  'expedited-passport-service': 'expedited-passport-service',
  'emergency-or-same-day-passport': 'emergency-or-same-day-passport',

  // ================= INDIA PASSPORT =================
  'india-passport-new-adult': 'india-passport-new-adult',
  'india-passport-new-minor': 'india-passport-new-minor',
  'adult-renewal': 'adult-renewal',
  'minor-renewal': 'minor-renewal',
  'lost-passport-1': 'lost-passport-1',
  'tatkal-passport': 'tatkal-passport',
  'india-passport-name-change': 'india-passport-name-change',

  // ================= OCI (EXCEL) =================
  'oci-adult': 'oci-adult',
  'oci-minor': 'oci-minor',
  'oci-spouse': 'oci-spouse',
  'oci-in-lieu-of-pio': 'oci-in-lieu-of-pio',

  // ================= CONSULAR (EXCEL) =================
  'police-clearance-certificate': 'police-clearance-certificate',
  'surrender-indian-passport': 'surrender-indian-passport',
  'renunciation-indian-citizenship': 'renunciation-indian-citizenship',
  'global-entry-program': 'global-entry-program',

  // ================= OTHER COUNTRIES (EXCEL) =================
  'canada-visitor-visa': 'canada-visitor-visa',
  'canada-student-visa': 'canada-student-visa',
  'canada-work-permit': 'canada-work-permit',
  'canada-permanent-residency': 'canada-permanent-residency',

  'uk-tourist-visa': 'uk-tourist-visa',
  'uk-student-visa': 'uk-student-visa',
  'uk-work-visa': 'uk-work-visa',
  'uk-dependent-visa': 'uk-dependent-visa',

  'schengen-tourist-visa': 'schengen-tourist-visa',
  'schengen-business-visa': 'schengen-business-visa',
  'schengen-student-visa': 'schengen-student-visa',

  // ================= ICP / CHECK POSTS (EXCEL) =================
  'rail-icp': 'rail-icp',
  'munabao-rail-check-post': 'munabao-rail-check-post',
  'attari-rail-check-post': 'attari-rail-check-post',
  'gede-rail-road-check-post': 'gede-rail-road-check-post',
  'haridaspur-rail-check-post': 'haridaspur-rail-check-post',
  'chitpur-rail-check-post': 'chitpur-rail-check-post',
} as const;

export type ServiceType = (typeof serviceTypes)[keyof typeof serviceTypes];

export const emptySchema = z.object({
  serviceType: z.literal(serviceTypes['empty']),
});
