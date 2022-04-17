import { Request, Response, NextFunction } from "express";
import Category from "./model/Category";



class categoriesController {
    public async createCategory(req: Request, res: Response, next: NextFunction) {
        console.log(req.body)
        const newCategory = await Category.create({
            ...req.body
        });

        return res.send(newCategory);
    }

    public async getCategories(req: Request, res: Response, next: NextFunction) {
        const getCategories = await Category.find();
        return res.send(getCategories)
    }
}

export default categoriesController;