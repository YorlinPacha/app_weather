<template>
  <div >
    <h2>View 2</h2>
    <!-- <CardHome v-if="climaActual" :climaActual="climaActual" :climaCompleto="climaCompleto"/> -->
    
    <hr>

    <MyOtherComponent :climaActual="climaActual" :climaCompleto="climaCompleto" />
  
  </div>
</template>

<script setup>
import MyOtherComponent from '../components/MyOtherComponent.vue';
// import CardHome from '@/components/CardHome.vue';
import { defineProps } from 'vue';

defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>
