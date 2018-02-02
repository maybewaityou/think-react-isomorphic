/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';

import { IRouteConfig, renderRoutes, routeLoader } from '../../../main/vendor/index';
import Child from '../../../pages/Child';
import GrandChild from '../../../pages/GrandChild';
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
        component: Child,
        // component: routeLoader(() => require(/* webpackChunkName: "child" */'../../../pages/Child')),
        routes: [{
          path: '/child/:id/grand-child',
          // component: routeLoader(() => require(/* webpackChunkName: "grand-child" */'../../../pages/GrandChild')),
          component: GrandChild,
        }],
      },
    ],
  },
];

export default routesConfig;
