import './bootstrap';

import { createApp } from 'vue'
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
