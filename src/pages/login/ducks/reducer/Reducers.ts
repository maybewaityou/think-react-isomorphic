/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Immutable, { fromJS, Map } from 'immutable';
import { acceptActions, IAction } from 'mario-ducks';

import { CLEAR_LOGIN_PASSWORD_ACTION, CLEAR_LOGIN_USER_NAME_ACTION, LOGIN_PASSWORD_ACTION, LOGIN_SUCCESS_ACTION, LOGIN_USER_NAME_ACTION, LOGOUT_ACTION } from '../actions/index';

const initialState: Map<string, any> = fromJS({
  userName: '',
  password: '',
  userInfo: {},
  isLogin: false,
});

export const loginReducer = acceptActions((state: Map<string, any> = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN_USER_NAME_ACTION:
      return state.set('userName', action.payload);
    case LOGIN_PASSWORD_ACTION:
      return state.set('password', action.payload);
    case CLEAR_LOGIN_USER_NAME_ACTION:
      return state.set('userName', '');
    case CLEAR_LOGIN_PASSWORD_ACTION:
      return state.set('password', '');
    case LOGIN_SUCCESS_ACTION:
      return state
        .set('isLogin', true)
        .set('userInfo', action.payload);
    case LOGOUT_ACTION:
      return state
        .set('isLogin', false)
        .set('userInfo', {});
    default:
      return state;
  }
}, [
  CLEAR_LOGIN_USER_NAME_ACTION,
  CLEAR_LOGIN_PASSWORD_ACTION,
  LOGIN_USER_NAME_ACTION,
  LOGIN_PASSWORD_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGOUT_ACTION,
]);

export default {
  loginReducer,

};
