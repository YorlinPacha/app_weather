<template>
  <div class="nubesfondo">
      <div class="contenedor_componentes">
        <DiarioPrincipalDeporteVue :climaActual="climaActual" :climaCompleto="climaCompleto"/>
        <br>
        <ClimaHorasDia :climaActual="climaActual" :climaCompleto="climaCompleto" />
        <br>
        <DetallesClimaDia :climaActual="climaActual" :climaCompleto="climaCompleto"/>
        <br>
        
        <hr>
        <AmanecerAtardecer :climaActual="climaActual" :climaCompleto="climaCompleto"/>
        <br>
      
    </div>

  </div>

</template>

<script setup>

import DiarioPrincipalDeporteVue from '@/components/DiarioPrincipalDeporte.vue';
import ClimaHorasDia from '@/components/ClimaHorasDia.vue';
import AmanecerAtardecer from "../components/AmanecerAtardercer.vue";
import DetallesClimaDia from "../components/DetallesClimaDia.vue";


import { defineProps } from 'vue';


defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>
<style>
.nubesfondo{
  background-image:url("../assets/img/v1015-101a.jpg");
  background-size: cover;
  min-height: 100vh;
}


</style>