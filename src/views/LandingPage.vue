<template>

    <div class="bg-black">

        <nav-bar></nav-bar>

<div class="container mb-0">
<div class="card bg-black">
  <div class="card-body">

    <p class="text-white fs-4" style="font-weight: 1000;">
    Your Balance
    </p>

    <p class="text-white fs-4" style="font-weight: 1000;">
      ₦23,802.05
    </p>


  </div>
</div>
</div>


<div class="container p-4 mt-0">

<p class="fw-bold text-white">
     Quick Actions
</p>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 85px;">
    <i class="bi bi-telephone orange fs-2"></i>
    <br>
     Airtime 
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 100px;">
    <i class="bi bi-tv orange fs-2"></i>
    <br>
     Cable TV
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 85px;">
    <i class="bi bi-wifi orange fs-2"></i>
    <br>
     Data
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 85px;">
    <i class="bi bi-ticket-detailed orange fs-2"></i>
    <br>
     Ticket
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 100px;">
    <i class="bi bi-joystick orange fs-2"></i>
    <br>
     Betting
</button>


<button type="button" class="btn bg-white fw-bold m-2" style="width: 85px;" @click="navigateToServiceRoute">
    <i class="bi bi-three-dots orange fs-2"></i>
    <br>
     More
</button>


</div>


<div class="container p-4">

    <div class="row">

    <div class="col-8">
    <p class="fw-bold text-white">
         Recent Activity
    </p>
    </div>

    <div class="col-4">
    <p class="fw-bold orange text-end">
         See all
    </p>
    </div>

    </div>


<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center bg-light-black border border-0 m-1 rounded-pill text-white fw-bold p-3">
    <i class="bi bi-telephone-outbound fs-2 p-2 bg-orange text-white rounded-4"> </i>
    Airtel Top-Up
    <span class="badge rounded-pill fw-bold"> -₦1500.00</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center bg-light-black border border-0 m-1 rounded-pill text-white fw-bold p-3">
    <i class="bi bi-cash-stack fs-2 p-2 bg-orange text-white rounded-4"> </i>
    Wallet Top-Up
    <span class="badge rounded-pill fw-bold"> +₦5000.00</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center bg-light-black border border-0 m-1 rounded-pill text-white fw-bold p-3">
    <i class="bi bi-tv fs-2 p-2 bg-orange text-white rounded-4"></i>
    DSTV Top-Up    
    <span class="badge rounded-pill fw-bold"> -₦4000.00 </span>
  </li>
</ul>


</div>


    </div>
    
</template>


<script>

import NavBar from '../components/NavBar.vue';

  export default {

    name: 'DashBoard',

    components: {
    'nav-bar': NavBar,
  },
  
    data() {
      return {
        // data
      };
    },
  
  
    mounted() {
      // Code to execute after the component has been mounted
      console.log('Component has been mounted!');
  
    },

    methods: {
        //Functions here
        navigateToServiceRoute() {
            // Assuming you have a route named 'another-view'
            this.$router.push({ name: 'service-data' });
        },

    }
  
  
  
  }
  </script>


<style scoped>

.bg-gradient-one {
    background: linear-gradient(to right, #000000, #FF742F);
}

.bg-black {
    background-color: #000000;
}

.bg-light-black {
    background-color: #252524;
}
.orange {
    color: #FF742F;
}

.bg-orange {
    background-color: #FF742F;
}

.bg-lightorange {
    background-color: #FFA07A;
}


</style>
