'use server';
import { fetcher } from '@/lib/fetcher';
import { ApiPagination } from '@/lib/types';
import { commonEmptyResponse } from './helper';
import { revalidatePath } from 'next/cache';

export interface TrainingDataType {
  _id: string;
  title: string;
  country: { _id: string; name: string };
  service: { _id: string; name: string };
  category: { _id: string; name: string };
  subCategory?: { _id: string; name: string };
  description?: string;
  resource: string;
  isDeleted: boolean;
  deletedBy?: string | null;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const getTrainings = async ({
  page,
}: {
  page: string;
}): Promise<ApiPagination & { data: TrainingDataType[] }> => {
  try {
    const response = await fetcher(`/training/get-trainings?page=${page}`, {
      cache: 'no-cache',
      revalidate: 60,
    });

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
    console.log(error, 'Trainings fetch error');
    return commonEmptyResponse;
  }
};

export const getTrainingById = async (id: string): Promise<TrainingDataType | null> => {
  try {
    const data = await fetcher('/training/get-training/' + id, {
      cache: 'no-cache',
      revalidate: 60,
    });
    return data?.data || null;
  } catch (error) {
    console.log(error, 'Training fetch error');
    return null;
  }
};

export interface CreateTrainingPayload {
  title: string;
  description: string | undefined;
  country: string;
  service: string;
  category: string;
  subCategory: string | undefined;
  resource: any;
}

export const createTraining = async (payload: CreateTrainingPayload) => {
  try {
    const result = await fetcher('/training/create-training', {
      method: 'POST',
      body: payload,
    });
    revalidatePath('/admin/training');
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateTraining = async (payload: CreateTrainingPayload & { id: string }) => {
  try {
    const result = await fetcher(`/training/update-training`, {
      method: 'PUT',
      body: payload,
    });
    revalidatePath('/admin/training');
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteTraining = async (id: string) => {
  try {
    const result = await fetcher(`/training/delete-training/${id}`, {
      method: 'DELETE',
    });
    revalidatePath('/admin/training');
    return result;
  } catch (error) {
    throw error;
  }
};
