import path from "path";
import fs from "fs/promises";
import type { Order } from "../type";

const DB_PATH = path.join(process.cwd(), "db", "data.json")

class OrderService {
    // readDATE ,writeDATA
   private  async readData(): Promise<Order[]>  {
        try {
            const data = await fs.readFile(DB_PATH, "utf-8")
            return JSON.parse(data)

        } catch (error) {
            return []
        }
    }


    private  async writeData(data:Order){
        await fs.writeFile(DB_PATH, JSON.stringify(data))
    }


    /// GET THE DATA

    async get() {
        const data = await this.readData;
        return data;
    }


    /// CREATE DATA

    



}

const orderService = new OrderService();
 
