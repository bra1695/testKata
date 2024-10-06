<template>
    <div>
      <div v-if="cartProducts.length === 0" class="text-gray-500 text-center">
        You don't have any products in your cart yet.
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard
          v-for="product in cartProducts"
          :key="product.id"
          :product="product"
          :showAddToCart="false" 
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue'; 
  
  export default {
    components: {
      ProductCard,
    },
    computed: {
      cartProducts() {
        return this.$store.getters.cartProducts;
      },
    },
  };
  </script>
  