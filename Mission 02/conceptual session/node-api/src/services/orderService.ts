import path from "path";
import fs from "fs/promises";
import type { Order } from "../type";
import { stringify } from "querystring";

const DB_PATH = path.join(process.cwd(), "db", "data.json")

class OrderService {
    // readDATE ,writeDATA
    private async readData(): Promise<Order[]> {
        try {
            const data = await fs.readFile(DB_PATH, "utf-8")
            return JSON.parse(data)

        } catch (error) {
            return []
        }
    }


    // private async writeData(data: Promise<Order[]>) {
    //     await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
    // }

    private async writeData(data: Order[]): Promise<void> {
        await fs.writeFile(
            DB_PATH,
            JSON.stringify(data, null, 2)
        );
    }


    /// GET THE DATA
    async get() {
        const data = await this.readData();
        return data;
    }


    /// GET BY ID
    async getById(id : string) {
        const data = await this.readData();
        return data.find(order => order.id === id) || null;
    }


    /// CREATE DATA
    async create(order: Omit<Order, "id">) {

        const data = await this.readData();

        const newOrder = {
            id: String(Math.floor(Math.random() * 100)),
            ...order
            
        }

        data.push(newOrder)

        await this.writeData(data)
    }


}

const orderService = new OrderService();

// await orderService.create({
//     customare: " joan",
//     food: "pizza",
//     price: 1600,
//     quantity: 4

// })

console.log(await orderService.getById("2"));
