/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';

import { renderRoutes, routeLoader } from '@vendor';
import Child from '../../../pages/Child';
import GrandChild from '../../../pages/GrandChild';
import { HomeContainer } from '../../../pages/home/index';
import Root from '../../../pages/index';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomeContainer,
      },
      {
        path: '/login',
        component: routeLoader(() => import(/* webpackChunkName: "login" */'../../../pages/login/container/LoginContainer')),
      },
      {
        path: '/child/:id',
        component: routeLoader(() => import(/* webpackChunkName: "child" */'../../../pages/Child')),
        routes: [{
          path: '/child/:id/grand-child',
          component: routeLoader(() => import(/* webpackChunkName: "grand-child" */'../../../pages/GrandChild')),
        }],
      },
    ],
  },
];
