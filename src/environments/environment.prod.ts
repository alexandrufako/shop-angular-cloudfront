import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    productApi: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    orderApi: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    importApi: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    bffApi: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    cartApi: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    productApi: false,
    orderApi: false,
    importApi: false,
    bffApi: false,
    cartApi: false,
  },
};
