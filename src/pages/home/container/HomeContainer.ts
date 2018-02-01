/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { inject, ViewModel } from 'mario-architecture-components';
import { bind } from 'mario-ducks';

import { mapStateToProps } from '../ducks/selector/index';
import { HomeViewModel, IViewModelProps } from '../view-model/index';
import { HomeView } from '../view/index';

export default bind(mapStateToProps)(inject<IViewModelProps, ViewModel<IViewModelProps>>(HomeView, HomeViewModel));
