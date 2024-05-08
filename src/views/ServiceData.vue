<template>

<div class="bg-black">

    <div class="card bg-black rounded-0 text-white">
      <div class="card-body">

        <router-link to="/" class="text-white link-offset-2 link-underline link-underline-opacity-0"> 
            <i class="bi bi-arrow-left fw-bold fs-4"></i>
        </router-link>
    
    
        <div class="mt-3">
    
            <p class="fw-bold fs-3"> 
                 Services
                <br>
                <span class="fw-normal fs-5"> Explore our range of services design to simplify your life. </span>
            </p>
    
        </div>
    
    
      </div>
    </div>



    <div class="container p-4">

<button type="button" class="btn bg-white fw-bold m-2" style="width: 90px;">
    <i class="bi bi-telephone orange fs-2"></i>
    <br>
     Airtime 
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 95px;">
    <i class="bi bi-tv orange fs-2"></i>
    <br>
     Cable TV
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 90px;">
    <i class="bi bi-wifi orange fs-2"></i>
    <br>
     Data
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 90px;">
    <i class="bi bi-ticket-detailed orange fs-2"></i>
    <br>
     Ticket
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 95px;">
    <i class="bi bi-joystick orange fs-2"></i>
    <br>
     Betting
</button>


<button type="button" class="btn bg-white fw-bold m-2" style="width: 90px;">
    <i class="bi bi-router orange fs-2"></i>
    <br>
     Internet
</button>


<button type="button" class="btn bg-white fw-bold m-2" style="width: 90px;">
    <i class="bi bi-lightning-charge orange fs-2"></i>
    <br>
     Electricity
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 95px;">
    <i class="bi bi-box2-heart orange fs-2"></i>
    <br>
    Gift Card
</button>

<button type="button" class="btn bg-white fw-bold m-2" style="width: 90px;">
    <i class="bi bi-stars orange fs-2"></i>
    <br>
     Education
</button>

</div>


    
</div>

</template>


<script>

  export default {
    name: 'SignUp',
  
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
    
    
    </style>
