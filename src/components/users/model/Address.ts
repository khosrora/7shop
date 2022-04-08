import { Schema } from "mongoose";



const addressSchema: Schema = new Schema({

    title: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    address: { type: String, required: true },
    zip_code: { type: String, required: false },
    full_name: { type: String, required: true },
    mobile: { type: String, required: true },

});

export default addressSchema;