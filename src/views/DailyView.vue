<template>
  <div class="nuvesfondo">
    <br>
    <!-- <CardHome v-if="climaActual" :climaActual="climaActual" :climaCompleto="climaCompleto"/> -->
    <DiarioPrincipalDeporteVue :climaActual="climaActual" :climaCompleto="climaCompleto" />
    <br>
   <ClimaHorasDia :climaActual="climaActual" :climaCompleto="climaCompleto" /> 
    
    <hr>
    <!-- Descomenta las dos lineas de abajo para mirar todos los datos que tiene clima Completo -->
    <!-- <h2>Informacion Clima completo - MyOtherComponent</h2>
    <p>{{ climaCompleto }}</p> -->
  
  </div>

 
  <AmanecerAtardecer :climaActual="climaActual" :climaCompleto="climaCompleto"/>
  
  <FooterComp />
</template>

<script setup>
// import CardHome from '@/components/CardHome.vue';
import DiarioPrincipalDeporteVue from '@/components/DiarioPrincipalDeporte.vue';
import ClimaHorasDia from '@/components/ClimaHorasDia.vue';
import FooterComp from "../components/FooterComp.vue"

import { defineProps } from 'vue';


defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>
<style>
.nuvesfondo{
  background-image:url("../assets/img/v1015-101a.jpg");
 
  background-size: cover;
  min-height: 100vh;
}


</style>