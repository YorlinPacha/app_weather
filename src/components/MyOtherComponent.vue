<template>
     <h2>Informacion Clima completo - MyOtherComponent</h2>
     <p>{{ climaCompleto }}</p>
     <!-- <hr>
     <p>Latitud: {{ climaCompleto.lat }}</p>
     <p>Humedad: {{ climaCompleto.current.humidity }}</p> -->

     
     <!-- Muestra todos los datos -->

     <!-- <div>
       <h1>My other component</h1>
       <hr>
       <br>
       <h2>Datos de clima</h2>
       <div class="climaActual" v-if="climaActual" >
      <h2 >{{ climaActual.name }}</h2>
      <p >Temperatura {{ climaActual.main.temp }}°</p>
      <p >Longitud {{ climaActual.coord.lon }}</p>
      <p >Latitud {{ climaActual.coord.lat }}</p>
      <p>{{ climaActual }}</p>
      
      <img
            
            :src="
              `http://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`
            "
            alt=""
          />
  </div> 
       
     </div>
     <hr> -->

     
</template>
   
<script setup>
import { defineProps } from 'vue';

defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>