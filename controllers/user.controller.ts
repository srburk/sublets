// user.controller.ts

import {
  Context,
  RouterContext,
  State,
} from "https://deno.land/x/oak@v10.5.1/mod.ts";

export class UserController {
  /**
   * @description Return all users
   * @route GET /api/users/
   */
  listUsers(context: Context) {
    context.response.body = "Listing All Users";
  }

  /**
   * @description Return user based on ID
   * @route GET /api/users/:userId
   */
  findUser(
    context: RouterContext<
      "/:id",
      {
        id: string;
      } & Record<string | number, string | undefined>,
      State
    >,
  ) {
    context.response.body = `Finding User with ID: ${context.params.id}...`;
  }

  /**
   * @description Create new user
   * @route POST /api/users/
   */
  createUser(context: Context) {
    context.response.body = "Creating new user...";
  }

  /**
   * @description Update user based on ID
   * @route POST /api/users/:userId
   */
  updateUser(
    context: RouterContext<
      "/:id",
      {
        id: string;
      } & Record<string | number, string | undefined>,
      State
    >,
  ) {
    context.response.body = `Updating user with ID: ${context.params.id}...`;
  }

  /**
   * @description Delete user based on ID
   * @route DELETE /api/users/:userId
   */
  deleteUser(
    context: RouterContext<
      "/:id",
      {
        id: string;
      } & Record<string | number, string | undefined>,
      State
    >,
  ) {
    context.response.body = `Deleting User with ID: ${context.params.id}...`;
  }
}
