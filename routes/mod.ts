import { Router } from "@oak/oak";

import mainRouter from "./main.router.ts";

const router: Router = new Router();

router.use(mainRouter.routes());

export { router };
