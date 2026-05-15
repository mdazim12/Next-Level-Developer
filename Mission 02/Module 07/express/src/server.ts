import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"


const app : Application = express()
const port = 5000

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true}));


const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_sSygJf3RW6Vo@ep-shiny-king-aq8m831b-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})


app.get('/', (req : Request , res : Response) => {
//   res.send('Exprss server!')
    res.status(200).json({
        messgae : "Express server",
        "author" : "Next level"
    });

})

app.post('/' , async(req : Request,res : Response)=> {
    // console.log(req.body);
    const {name,email,password} = req.body;
    res.status(201).json({
        message : "Created",
        data : {
            name,email
        },
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
