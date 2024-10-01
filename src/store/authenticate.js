// authenticate.js

import { defineStore } from 'pinia'

import axiosInstance from '@/axiosInstance';

export const useAuthUser = defineStore({

  id: 'authUser',
  state: () => ({
    userData: null,
  }),

  actions: {
    async fetchUserData() {
      try {
        const response = await axiosInstance.get('/user');
        this.userData = response.data.data.user;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
      
    },

  },
});
