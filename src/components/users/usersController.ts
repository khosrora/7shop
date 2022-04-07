import { Request, Response } from "express";
import User from "./model/User";



class UsersController {

    public index(req: Request, res: Response) {

        res.send({ allusers: [] })

    }

    public async create(req: Request, res: Response) {
        const newUser = await User.create({
            first_name: "khosro", last_name: "ra", email: "khosrora@gmail.com", mobile: "09332839823"
        })
        return res.send({ newUser })
    }
};
export default UsersController;