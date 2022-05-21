// user.controller.ts

import { Context } from "https://deno.land/x/oak/mod.ts";

export class UserController {
  listUsers(context: Context) {
    context.response.body = "Listing Users";
  }
}
