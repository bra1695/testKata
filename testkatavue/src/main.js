import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/tailwindcss.css';

// Import Vue Toastification
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

// Use Vuex store and Vue Router
app.use(store);
app.use(router);

// Use Vue Toastification with options (you can adjust the position and other settings)
app.use(Toast, {
  position: POSITION.TOP_RIGHT, // Change this to desired position
  timeout: 3000, // Duration in milliseconds
  closeOnClick: true,
  pauseOnFocusLoss: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  // Add more options as needed
});

// Mount the app
app.mount('#app');
