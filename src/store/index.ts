import { User } from '@/models/user';
import { createStore } from 'vuex'
import cartModule from './cart';
import productsModule from './products';

export interface IState {
  authUser: User | null;
  greeting: string;
}

// general store for the whole application and modules for separating smaller entities like Cart with their own state 
export default createStore<IState>({
  state: {
    authUser: null,
    greeting: 'Welcome!'
  },
  mutations: {
    changeGreeting(state, greeting: string) {
      state.greeting = greeting;
    }
  },

  getters: {
    greet(state, _getters) {
      return state.greeting;
    }
  },

  actions: {
  },
  modules: {
    cart: cartModule, 
    products: productsModule,
  }
})
