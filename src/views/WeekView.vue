<template>
  <div class="contenedor">
    <div class="about">
    <h1>pagina semanal</h1>
  </div>
  
  

  <CardHome />
</div>
</template>

<script setup>
import CardHome from '@/components/CardHome.vue'

</script>

<style scoped>
.contenedor{
  width: 100%;
  height: 100vh;
  background: #d9a7c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>