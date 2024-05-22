<template>

  <div class="bg_black d-flex justify-content-center align-items-center">
  
  
  <div class="card bg_black text-center">
    <div class="card-body">
  
      <p class="fs-4 fw-bold orange_color" > Welcome back to Paper Bill
        <br>
        <span class="fs-5 fw-bold orange_color text-white" > Hello there,sign in to continue </span>
      </p>

      <br>
  
      <img class="img-fluid" src="@/assets/images/illustrator/undraw_secure_files_re_6vdh.svg" width="200" height="100">

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
  import axiosInstance from '@/axiosInstance';
  
  export default {
    data() {
      return {
  
        form : {
          email: null,
          password: null,
        },
  
        error: {},
  
        buttonStatus: false,
        errorMessage: null
  
        
      }
    },
  
  
    methods: {
  
      async submit() {
        this.buttonStatus == true
  
        try {
          const requestData = {
            email: this.form.email,
            password: this.form.password,
          };
          const response = await axiosInstance.post('/login', requestData);
          localStorage.setItem('bearerToken', response.data.data.token);
  
          if(response.data.data.user.email_verified_at == null ) {
            this.$router.push({ name: 'verifyEmail' })
          } else if(response.data.data.user.on_board !== 3) {
            this.$router.push({ name: 'profile' })
          }else {
            this.$router.push({ name: 'dashboard' })
          }
        } catch (error) {
          this.buttonStatus = false
  
  
          this.error = error.response.data.error.message
          this.errorMessage = error.response.data.error.custom_message
  
          if (this.errorMessage == undefined) {
            this.errorMessage = null
          } else {
            this.error = {}
            this.errorMessage = error.response.data.error.custom_message
          }
  
        }
  
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
