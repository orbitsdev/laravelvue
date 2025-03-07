import './bootstrap';

import { createApp } from 'vue'
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import App from './App.vue'
import '../css/app.css';    

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
