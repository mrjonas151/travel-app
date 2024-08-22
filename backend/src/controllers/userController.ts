import { Request, Response } from "express";
import { UserService } from "../services/userService";

class UserController{

    static async createUserController(req: Request, res: Response){
        const { id, email, name, last_name } = req.body;

        const user = await UserService.createUserService({id, email, name, last_name});

        return res.json(user);
    }
}

export { UserController };