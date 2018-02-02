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
import { goBack } from 'react-router-redux';

import { renderRoutes } from '../main/vendor/index';

@bind((state: any) => ({

}))
export default class extends PureComponent<any, any> {

  public render() {
    const { route } = this.props;
    return (
      <div>
        <h2>Child</h2>
        {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
        <button onClick={() => {
          this.props.dispatch(goBack());
        }}>go back</button>
      </div>
    );

  }

}
