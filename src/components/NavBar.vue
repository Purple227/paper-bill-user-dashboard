<template>


<nav class="navbar navbar-expand-lg">

  <div class="container-fluid">  


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="CancelIconToggle">
      <span class="bi bi-list text-white fs-1 fw-bold"></span>
    </button>

    
    <button class="navbar-toggler bg-orange rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-if="CancelToggle == true" @click="CancelIconToggle">
      <span class="bi bi-x text-white fs-1 fw-bold"></span>
    </button>
    


    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto m-3">

        <li class="nav-item">
            <router-link to="/service" class="nav-link text-white fw-bold fs-1"> 
              <img src="" class="img-fluid" alt="..." width="80">
              <br>
            Ahmadi FX
          </router-link>
        </li>

        <li class="nav-item mt-3">
          <a class="nav-link text-white" aria-current="page" href="#"> 
            <i class="bi bi-building-check text-white fw-bold fs-3"> <span class="fs-5" style="margin-left: 10px;"> Services </span> </i>
          </a>
        </li>

        <li class="nav-item mt-3">
          <a class="nav-link text-white fw-bold fs-5" aria-current="page" href="#"> 
            <i class="bi bi-cash text-white fw-bold fs-3"> <span class="fs-5" style="margin-left: 10px;"> Wallet </span></i>          </a>
        </li>


        <li class="nav-item mt-3">
          <a class="nav-link text-white fw-bold fs-5" aria-current="page" href="#"> 
            <i class="bi bi-card-checklist text-white fw-bold fs-3"> <span class="fs-5" style="margin-left: 10px;"> Transactions </span> </i>
          </a>
        </li>

      </ul>

    </div>
  </div>
</nav>


</template>


<script>

  export default {
    name: 'NavBar',
  
    data() {
      return {
        CancelToggle: false,
      };
    },
  
  
    mounted() {
      // Code to execute after the component has been mounted
      console.log('Component has been mounted!');
    },

    methods: {
        
        CancelIconToggle() {
            this.CancelToggle = !this.CancelToggle 
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


</style>
