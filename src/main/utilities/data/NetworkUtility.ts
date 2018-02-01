/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { INetworkConfig, log, NetworkClient, Observable, toString } from 'mario-utilities';

import { Constant } from '@constant';

export const NetworkUtility = {

  init: (config: INetworkConfig) => {
    return NetworkClient.getInstance().setConfig(config);
  },

  observe: (url: string, params?: any): Observable<any> => {
    return NetworkClient.getInstance().asyncObserve(url, params);
  },

};

export const networkClient = NetworkUtility.init({

  prepare: ({ url, params }) => {
    const URL = `${Constant.BASE_URL}/${url}`;
    log(`== url ===>>>> ${URL}`);
    log(`== params ===>>>> ${toString(params)}`);
    return { url: URL, params };
  },

  checkStatus: (response: Response) => {
    if (response.status >= 200 && response.status < 400) {
      return response;
    } else {
      const error: any = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  },

  handleResponse: (response: any, resolve: any, reject: any, { url, params }) => {
    log(`== url ===>>>> ${url}`);
    log(`== response ===>>>> ${toString(response)}`);
    resolve(response);
  },

  handleError: (error: any, reject: any, { url, params }) => {
    const errorResponse = { errorMessage: error.message, errorStack: error.stack };
    log(`== url ===>>>> ${url}`);
    log(`== error ===>>>> ${toString(errorResponse)}`);
    reject(errorResponse);
  },

});
