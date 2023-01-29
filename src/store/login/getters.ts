import { GetterTree } from "vuex";
import { IState } from "..";
import { ICredentials } from "./state";

const getters: GetterTree<ICredentials, IState> = {
    getToken(state) {
        return state.token
    }
}

export default getters;