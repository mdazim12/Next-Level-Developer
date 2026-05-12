import type { ServerResponse } from "http";

export const sendResponse = (
    res: ServerResponse , 
    statusCode : number ,
    success : boolean , 
    message : string , 
    data? : any, 
  

) => {

    const response = {
        success : success,
        message : message,
        data : data,
        // statusCode : statusCode,
        
       
    }

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(response));
}