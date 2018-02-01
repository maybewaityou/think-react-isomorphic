/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { IRouteConfig } from './PropTypes';

export default (routes: IRouteConfig[], extraProps = {}, switchProps = {}) => (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => ( <route.component {...props} {...extraProps} route={route} /> )}
      />
    ))}
  </Switch>
);
