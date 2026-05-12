import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/productService";
import type { IProduct } from "../types/productType";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendRespnse";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {

    // console.log('Request',req);

    const url = req.url;
    const method = req.method

    const urlParts = url?.split('/');

    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;



    if (url === "/products" && method === "GET") {
        try {
            const products = readProduct();
            return sendResponse(res, 200, true, "Product retrived succesfully", products)
        } catch (error) {
            const products = readProduct();
            return sendResponse(res, 500, false, "Something went wrong", error)
        }
    }


    else if (method === "GET" && id != null) {
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id)
     

        if (!product) {
            return sendResponse(res, 404, false, "Product Not Found")
        }


         try {
            const products = readProduct();
            return sendResponse(res, 200, true, "Product retrived succesfully", product)
        } catch (error) {
            const products = readProduct();
            return sendResponse(res, 500, false, "Something went wrong", error)
        }


    }

    else if (method === 'POST' && url === '/products') {

        const body = await parseBody(req);
        const products = readProduct();

        const newProduct = {
            id: Date.now(),
            ...body
        };

       
        products.push(newProduct);  
        insertProduct(products);


        try {
            const products = readProduct();
            return sendResponse(res, 200, true, "Product create successfully", newProduct)
        } catch (error) {
            const products = readProduct();
            return sendResponse(res, 500, false, "Something went wrong", error)
        }



    }


    else if (method === "PUT" && id !== null) {
        const body = await parseBody(req)
        const products = readProduct();

        const index = products.findIndex((p: IProduct) => p.id === id)


        if (index < 0) {
            return sendResponse(res, 404, false, "Product Not Found" , null)
        }

        products[index] = { id: products[index].id, ...body };

        insertProduct(products);

         try {
            const products = readProduct();
            return sendResponse(res, 200, true, "Product Updated sucessfully", products[index])
        } catch (error) {
            const products = readProduct();
            return sendResponse(res, 500, false, "Something went wrong", error)
        }

    }


    else if (method === "DELETE" && id !== null) {
        const products = readProduct();

        const index = products.findIndex((p: IProduct) => p.id === id);

        if (index < 0) {
           return sendResponse(res, 404, false, "Product Not Found" , null)
        }
        
        products.splice(index, 1);
       
        insertProduct(products)




        try {
            const products = readProduct();
            return sendResponse(res, 200, true, "Product deleted sucessfully", null)
        } catch (error) {
            const products = readProduct();
            return sendResponse(res, 500, false, "Something went wrong", error)
        }

    }




}