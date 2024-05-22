<template>

    <div class="bg_black d-flex justify-content-center align-items-center">
    
    
    <div class="card bg_black text-center">
      <div class="card-body">
    
        <p class="fs-4 fw-bold orange_color clickable_sign" @click="goBack"> 
        <i class="bi bi-arrow-left text-white text-start"></i>
         Electricity
        </p>

        <input type="number" class="form-control" id="inputEmail" placeholder="Meter Number">
        <br>
  
        <select class="form-select" aria-label="Default select example">
          <option selected> Select Provider </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <br>

        <br>
    
        <div class="d-grid gap-2">
           <button class="btn bg_orange fw-bold text-white" 
           type="button"> 
           Continue
           <i class="bi bi-arrow-right fw-bold"></i> 
          </button>
        </div>
        
        
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
  
          goBack() {
             if (window.history.length > 1) {
                this.$router.go(-1);
             } else {
                this.$router.push('/');
             }
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
  