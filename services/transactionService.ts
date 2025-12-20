import { fetcher } from '@/lib/fetcher';
import { commonEmptyResponse } from './helper';
import { ApiPagination, UserDataType } from '@/lib/types';

export type TransactionDataType = {
  _id: string;
  sessionId: any;
  userId: string;
  customerId: any;
  paymentIntentId: any;
  transactionId: any;
  amount: string;
  currency: string;
  paymentStatus: string;
  paymentType: string;
  paymentMode: string;
  relatedApplicationIds: string[][];
  relatedShippingIds: any[];
  transactionSource: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  user: UserDataType;
};

export const getTransactions = async ({
  page,
  search = '',
  from = '',
  to = '',
}: {
  page: string;
  search?: string;
  from?: string;
  to?: string;
}): Promise<ApiPagination & { data: TransactionDataType[] }> => {
  try {
    const response = await fetcher(
      `/transaction/list?page=${page || '1'}&search=${search}&from=${from}&to=${to}`,
      {
        method: 'GET',
      },
    );

    if (response?.data) {
      return {
        data: response.data?.data || [],
        count: response.data?.total || 0,
        currentPage: response.data?.currentPage || 1,
        totalPages: response.data?.totalPages || 1,
      };
    }

    return commonEmptyResponse;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return commonEmptyResponse;
  }
};
