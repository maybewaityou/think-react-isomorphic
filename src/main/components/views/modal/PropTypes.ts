/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ModalType } from '@constant';
import { Map } from 'immutable';
import React from 'react';

type ModalAction = () => any;

interface IModalData {
  shouldShow: boolean;
  type: ModalType; // modal type: success/warning/failure
  message: string; // modal message
  positiveTitle: string; // modal positive title
  negativeTitle?: string; // modal negative title
  positiveAction: ModalAction; // modal positive action
  negativeAction?: ModalAction; // modal negative action
}

export interface IModalProps {
  $modalData: Map<string, any>;
}

export interface IModalState {

}
