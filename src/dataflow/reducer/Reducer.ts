/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Immutable, { fromJS, Map } from 'immutable';
import { acceptActions, IAction } from 'mario-ducks';
import { routerReducer } from 'react-router-redux';
import { combineReducers, ReducersMapObject } from 'redux';

import { DISMISS_MODAL, SHOW_MODAL } from '@actions';
import { homeReducer } from '../../pages/home/index';
import { loginReducer } from '../../pages/login/index';

const initialModalState: Map<string, any> = fromJS({
  shouldShow: false,
  type: '', // modal type: success/warning/failure
  message: '', // modal message
  positiveTitle: '确定', // modal positive title
  negativeTitle: '取消', // modal negative title
  positiveAction: () => {}, // modal positive action
  negativeAction: () => {}, // modal negative action
});

const modalReducer = acceptActions((state: Map<string, any> = initialModalState, action: IAction) => {
  switch (action.type) {
    case SHOW_MODAL:
      return state
        .set('shouldShow', true)
        .set('type', action.payload.get('type'))
        .set('message', action.payload.get('message'))
        .set('positiveTitle', action.payload.get('positiveTitle') ? action.payload.get('positiveTitle') : '确定')
        .set('negativeTitle', action.payload.get('negativeTitle') ? action.payload.get('negativeTitle') : '取消')
        .set('positiveAction', action.payload.get('positiveAction'))
        .set('negativeAction', action.payload.get('negativeAction'));
    case DISMISS_MODAL:
      return state
        .set('shouldShow', false)
        .set('type', '')
        .set('message', '')
        .set('positiveTitle', '确定')
        .set('negativeTitle', '取消')
        .set('positiveAction', () => {})
        .set('negativeAction', () => {});
    default:
      return state;
  }
}, [
  SHOW_MODAL, DISMISS_MODAL,
]);

export default {
  routerReducer,
  modalReducer,
  ...loginReducer,
  ...homeReducer,
};
