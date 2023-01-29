import { Product } from "@/models/product";

export interface ICartState {
    products: Product[];
    isOpen: boolean;
}
// should be an object here, with quantity as well, rather than just the product itself
// wouldn't be of type Product, but of CartItems so it can have various extra properties 

function state(): ICartState {
    return {
        products: [],
        isOpen: false, // default value
    }
}

export default state