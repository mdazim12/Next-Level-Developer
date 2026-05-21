import { pool } from "../../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import config from "../../config";



const loginUserIntoDB = async (payload: {
    email: string,
    password: string
}) => {
    const { email, password } = payload;
    // 1. check if the user exists  -- Done
    // 2. compare the password --- Done
    // 3. generate the token

    const userData = await pool.query(`
        SELECT * FROM users WHERE email = $1
        `, [email]
    );

    if(userData.rows.length === 0) {
        throw new Error("Invalid Credential");
    }
    const user = userData.rows[0];

    const macthPassword = await bcrypt.compare(password, user.password)
    console.log(macthPassword);
    
    if(!macthPassword) {
        throw new Error("Invalid Credential");
    }


    // Genarate Token

    const jwtpayload = {
        id : user.id,
        name: user.name,
        is_active : user.is_active,
        email : user.email
    }

    const accessToken = jwt.sign(jwtpayload, config.secret as string, {
        expiresIn: "1d",

    });

    return {accessToken};



}

export const authServices = {
    loginUserIntoDB,
}