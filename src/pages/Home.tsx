/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PureComponent } from 'mario-pure';
import { log, NetworkClient } from 'mario-utilities';
import * as React from 'react';
import { matchPath } from 'react-router';

import { Context } from '../main/context/index';

export default class extends PureComponent<any, any> {

  public handleClick = () => {
    this.props.history.goForward();
  }

  public render() {
    return (
      <div>
        Home
        <button onClick={this.handleClick}>go fosrward</button>
        <button onClick={() => {
          // NetworkClient.getInstance()
          //   .asyncObserve('http://localhost:9999/awp/pad/login/authUser_Pad.do?username=yinfeng&password=123', {})
          //   .subscribe((response: any) => {}, (error: Error) => {});
        }}>send request</button>
        <button onClick={() => {
          this.props.history.push('/child/123');
        }}>link to child page</button>
        <button onClick={() => {
          this.props.history.push('/child/123/grand-child');
        }}>link to grand child page</button>
      </div>
    );
  }

}
