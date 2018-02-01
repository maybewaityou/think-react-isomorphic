/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as Koa from 'koa';
import { Provider } from 'mario-ducks';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import { Root } from '../../src/index';

function renderFullPage(markup: string, targetState: any) {
  return `
    <!DOCTYPE html>
    <html lang="zh">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="/stylesheets/style.css">
    </head>
    <body>
      <div id="root">${markup}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(targetState)};
      </script>
      <script src="/static/app.bundle.js"></script>
    </body>
    </html>
  `;
}

export default {

  async index(ctx: Koa.Context, next: () => Promise<any>) {
    // const store = configStore(initialState, rootReducer);
    //
    // store.dispatch({
    //   type: TEST_ACTION,
    //   payload: {
    //     name: 'lishishi',
    //     age: 28,
    //   },
    // });

    const markup = renderToString(<Root />);
    const targetState = {
      name: 'zhangsan',
      age: 20,
    };
    await ctx.render('index', { markup, targetState });
    // ctx.body = renderFullPage(renderToString((
    //   <Root />
    // )), targetState);
    await next();
  },

};
