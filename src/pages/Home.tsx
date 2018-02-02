/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { bind } from 'mario-ducks';
import { PureComponent } from 'mario-pure';
import { log, NetworkClient } from 'mario-utilities';
import * as React from 'react';
import { matchPath } from 'react-router';
import { goForward, push } from 'react-router-redux';

import { Context } from '../main/context/index';

@bind((state: any) => ({

}))
export default class extends PureComponent<any, any> {

  public handleClick = () => {
    this.props.dispatch(goForward());
  }

  public render() {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.handleClick}>go fosrward</button>
        <button onClick={() => {
          // NetworkClient.getInstance()
          //   .asyncObserve('http://localhost:9999/awp/pad/login/authUser_Pad.do?username=yinfeng&password=123', {})
          //   .subscribe((response: any) => {}, (error: Error) => {});
        }}>send request</button>
        <button onClick={() => {
          this.props.dispatch(push('/child/123'));
        }}>link to child page</button>
        <button onClick={() => {
          this.props.dispatch(push('/child/123/grand-child'));
        }}>link to grand child page</button>
      </div>
    );
  }

}
