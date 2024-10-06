<template>
    <div class="max-w-lg mx-auto mt-10">
      <h2 class="text-2xl font-bold mb-4">Add New Product</h2>
      <form @submit.prevent="submitProduct">
        <div class="mb-4">
          <label class="block text-gray-700">Title</label>
          <input v-model="newProduct.title" class="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Product Title" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Price</label>
          <input v-model="newProduct.price" class="w-full p-2 border border-gray-300 rounded" type="number" placeholder="Product Price" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Stock</label>
          <input v-model="newProduct.stock" class="w-full p-2 border border-gray-300 rounded" type="number" placeholder="Stock" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Thumbnail</label>
          <input v-model="newProduct.thumbnail" class="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Image URL" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Rating</label>
          <input v-model="newProduct.rating" class="w-full p-2 border border-gray-300 rounded" type="number" placeholder="Rating" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Discount Percentage</label>
          <input v-model="newProduct.discountPercentage" class="w-full p-2 border border-gray-300 rounded" type="number" placeholder="Discount Percentage" />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
      </form>
    </div>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      newProduct: {
        id: Date.now(),
        title: '',
        price: 0,
        stock: 0,
        thumbnail: '',
        rating: 0,
        discountPercentage: 0,
      },
    };
  },
  methods: {
        submitProduct() {
            const toast = useToast(); // Get the toast instance
            this.$store.dispatch('addProduct', this.newProduct).then(() => {
                toast.success('Product added successfully!'); 
                this.$router.push('/'); 
            }).catch(() => {
                toast.error('Failed to add product.'); // Show error toast
            });
            this.$emit('navigate', 'list');
        },
    },
};
</script>