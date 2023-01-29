<template>
    <div v-if="!isLoading">
        <h1>DETAIL: {{ product.id }}</h1>
        <h1>Name: {{ product.title }}</h1>  
<!--         question mark is redundant if we are using v-if, checks user is not null before trying to access the property name -->
        <img :src="product.images[0]" alt="">
        <h2>Price: {{ product.price }}€</h2>  
        <h3>Description: {{ product.description }}</h3>

        <button @click="addElementToCart(product)" class="btn btn-success">
            Add to Cart</button>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script lang="ts">
import { useCart } from "@/composables/useCart";
import useProducts from "@/composables/useProducts";
// import { Product } from "@/models/product";
// import { AxiosResponse } from "axios";
import { defineComponent, ref } from 'vue';
// import { useRoute } from 'vue-router';
// import fakeShopApi from '../api/fakeShopApi';

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true
        },
        price: Number,
        description: String,
    },
    setup(props) {
        
        const { addElementToCart } = useCart()
        // TODO do with composable useProducts and action that gets a single product instead of directly in the component 
        // pass to composable and products module in the store
        // 
        // let product = ref<Product>();
        // fakeShopApi
        //     .get<unknown, AxiosResponse<Product>>(`/products/${props.id}`)
        //     .then((resp) => product.value = resp.data)

        const { product, fetchProductById, isLoading } = useProducts();
        fetchProductById(props.id);

        return {
            product,
            addElementToCart,
            isLoading,
        }
    },
})
/*  setup() {
         const route = useRoute(); // returns an object
        console.log(route.params)
        const id = ref<string>(route.params.id as string) 

    }
        no se necesita ya porque se inyecta parametros en los props que son como las variables de entrada cuando definimos la ruta en index.ts*/ 
</script>