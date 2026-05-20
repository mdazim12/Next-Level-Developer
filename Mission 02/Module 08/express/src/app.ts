import express, { type Application, type Request, type Response } from "express"
import config from "./config";
import { initDB, pool } from "./db";
import { userRoute } from "./modules/user/user.route";


const app: Application = express()


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));






app.get('/', (req: Request, res: Response) => {
    //   res.send('Exprss server!')
    res.status(200).json({
        messgae: "Express server",
        "author": "Next level"
    });

})

app.use('/api/users', userRoute);



export default app;


