<template>
  <div >
    <h2>View 2</h2>
    <!-- <CardHome v-if="climaActual" :climaActual="climaActual" :climaCompleto="climaCompleto"/> -->
    <DiarioPrincipalDeporteVue :climaActual="climaActual" :climaCompleto="climaCompleto" />
    
   <ClimaHorasDia :climaActual="climaActual" :climaCompleto="climaCompleto" /> 
    
    <hr>
    <!-- Descomenta las dos lineas de abajo para mirar todos los datos que tiene clima Completo -->
    <!-- <h2>Informacion Clima completo - MyOtherComponent</h2>
    <p>{{ climaCompleto }}</p> -->
  
  </div>

  <br>
  <AmanecerAtardecer :climaActual="climaActual" :climaCompleto="climaCompleto"/>
</template>

<script setup>
// import CardHome from '@/components/CardHome.vue';
import DiarioPrincipalDeporteVue from '@/components/DiarioPrincipalDeporte.vue';
import ClimaHorasDia from '@/components/ClimaHorasDia.vue';

import { defineProps } from 'vue';


defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>
