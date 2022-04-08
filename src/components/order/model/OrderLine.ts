import { Schema, model } from "mongoose";
import IOrderLine from './IOrderLine';




const orderLineSchema: Schema = new Schema({

    price: { type: Number, required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    created_at: { type: Date , default: Date.now() },

});

export default model<IOrderLine>("OrderLine", orderLineSchema);