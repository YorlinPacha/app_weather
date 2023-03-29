<template>
  <div class="nubesfondo">
    <div class="contenedor_componentes">
        
      <div class="margenCardContenedor">
          <CardHome :climaActual="climaActual" :climaCompleto="climaCompleto"/>
          <br>
        <SemanaComp :climaActual="climaActual" :climaCompleto="climaCompleto"/>
        </div>

  </div>
  </div>


</template>

<script setup>
import { defineProps } from "vue"
import CardHome from '../components/CardHome.vue';

import SemanaComp from '@/components/SemanaComp.vue';






defineProps({

  climaActual: Object,
  climaCompleto: Object
});
</script>

<style scoped>

.nubesfondo{
  background-image:url("../assets/img/v1015-101a.jpg");
  background-size: cover;
  min-height: 100vh;

}
.margenCardContenedor{
  padding: 2rem;
}

</style>



