import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import UsersLayout from './components/UsersLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

const app = createApp(App);

app.component('default-layout', UsersLayout);
app.component('empty-layout', EmptyLayout);

app.use(router);
app.mount('#app');
