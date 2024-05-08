<template>

<div class="bg-black">

<div class="card bg-black rounded-0 text-white">
  <div class="card-body">

    <i class="bi bi-arrow-left fw-bold fs-4"></i>

    <div class="mt-3">

        <p class="fw-bold fs-3"> 
            Sign In 
            <br>
            <span class="fw-normal fs-5"> Log in to your account to continue </span>
        </p>

    </div>


  </div>
</div>



<section class="form p-4">

<div class="input-group mb-3">
  <span class="input-group-text border border-0 bg-light-black" id="basic-addon1"> <i class="bi bi-envelope-at orange"></i> </span>
  <input type="text" class="form-control border border-0 bg-light-black form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
</div>



<div class="input-group mb-3">
  <span class="input-group-text border border-0 bg-light-black" id="basic-addon1"> <i class="bi bi-shield-lock orange fw-bold"></i> </span>
  <input type="password" class="form-control border border-0 bg-light-black form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
</div>

<p class="text-end fw-bold">
<router-link to="/reset-password" class="orange link-offset-2 link-underline link-underline-opacity-0"> 
    Forget Password
</router-link>
</p>

</section>


<div class="d-grid gap-2 col-10 mx-auto" @click="navigateToDashBoardRoute">
  <button class="btn bg-orange fw-bold text-white rounded-pill btn-lg" type="button"> Continue </button>
</div>

<p class="text-center text-white fw-bold mt-3 mb-4">
    Don't have an account?
<router-link to="/register" class="orange link-offset-2 link-underline link-underline-opacity-0"> 
    Sign up Here
</router-link>
</p>



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
        
        navigateToDashBoardRoute() {
            // Assuming you have a route named 'another-view'
            this.$router.push({ name: 'home' });
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

/* Select the input element by its type or class */
input[type="text"] {
  color: #FFFFFF; /* Set the desired text color, for example, red (#ff0000) */
}

input::placeholder {
    color:  #FFFFFF; /* Set your desired placeholder text color */
}

</style>
