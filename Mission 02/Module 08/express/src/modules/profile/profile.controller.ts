import { json, type Request, type Response } from "express"
import { profileServices } from "./profile.service"

const createProfile = async (req: Request, res: Response) => {
    try {

        const result = await profileServices.createProfileIntoDB(req.body);
        res.status(201).json({
            success: true,
            message: "Profile create successfully!",
            data: result.rows[0],
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        })
    }
}


const getAllProfile = async (req: Request, res: Response) => {
    try {
        const result = await profileServices.getAllProfileIntoDB()

        res.status(200).json({
            success: true,
            message: "Users retrived successfully!",
            data: result.rows

        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error

        })
    }
}



const getSingleProfile = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await profileServices.getSingleProfileIntoDB(id as string)

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User Not Found",
                data: {}
            })
        }

        res.status(200).json({
            success: true,
            message: "Profile retrived successfully!",
            data: result.rows[0]
        })



    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
}





const updateProfile = async (req: Request , res : Response ) => {
    const {id} = req.params;
    // const {bio,address,phone,gender} = req.params;

    try {
        
        const result = await profileServices.updateProfileIntoDB(req.body ,id as string)

        if(result.rows.length === 0) {
            res.status(404).json({
                success : false,
                message : "Prole not found",
                data : {}

            })
        }

        // if (result.rows.length === 0) {
        //     res.status(404).json({
        //         success: false,
        //         message: "User Not Found For Update!",
        //         data: {},
        //     })
        // }

        res.status(200).json({
            success : true,
            message : "Profile updated successfully",
            data : result.rows[0]
        })



    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message,
            error : error
        })
    }
}




const deleteProfile = async (req: Request , res : Response) => {
    const {id} = req.params

    try {

        const result = await profileServices.deleteProfileIntoDB(id as string);

        if(result.rowCount === 0) {
            res.status(404).json({
                success : false,
                message : "Profile not found",
                data : {}
            })
        }

        res.status(200).json({
            success : true,
            message : "Profile delete Successfully!",
            data : {}
        })
        
    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message,
            error : error
        })
    }
}





export const profileController = {
    createProfile,
    getAllProfile,
    getSingleProfile,
    updateProfile,
    deleteProfile
}