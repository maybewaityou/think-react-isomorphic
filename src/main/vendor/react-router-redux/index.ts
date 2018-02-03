/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import createHistory from 'history/createBrowserHistory';

const __BROWSER__ = typeof window !== 'undefined';

export const history = __BROWSER__ ? createHistory() : undefined;
