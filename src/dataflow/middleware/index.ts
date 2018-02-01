/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { BATCH_ACTIONS, createImmutableActionMiddleware } from 'mario-ducks';
import { CALL_HISTORY_METHOD, LOCATION_CHANGE, routerMiddleware } from 'react-router-redux';

import history from '../history/index';
import loggerMiddleware from './logger/LoggerMiddleware';

export default [
  createImmutableActionMiddleware([ BATCH_ACTIONS, CALL_HISTORY_METHOD, LOCATION_CHANGE ]),
  routerMiddleware(history),
  loggerMiddleware,
];
