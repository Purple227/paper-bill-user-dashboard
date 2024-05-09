<template>

<div class="">

</div>


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

</style>
