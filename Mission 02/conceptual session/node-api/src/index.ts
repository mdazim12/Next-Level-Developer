

import {createServer} from "node:http"


const server = createServer((req,res) => {
    // res.writeHead(200, {"content-type" : "application/json" })
    // res.end(JSON.stringify({messgae : "hello"}));

    const url = req.url ?? "/"

     if(url === "/") {
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({message : "Hello"}))
    }

    res.writeHead(404,{"content-type" : "application/json"})
    res.end(JSON.stringify({message : "Not Found"}))
        

})





const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
