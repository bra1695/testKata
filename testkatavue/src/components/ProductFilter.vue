<template>
    <div class="mb-4 p-4 bg-white shadow rounded-lg">
      <h2 class="text-lg font-bold mb-4">Filter Products</h2>
      <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div class="flex-1 mb-4 md:mb-0">
          <label class="block text-gray-700">Title</label>
          <input
            v-model="filters.title"
            type="text"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Filter by title"
          />
        </div>
  
        <div class="flex-1 mb-4 md:mb-0">
          <label class="block text-gray-700">Price Range</label>
          <div class="flex items-center space-x-4">
            <div class="flex-1">
              <input
                type="range"
                min="0"
                max="1000"
                v-model="filters.minPrice"
                class="w-full"
                @input="updateMinPrice"
              />
              <span class="text-gray-700">Min: {{ filters.minPrice }}</span>
            </div>
            <div class="flex-1 hidden">
              <input
                type="range"
                min="0"
                max="1000"
                v-model="filters.maxPrice"
                class="w-full"
                @input="updateMaxPrice"
              />
              <span class="text-gray-700">Max: {{ filters.maxPrice }}</span>
            </div>
          </div>
        </div>
  
        <button
          @click="applyFilters"
          class="bg-blue-500 text-white px-4 py-2 rounded mt-4 md:mt-0 hover:bg-blue-600 transition duration-200"
        >
          Apply Filters
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        filters: {
          title: '',
          minPrice: 0,
          maxPrice: 1000,
        },
      };
    },
    methods: {
      applyFilters() {
        this.$emit('filter-changed', this.filters);
      },
      updateMinPrice() {
        if (this.filters.minPrice > this.filters.maxPrice) {
          this.filters.maxPrice = this.filters.minPrice;
        }
      },
      updateMaxPrice() {
        if (this.filters.maxPrice < this.filters.minPrice) {
          this.filters.minPrice = this.filters.maxPrice;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background: #ddd;
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }
  </style>
  