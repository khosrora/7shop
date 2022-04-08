import { Schema, model } from "mongoose";
import IProductCategory from './IProductCategory';



const productCategorySchema: Schema = new Schema({

    title: { type: String, required: true },
    total_products: { type: Number, required: true },
    attributes: { type: [Object] },

})



export default model<IProductCategory>("ProductCategory", productCategorySchema)