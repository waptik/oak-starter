import { Context, Middleware } from "@oak/oak";

const timingMiddleware = (): Middleware => async (ctx: Context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};

export { timingMiddleware };
