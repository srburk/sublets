// user.route.ts

import { Router } from "https://deno.land/x/oak/mod.ts";
import { UserController } from "../controllers/user.controller.ts";

const userRouter = new Router();
const userController = new UserController();

userRouter
  .get("/", userController.listUsers);

export { userRouter };
