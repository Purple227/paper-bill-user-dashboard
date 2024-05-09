<template>

    <div class="bg_black d-flex justify-content-center align-items-center">
    
    
    <div class="card bg_black text-center">
      <div class="card-body">
    
        <p class="fs-4 fw-bold orange_color" > Reset Password
          <br>
          <span class="fs-5 fw-bold orange_color text-white" > Please enter the OTP sent to your email </span>
        </p>
  
        <br>
    
        <img class="img-fluid" src="../../assets/images/illustrator/undraw_safe_re_kiil.svg" width="200" height="100">
  
        <br>
        <br>
    
        <input type="number" class="form-control" id="inputOTP" placeholder="OTP Code">
    
        <br>
    
        <input type="password" class="form-control" id="inputPassword" placeholder="New Password">
    
        <br>
    
        <div class="d-grid gap-2">
           <button class="btn bg_orange fw-bold text-white" 
           type="button"> 
           Reset Password
           <i class="bi bi-arrow-right fw-bold"></i> 
          </button>
        </div>
        
        <br>

        <p class="fs-6 fw-bold text-white clickable_sign">
          Go home 
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

          navigateToLogin() {
            this.$router.push({ name: 'login' });
         }
  
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
  