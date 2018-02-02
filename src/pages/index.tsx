/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { bind } from 'mario-ducks';
import { PureComponent } from 'mario-pure';
import * as React from 'react';

import { ErrorBoundary } from '../main/components/index';
import { renderRoutes } from '../main/vendor/index';

const __BROWSER__ = typeof window !== 'undefined';

@bind((state: any) => ({
  $testData: state.testReducer,
}))
export default class extends PureComponent<any, any> {

  public render() {
    return (
      <ErrorBoundary>
        {renderRoutes(this.props.route.routes)}
      </ErrorBoundary>
    );
  }

}
