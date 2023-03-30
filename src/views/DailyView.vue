<template>
  <div class="nubesfondo">
      <div class="contenedor_componentes">
        <DiarioPrincipalDeporteVue :climaActual="climaActual" :climaCompleto="climaCompleto"/>
        <br>
        <ClimaHorasDia :climaActual="climaActual" :climaCompleto="climaCompleto" />
        <br>

        <div class="contenedorDetalles_AmanecerAtarceder">
          <DetallesClimaDia :climaActual="climaActual" :climaCompleto="climaCompleto"/>
        
          <div>
            <AmanecerAtardecer :climaActual="climaActual" :climaCompleto="climaCompleto"/>
          </div>
          
        </div>
        
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

/* -------------------Responsive Tablet ----------------*/


@media screen and (min-width: 481px) and (max-width: 835px){

  .contenedorDetalles_AmanecerAtarceder{
    display: flex;
    justify-content: space-evenly;
}


}


/* -------------------Responsive Desktop ----------------*/

@media screen and (min-width: 836px){

  .contenedorDetalles_AmanecerAtarceder{
    display: flex;
    justify-content: space-evenly;
}

}


</style>