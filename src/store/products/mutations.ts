import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { IProductsState } from "./state";


// object of type MutationTree that uses state with type IProductsState defined in state with an interface
const mutations: MutationTree<IProductsState> = {
    setProducts(state: IProductsState, products: Product[]) {
        state.products = products; // list of products will be saved 
    },
    setIsLoading(state: IProductsState, value: boolean) {
        state.isLoading = value;
    },
    setSelectedProduct(state, product: Product) {
        state.selectedProduct = product;
    },
}

// difference with cart is that we need to have an action in the store to perform asynchronous requests
// mutations are ALWAYS synchronous

export default mutations; 
