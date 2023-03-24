<template>
  <div>
    <h2>View 1</h2>
    <CardHome :climaActual="climaActual" :climaCompleto="climaCompleto"/>
    <SemanaComp :climaActual="climaActual" :climaCompleto="climaCompleto"/>
   
    <hr>
   
    <MyComponent :climaActual="climaActual" :climaCompleto="climaCompleto"/> 

  </div>
</template>

<script setup>
import MyComponent from '../components/MyComponent.vue';
import CardHome from '../components/CardHome.vue';
import { defineProps } from "vue"
import SemanaComp from '@/components/SemanaComp.vue';


defineProps({

  climaActual: Object,
  climaCompleto: Object
});
</script>



