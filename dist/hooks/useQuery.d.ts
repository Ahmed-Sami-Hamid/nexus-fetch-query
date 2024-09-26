import { UseQueryProps, UseQueryReturn } from "../types";
export declare const useQuery: ({ url, method, executeImmediately, onSuccess: _onSuccess, onError: _onError, onUnauthorized: _onUnauthorized, clientOptions, apiClient, queryParams: defaultQueryParams, }: UseQueryProps) => UseQueryReturn;
