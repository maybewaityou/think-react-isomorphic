/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { bind } from 'mario-ducks';
import { PureComponent } from 'mario-pure';
import React from 'react';

import { ErrorBoundary, Modal } from '@components';
import { renderRoutes } from '../main/vendor/index';

@bind((state: any) => ({
  $modalData: state.modalReducer,
}))
export default class extends PureComponent<any, any> {

  public render() {
    return (
      <ErrorBoundary>
        <Modal $modalData={this.props.$modalData} />
        {renderRoutes(this.props.route.routes)}
      </ErrorBoundary>
    );
  }

}
