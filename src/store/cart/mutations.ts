import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ICartState } from "./state";


// object of type MutationTree that uses state with type ICartState defined in state with an interface
const mutations: MutationTree<ICartState> = {
    addElement(state, element: Product) {
        state.products.push(element);
    },
    removeElement(state, element: Product) {
        const tmp = state.products.filter((p) => p.id !== element.id); // could do the same with splice 
        state.products = tmp;
    },
    toggleCart(state) {
        state.isOpen = !state.isOpen;
    },
};

// could add several more mutations, one for modifying quantity in the cart

export default mutations; 
