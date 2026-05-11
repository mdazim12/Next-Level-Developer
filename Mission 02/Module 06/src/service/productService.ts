import * as path from "path";
import * as fs from "fs";

const filePath = path.join(process.cwd(), './src/database/db.json');


export const readProduct = ()=> {
    
    const produtcs = fs.readFileSync(filePath, 'utf-8');
    // console.log(produtcs.toString());
    // console.log(JSON.parse(produtcs));
    return JSON.parse(produtcs);

}