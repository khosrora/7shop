import { Request, Response } from "express";
import User from "./model/User";



class UsersController {

    public async index(req: Request, res: Response) {
        const users = await User.find();
        res.send({ allusers: users })

    }

    public async create(req: Request, res: Response) {
        const newUser = await User.create({
            first_name: "khosro", last_name: "ra", email: "khosrora@gmail.com", mobile: "09332839823"
        })
        newUser.addresses.push({
            title: "خانه", state: "زاهدان", city: "زاهدان", address: "خیابان", street: "خیابان", zip_code: '1111111', full_name: "مشتری فلان", mobile: "09332839823"
        })
        await newUser.save();
        return res.send({ newUser })
    }
};
export default UsersController;