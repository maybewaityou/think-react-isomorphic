/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { createSelector } from 'mario-ducks';
import { log, toString } from 'mario-utilities';

export default ({ loginReducer }: any) => ({
  userName: loginReducer.get('userName'),
  password: loginReducer.get('password'),
});
