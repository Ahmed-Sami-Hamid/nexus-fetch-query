import { ApiClientProps } from "../types";
export declare function generateApiClient({ baseUrl, timeout, authorizationHeader, authorizationPrefix, localStorageKey, acceptLanguage, withCredentials, }: ApiClientProps): import("axios").AxiosInstance;
