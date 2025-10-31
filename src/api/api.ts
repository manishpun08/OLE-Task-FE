import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "./endpoints";

interface IGetDataArgs {
  url: string;
  params?: Record<string, string | number | boolean>;
  tag?: string;
}
interface IPostDataArgs {
  url: string;
  data?: any;
  options?: any;
  invalidateTag?: string;
}
interface IUpdateDataArgs {
  url: string;
  data: any;
  options?: any;
  invalidateTag?: string;
}

interface IDeleteDataArgs {
  url: string;
  body?: any;
  options?: any;
  invalidates?: string[];
}

type InitialPageParam = {
  page: number;
  size: number;
};
export interface PaginatedResponse<T> {
  links: Links;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: T;
}

export interface Links {
  next: string;
  previous: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders: async (headers) => {
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getData: builder.query<any, IGetDataArgs>({
      query: ({ url, params }) => ({
        url,
        method: "GET",
        params,
      }),
      providesTags: (_, __, { tag }) =>
        tag ? [{ type: "Data", id: tag }] : [],
    }),

    postData: builder.mutation<any, IPostDataArgs>({
      query: ({ url, data, options }) => ({
        url,
        method: "POST",
        body: data,
        ...options,
      }),
      invalidatesTags: (_, __, { invalidateTag }) =>
        invalidateTag ? [{ type: "Data", id: invalidateTag }] : [],
    }),

    updateData: builder.mutation<any, IUpdateDataArgs>({
      query: ({ url, data }) => ({
        url,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_, __, { invalidateTag }) =>
        invalidateTag ? [{ type: "Data", id: invalidateTag }] : [],
    }),

    deleteData: builder.mutation<any, IDeleteDataArgs>({
      query: ({ url, body }) => ({
        url,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (_, __, { invalidates }) =>
        invalidates
          ? invalidates.map((tag: string) => ({ type: "Data", id: tag }))
          : [],
    }),
    getAllData: builder.infiniteQuery<
      PaginatedResponse<any>,
      IGetDataArgs,
      InitialPageParam
    >({
      query: ({ pageParam: { page, size }, queryArg: { url, params } }) => ({
        url,
        method: "GET",
        params: { ...params, p: page, page_size: size },
      }),
      providesTags: (_, __, { tag }) =>
        tag ? [{ type: "Data", id: tag }] : [],
      infiniteQueryOptions: {
        initialPageParam: {
          page: 1,
          size: 10,
        },
        getNextPageParam: (lastPage) => {
          const nextPage = lastPage.links.next;
          if (nextPage) {
            return {
              page: lastPage.current_page + 1,
              size: lastPage.page_size,
            };
          }
          return undefined;
        },
        getPreviousPageParam: (lastPage) => {
          const prevPage = lastPage?.links.previous;
          if (prevPage) {
            return {
              page: lastPage.current_page - 1,
              size: lastPage.page_size,
            };
          }
          return undefined;
        },
      },
    }),
  }),
});

export const {
  useGetDataQuery,
  usePostDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
  useGetAllDataInfiniteQuery,
} = apiSlice;
