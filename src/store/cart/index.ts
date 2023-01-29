import { Module } from "vuex";
import { IState } from "..";
import state, { ICartState } from "./state";
import getters from "./getters";
import mutations from "./mutations";

const cartModule: Module<ICartState, IState> = {
    namespaced: true, // needed to make the module work, so that in index.ts of the store, it will be treated as a module
    state,
    mutations,
    getters,
}

export default cartModule;