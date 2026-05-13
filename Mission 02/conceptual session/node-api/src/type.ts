import type { IncomingMessage, ServerResponse } from "http";

export type Res = ServerResponse
export type Req = IncomingMessage


export interface Order {
    id: string;
    customare : string;
    quantity : number;
    food : string;
    price : number;
}
