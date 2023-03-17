<template>
  <HeaderComp/>

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
