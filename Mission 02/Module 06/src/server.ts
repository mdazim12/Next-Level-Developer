    import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/routes";

    const server : Server = createServer((req : IncomingMessage,res) => {
        routeHandler(req,res);


    })


    server.listen(3000, () => {
    console.log("Server running on port 3000");
    });


