/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PureComponent } from 'mario-pure';
import * as React from 'react';

import { AsyncRoute, IRouteConfigComponentProps } from './PropTypes';

export default (asyncRoute: AsyncRoute) => (
  class extends PureComponent<IRouteConfigComponentProps<any>, any> {

    constructor(props: Readonly<IRouteConfigComponentProps<any>>) {
      super(props);

      this.state = {};
    }

    public componentDidMount() {
      asyncRoute().then(({ default: Component }: any) => {
        this.setState({ Component });
      });
    }

    public render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }

  }
);
