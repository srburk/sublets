// app.ts

import { serve } from 'https://deno.land/std@0.119.0/http/server.ts'
import "https://deno.land/x/dotenv@v3.2.0/load.ts"

const port = parseInt(Deno.env.get("PORT") || "8000");

const handler = (_req: Request): Response => {
    return new Response("Hello, World!");
}

console.log(`🌎 Listening on port http://localhost:${port}`);

serve(handler, { port: port });
