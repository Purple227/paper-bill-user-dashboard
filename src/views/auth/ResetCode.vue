<template>

    <div class="bg_black d-flex justify-content-center align-items-center">
    
    
    <div class="card bg_black text-center">
      <div class="card-body">
    
        <p class="fs-4 fw-bold orange_color" > User verification
          <br>
          <span class="fs-5 fw-bold orange_color text-white" > OTP has been sent to your email </span>
        </p>
  
        <br>
    
        <img class="img-fluid" src="@/assets/images/illustrator/undraw_safe_re_kiil.svg" width="200" height="100">
  
        <br>
        <br>
    
        <input type="number" class="form-control" id="inputOTP" placeholder="OTP Code">
    
        <br>
    
    
        <div class="d-grid gap-2">
           <button class="btn bg_orange fw-bold text-white" 
           type="button"> 
           Verify
           <i class="bi bi-arrow-right fw-bold"></i> 
          </button>
        </div>
        
        <br>

        <p class="fs-6 fw-bold text-white">
          Don't have an account? <span class="orange_color clickable_sign" @click="navigateToSignUp"> Sign Up </span>
        </p>

        <p class="fs-6 fw-bold text-white">
          Have an account? <span class="orange_color clickable_sign" @click="navigateToLogin"> Sign In </span>
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
  