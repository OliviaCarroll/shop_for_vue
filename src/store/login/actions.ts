import fakeShopApi from "@/api/fakeShopApi";
import { User } from "@/models/user";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ICredentials } from "./state";

// use actions to use the store to request the data from the server, once received (asynchronous) then commit to use a mutation to get the data 
const actions: ActionTree<ICredentials, IState> = {
    async fetchToken({commit}, cred ) {
        // http request to API with endpoint auth/login 
        const {data} = await fakeShopApi.post<unknown, AxiosResponse<User>>('/auth/login'); 

        commit('setIsLoading', false);
        // use the mutation to put all the data obtained in the variable of products state
        commit('setProducts', data)
    },
}

export default actions;