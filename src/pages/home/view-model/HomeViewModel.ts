/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from 'mario-architecture-components';
import { IAction } from 'mario-ducks';
import { log, NetworkClient } from 'mario-utilities';
import { replace } from 'react-router-redux';

export interface IViewModelProps extends IModel, IHandlers {
  dispatch: (action: IAction) => any;
  actions: (type: string, payload?: any) => any;
  batchActions: (actions: IAction[]) => any;
}

export interface IModel {
  isLogin: boolean;
}

export interface IHandlers {

}

export default class extends ViewModel<IViewModelProps> {

  public didMount() {
    if (!this.props.isLogin) { this.props.dispatch(replace('/login')); }
  }

  public model = () => ({

  })

  public handlers = () => ({

  })

  public onCleared() {

  }

}
