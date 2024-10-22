import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';

// Import your Vue component
import NavbarComponent from './components/Navbar.vue';
import HeaderComponent from './components/Header.vue';

// Create Vue app and register the component
const app = createApp({});
app.component('navbar-component', NavbarComponent);
app.component('header-component', HeaderComponent);

// Mount the Vue app to the DOM element with ID 'app'
app.mount('#app');
