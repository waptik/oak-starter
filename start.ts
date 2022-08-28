import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const port = 8080;

console.log("running on port ", port);
await app.listen({ port });
