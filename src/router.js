import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/LandingPage.vue';
import LogIn from './views/LogIn.vue';
import SignUp from './views/SignUp.vue';
import ForgetPassword from './views/ForgetPassword.vue';
import ServiceData from './views/ServiceData.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn,
  },
  {
    path: '/register',
    name: 'register',
    component: SignUp,
  },
  {
    path: '/reset-password',
    name: 'forget-password',
    component: ForgetPassword,
  },
  {
    path: '/service',
    name: 'service-data',
    component: ServiceData,
  },

  // Add more routes as needed

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


