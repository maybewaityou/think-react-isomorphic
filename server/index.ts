/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as json from 'koa-json';
import * as error from 'koa-json-error';
import * as logger from 'koa-logger';
import * as session from 'koa-session';
import * as serve from 'koa-static';
import * as views from 'koa-views';
import { log } from 'mario-utilities';
import * as path from 'path';

import cors from './middleware/cors';
import proxy from './middleware/proxy';
import uploader from './middleware/uploader';
import Exception from './model/exception';
import router from './routes';

const app = new Koa();
app.keys = ['think-koa'];

// error handler
app.use(error({ format: (err: Exception) => err.description }));
// middlewares
app.use(logger());
app.use(session(app));
app.use(cors());
app.use(bodyParser({
  enableTypes: ['json', 'form', 'text'],
}));
app.use(json());
// resource
app.use(serve(path.resolve(__dirname, './public')));
// template
app.use(views(path.resolve(__dirname, './views'), {
  extension: 'pug',
}));
// logger
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  const start = new Date();
  await next();
  const ms = new Date().getMilliseconds() - start.getMilliseconds();
  log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// routes
app.use(router.routes());
app.use(router.allowedMethods());
// upload
app.use(uploader());
// proxy
app.use(proxy({
  host: 'http://10.240.81.230:7001',
}));

app.listen(9999);
