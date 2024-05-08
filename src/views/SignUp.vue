<template>

<div class="bg_body">


<div class="card">
  <div class="card-body">

    <p class="fs-4 fw-bold" > Sign Up </p>

    <input type="email" class="form-control border border-bottom" id="inputEmail" placeholder="Email">


    
  </div>
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
        
        navigateToDashBoardRoute() {
            // Assuming you have a route named 'another-view'
            this.$router.push({ name: 'home' });
        }
    }
  
  
  
  }
  </script>
  
    
    <style scoped>
    
    </style>
    