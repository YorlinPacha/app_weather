<template>
    <section class="weather-content">
      <h1>Indicador del clima</h1>
      <div class="result" v-if="result">
        <p>{{ result.name }}</p>
        <p>Temperatura {{ result.main.temp }}°</p>
        <img :src="`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`" alt="icon">
        <!-- <p>Temperatura {{ result.weather[0]}}°</p> --> 
      </div>
      <div v-else>
        <p>imagen</p>
      </div>
    </section>
  </template>
  
  
  
  <script setup>
  import { defineProps } from 'vue';
 defineProps({
    result: {
      type: Object
    },
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
    padding: 20px 20px 50px;
    margin: 3rem auto 19rem auto ;
  }
  </style>
  