import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/productService";
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

        if(!product) {
            res.writeHead(404, {'content-type' : 'application/json'});
            res.end(
                JSON.stringify({
                    message : 'Product not found',
                    data : product
                })
            )
        }

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Product retrived succesfully",
            data: product
        }));


    }

    else if (method === 'POST' && url === '/products') {

        const body = await parseBody(req);
        // console.log("Body",body);
        const products = readProduct();

        const newProduct = {
            id : Date.now(),
            ... body
        };

        // console.log(newProduct);
         


        products.push(newProduct);  /// [{} ,{}, {}, {new}]

        // console.log(products);
        insertProduct(products) ;



        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            meesage: "Product create successfully",
            data: newProduct,


        }));
    }


    else if(method === "PUT" && id !== null ) {
        const body = await parseBody(req)
        const products = readProduct();

        const index = products.findIndex((p:IProduct) => p.id === id )

        console.log(index);

        if(index <=0) {
            res.writeHead(404, {"content-type" : "application/json"});
            res.end(

                JSON.stringify({
                    message : "Product Not Found",
                    data : null
                })
            )
        } 
        
        // console.log(products[index]);
        products[index] =  {id : products[index].id,  ...body };

        insertProduct(products);

        res.writeHead(200, {"content-type" : "application/json"});
        res.end (
            JSON.stringify({
                message: "Product Updated sucessfully",
                data : products[index]
            })
        )
    }


    else if(method  ==="DELETE" && id!== null  ) {
        const products = readProduct();

        const index = products.findIndex((p: IProduct) => p.id === id);

        if(index < 0) {
            res.writeHead(404, {"content-type" : "application/json" });
            res.end (
                JSON.stringify({
                    message : "Product not found",
                    data : null,
                }),


            );
        }
        // const arr = ["1" ,"2" ,"3," , "4"]
        products.splice(index,1);
        // console.log(products);

        insertProduct(products)

        res.writeHead(200, {'content-type' : 'application/json'});
        res.end(
            JSON.stringify({
                message : 'Product deleted sucessfully',
                data : null
            })
        )

    }

   


}