<template>
     <div>
      <h3>Informacion clima Actual - My component</h3>
      <p>{{ climaActual }}</p>
      
      

      <!-- <section class="weather-content">
      <h1>Indicador del clima</h1>
      <div class="result" v-if="climaActual">
        <p>{{ climaActual.name }}</p>
        <p>Temperatura {{ Math.round(climaActual.main.temp) }}°</p>
        <img  :src="`https://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`" alt="icon">
      </div>
      <div v-else>
        <img class="imagen" :src="`https://cdn.pixabay.com/photo/2022/06/15/18/29/landscape-7264427_1280.png`" alt="">
      </div>
    </section> -->

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
   