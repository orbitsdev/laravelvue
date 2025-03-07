import { createMemoryHistory, createRouter } from 'vue-router'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import AdminDashboard from '../pages/Admin/AdminDashboard.vue'
const routes = [
    { path: '/', component: AdminDashboard },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: AdminDashboard },
  ]
const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router;
