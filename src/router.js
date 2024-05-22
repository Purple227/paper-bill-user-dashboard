import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/HomePage.vue';
import Wallet from './views/WalletPage.vue';
import Transaction from './views/TransactionPage';

import LogIn from './views/auth/LogIn.vue';
import SignUp from './views/auth/SignUp.vue';
import ForgetPassword from './views/auth/ForgetPassword.vue';
import ResetCode from './views/auth/ResetCode.vue';
import ResetPassword from './views/auth/ResetPassword.vue';
import Profile from './views/auth/ProfilePage.vue';

import Service from './views/services/IndexPage.vue';
import GiftCard from './views/services/GiftCard.vue';
import Airtime from './views/services/AirtimePage.vue';
import Data from './views/services/DataPage.vue';
import Cable from './views/services/CablePage.vue';
import Electricity from './views/services/ElectricityPage.vue';

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
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/serivices',
    name: 'services',
    component: Service,
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet,
  },
  {
    path: '/gift-card',
    name: 'gift-card',
    component: GiftCard,
  },
  {
    path: '/airtime',
    name: 'airtime',
    component: Airtime,
  },
  {
    path: '/data-bundle',
    name: 'data-bundle',
    component: Data,
  },
  {
    path: '/cable',
    name: 'cable',
    component: Cable,
  },
  {
    path: '/electricity',
    name: 'electricity',
    component: Electricity,
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction,
  },
  // Add more routes as needed

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


