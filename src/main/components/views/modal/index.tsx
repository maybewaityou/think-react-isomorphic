/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PureComponent } from 'mario-pure';
import React from 'react';
import ReactDOM from 'react-dom';
import { IModalProps, IModalState } from './PropTypes';

const modalElement = document.getElementById('modal');

export default class extends PureComponent<IModalProps, IModalState> {

  public element = document.createElement('div');

  public componentDidMount() {
    modalElement.appendChild(this.element);
  }

  public componentWillUnmount() {
    modalElement.removeChild(this.element);
  }

  public render() {
    const negativeButton = this.props.$modalData.get('negativeAction') && <button onClick={this.props.$modalData.get('negativeAction')}>{this.props.$modalData.get('negativeTitle')}</button>;
    return this.props.$modalData.get('shouldShow') &&
    ReactDOM.createPortal(
    <>
      <p>{this.props.$modalData.get('message')}</p>
      <button onClick={this.props.$modalData.get('positiveAction')}>{this.props.$modalData.get('positiveTitle')}</button>
      {negativeButton}
    </>, this.element);
  }

}
