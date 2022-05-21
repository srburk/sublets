// user.route.ts

import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { UserController } from "../controllers/user.controller.ts";

const userRouter = new Router();
const userController = new UserController();

userRouter
  .get("/", userController.listUsers)
  .get("/:id", userController.findUser)
  .post("/", userController.createUser)
  .post("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

export { userRouter };
