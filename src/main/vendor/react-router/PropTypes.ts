/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { RouteComponentProps } from 'react-router';

export interface IRouteConfigComponentProps<T> extends RouteComponentProps<T> {
    route?: IRouteConfig;
}

export type AsyncComponent = () => Promise<any> | any;
export type AsyncRoute = () => Promise<React.ComponentType<IRouteConfigComponentProps<any> | {}>> | any;

export interface IRouteConfig {
    location?: Location;
    component?: React.ComponentType<IRouteConfigComponentProps<any> | {}> | AsyncRoute;
    path?: string;
    exact?: boolean;
    strict?: boolean;
    routes?: IRouteConfig[];
}
