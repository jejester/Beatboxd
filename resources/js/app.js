import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';

// Import your Vue component
import ExampleComponent from './components/ExampleComponent.vue';

// Create Vue app and register the component
const app = createApp({});
app.component('example-component', ExampleComponent);

// Mount the Vue app to the DOM element with ID 'app'
app.mount('#app');
