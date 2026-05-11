import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/productService";

export const productController = (req: IncomingMessage, res: ServerResponse) => {


    const url = req.url;
    const method = req.method

    const urlParts = url?.split('/');

    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2] ) : null;

    // console.log("This is the accutal id : " , id);


    if (url === "/products" && method === "GET") {

        // const products = [
        //     {
        //         id : 1,
        //         name : "product 01"
        //     }
        // ]

        const products = readProduct();

        readProduct();

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Product retrived succesfully" ,
        data :products }));
    }
    // else if (method === "GET" && id != null) {

    // }

    
}