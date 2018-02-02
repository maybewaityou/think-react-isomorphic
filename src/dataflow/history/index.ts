/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import createHistory from 'history/createBrowserHistory';

const __BROWSER__ = typeof window !== 'undefined';

const history = __BROWSER__ ? createHistory() : undefined;

export default history;
