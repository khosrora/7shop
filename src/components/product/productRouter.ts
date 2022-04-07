import { Router } from "express";
import productsController from "./productsController";
const productControllerInstance = new productsController();
const usersRouter: Router = Router();

usersRouter.get("/", productControllerInstance.index);



export default usersRouter;
