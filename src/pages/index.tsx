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

const __BROWSER__ = typeof window !== 'undefined';

@bind((state: any) => ({
  $testData: state.testReducer,
}))
export default class extends PureComponent<any, any> {

  public render() {
    console.log(this.props);
    return __BROWSER__ ? <h3>browser render ~ </h3> : <h3>server render ~ </h3>;
  }

}
