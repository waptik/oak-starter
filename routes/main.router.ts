import { Context, Router } from "@oak/oak";

const router: Router<Context> = new Router<Context>();

router.get("/", (ctx) => {
  ctx.response.body = "hello world";
});

export default router;
