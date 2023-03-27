<template>
     <div>
      <h3>Informacion clima Actual - My component</h3>
      <p>{{ climaActual }}</p>
      
      



     </div>
   </template>
   
   <script setup>
   import { defineProps } from 'vue';

   defineProps({
     climaActual: Object,
     climaCompleto: Object
   });
   </script>


   <style scoped>
  body {
    font-family: "Montserrat", sans-serif;
  }

  .weather-content .imagen{
    width: 250px;
  }
  .weather-content {
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  
    max-width: 501px;
    text-align: center;
    padding: 20px 20px 50px;
    margin: 3rem auto 19rem auto ;
  }
  </style>
   