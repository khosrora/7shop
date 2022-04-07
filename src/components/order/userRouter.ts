import { Router } from "express";
import UsersController from "./usersController";
const usersContrllerInstance = new UsersController();
const usersRouter: Router = Router();

usersRouter.get("/", usersContrllerInstance.index);



export default usersRouter;
