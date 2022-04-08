import { Document } from 'mongoose';
import ProductStatus from './productStatus';
import IProductAtrribute from './IProductAtrribute';



export default interface IProduct extends Document {

    title: string;
    price: string;
    sale_price: number;
    thumbnaile: string;
    gallery?: [string];
    product_category: string;
    attributes: [IProductAtrribute];
    created_at: Date;
    updated_at: Date;
    status: ProductStatus;

}