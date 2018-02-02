/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as Koa from 'koa';
import { configureStore, Provider } from 'mario-ducks';
import * as React from 'react';
import { StaticRouter as Router } from 'react-router-dom';

import { Root } from '../../../src/index';
import { routesConfig } from '../../../src/main/configs/index';
import { renderRoutes } from '../../../src/main/vendor/index';

export default (store: any, context: Koa.Context) => (
  <Provider store={store}>
    <Router
      location={context.request.url}
      context={context}
    >
      {renderRoutes(routesConfig)}
    </Router>
  </Provider>
);
