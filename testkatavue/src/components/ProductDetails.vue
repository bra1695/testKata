<template>
    <div class="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div class="flex flex-col md:flex-row">
        <!-- Product Image -->
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <img :src="product.thumbnail" alt="Product image" class="w-full h-96 object-cover rounded-md shadow-lg" />
        </div>
        
        <!-- Product Details -->
        <div class="w-full md:w-1/2 md:pl-8">
          <h2 class="text-3xl font-extrabold text-gray-800 mb-4">{{ product.title }}</h2>
          
          <!-- Pricing and Discount -->
          <div class="flex items-center mb-4">
            <span class="text-2xl text-gray-800 font-semibold mr-2">${{ product.price }}</span>
            <span v-if="product.discountPercentage > 0" class="text-red-600 text-lg font-semibold">
              -{{ product.discountPercentage }}% Off
            </span>
          </div>
  
          <!-- Description -->
          <p class="text-gray-700 text-base mb-6">{{ product.description }}</p>
  
          <!-- Product Info -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p class="text-gray-500">Brand</p>
              <p class="text-gray-800 font-medium">{{ product.brand }}</p>
            </div>
            <div>
              <p class="text-gray-500">Category</p>
              <p class="text-gray-800 font-medium">{{ product.category }}</p>
            </div>
            <div>
              <p class="text-gray-500">Rating</p>
              <p class="text-yellow-500 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4l2.9 6h6.6l-5.3 4.6 1.9 7-5.7-4.4-5.7 4.4 1.9-7-5.3-4.6h6.6L12 4z"></path>
                </svg>
                {{ product.rating }} / 5
              </p>
            </div>
            <div>
              <p class="text-gray-500">Stock</p>
              <p class="text-gray-800 font-medium">{{ product.stock }}+ Sold</p>
            </div>
          </div>
  
          <!-- Back Button -->
          <div class="mt-6">
            <button 
              @click="goBack" 
              class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null,
      };
    },
    created() {
      const productId = this.$route.params.id;
      this.product = this.$store.getters.getProductById(productId);
    },
    methods: {
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  