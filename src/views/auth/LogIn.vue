<template>

  <div class="bg_black d-flex justify-content-center align-items-center">
  
  
  <div class="card bg_black text-center">
    <div class="card-body">
  
      <p class="fs-4 fw-bold orange_color" > Welcome back to Paper Bill
        <br>
        <span class="fs-5 fw-bold orange_color text-white" > Hello there,sign in to continue </span>
      </p>

      <br>
  
      <img class="img-fluid" src="../../assets/images/illustrator/undraw_secure_files_re_6vdh.svg" width="200" height="100">

      <br>
      <br>
  
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
  
      <br>
  
      <input type="password" class="form-control" id="inputEmail" placeholder="Password">
  
      <br>
  
      <p class="fs-6 fw-bold text-white clickable_sign" @click="navigateToForgetPassword">
        Forget your password
      </p>
  
      <div class="d-grid gap-2">
         <button class="btn bg_orange fw-bold text-white" 
         type="button"> 
         Sign In
         <i class="bi bi-arrow-right fw-bold"></i> 
        </button>
      </div>
      
      <br>
      <p class="fs-6 fw-bold text-white">
        Don't have an account? <span class="orange_color clickable_sign" @click="navigateToSignUp"> Sign Up </span>
      </p>
      
    </div>
  </div>
  
  
  </div>
  
  </template>
  

<script>

  export default {
    name: 'LogIn',
  
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
        
        navigateToDashBoard() {
            this.$router.push({ name: 'home' });
        },

        navigateToForgetPassword() {
            this.$router.push({ name: 'forget-password' });
        },

        navigateToSignUp() {
            this.$router.push({ name: 'register' });
        },

    }
  
  
  
  }
  </script>


<style scoped>

.bg_black {
   background-color: black;
}

.orange_color {
  color: #FF5733;
}

.bg_orange {
  background-color: #FF5733;
}

.clickable_sign {
    cursor: pointer; /* Change the cursor to a pointer on hover */
}

</style>
