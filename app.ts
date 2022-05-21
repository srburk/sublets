// app.ts

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import * as log from "https://deno.land/std@0.140.0/log/mod.ts";

// environment
const port = parseInt(Deno.env.get("PORT") || "8000");

// routers
import { userRouter } from "./routes/user.route.ts";
const router = new Router()
  .use("/api/users", userRouter.routes(), userRouter.allowedMethods());

const app = new Application();

// Logger
app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  log.info(`${context.request.method} ${context.request.url} - ${rt}`);
});

// routes
app.use(router.routes());

app.listen({ port: port });

log.info(`🌎 Listening on port http://localhost:${port}`);
