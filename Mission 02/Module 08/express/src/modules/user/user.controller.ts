import type { Request, Response } from "express";
import { userServices } from "./user.service";




const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
    // const { name, email, password, age } = req.body;

    try {
        const result = await userServices.createUserIntoDb(req.body);
        // console.log(result);

        res.status(201).json({
            success: true,
            message: "User Created Sucessfully!",
            data: result.rows[0]
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }

}

export const userController = {
    createUser,
    
}