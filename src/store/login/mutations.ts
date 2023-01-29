import { MutationTree } from "vuex";
import { ICredentials } from "./state";


// object of type MutationTree that uses state with type ICredentials defined in state with an interface
const mutations: MutationTree<ICredentials> = {
    setToken(state: ICredentials, token: string) {
        state.token = token;
    }
}

// mutations are ALWAYS synchronous

export default mutations; 
