// app.ts

import { Application } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import * as log from "https://deno.land/std@0.140.0/log/mod.ts";

const port = parseInt(Deno.env.get("PORT") || "8000");

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello Deno.land!";
});

app.listen({ port: port });

log.info(`🌎 Listening on port http://localhost:${port}`);
