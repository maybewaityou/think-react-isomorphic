/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { createSelector } from 'mario-ducks';
import { log, toString } from 'mario-utilities';

export default ({ loginReducer }: any) => ({
  isLogin: loginReducer.get('isLogin'),
  userInfo: loginReducer.get('userInfo'),
});
