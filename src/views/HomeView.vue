<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="isLoading">
      Loading...
    </div>
    <div class="product-list" v-else>
      <ProductItem v-for="product in products" :key="product.id" :product="product" @addCart="addElementToCart"
        @goDetail="goDetail" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProducts from '@/composables/useProducts';
import ProductItem from '@/components/ProductItem.vue'
import { useCart } from '@/composables/useCart';
import products from '@/store/products';
import { Product } from '@/models/product';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItem,
  },
  setup() {
    const { products, isLoading, fetchProducts } = useProducts();
    const { addElementToCart } = useCart();
    const router = useRouter();
    fetchProducts()

    return { 
      products, 
      isLoading, 
      addElementToCart, 
      goDetail: (product: Product) => router.push({ name: 'detail', params: { id: product.id } }) }
  }
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>