import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/productService";
import type { IProduct } from "../types/productType";
import { parseBody } from "../utility/parseBody";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {

    // console.log('Request',req);

    const url = req.url;
    const method = req.method

    const urlParts = url?.split('/');

    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;

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
        res.end(JSON.stringify({
            message: "Product retrived succesfully",
            data: products
        }));
    }


    else if (method === "GET" && id != null) {
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id)
        // console.log(product);

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Product retrived succesfully",
            data: product
        }));


    }

    else if (method === 'POST' && url === '/products') {

        const body = await parseBody(req);
        console.log("Body",body);




        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            meesage: "Product create successfully",
            // data: product


        }));
    }


}