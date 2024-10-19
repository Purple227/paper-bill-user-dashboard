<template>

     

    
    <div class="card bg_black text-center">
      <div class="card-body">

    
    <p class="fs-4 fw-bold orange_color clickable_sign" @click="goBack"> 
        <i class="bi bi-arrow-left text-white text-start"></i>
         Airtime
    </p>


  <div class="row justify-content-center align-items-center text-center">

    <p class="fs-5 fw-bold text-white"> 
         Select Provider
    </p>

    <div class="col-2 text-white clickable_sign" v-for="(data, index) in listAirtimeProvider.slice(0, 4)" 
    :key="index"
    @click="selectImage(index); dataGathering(data.serviceID)">

      <img :src="data.image" 
      class="img-thumbnail m-2" 
      :class="{ 'faded': selectedImage === index }"
      alt="Providers">

    </div>

  </div>



<div class="row justify-content-center align-items-center text-center">

<p class="fs-5 fw-bold text-white"> 
     Select Amount
</p>

<div class="col-4 text-white clickable_sign" @click="airtimeAmount = 50">
  <div class="card">
    <div class="card-body fs-5 fw-bold orange_color">
    ₦50
    </div>
    </div>
</div>

<div class="col-4 text-white clickable_sign" @click="airtimeAmount = 100">
  <div class="card">
    <div class="card-body fs-5 fw-bold orange_color">
    ₦100
    </div>
    </div>
</div>

<div class="col-4 text-white clickable_sign" @click="airtimeAmount = 500">
  <div class="card">
  <div class="card-body fs-5 fw-bold orange_color">
    ₦500
  </div>
</div>
</div>

</div>

<br>

<div class="row justify-content-center align-items-center text-center">

<div class="col-6 text-white clickable_sign" @click="airtimeAmount = 1000">
  <div class="card">
  <div class="card-body fs-5 fw-bold orange_color">
    ₦1000
  </div>
</div>
</div>

<div class="col-6 text-white clickable_sign" @click="airtimeAmount = 5000">
  <div class="card">
  <div class="card-body fs-5 fw-bold orange_color">
    ₦5000
  </div>
</div>
</div>

</div>


<br>

<input type="number"  
class="form-control" 
id="numberInput" 
min="50" 
max="8000" 
placeholder="Custom Amount"
v-model="airtimeAmount">
<br>

<input type="number"  
class="form-control" 
placeholder="Enter Phone"
v-model="phoneNumber">

        <br>
    
        <div class="d-grid gap-2 container" data-bs-toggle="modal" data-bs-target="#exampleModal">
           <button class="btn bg_orange fw-bold text-white" :disabled="airtimeAmount < 50 || phoneNumber != null"
           type="button"> 
           Continue
           <i class="bi bi-arrow-right fw-bold"></i> 
          </button>
        </div>

        <br>
        <br>
        <br>        
        
      </div>
    </div>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content justify-content-center align-items-center text-center">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"> Select Payment Type</h1>
      </div>
      <div class="modal-body">

        <button type="button" class="btn btn-lg orange_color border border-5 m-3" v-if="airtimeAmount < balance" @click="makePayment"> 
          <i class="bi bi-wallet"></i> 
          <br>
           Wallet
        </button>

        <button type="button" class="btn btn-lg orange_color border border-5 m-3" v-if="airtimeAmount > balance"> 
          <i class="bi bi-currency-bitcoin"></i>
          <br>
           Bitcoin
        </button>

        <button type="button" class="btn btn-lg orange_color border border-5 m-3" v-if="airtimeAmount > balance"> 
          <i class="bi bi-cash-coin"></i>
          <br>
           Online
        </button>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn bg_orange fw-bold text-white" data-bs-dismiss="modal"> Close </button>
      </div>
    </div>
  </div>
</div>
    
    
    



    <div class="loader-container" v-if="loading == true">
    <PulseLoader :color="color" :size="size"></PulseLoader>
    </div>
    
    </template>
    
  
  <script>

import { useAuthUser } from '@/store/authenticate';
import axiosInstance from '@/axiosInstance';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'; // Import PulseLoader component

    export default {
      name: 'AirimePage',

      props: {
        service: {
            type: String,
            required: true // You can set this to false if it's optional
        }
    },

      components: {
        PulseLoader
      },
    
      data() {
        return {
          // data

          listAirtimeProvider: null,
          clicked: false,
          selectedImage: null,
          listAirtimeVariation: null,
          airtimeAmount: 0,
          user: null,
          phoneNumber: null,
          serviceID: null,
          balance: 0,
          paymentConfirmed: false,

          loading: true, // Control loading state
          color: '#FF5733', // Loader color (replace with your desired color)
          size: '25px', // Loader size (adjust as needed)

        };
      },
    
    
      mounted() {
        this.getAuthUser();
        this.fetchServiceProvider();
      },

  
      methods: {

          goBack() {
             if (window.history.length > 1) {
                this.$router.go(-1);
             } else {
                this.$router.push('/');
             }
          },

          toggleClick() {
                this.clicked = !this.clicked;
          },

          selectImage(index) {
              this.selectedImage = index; // Update selectedImage with the clicked image's index
          },

    fetchServiceProvider() {
      axiosInstance.get(`/services/${this.$route.params.service}`)
        .then(response => {
          this.listAirtimeProvider = response.data.content;
          this.loading = false
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
          this.loading = false
        });
    },

    async getAuthUser() {
      await useAuthUser().fetchUserData();
        this.user = useAuthUser().userData
        this.balance = useAuthUser().userBalance
    },

    async payServiceWallet(serviceID) {
      try {
        const requestData = {
          amount: this.airtimeAmount,
          phone: this.phoneNumber,
          service_id: serviceID,
        };
        const response = await axiosInstance.post('/register', requestData);
        localStorage.setItem('bearerToken', response.data.data.token);
        this.toast('success', 'Registration Succesfull Enter OTP')
        this.$router.push({ name: 'reset-code' });
        } catch (error) {
        this.status = false
        this.error = error.response.data.error.message
        this.toast('error', 'Please Recheck SignUp Details')
        }

    },

    dataGathering(serviceID) {
      this.serviceID = serviceID
    },
    
 }
 
}
    </script>
  
  
  <style scoped>

.faded {
  opacity: 0.5;
}

.img-thumbnail {
  transition: opacity 0.3s ease; /* Add smooth transition for fading effect */
}

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

  .loader-container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh; /* Adjust height as needed for full-page centering */
   }
  
  </style>
  