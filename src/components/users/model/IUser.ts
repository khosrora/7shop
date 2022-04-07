import { Document } from "mongoose";



export default interface IUser extends Document {

    first_name: string;
    last_name: String;
    email: String;
    mobile: String;
    total_orders: Number;
    wallet: number;
    created_at: Date;

}