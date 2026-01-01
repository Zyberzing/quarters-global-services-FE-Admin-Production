import { z } from 'zod';

// USA Visa
import * as usaVisa from './usa/visa';
// USA Passport
import * as usaPassport from './usa/passport';
// India Visa
import * as indiaVisa from './india/visa';
// India E-Visa
import * as indiaEVisa from './india/evisa';
// India Passport
import * as indiaPassport from './india/passport';
// OCI
import * as indiaOci from './india/oci';
// Consular
import * as indiaConsular from './india/consular';
// ICP
import * as indiaIcp from './india/icp';
// Other countries
import * as otherVisa from './other/visa';

// ----------------------------------------
// Collect only ZodObject schemas
// ----------------------------------------
function extractSchemas(module: Record<string, unknown>) {
  return Object.values(module).filter((v): v is z.ZodObject<any> => v instanceof z.ZodObject);
}

// ----------------------------------------
// Build registry keyed by serviceType
// ----------------------------------------
export const schemaRegistry = new Map<string, z.ZodObject<any>>();

[
  ...extractSchemas(usaVisa),
  ...extractSchemas(usaPassport),
  ...extractSchemas(indiaVisa),
  ...extractSchemas(indiaEVisa),
  ...extractSchemas(indiaPassport),
  ...extractSchemas(indiaOci),
  ...extractSchemas(indiaConsular),
  ...extractSchemas(indiaIcp),
  ...extractSchemas(otherVisa),
].forEach((schema) => {
  const serviceType = (schema.shape as any)?.serviceType?._def?.value;
  if (serviceType) {
    schemaRegistry.set(serviceType, schema);
  }
});
