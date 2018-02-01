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

export default class extends PureComponent<any, any> {

  public render() {
    return __BROWSER__ ? <div>browser render ~ </div> : <div>server render ~ </div>;
  }

}
