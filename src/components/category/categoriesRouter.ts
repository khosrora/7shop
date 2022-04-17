import { Router } from "express";
import Controller from "./categoriesController";
const categoriesController = new Controller();
const categoriesRouter: Router = Router();

categoriesRouter.post("/", categoriesController.createCategory);
categoriesRouter.get("/", categoriesController.getCategories);



export default categoriesRouter;
