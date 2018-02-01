/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { NetworkUtility } from '@utilities';
import { Constant } from '../../../main/constant/index';

interface ILoginParams {
  userName: string;
  password: string;
}

export function loginTask(params: ILoginParams) {
  return NetworkUtility.observe(`login/authUser_Pad.do?username=${params.userName}&password=${params.password}`);
}
