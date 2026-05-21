import { pool } from "../../db";
import type { IProfile } from "./profile.interface";

const createProfileIntoDB = async (payload: IProfile) => {
    const { user_id, bio, address, phone, gender } = payload;

    // Frist check the is users exists
    const user = await pool.query(`
        SELECT * FROM users WHERE id = $1
        `, [user_id]
    );
    // console.log(user);

    if (user.rows.length === 0) {
        throw new Error("User not exists!");
    }

    const result = await pool.query(`
        INSERT INTO profiles (user_id,bio,address,  phone, gender) VALUES ($1,
        $2,$3,$4,$5) RETURNING *
        `,
        [user_id, bio, address, phone, gender],
    );
    return result;
};



const getAllProfileIntoDB = async () => {


    const result = await pool.query(`
        SELECT * FROM profiles
        `);
    return result;

}


const getSingleProfileIntoDB = async(id : string) => {
    const result = await pool.query(`
        SELECT * FROM profiles WHERE id = $1`, [id]
    
    );
    return result;
}


const updateProfileIntoDB = async(payload :IProfile ,id : string) => {
    const {bio, address, phone, gender} = payload;

    
    const result = await pool.query(
        `
        UPDATE profiles
        SET
            bio = COALESCE($1, bio),
            address = COALESCE($2, address),
            phone = COALESCE($3, phone),
            gender = COALESCE($4, gender)

        WHERE id = $5
        RETURNING *
        `,
        [bio, address, phone, gender, id]
    );

    return result;
}




export const profileServices = {
    createProfileIntoDB,
    getAllProfileIntoDB,
    getSingleProfileIntoDB,
    updateProfileIntoDB
}