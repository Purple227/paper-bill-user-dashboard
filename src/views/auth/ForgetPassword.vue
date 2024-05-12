<template>

    <div class="bg_black d-flex justify-content-center align-items-center">
    
    
    <div class="card bg_black text-center">
      <div class="card-body">
    
        <p class="fs-4 fw-bold orange_color" > Forget Password
          <br>
          <span class="fs-5 fw-bold orange_color text-white" > A verification code will be sent to your mail </span>
        </p>
  
        <br>
    
        <img class="img-fluid" src="@/assets/images/illustrator/undraw_forgot_password_re_hxwm.svg" width="150" height="100">
    
        <br>
        <br>

        <input type="email" class="form-control" id="inputEmail" placeholder="Email">

        <br>
        <br>
    
        <div class="d-grid gap-2">
           <button class="btn bg_orange fw-bold text-white" 
           type="button"> 
           Submit 
           <i class="bi bi-arrow-right fw-bold"></i> 
          </button>
        </div>
        
        <br>

        <p class="fs-6 fw-bold text-white">
          Back to <span class="orange_color clickable_sign" @click="navigateToLogin"> Sign In </span>
        </p>

        <p class="fs-6 fw-bold text-white">
          I don't have an accout <span class="orange_color clickable_sign" @click="navigateToSignUp"> Sign Up </span>
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
  