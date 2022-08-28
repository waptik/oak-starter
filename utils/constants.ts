export const isDev = typeof Deno.env.get("DENO_DEPLOYMENT_ID") === "string"
  ? true
  : false;
