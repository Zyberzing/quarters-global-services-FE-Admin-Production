'use server';
import { fetcher } from '@/lib/fetcher';
import { ApiPagination, ApostilleApplicationDataType, ApostilleBookingSources } from '@/lib/types';
import { commonEmptyResponse } from './helper';
import { revalidatePath } from 'next/cache';
import { ApostilleFormSchemaType } from '@/components/forms/apostilleForm/ApostilleForm';

export const getApostilleApplications = async ({
  page,
  bookingSource = 'WALK_IN',
  search = '',
  isSubmittedFromApplication,
  isSubmittedFromService,
  platformServiceCategoryPackageId,
  from = '',
  to = '',
  status = '',
  isShippingAvailable = '',
}: {
  page: string;
  bookingSource: ApostilleBookingSources | '';
  search?: string;
  isSubmittedFromApplication?: '1';
  isSubmittedFromService?: '1';
  platformServiceCategoryPackageId?: string;
  from?: string;
  to?: string;
  status?: string;
  createdBy?: string;
  isShippingAvailable?: string;
}): Promise<ApiPagination & { data: ApostilleApplicationDataType[] }> => {
  try {
    const data = await fetcher(
      `/apostille-legalization/get-apostille-legalization?page=${page}&bookingSource=${bookingSource === 'WALK_IN' ? 'WALK_IN ' : bookingSource}&search=${search || ''}&isSubmittedFromApplication=${isSubmittedFromApplication || '0'}&isSubmittedFromService=${isSubmittedFromService || '0'}&platformServiceCategoryPackageId=${platformServiceCategoryPackageId}&from=${from}&to=${to}&status=${status}&isShippingAvailable=${isShippingAvailable}`,
      {
        cache: 'no-cache',
        revalidate: 60,
      },
    );

    return data?.data || [];
  } catch (error) {
    console.log(error, 'User fetch error');
    return commonEmptyResponse;
  }
};

export const createApostilleApplicaton = async (body: ApostilleFormSchemaType) => {
  try {
    const result = await fetcher('/apostille-legalization/create-apostille-legalization', {
      method: 'POST',
      body,
    });
    revalidatePath('/admin/apostille');
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateApostilleApplicaton = async (body: ApostilleFormSchemaType) => {
  try {
    const result = await fetcher('/apostille-legalization/update-apostille-legalization', {
      method: 'POST',
      body,
    });
    revalidatePath('/admin/apostille');
    return result;
  } catch (error) {
    throw error;
  }
};
