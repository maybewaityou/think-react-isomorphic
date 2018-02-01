/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import rootReducer, { initialState } from '../src/dataflow/reducer';
import configStore from '../src/dataflow/store';
import { Root } from '../src/index';

const w: any = window;
const store = configStore(w.__INITIAL_STATE__, rootReducer);

hydrate((
  <Provider store={store}>
    <Root />
  </Provider>
), document.getElementById('root'));
