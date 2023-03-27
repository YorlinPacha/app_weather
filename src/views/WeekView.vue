<template>
  <div>
    <h2>View 1</h2>
    
    <CardHome :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <SemanaComp :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <br>
    <ClimaHorasDia :climaActual="climaActual" :climaCompleto="climaCompleto" /> 
    <br>
    <DetallesClimaDia :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <br>
    <AmanecerAtardecer :climaActual="climaActual" :climaCompleto="climaCompleto"/>
  
  

    
   
    <hr>
    <!-- Descomenta las dos lineas de abajo para mirar todos los datos que tiene clima Actual -->
    <!-- <h3>Informacion clima Actual - My component</h3>
    <p>{{ climaActual }}</p> -->

  </div>
</template>

<script setup>

import CardHome from '../components/CardHome.vue';
import { defineProps } from "vue"
import SemanaComp from '@/components/SemanaComp.vue';
import ClimaHorasDia from '@/components/ClimaHorasDia.vue';
import DetallesClimaDia from '@/components/DetallesClimaDia.vue';
import AmanecerAtardecer from '@/components/AmanecerAtardercer.vue'




defineProps({

  climaActual: Object,
  climaCompleto: Object
});
</script>



