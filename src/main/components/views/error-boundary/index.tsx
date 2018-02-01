/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PureComponent } from 'mario-pure';
import React from 'react';

interface IState {
  error: Error;
  errorInfo: React.ErrorInfo;
}

export default class extends PureComponent<any, IState> {

  constructor(props: Readonly<any>) {
    super(props);

    this.state = { error: null, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  public render() {
    if (!this.state.errorInfo) { return this.props.children; }
    return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
    );
  }

}
