

import {createServer} from "node:http"
import { sendResponse } from "./ulitils"
import { orderRoute } from "./routes/oderRoute";


const server = createServer((req,res) => {
    // res.writeHead(200, {"content-type" : "application/json" })
    // res.end(JSON.stringify({messgae : "hello"}));

    const url = req.url ?? "/"

     if(url === "/") {
        sendResponse(res, {message : "Welcome to our server"},200);
        return
    }


     if(url.startsWith("/order")) {
        orderRoute(req,res)
        return
    }


     res.end(JSON.stringify({message : "Not Found"}))

    sendResponse(res, {message : "Not found"},404);
        

})





const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
