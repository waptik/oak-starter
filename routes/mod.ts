import { Router } from "oak";

import { Context } from "@types";

const router: Router<Context> = new Router<Context>();

router.get("/", (ctx) => {
  ctx.response.body = "hello world";
});

export { router };
