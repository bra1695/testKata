<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-2xl font-bold">
        Kata
      </div>
      <div class="space-x-4">
        <router-link to="/" class="text-gray-300 hover:text-white">Product List</router-link>
        <router-link to="/cart" class="text-gray-300 hover:text-white">cart</router-link>
        <router-link to="/add" class="text-gray-300 hover:text-white">Add Product</router-link>
      </div>
    </div>
  </nav>
</template>