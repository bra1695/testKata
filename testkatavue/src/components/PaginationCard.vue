<template>
  <div class="flex justify-center mt-6 space-x-2">
    <button
      class="px-3 py-1 bg-gray-200 rounded"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Previous
    </button>

    <span v-for="page in totalPages" :key="page">
      <button
        @click="changePage(page)"
        :class="[
          'px-3 py-1 rounded transition duration-300',
          currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        {{ page }}
      </button>
    </span>

    <button
      class="px-3 py-1 bg-gray-200 rounded"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    changePage(page) {
      if (this.currentPage !== page) {
        this.$emit('page-change', page);
      }
    },
  },
};
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>