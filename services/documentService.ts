'use server';
import { fetcher } from '@/lib/fetcher';
import { ApiPagination } from '@/lib/types';
import { commonEmptyResponse } from './helper';

export interface DocumentDataType {
  _id: string;
  name: string;
  phone: string;
  email: string;
  documentType: string;
  expiryDate: string;
  status: string;
  isDeleted: boolean;
  deletedBy?: string | null;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const getDocuments = async ({
  page = '1',
  pageSize = '10',
  status = '',
  documentType = '',
  search = '',
}: {
  page?: string;
  pageSize?: string;
  status?: string;
  documentType?: string;
  search?: string;
}): Promise<ApiPagination & { data: DocumentDataType[] }> => {
  try {
    const queryParams = new URLSearchParams({
      page,
      pageSize,
    });

    // Only add status if it's not empty
    if (status && status.trim()) {
      queryParams.set('status', status.trim());
    }

    // Only add documentType if it's not empty
    if (documentType && documentType.trim()) {
      queryParams.set('documentType', documentType.trim());
    }

    // Only add search if it's not empty
    if (search && search.trim()) {
      queryParams.set('search', search.trim());
    }

    const response = await fetcher(`/document/list?${queryParams.toString()}`, {
      cache: 'no-cache',
      revalidate: 60,
    });
    console.log(response, 'Documents data');
    // Transform the API response to match our expected structure
    if (response?.data) {
      return {
        data: response.data.data || [],
        count: response.data.total || 0,
        currentPage: response.data.currentPage || 1,
        totalPages: response.data.totalPages || 1,
      };
    }

    return commonEmptyResponse;
  } catch (error) {
    console.log(error, 'Documents fetch error');
    return commonEmptyResponse;
  }
};

export const getDocumentById = async (id: string): Promise<DocumentDataType | null> => {
  try {
    const data = await fetcher(`/api/v1/document/get/${id}`, {
      cache: 'no-cache',
      revalidate: 60,
    });
    console.log(data, 'Document by ID data');
    return data || null;
  } catch (error) {
    console.log(error, 'Document fetch error');
    return null;
  }
};
