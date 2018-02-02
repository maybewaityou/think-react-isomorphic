/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';

import { IRouteConfig, renderRoutes, routeLoader } from '../../../main/vendor/index';
import Home from '../../../pages/Home';
import Root from '../../../pages/index';

const routesConfig: any[] = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/child/:id',
        component: routeLoader(() => import(/* webpackChunkName: "child" */'../../../pages/Child')),
        // component: routeLoader(() => new Promise((resolve, reject) => {
        //   require.ensure([], (require: any) => resolve(require('../../../pages/Child')), 'child');
        // })),
        routes: [{
          path: '/child/:id/grand-child',
          component: routeLoader(() => import(/* webpackChunkName: "grand-child" */'../../../pages/GrandChild')),
          // component: routeLoader(() => new Promise((resolve, reject) => {
          //   require.ensure([], (require: any) => resolve(require('../../../pages/GrandChild')), 'grand-child');
          // })),
        }],
      },
    ],
  },
];

export default routesConfig;
