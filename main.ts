/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { Application, etag } from "oak";
import { bold, yellow } from "colors";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

import { router } from "@/routes/mod.ts";
import * as middlewares from "@/middlewares/mod.ts";

import { Context } from "@/types.ts";

const port = 8080;

const app = new Application<Context>();

// use middlewares
app.use(oakCors());
app.use(etag.factory());
app.use(middlewares.loggerMiddleware());
app.use(middlewares.errorMiddleware());
app.use(middlewares.timingMiddleware());

// routes
app.use(router.routes());

app.use(middlewares.notFound404Middleware());

app.addEventListener("listen", ({ hostname, port, serverType }) => {
  console.log(
    bold("Start listening on ") + yellow(`${hostname}:${port}`),
  );
  console.log(bold("  using HTTP server: " + yellow(serverType)));
});

await app.listen({ hostname: "localhost", port });
console.log(bold("Finished."));
