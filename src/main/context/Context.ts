/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { log } from 'mario-utilities';

export default {

  isSuccess: (response: any) => {
    return response.retCode === 'PD0000';
  },

};
