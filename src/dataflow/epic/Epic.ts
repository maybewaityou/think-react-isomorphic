/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { homeEpics } from '../../pages/home/index';
import { loginEpics } from '../../pages/login/index';

export default [
  ...loginEpics,
  ...homeEpics,
];
