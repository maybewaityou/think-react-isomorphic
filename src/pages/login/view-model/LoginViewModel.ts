/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from 'mario-architecture-components';
import { actionCreator, createAction, IAction } from 'mario-ducks';

import { LOGIN_ACTION, LOGIN_PASSWORD_ACTION, LOGIN_USER_NAME_ACTION } from '../ducks/actions/index';

export interface IViewModelProps extends IModel, IHandlers {
  dispatch: (action: IAction) => any;
  actions: (type: string, payload?: any) => any;
  batchActions: (actions: IAction[]) => any;
}

export interface IModel {
  userName: string;
  password: string;
}

export interface IHandlers {
  handleLoginClick: any;
  handleUserNameChange: any;
  handlePasswordChange: any;
}

export default class extends ViewModel<IViewModelProps> {

  public onCreate(props: Readonly<any>, context?: any) {

  }

  public model = () => ({
    userName: this.props.userName,
    password: this.props.password,
  })

  public handlers = () => ({

    handleUserNameChange: (event: any) => {
      this.props.dispatch(createAction(LOGIN_USER_NAME_ACTION)(event.target.value));
    },

    handlePasswordChange: (event: any) => {
      this.props.dispatch(createAction(LOGIN_PASSWORD_ACTION)(event.target.value));
    },

    handleLoginClick: () => {
      const { userName, password } = this.props;
      this.props.dispatch(createAction(LOGIN_ACTION)({ userName, password }));
    },

  })

  public onCleared() {

  }

}
