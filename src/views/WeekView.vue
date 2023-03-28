<template>
  <div>
    <h2>View 1</h2>
    
    <CardHome :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <br>
    <SemanaComp :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <br>
    <SemanaComp2 :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <br>
    <ClimaHorasDia :climaActual="climaActual" :climaCompleto="climaCompleto" /> 
    <br>
    <DetallesClimaDia :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <br>
    <p>Elegir uno de los dos:</p>
    <AmanecerAtardercer :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <br>
    <AmanecerAtardercer2 :climaActual="climaActual" :climaCompleto="climaCompleto"/>
   
   
    <!-- <hr> -->
    <!-- Descomenta las dos lineas de abajo para mirar todos los datos que tiene clima Actual -->
    <!-- <h3>Informacion clima Actual - My component</h3>
    <p>{{ climaActual }}</p> -->

  </div>
</template>

<script setup>
import { defineProps } from "vue"
import CardHome from '../components/CardHome.vue';
import SemanaComp from '@/components/SemanaComp.vue';
import SemanaComp2 from '@/components/SemanaComp2.vue';
import ClimaHorasDia from '@/components/ClimaHorasDia.vue';
import DetallesClimaDia from '@/components/DetallesClimaDia.vue';
import AmanecerAtardercer from '../components/AmanecerAtardercer.vue';
import AmanecerAtardercer2 from '../components/AmanecerAtardercer2.vue';



defineProps({

  climaActual: Object,
  climaCompleto: Object
});
</script>



