<template>
  <ProductFilter @filter-changed="updateFilters" />
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
  <PaginationCard :totalPages="totalPages" :currentPage="currentPage" @page-change="setPage" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from './ProductCard.vue';
import PaginationCard from './PaginationCard.vue';
import ProductFilter from './ProductFilter.vue';

export default {
  components: {
    ProductCard,
    PaginationCard,
    ProductFilter,
  },
  data() {
    return {
      filters: {
        title: '',
        minPrice: null,
        maxPrice: null,
      },
    };
  },
  computed: {
    ...mapGetters(['paginatedProducts', 'totalPages']),
    filteredProducts() {
      return this.paginatedProducts.filter(product => {
        const matchesTitle = product.title.toLowerCase().includes(this.filters.title.toLowerCase());
        const matchesMinPrice = this.filters.minPrice === null || product.price >= this.filters.minPrice;
        const matchesMaxPrice = this.filters.maxPrice === null || product.price <= this.filters.maxPrice;

        return matchesTitle && matchesMinPrice && matchesMaxPrice;
      });
    },
  },
  methods: {
    ...mapActions(['setPage', 'fetchProducts']), 
    updateFilters(newFilters) {
      this.filters = newFilters;
      this.setPage(1);
    },
    async loadProducts() {
      await this.fetchProducts(); 
    },
  },
  mounted() {
    this.loadProducts(); 
  },
};
</script>
