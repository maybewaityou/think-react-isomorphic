/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { fromJS, Map } from 'immutable';
import { acceptActions, IAction } from 'mario-ducks';
import { routerReducer } from 'react-router-redux';

import { TEST_ACTION } from '../actions/index';

const initialTestState: Map<string, any> = fromJS({
  name: 'zhangsan',
  age: 20,
});

const testReducer = acceptActions((state = initialTestState, action: IAction) => {
  switch (action.type) {
    case TEST_ACTION:
      return state
        .set('name', action.payload.get('name'))
        .set('age', action.payload.get('age'));
    default:
      return state;
  }
}, [
  TEST_ACTION,
]);

export const initialState = {
  testReducer: initialTestState,
};

export default {
  routerReducer,
  testReducer,
};
