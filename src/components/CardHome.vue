<template>
    <section class="weather-content">
      <h1>Indicador del clima</h1>
      <div class="result" v-if="climaActual">
        <p>{{ climaActual.name }}</p>
        <p>Temperatura {{ climaActual.main.temp }}°</p>
        <img :src="`https://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`" alt="icon">
        <!-- <p>Temperatura {{ result.weather[0]}}°</p> --> 
      </div>
      <div v-else>
      <img class="imagenGif"  src="../assets/img/buscar.gif" alt="">
    </div>
    </section>
  </template>
  
  
  
  <script setup>
  import { defineProps } from 'vue';
 defineProps({
    result: {
      type: Object
    },
    climaActual: Object,
    climaCompleto: Object
  });
//   console.log("captura+++", props.result.value);
  </script>
  
  
  
  
  <style scoped>
  body {
    font-family: "Montserrat", sans-serif;
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
    padding: 20px 20px 20px;
    margin: 3rem auto 3rem auto ;
  }

  .imagenGif{
  width: 20rem;
  height: auto;
 
}
  </style>
  