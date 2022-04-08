import { Document } from 'mongoose';
import IProductAtrribute from './IProductAtrribute';



export default interface IProductCategory extends Document {

    title: string;
    total_products: number;
    attributes: [IProductAtrribute];

}