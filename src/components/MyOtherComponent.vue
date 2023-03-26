<template>
     <h2>Informacion Clima completo - MyOtherComponent</h2>
     <p>{{ climaCompleto }}</p>
     <!-- <hr>
     <p>Latitud: {{ climaCompleto.lat }}</p>
     <p>Humedad: {{ climaCompleto.current.humidity }}</p> -->

     
     <!-- Muestra todos los datos -->


     
</template>
   
<script setup>
import { defineProps } from 'vue';

defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>