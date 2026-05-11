    import { createServer, IncomingMessage, Server } from "http";

    const server : Server = createServer((req : IncomingMessage,res) => {
        // console.log(req.url);      ////   '/' , '/user ,'/product'
        // console.log(req.method);  ///   'GET' , 'POST' , 'DELETE'

        const url = req.url;
        const method = req.method

        if(url === '/' && method === 'GET') {
            // console.log('This is root route');
            res.writeHead(200, {"content-type" : "application/json"});
            res.end(JSON.stringify({message : "This is root route"}));
        } else if(url?.startsWith('/products') ) {
            res.writeHead(200, {"content-type" : "application/json"});
            res.end(JSON.stringify({message : "This is products route"}));
        }
        
        
        
        
        else{
        res.writeHead(404, {"content-type" : "application/json"});
            res.end(JSON.stringify({message : "route not found"}));
        }

    })


    server.listen(3000, () => {
    console.log("Server running on port 3000");
    });


