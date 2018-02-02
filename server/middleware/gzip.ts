/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as Koa from 'koa';
import * as zlib from 'zlib';

export default () => (ctx: Koa.Context, next: () => Promise<any>) => {
    // when body length is bigger than 20 ,trigger the use of gzip
    if (ctx.body && ctx.body.length > 20 && ctx.status === 200) {
        const acceptEncoding = ctx.headers[ 'accept-encoding' ];
        const defalate = zlib.deflate;
        // gzip encoding head
        if (acceptEncoding.match(/\bdeflate\b/)) {
            ctx.set({ 'Content-Encoding': 'deflate' });
            // deflate
            ctx.body = zlib.deflateSync(ctx.body);
        } else if (acceptEncoding.match(/\bgzip\b/)) {
            ctx.set({ 'Content-Encoding': 'gzip' });
            // gzip
            ctx.body = zlib.gzipSync(ctx.body);
        }
    }
    next();
};
