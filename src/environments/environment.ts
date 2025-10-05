// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from './config.interface';

export const environment: Config = {
  production: false,
  apiEndpoints: {
  productApi: 'YOUR_PRODUCT_API_URL_HERE/',
  orderApi: 'YOUR_ORDER_API_URL_HERE/',
  importApi: 'YOUR_IMPORT_API_URL_HERE/',
  bffApi: 'https://wdkw6vmgzg.execute-api.eu-north-1.amazonaws.com/prod/', 
  cartApi: 'YOUR_CART_API_URL_HERE/',
  },
  apiEndpointsEnabled: {
    productApi: false,
    orderApi: false,
    importApi: false,
    bffApi: false,
    cartApi: false,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
