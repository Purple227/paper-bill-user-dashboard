import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/HomePage.vue';
import LogIn from './views/auth/LogIn.vue';
import SignUp from './views/auth/SignUp.vue';
import ForgetPassword from './views/auth/ForgetPassword.vue';
import ResetCode from './views/auth/ResetCode.vue';
import ResetPassword from './views/auth/ResetPassword.vue';

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
    path: '/reset-code',
    name: 'reset-code',
    component: ResetCode,
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: ForgetPassword,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
  },

  // Add more routes as needed

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


