import { Document } from "mongoose";
import orderStatus from './OrderStatus';



export default interface IOrder extends Document {

    user: string;
    total_price: number;
    coupon: object;
    final_price: number;
    status: orderStatus;
    order_lines: [object];
    delivery_address : object;
    created_at: Date;
    updated_at: Date;

}