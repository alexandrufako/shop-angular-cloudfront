export type ApiEndpoint = 'productApi' | 'orderApi' | 'importApi' | 'bffApi' | 'cartApi';

export interface Config {
  production: boolean;
  apiEndpoints: Record<ApiEndpoint, string>;
  apiEndpointsEnabled: Record<ApiEndpoint, boolean>;
}
