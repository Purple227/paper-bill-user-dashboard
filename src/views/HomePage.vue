<template>


<br>


<div class="" v-if="loading == false">


<div class="container">
    <div class="row">


        <div class="col-10">
            <p class="fw-bold text-white fs-3"> Welcome {{ user.name }}</p>
        </div>

        <div class="col-2">
          <i class="bi bi-bell-fill fs-3 text-white text-end clickable_sign"></i>
        </div>

    </div>
</div>


<div class="container"> 

    <br>

<div class="card bg_orange box">
  <div class="card-body">


<div class="row">

    <div class="col-10">

      <p class="fs-6 fw-bold text-white"> 
        Wallet Balance  <i class="bi bi-eye-fill text-white fs-5 clickable_sign"></i>
        <br>
        ₦5,000.00
      </p>

    </div>



    <div class="col-2">
        <i class="bi bi-plus-square-fill fs-1 text-white clickable_sign"> </i> 
    </div>

</div>
    
    
  </div>
</div>

</div>



<div class="container">

    <br>

    <p class="fw-bold fs-4 text-white"> Services </p>

<ul class="nav nav-pills nav-fill">
<li class="nav-item fw-bold border-radius m-3 clickable_sign" 
v-for="category in sliceCategoriesOne" 
:key="category.id" @click="goToService(category.identifier)">
      <i class="bi bi-phone-fill fs-1 orange_color" v-if="category.identifier == 'airtime'"></i> 
      <i class="bi bi-wifi fs-1 orange_color" v-if="category.identifier == 'data'"></i> 
      <i class="bi bi-tv fs-1 orange_color" v-if="category.identifier == 'tv-subscription'"></i> 
      <br>
      <span class="orange_color"> {{ category.name }} </span>
</li>
</ul>

<ul class="nav nav-pills nav-fill">
<li class="nav-item fw-bold border-radius m-3 clickable_sign" 
v-for="category in sliceCategoriesTwo" 
:key="category.id" @click="goToService(category.identifier)">
      <i class="bi bi-lightning-charge-fill fs-1 orange_color" v-if="category.identifier == 'electricity-bill'"></i> 
      <i class="bi bi-book fs-1 orange_color " v-if="category.identifier == 'education'"></i> 
      <br>
      <span class="orange_color"> {{ category.name }} </span>
</li>
</ul>

</div>


<div class="container"> 

<p class="fw-bold fs-4 text-white"> Recent Transaction </p>

<ul class="list-group">

  <li class="list-group-item d-flex justify-content-between align-items-center bg_black clickable_sign">
    <i class="bi bi-arrow-up-right-circle-fill orange_color"> 
        <span class="text-white fw-bold"> 
            Cable TV 
            <br>
        <span class="text-white form-text"> May 12, 2024 3:40PM</span>
        </span>
    </i>   
    <span class="badge bg_orange_plain"> -₦1200</span>
  </li>


  <li class="list-group-item d-flex justify-content-between align-items-center bg_black clickable_sign">
    <i class="bi bi-arrow-down-left-circle-fill text-success"> 
        <span class="text-white fw-bold"> 
            Gift Card
            <br>
        <span class="text-white form-text"> May 04, 2024 9:40AM</span>
        </span>
    </i>   
    <span class="badge bg-success"> +₦4000</span>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-center bg_black clickable_sign">
    <i class="bi bi-arrow-up-right-circle-fill orange_color"> 
        <span class="text-white fw-bold"> 
            Airtime
            <br>
        <span class="text-white form-text"> May 10, 2024 5:40PM</span>
        </span>
    </i>   
    <span class="badge bg_orange_plain"> -₦4000</span>
  </li>

</ul>

<p class="fw-bold fs-6 text-white clickable_sign text-end" @click="navigateToTransaction"> See More </p>

<br>
<br>

</div>

</div>

<div class="loader-container" v-if="loading == true">
    <PulseLoader :color="color" :size="size"></PulseLoader>
  </div>



</template>


<script>

import { useAuthUser } from '@/store/authenticate';
import axiosInstance from '@/axiosInstance';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'; // Import PulseLoader component

  export default {
    name: 'HomePage',

    components: {
    PulseLoader
    },
  
    data() {
      return {
        
        user: {},
        categories: null,
        sliceCategoriesOne: null,
        sliceCategoriesTwo: null,

        loading: true, // Control loading state
        color: '#FF5733', // Loader color (replace with your desired color)
        size: '25px' // Loader size (adjust as needed)

      };
    },
  
  
    mounted() {
        this.getAuthUser();
        this.fetchCategories();
       },

    methods: {

      navigateToTransaction() {
        this.$router.push({ name: 'transaction' });
      },

    fetchCategories() {
      axiosInstance.get('/services')
        .then(response => {
          this.categories = response.data; // Assuming API returns an array of categories
          this.sliceCategoriesOne = this.categories.content.slice(0, 3);
          this.sliceCategoriesTwo = this.categories.content.slice(3, 5);
          this.loading = false
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
          this.loading = false
        });
    },

    async getAuthUser() {
      await useAuthUser().fetchUserData();
        this.user = useAuthUser().userData
    },

    goToService(name) {
    this.$router.push({ name: name, params: { service: name } });
    }

    }
  
  }
  </script>


<style scoped>

.bg_orange {
  background-color: #FF5733;
  box-shadow: 5px 5px 10px #FF5733; /* Add a background shadow */
}

.bg_orange_plain {
  background-color: #FF5733;
}

.bg_black {
  background-color: #2D2C2D;
}

.clickable_sign {
    cursor: pointer; /* Change the cursor to a pointer on hover */
}

.orange_color {
    color: #FF5733;
}

.border-radius {
    border: 5px solid #fff;
    border-radius: 5px;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust height as needed for full-page centering */
}

</style>