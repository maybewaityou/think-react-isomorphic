/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { configureStore, Provider } from 'mario-ducks';
import * as React from 'react';

import { Root } from '../../../src/index';

export default (store: any) => (
  <Provider store={store}>
    <Root />
  </Provider>
);
