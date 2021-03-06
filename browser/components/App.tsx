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
// import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';

import { rootEpic } from '../../src/dataflow/epic/index';
import { rootLogic } from '../../src/dataflow/logic/index';
import middlewares from '../../src/dataflow/middleware/index';
import { rootReducer } from '../../src/dataflow/reducer/index';
import { Root } from '../../src/index';
import { routesConfig } from '../../src/main/configs/index';
import { networkClient } from '../../src/main/utilities/data/index';
import { history } from '../../src/main/vendor/index';
import { renderRoutes } from '../../src/main/vendor/index';

const w: any = window;
const stateFromServer = w.__INITIAL_STATE__;

const initialState = Object.keys(stateFromServer).reduce((obj: any, key: string) => {
  obj[key] = fromJS(stateFromServer[key]);
  return obj;
}, {});

const store = configureStore(initialState, networkClient, rootReducer, rootLogic, rootEpic, middlewares);

export default (
  <Provider store={store}>
    <Router history={history}>
      {renderRoutes(routesConfig)}
    </Router>
  </Provider>
);
