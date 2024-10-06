<template>
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      @click="goToDetails(product.id)"
    >
      <div class="relative w-full h-48 overflow-hidden">
        <img :src="product.thumbnail" alt="Product image" class="object-cover w-full h-full" />
        <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
          -{{ product.discountPercentage }}%
        </div>
      </div>
      <div class="p-4">
        <h5 class="font-semibold text-gray-800 text-lg truncate">
          {{ product.title }}
        </h5>
        <p class="text-gray-500 text-sm mt-1 truncate">{{ product.description }}</p>
        <div class="mt-4">
          <div class="flex items-center space-x-2">
            <span class="text-gray-800 text-xl font-bold">$ {{ product.price }}</span>
            <span class="text-gray-500 line-through text-sm">$ {{ priceFormatted }}</span>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-yellow-500 text-sm flex items-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4l2.9 6h6.6l-5.3 4.6 1.9 7-5.7-4.4-5.7 4.4 1.9-7-5.3-4.6h6.6L12 4z"></path>
            </svg>
            {{ product.rating }} / 5
          </span>
          <span class="text-gray-500 text-sm ml-4">{{ product.stock }}+ Sold</span>
        </div>
        <div class="flex items-center justify-between mt-4">
          <span class="text-gray-500 text-xs">{{ product.brand }}</span>
          <span class="text-gray-500 text-xs">{{ product.category }}</span>
        </div>
    
        <div v-if="showAddToCart" class="mt-4">
          <button
            @click.stop="addToCart(product)" 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useToast } from 'vue-toastification';

  export default {
    props: {
      product: Object,
      showAddToCart: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      priceFormatted() {
        return (this.product.price / (1 - this.product.discountPercentage / 100)).toFixed(2);
      },
    },
    methods: {
      addToCart(product) {
        const toast = useToast();
        this.$store.dispatch('addCart', product);
        toast.success('Product added to cart successfully!'); 

      },
      goToDetails(productId) {
        this.$router.push(`/product/${productId}`);
      },
    },
  };
  </script>
  