import { Product } from "src/entities/products.entity";
import { User } from "./user.entity";

export class Order {
 date: Date;
 user: User;
 products: Product[];
}