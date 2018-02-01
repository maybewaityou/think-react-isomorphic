/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { actionCreator, ActionsObservable, BATCH_ACTIONS, createAction, epicCreator, IAction } from 'mario-ducks';
import { log, toString } from 'mario-utilities';
import { replace } from 'react-router-redux';

import { DISMISS_MODAL, NETWORK_SUCCESS, SHOW_MODAL } from '@actions';
import { ModalType } from '@constant';
import { Context } from '@context';
import { Observable } from 'rxjs';
import { loginTask } from '../../task/index';
import { CLEAR_LOGIN_PASSWORD_ACTION, CLEAR_LOGIN_USER_NAME_ACTION, LOGIN_ACTION, LOGIN_FAILURE_ACTION, LOGIN_SUCCESS_ACTION } from '../actions/index';

const dismissModal = actionCreator(DISMISS_MODAL);
const clearUserName = actionCreator(CLEAR_LOGIN_USER_NAME_ACTION);
const clearPassword = actionCreator(CLEAR_LOGIN_PASSWORD_ACTION);

const loginEpic = (action$: Observable<any>, store: any) => (
  epicCreator(action$)(LOGIN_ACTION)((action: IAction) =>
    loginTask(action.payload)
      .map((response: any) => {
        if (Context.isSuccess(response)) {
          store.dispatch(actionCreator(LOGIN_SUCCESS_ACTION, { userInfo: { ...response.result }}));
          return replace('/');
        } else {
          return createAction(SHOW_MODAL)({ type: ModalType.FAILURE, message: response.retMsg, positiveTitle: '是', positiveAction: () => {
            store.dispatch({ type: BATCH_ACTIONS, payload: [ dismissModal, clearUserName, clearPassword ]});
          }, negativeTitle: '否', negativeAction: () => {
            store.dispatch({ type: BATCH_ACTIONS, payload: [ dismissModal, clearUserName, clearPassword ]});
          }});
        }
      })
      .catch((error: any) => {
        return Observable.of(createAction(SHOW_MODAL)({ type: ModalType.FAILURE, message: error.errorMessage, positiveAction: () => {
          store.dispatch(dismissModal);
        }}));
      }))
);

export default [
  loginEpic,
];
