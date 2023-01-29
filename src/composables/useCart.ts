import { Product } from "@/models/product";
import { computed } from "vue";
import { useStore } from 'vuex'; // composable imported from vuex library

export const useCart = () => {
    const store = useStore();

    return {
        // GETTERS
        cartItems: computed(() => store.getters['cart/getCartElements']),
        isCartOpen: computed(() => store.getters['cart/getIsOpen']),
        
        // MUTATIONS
        addElementToCart: (product: Product) => store.commit('cart/addElement', product), 
        removeElementFromCart: (product: Product) => store.commit('cart/removeElement', product),
        toggleCart: () => store.commit('cart/toggleCart'),
    }
}
