import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        products: JSON.parse(localStorage.getItem('products')) || [],
        currentPage: 1,
        perPage: 10,
        totalProducts: JSON.parse(localStorage.getItem('products'))?.length || 0, 
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
            localStorage.setItem('products', JSON.stringify(products));
        },
        SET_TOTAL_PRODUCTS(state, total) {
            state.totalProducts = total;
        },
        SET_CURRENT_PAGE(state, page) {
            state.currentPage = page;
        },
        ADD_PRODUCT(state, product) {
            state.products.push(product); 
            localStorage.setItem('products', JSON.stringify(state.products));
            state.totalProducts += 1; 
        },
        ADD_TO_CART(state, product) {
            if (!state.cart.some(fav => fav.id === product.id)) {
              state.cart.push(product);
              localStorage.setItem('cart', JSON.stringify(state.cart)); 
            }
          },
    },
    actions: {
        async fetchProducts({ commit, state }) {  
            if (state.products.length === 0) {
                try {
                    const response = await axios.get('http://localhost:8080/api/products');
                    console.log('my response ',response);
                    const products = response.data.products;
                    commit('SET_PRODUCTS', products);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            }
        },
        async addProduct({ commit }, product) {
            try {
                const response = await axios.post('http://localhost:8080/api/products', product);      
                const newProduct = {
                    ...product,   
                    id: response.data.id  
                }; 
                commit('ADD_PRODUCT', newProduct);
            } catch (error) {
                console.error('Error adding product:', error);
            }
        },
        addCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
        setPage({ commit }, page) {
            commit('SET_CURRENT_PAGE', page);
        },
    },
    getters: {
        paginatedProducts: (state) => {
            const start = (state.currentPage - 1) * state.perPage;
            const end = start + state.perPage;
            return state.products.slice(start, end);
        },
        totalPages: (state) => {
            return Math.ceil(state.totalProducts / state.perPage); // Make sure this is calculated correctly
        },
        cartProducts: (state) => state.cart,
        getProductById: (state) => (id) => {
            return state.products.find((product) => product.id === parseInt(id));
        },

    },
});
