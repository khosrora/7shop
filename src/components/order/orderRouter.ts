import { Router } from "express";
import UsersController from "./orderController";
const usersContrllerInstance = new UsersController();
const usersRouter: Router = Router();

usersRouter.get("/", usersContrllerInstance.index);



export default usersRouter;
