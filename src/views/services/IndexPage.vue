<template>

<div class="container">

<br>

<p class="fw-bold fs-4 text-white"> Services </p>

<ul class="nav nav-pills nav-fill">

<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'cable'}"> 
  <i class="bi bi-tv fs-1 "></i> 
  <br>
  <span class=""> Cable TV </span>
</router-link>
</li>

<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'airtime'}"> 
  <i class="bi bi-phone-fill fs-1 "></i> 
  <br>
  <span class=""> Airtime  </span>
</router-link>
</li>


<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'data-bundle'}"> 
  <i class="bi bi-wifi fs-1"></i> 
  <br>
  <span class=""> Data </span>
</router-link>
</li>


</ul>


<ul class="nav nav-pills nav-fill">

<li class="nav-item fw-bold border-radius m-3">
<a class="nav-link fw-bold orange_color" href="#"> 
  <i class="bi bi-currency-exchange fs-1 "></i> 
  <br>
  <span class=""> Gift Card </span>
</a>
</li>

<li class="nav-item fw-bold border-radius m-3">
  <router-link class="nav-link fw-bold orange_color" :to="{name:'electricity'}"> 
  <i class="bi bi-lightning-charge-fill fs-1 "></i> 
  <br>
  <span class=""> Electricity  </span>
</router-link>
</li>

<li class="nav-item fw-bold border-radius m-3">
<a class="nav-link fw-bold orange_color" href="#"> 
  <i class="bi bi-credit-card-2-front-fill fs-1 "></i> 
  <br>
  <span class=""> Virtual Card  </span>
</a>
</li>


</ul>


<ul class="nav nav-pills nav-fill">

<li class="nav-item fw-bold border-radius m-3">
<a class="nav-link fw-bold orange_color" href="#"> 
  <i class="bi bi-dice-4 fs-1 "></i> 
  <br>
  <span class=""> Betting </span>
</a>
</li>

<li class="nav-item fw-bold border-radius m-3">
<a class="nav-link fw-bold orange_color" href="#"> 
  <i class="bi bi-ticket fs-1 "></i> 
  <br>
  <span class=""> Ticket  </span>
</a>
</li>

<li class="nav-item fw-bold border-radius m-3">
<a class="nav-link fw-bold orange_color" href="#"> 
  <i class="bi bi-airplane fs-1 "></i> 
  <br>
  <span class=""> Book Flight </span>
</a>
</li>


</ul>

</div>

    
</template>

<style scoped>

.bg_orange {
  background-color: #FF5733;
  box-shadow: 5px 5px 10px #FF5733; /* Add a background shadow */
}

.bg_orange_plain {
  background-color: #FF5733;
}

.bg_black {
  background-color: black;
}

.clickable_sign {
    cursor: pointer; /* Change the cursor to a pointer on hover */
}

.orange_color {
    color: #FF5733;
}

.border-radius {
    border: 2px solid #fff;
    border-radius: 5px;
}

</style>