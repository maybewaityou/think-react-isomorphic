/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { fromJS } from 'immutable';
import { configureStore, Provider } from 'mario-ducks';
import * as React from 'react';

import { rootEpic } from '../../src/dataflow/epic/index';
import { rootLogic } from '../../src/dataflow/logic/index';
import middlewares from '../../src/dataflow/middleware/index';
import { rootReducer } from '../../src/dataflow/reducer/index';
import { Root } from '../../src/index';
import { networkClient } from '../../src/main/utilities/data/index';

const w: any = window;
const state = w.__INITIAL_STATE__;

const initialState = Object.keys(state).reduce((obj: any, key: string) => {
  obj[key] = fromJS(state[key]);
  return obj;
}, {});

const store = configureStore(initialState, networkClient, rootReducer, rootLogic, rootEpic, middlewares);

export default (
  <Provider store={store}>
    <Root />
  </Provider>
);
