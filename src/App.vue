<template>
   <HeaderComp/>
   
  <!-- <nav>
     <router-link to="/">Semanal</router-link> |
     <router-link to="/daily">Diario</router-link>

    </nav> -->
  <router-view/>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'WeekView',
  components: {
    HeaderComp
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
