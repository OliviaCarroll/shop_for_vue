// getters are a function that returns a value

import { GetterTree } from "vuex";
import { IState } from "..";
import { ICartState } from "./state";

const getters: GetterTree<ICartState, IState> = {
    getCartElements(state) {
        return state.products;
    },
    // receives state and returns Cart Items

    getIsOpen(state) {
        return state.isOpen;
    }
}

export default getters;