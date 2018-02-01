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
import { hydrate } from 'react-dom';

import { rootEpic } from '../src/dataflow/epic/index';
import { rootLogic } from '../src/dataflow/logic/index';
import middlewares from '../src/dataflow/middleware/index';
import { initialState, rootReducer } from '../src/dataflow/reducer/index';
import { Root } from '../src/index';
import { networkClient } from '../src/main/utilities/data/index';

const w: any = window;
const store = configureStore(fromJS(w.__INITIAL_STATE__), networkClient, rootReducer, rootLogic, rootEpic, middlewares);

hydrate((
  <Provider store={store}>
    <Root />
  </Provider>
), document.getElementById('root'));
