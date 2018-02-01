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
import { renderToString } from 'react-dom/server';

import { TEST_ACTION } from '../../src/dataflow/actions/index';
import { rootEpic } from '../../src/dataflow/epic/index';
import { rootLogic } from '../../src/dataflow/logic/index';
import middlewares from '../../src/dataflow/middleware/index';
import { initialState, rootReducer } from '../../src/dataflow/reducer/index';
import { Root } from '../../src/index';
import { networkClient } from '../../src/main/utilities/data/index';
import App from './components/App';

export default {

  async index(ctx: Koa.Context, next: () => Promise<any>) {
    const store = configureStore(initialState, networkClient, rootReducer, rootLogic, rootEpic, middlewares);

    store.dispatch({
      type: TEST_ACTION,
      payload: {
        name: 'lishishi',
        age: 28,
      },
    });

    await ctx.render('index', {
      markup: renderToString(App(store)),
      targetState: store.getState(),
    });
    await next();
  },

};
