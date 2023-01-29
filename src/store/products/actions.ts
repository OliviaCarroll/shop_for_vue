import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

// use actions to use the store to request the data from the server, once received (asynchronous) then commit to use a mutation to get the data 
const actions: ActionTree<IProductsState, IState> = {
    async fetchProducts({commit}) {
        // commit calls a mutation that modifies the state defined in state.ts, don't need /product like when we did commits previously because its inside the product module
        commit('setIsLoading', true); 
        // http request to API with endpoint products 
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>('/products'); 

        commit('setIsLoading', false);
        // use the mutation to put all the data obtained in the variable of products state
        commit('setProducts', data)
    },
    async fetchProductById({ commit }, productId: number) {
        commit('setIsLoading', true);

        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
            `products/${productId}`
        );

        commit('setIsLoading', false);

        commit('setSelectedProduct', data);
    }
}

export default actions;