<template>


<br>

<div class="container">
    <div class="row">


        <div class="col-10">
            <p class="fw-bold text-white fs-3"> Welcome Joseph</p>
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

<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'cable'}"> 
      <i class="bi bi-tv fs-1 "></i> 
      <br>
      <span class=""> Cable TV </span>
  </router-link>
</li>

<li class="nav-item fw-bold border-radius m-3">
    <router-link class="nav-link fw-bold orange_color" :to="{name:'airtime'}"> 
      <i class="bi bi-phone-fill fs-1 "></i> 
      <br>
      <span class=""> Airtime  </span>
  </router-link>
</li>


<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'data-bundle'}"> 
      <i class="bi bi-wifi fs-1"></i> 
      <br>
      <span class=""> Data </span>
  </router-link>
</li>


</ul>


<ul class="nav nav-pills nav-fill">

<li class="nav-item fw-bold border-radius m-3">
  <a class="nav-link fw-bold orange_color" href="#"> 
      <i class="bi bi-currency-exchange fs-1 "></i> 
      <br>
      <span class=""> Gift Card </span>
  </a>
</li>

<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'electricity'}"> 
      <i class="bi bi-lightning-charge-fill fs-1 "></i> 
      <br>
      <span class=""> Electricity  </span>
  </router-link>
</li>


<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'services'}"> 
      <i class="bi bi-plus-square-fill fs-1"></i> 
      <br>
      <span class=""> More </span>
  </router-link>
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

<br>


</template>

<script>

  export default {
    name: 'HomePage',
  
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
        
        navigateToTransaction() {
            this.$router.push({ name: 'transaction' });
        },

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
  background-color: black;
}

.clickable_sign {
    cursor: pointer; /* Change the cursor to a pointer on hover */
}

.orange_color {
    color: #FF5733;
}

.border-radius {
    border: 2px solid #fff;
    border-radius: 5px;
}

</style>