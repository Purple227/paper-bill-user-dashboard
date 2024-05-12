<template>

<div class="bg_black d-flex justify-content-center align-items-center">

<div class="card bg_black text-center">
  <div class="card-body">

    <p class="fs-4 fw-bold orange_color" > Welcome to Paper Bill
      <br>
      <span class="fs-5 fw-bold orange_color text-white" > Hello there,create new account </span>
    </p>

    <img class="img-fluid" src="@/assets/images/illustrator/undraw_undraw_undraw_undraw_sign_up.svg" width="250" height="100">

    <br>
    <br>

    <input type="email" class="form-control" id="inputEmail" placeholder="Email">

    <br>

    <input type="email" class="form-control" id="inputEmail" placeholder="First Name">

    <br>

    <input type="password" class="form-control" id="inputPassword" placeholder="password">

    <br>

    <p class="fs-6 fw-bold text-white">
      By tapping sign up you agree to the terms and use of privacy policy
    </p>


    <div class="d-grid gap-2">
       <button class="btn bg_orange fw-bold text-white" 
       type="button"> 
       Sign Up 
       <i class="bi bi-arrow-right fw-bold"></i> 
      </button>
    </div>
    
    <br>
    <p class="fs-6 fw-bold text-white">
      Have an account? <span class="orange_color clickable_sign" @click="navigateToLogin"> Sign In </span>
    </p>

    
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
      console.log('Component has been mounted!');
  
    },

    methods: {
        
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
    