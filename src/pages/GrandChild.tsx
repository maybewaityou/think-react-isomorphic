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

@bind((state: any) => ({

}))
export default class extends PureComponent<any, any> {

  public render() {
    const { someProp } = this.props;
    return (
      <div>
        <h3>Grand Child</h3>
        <div>{someProp}</div>
        <button onClick={() => {
          this.props.dispatch(goBack());
        }}>go back</button>
      </div>
    );
  }

}
