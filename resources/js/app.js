import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';

// Import your Vue component
import NavbarComponent from './components/Navbar.vue';

// Create Vue app and register the component
const app = createApp({});
app.component('navbar-component', NavbarComponent);

// Mount the Vue app to the DOM element with ID 'app'
app.mount('#app');
