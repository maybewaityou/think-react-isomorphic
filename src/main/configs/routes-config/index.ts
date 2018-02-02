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

const importer: any = require;

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
        // component: routeLoader(() => {
        //   return new Promise((resolve, reject) => {
        //     importer.ensure([], (require: any) => {
        //       resolve(require('../../../pages/Child'));
        //     }, 'child');
        //   });
        //   // return import(/* webpackChunkName: "child" */'../../../pages/Child');
        // }),
        routes: [{
          path: '/child/:id/grand-child',
          component: routeLoader(() => import(/* webpackChunkName: "grand-child" */'../../../pages/GrandChild')),
          // component: routeLoader(() => {
          //   return new Promise((resolve, reject) => {
          //     importer.ensure([], (require: any) => {
          //       resolve(require('../../../pages/GrandChild'));
          //     }, 'grandChild');
          //   });
          // }),
        }],
      },
    ],
  },
];

export default routesConfig;
