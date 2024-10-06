import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import AddProduct from '../components/AddProduct.vue';
import CartProduct from '../components/CartProduct.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/add',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/cart',
    name: 'CartProduct',
    component: CartProduct,
  },
  {
    path: '/product/:id',  
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,  
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
