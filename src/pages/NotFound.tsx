/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { Route } from 'react-router-dom';

export default (props: Readonly<any>) => (
  <Route render={({ staticContext }) => {
    if (staticContext) {
      staticContext.status = 404;
    }
    return (
      <h2>404 : Not Found</h2>
    );
  }}/>
);
